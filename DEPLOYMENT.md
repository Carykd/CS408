# 部署指南

## 🔍 GitHub Pages 错误解决方案

如果遇到 `actions/configure-pages@v4` 报错：`Resource not accessible by integration`，请按以下步骤操作：

### 1. 启用 GitHub Pages

1. 进入 GitHub 仓库
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 部分：
   - 选择 **GitHub Actions** 作为源（不是 `Deploy from a branch`）
5. 保存设置

### 2. 检查仓库权限

确保 GitHub Actions 有足够权限：

1. 进入仓库 **Settings** → **Actions** → **General**
2. 在 **Workflow permissions** 部分：
   - 选择 **Read and write permissions**
   - 勾选 **Allow GitHub Actions to create and approve pull requests**
3. 保存设置

### 3. 检查 Actions 权限

1. 进入仓库 **Settings** → **Actions** → **General**
2. 确保 **Allow all actions and reusable workflows** 已启用

## 🧪 本地测试构建

在推送到 GitHub 之前，可以在本地测试构建过程，避免推送后才发现错误。

### 方法 1: 使用测试脚本（推荐）

```bash
npm run test:build
```

这个脚本会：
- ✅ 检查 Node.js 版本
- ✅ 安装依赖
- ✅ 自动检测并设置 base 路径
- ✅ 执行构建
- ✅ 验证构建产物
- ✅ 恢复原始配置

### 方法 2: 手动测试

```bash
# 1. 安装依赖
npm install

# 2. 构建项目
npm run build

# 3. 预览构建结果
npm run preview
```

构建产物在 `docs/.vitepress/dist` 目录。

## 📝 关于 Base 路径

如果仓库名称不是 `username.github.io`，需要在 `docs/.vitepress/config.js` 中设置正确的 base 路径：

```javascript
base: '/仓库名称/',  // 例如: '/CS408-main/'
```

测试脚本会自动检测并设置，但在 GitHub Actions 中也会自动处理。

## 🔧 常见问题

### 问题 1: 构建失败 - 内存不足

如果构建时提示内存不足，脚本已设置 `NODE_OPTIONS=--max-old-space-size=4096`。

### 问题 2: Base 路径错误

如果部署后页面资源加载失败（404），检查 base 路径是否正确。GitHub Actions 会自动处理，但本地预览时可能需要手动调整。

### 问题 3: 权限错误

如果 GitHub Actions 仍然报权限错误：
- 确认仓库是公开的，或者你有足够的权限
- 检查 Actions 是否在仓库中启用
- 确认 GitHub Pages 使用的是 **GitHub Actions** 源，而不是分支部署

## 📚 参考链接

- [VitePress 部署指南](https://vitepress.dev/guide/deploying)
- [GitHub Pages Actions 文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [GitHub Actions 权限文档](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)

