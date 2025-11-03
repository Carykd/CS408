# CS408 考研笔记

考研计算机科学408笔记整理

## 📚 内容

本仓库包含CS408考研四个核心科目的学习笔记：

- **数据结构** - 线性表、栈、队列、树、图等
- **计算机网络** - 物理层到应用层的完整知识体系
- **计算机组成原理** - 数据表示、存储系统、CPU等
- **操作系统** - 进程管理、内存管理、文件系统等

## 🌐 在线网站

本项目是基于 VitePress 的文档网站，支持本地开发和在线部署。

## 🚀 使用方式

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

然后在浏览器中打开 <http://localhost:5173> 查看网站。

### 构建生产版本

```bash
npm run build
```

构建产物在 `docs/.vitepress/dist` 目录。

### 预览构建结果

```bash
npm run preview
```

## 📝 更新文档

直接编辑 `docs/` 目录下的 Markdown 文件即可。文件保存后，开发服务器会自动刷新显示最新内容。

文档组织结构：

- `docs/Data-Structrue/` - 数据结构相关笔记
- `docs/Computer-Network/` - 计算机网络相关笔记
- `docs/Computer-Organization/` - 计算机组成原理相关笔记
- `docs/Operate-System/` - 操作系统相关笔记

## 🌍 部署

### GitHub Pages

项目已配置 GitHub Actions 自动部署。推送到 `main` 分支后会自动构建并部署到 GitHub Pages。

### 其他平台

也可以部署到 Vercel、Netlify 等平台：

1. 连接 GitHub 仓库
2. 构建命令: `npm run build`
3. 输出目录: `docs/.vitepress/dist`

## 📖 参考资料

- 数据结构考研复习指导 王道论坛
- 计算机网络考研复习指导 王道论坛
- 计算机组成原理考研复习指导 王道论坛
- 操作系统考研复习指导 王道论坛
- 计算机网络（第七版）谢希仁

## 🔧 技术栈

- [VitePress](https://vitepress.dev/) - 现代化的静态网站生成器
- Markdown - 文档编写
- GitHub Actions - 自动部署

---

祝你考研顺利！🎓
