import QRCode from "qrcode";
import { orders } from "../lib/orders.js";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  const orderId = req.query.orderId;
  const order = orders[orderId];

  if (!order) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end("Order not found");
  }

  const btcUri = `bitcoin:${order.btcAddress}?amount=${order.btcAmount}&label=Order-${order.orderId}`;
  const qrDataUrl = await QRCode.toDataURL(btcUri);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.end(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>BTC Payment</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: Arial, sans-serif; max-width: 480px; margin: 32px auto; padding: 16px; background: #f7f7f7; }
    .box { background: #fff; border: 1px solid #e5e5e5; border-radius: 16px; padding: 22px; box-shadow: 0 4px 18px rgba(0,0,0,.04); }
    h2 { margin-top: 0; }
    .row { margin: 12px 0; }
    label { display: block; font-size: 13px; color: #666; margin-bottom: 6px; }
    input { width: 100%; padding: 12px; box-sizing: border-box; border: 1px solid #ddd; border-radius: 10px; font-size: 14px; }
    button, a.btn { display: block; width: 100%; text-align: center; padding: 14px; margin-top: 10px; font-size: 16px; border-radius: 10px; border: 0; background: #111; color: #fff; text-decoration: none; box-sizing: border-box; cursor: pointer; }
    .secondary { background: #eee; color: #111; }
    img { width: 220px; display: block; margin: 18px auto; }
    #status { padding: 10px; border-radius: 10px; background: #f3f3f3; }
    .hint { font-size: 13px; color: #666; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="box">
    <h2>Pay with Bitcoin</h2>
    <div class="row">Order ID: <b>${escapeHtml(order.orderId)}</b></div>
    <div class="row">Amount: <b>$${escapeHtml(order.usdAmount)}</b></div>
    <div class="row">BTC Amount: <b>${escapeHtml(order.btcAmount)} BTC</b></div>

    <img src="${qrDataUrl}" alt="Bitcoin payment QR Code" />

    <div class="row">
      <label>BTC Address</label>
      <input id="btcAddress" value="${escapeHtml(order.btcAddress)}" readonly />
    </div>

    <div class="row">
      <label>Lightning Invoice</label>
      <input id="invoice" value="${escapeHtml(order.lightningInvoice)}" readonly />
    </div>

    <a class="btn" href="https://cash.app/" target="_blank" rel="noopener">Open Cash App</a>
    <button class="secondary" onclick="copyText('btcAddress')">Copy BTC Address</button>
    <button class="secondary" onclick="copyText('invoice')">Copy Lightning Invoice</button>

    <p id="status">Waiting for payment...</p>
    <p class="hint">Cash App has no public BTC transfer deep link parameters. This page wakes Cash App, while keeping BTC address, Lightning invoice, QR code, and copy actions available.</p>
  </div>

  <script>
    async function copyText(id) {
      const input = document.getElementById(id);
      await navigator.clipboard.writeText(input.value);
      alert("Copied");
    }

    async function checkStatus() {
      try {
        const res = await fetch('/api/status?orderId=${encodeURIComponent(order.orderId)}');
        const data = await res.json();
        document.getElementById('status').innerText = 'Status: ' + data.status;
        if (data.status !== 'paid' && data.status !== 'expired') {
          setTimeout(checkStatus, 5000);
        }
      } catch (e) {
        setTimeout(checkStatus, 8000);
      }
    }

    checkStatus();
  </script>
</body>
</html>`);
}
