# Geliv 礼品卡交易平台

这是一个礼品卡交易平台的网站项目。

## 如何将项目保存到服务器端

### 方法一：使用 Git + GitHub（推荐）

#### 1. 安装 Git

- **Windows**: 下载并安装 [Git for Windows](https://git-scm.com/download/win)
- 安装完成后，重启终端

#### 2. 初始化 Git 仓库

在项目目录中运行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建第一次提交
git commit -m "初始提交"
```

#### 3. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录（如果没有账号，先注册）
2. 点击右上角的 "+" 号，选择 "New repository"
3. 输入仓库名称（例如：geliv-project）
4. 选择 Public 或 Private（建议选择 Private 如果是私人项目）
5. **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）
6. 点击 "Create repository"

#### 4. 连接本地仓库到 GitHub

在项目目录中运行：

```bash
# 添加远程仓库（将 YOUR_USERNAME 和 REPO_NAME 替换为你的实际信息）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 5. 在其他电脑上获取项目

```bash
# 克隆项目
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git

# 进入项目目录
cd REPO_NAME
```

#### 6. 日常使用

**保存更改到服务器：**
```bash
git add .
git commit -m "描述你的更改"
git push
```

**从服务器获取最新更改：**
```bash
git pull
```

### 方法二：使用云存储服务

如果你不想使用 Git，也可以使用以下云存储服务：

- **OneDrive**（Windows 自带）
- **Google Drive**
- **Dropbox**

只需将项目文件夹放在这些服务的同步文件夹中即可。

---

## 项目结构

```
.
├── index.html      # 主页面
├── main.js         # JavaScript 文件
├── style.css       # 样式文件
├── image/          # 图片资源
└── README.md       # 说明文档
```

