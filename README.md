# 李雅晴 - 个人主页

基于 React + TypeScript + Tailwind CSS 构建的个人作品集网站。

## 功能特性

### 首页 (Hero)
- 个人介绍与头像展示
- 下载简历 PDF / 联系我按钮

### 关于我 (About)
- 个人简介与教育背景
- 核心数据展示（TVL、工作年限、业绩等）
- 证书资质（PMP、CET-4）

### 工作经历 (Experience)
- 完整展示每份工作的职责、项目经验和成果
- 按时间倒序排列

### 技能专长 (Skills)
- 设计软件、原型工具、数据查询、流程图

### 联系我 (Contact)
- 邮箱：549855748@qq.com
- 电话：13917261487

## 技术栈

- **框架**：React 18 + TypeScript
- **构建工具**：Vite 5
- **样式**：Tailwind CSS 3
- **字体**：Playfair Display（标题）+ Inter + Noto Serif SC（正文）

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
src/
├── App.tsx # 主组件（所有页面模块）
├── index.css    # 全局样式与工具类
└── main.tsx     # React 入口文件
public/
├── resume.pdf   # 简历 PDF
└── images/     # 图片资源
```

## 设计风格

采用 Newsprint（新闻纸）设计风格：
- 高对比度黑白配色
- 零圆角设计
- 强调网格与边界
- 衬线字体营造报纸感