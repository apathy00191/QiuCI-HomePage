<div align="center">

# 🌐 秋辞の主页

**毛玻璃拟态 × 动态粒子装饰 × 玻璃音乐播放器 · 三合一个人主页**

零依赖 · 纯原生 · 单目录可部署 · 双击即用

[🌐 主页](http://qiuci.xtxt.xyz/) · [📝 博客](http://blog666.xtxt.xyz/archives) · [🧭 导航站](http://dh666.xtxt.xyz/) · [☁️ 私人网盘](http://wp888.xtxt.xyz/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

</div>

---

## ✨ 特性

- 🧊 **玻璃动态背景**：毛玻璃卡片（`backdrop-filter`）+ 4 个漂移光斑 + 冷色科技配色（深空蓝 × 霓虹青），支持 **5 张壁纸一键切换**
- 🎨 **艺术光标**：Canvas 实时生成的渐变发光箭头，悬停时变为「星环」指针（`assets/js/extra.js`）
- 🌸 **动态装饰**：飘落光瓣、浮动图标、鼠标星光拖尾、点击烟花、光标辉光
- 🎵 **玻璃音乐播放器**：
  - 内置 **6 首本地合成演示曲**（WebAudio 思路合成 WAV，无需任何音频文件）
  - 进度拖拽 / 音量 / 列表循环 / 单曲循环 / 随机播放 / 播放列表管理
  - `⊕` 添加本地音乐、**拖拽 mp3 即播**、本地曲目增删
- ⏰ **信息组件**：模拟时钟 + 数字时间 + 时段问候 + 每日一句；动态时间线**自动显示本周一~本周六**；页脚建站时间与运行时长**精确到秒、自动跨天**
- 🌗 **深 / 浅双主题**：右上角一键切换，`localStorage` 记忆偏好（默认深色）
- 🔒 **页面保护**：禁用右键菜单（查看源码）、F12、`Ctrl+Shift+I/J/C/K`、`Ctrl+U` 等开发者工具入口
- 📱 **响应式**：三栏 → 两栏 → 单栏自适应，移动端可用；支持 `prefers-reduced-motion` 无障碍降级
- 📦 **零依赖**：无框架、无构建、无 CDN，`file://` 离线完整可用

## 📸 预览

<!-- 把截图放到 screenshots/preview.png 后自动显示 -->
![预览](https://github.com/apathy00191/QiuCI-HomePage/blob/main/proview.png)

## 🚀 快速开始

**方式一：本地直接看**

```bash
git clone https://github.com/<你的用户名>/<仓库名>.git
cd <仓库名>
# 双击 index.html 即可
```

**方式二：部署上线**

| 方式 | 操作 |
| --- | --- |
| GitHub Pages | 仓库 Settings → Pages → Branch 选 `main` → 整个目录原样上传后即可访问 |
| 自有服务器 | 把本目录全部文件上传到 Web 根目录（Nginx /宝塔均可） |
| 其他静态托管 | Cloudflare Pages / Vercel / Gitee Pages 直接拖文件夹 |

> ⚠️ 必须整个文件夹一起部署：`头像.jpg`、`assets/`、`music/` 都是相对路径引用。

## 📁 项目结构

```
.
├── index.html              ← 主页（全部样式 + 脚本内嵌，核心文件）
├── 头像.jpg                ← 站点头像 & 网站图标（直接替换这张图即可换头像/Logo）
├── assets/
│   ├── img/                ← 壁纸 ×5、封面、项目配图、社交图标、favicon
│   ├── svg/                ← 技能树图标、贡献小蛇
│   └── js/extra.js         ← 艺术光标 + 右键/F12 页面保护
├── music/                  ← 放你的 mp3（详见 music/使用说明.txt）
└── README.md
```

## ✏️ 定制指南

| 想改什么 | 怎么改 |
| --- | --- |
| 网站标题 | `index.html` 里的 `<title>` |
| 昵称 / 签名 / 徽章 | 顶栏 `class="brand-text"` 区域 |
| 头像 / 网站图标 | 替换根目录 `头像.jpg` |
| 社交链接（GitHub/博客/网盘等） | 搜索 `找到我` 卡片里的 `<a>` 改 `href` |
| 项目卡片 | 搜索 `小窝项目`，照现有格式增删 |
| 播放列表 / 壁纸 / 建站时间 | `<script>` 开头的 `const SITE = {...}` |
| 动态时间线 | 每条 `<li>` 的 `data-wd` 表示本周第几天（0=周一） |
| 配色 | `:root` 里的 `--accent`（主色）、`--accent-2`（辅色）、`--purple`、`--blue` |
| 主题 / 壁纸切换按钮 | 右上角 🌗 和 🏞（选择会记住） |
| 页面保护 | `assets/js/extra.js`（删掉即取消保护） |

## 🎵 音乐播放器加歌

**最快**：打开页面 → 播放器 `⊕ 添加本地音乐`，或直接把 mp3 **拖到播放器上**。

**永久生效**：把 mp3 放进 `music/`，在 `index.html` 的 `SITE.playlist` 加一行：

```js
{ title: '歌名', artist: '歌手', src: 'music/歌名.mp3', cover: 'assets/img/cover.png' },
```

`src` 写 `demo0` ~ `demo5` 使用内置合成演示曲，无需任何文件。

## 🛡 关于页面保护

`extra.js` 拦截了右键、F12 与常见开发者工具快捷键，可挡住普通用户的「查看源码」。
但浏览器最终必须把 HTML 下发给客户端，**任何前端保护都能被绕过**（关掉 JS、抓包即可）。
它只是体验层的防君子，不构成真正的知识产权保护——介意的话请配合服务端渲染混淆使用。

## 🙏 致谢

本项目由三套开源/网络模板融合改造而成：

| 模板 | 借鉴部分 |
| --- | --- |
| 毛玻璃拟态UI个人主页 | 玻璃质感、时钟、播放器布局 |
| baohome | 三栏信息结构、标签墙、时间线、技能树 |
| 粉色个人主页 | 粒子装饰、卡片风格、动效思路 |

`assets/` 内图片素材版权归原作者所有，仅用于个人主页展示；若你 fork 后商用，请自行替换为自己的素材。

## 📄 License

[MIT License](LICENSE) © 秋辞

> 欢迎 Star ⭐ / Fork。如果你用了这个模板，欢迎在你的主页链回本项目，记得把头像、昵称、链接换成你自己的 😉

---

**秋辞** · [GitHub](https://github.com/apathy00191) · [博客](http://blog666.xtxt.xyz/archives) · [主页](http://qiuci.xtxt.xyz/)
