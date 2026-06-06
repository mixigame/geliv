# Cash App BTC Payment Link - Vercel Demo

这是一个可部署到 Vercel 的 BTC 支付中转页 Demo。

## 功能

- `/pay/10001` 支付页面
- BTC 地址展示
- Lightning Invoice 展示
- BTC URI 二维码
- Open Cash App 按钮
- 复制 BTC 地址 / Lightning Invoice
- `/api/status?orderId=10001` 订单状态接口

## 本地运行

```bash
npm install
npx vercel dev
```

打开：

```text
http://localhost:3000/pay/10001
```

## 部署到 Vercel

### 方法一：命令行部署

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

### 方法二：GitHub 部署

1. 新建 GitHub 仓库
2. 上传本项目所有文件
3. 登录 Vercel
4. Import Git Repository
5. Framework Preset 选择 Other
6. 点击 Deploy

## 正式上线需要替换

`lib/orders.js` 是 Demo 假订单。正式环境应替换为：

- MySQL / PostgreSQL / Supabase / Redis
- Coinsnap API / BTCPay Server API
- Webhook 回调更新订单状态
- 订单过期、少付、多付、确认数规则

## 注意

Cash App 目前没有公开的 BTC 转账 deep link 参数，所以不能稳定实现：

```text
点击链接 → 打开 Cash App → 自动填入 BTC 地址和金额
```

本方案是更稳的 H5 中转方案：唤醒 Cash App + 展示付款信息 + 自动查订单状态。
