# Git 配置和设置指南

## 第一步：配置 Git 用户信息

在终端中运行以下命令（请替换为你的实际信息）：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

**示例：**
```bash
git config --global user.name "张三"
git config --global user.email "zhangsan@example.com"
```

> **注意：** 如果你计划使用 GitHub，建议使用与 GitHub 账号关联的邮箱地址。

## 第二步：创建第一次提交

配置完成后，运行：

```bash
git commit -m "Initial commit"
```

## 第三步：创建 GitHub 仓库并连接

1. 访问 https://github.com 并登录
2. 点击右上角 "+" → "New repository"
3. 输入仓库名称（例如：geliv-project）
4. 选择 Public 或 Private
5. **不要**勾选 "Initialize with README"
6. 点击 "Create repository"

## 第四步：连接并推送

GitHub 会显示连接命令，类似这样：

```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

## 完成！

现在你的项目已经保存到 GitHub 了。在其他电脑上，使用以下命令获取项目：

```bash
git clone https://github.com/你的用户名/仓库名.git
```

