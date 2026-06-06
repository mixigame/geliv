// Demo orders. 正式环境请替换为 MySQL / Supabase / Redis / 自己后台接口。
export const orders = {
  "10001": {
    orderId: "10001",
    usdAmount: 100,
    btcAmount: "0.00125",
    btcAddress: "bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    lightningInvoice: "lnbc100u1pxxxxxxxxxxxxxxxxxxxxx",
    expireAt: Date.now() + 15 * 60 * 1000,
    status: "pending"
  }
};
