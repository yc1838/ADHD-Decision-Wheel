# ADHD Decision Wheel 🎯

A fun, interactive decision wheel designed specifically for people with ADHD to help them choose what to do next and stop procrastinating! Spin the wheel and let fate decide your next task.

## 🌐 Language / 语言选择

- [🇺🇸 English](#english) | [🇨🇳 中文](#chinese)

---

<div id="english">

# ADHD Decision Wheel 🎯

A fun, interactive decision wheel designed specifically for people with ADHD to help them choose what to do next and stop procrastinating! Spin the wheel and let fate decide your next task.

## ✨ Features

- **Interactive Spinning Wheel**: Smooth animations with realistic physics
- **Task Management**: Add, remove, and clear tasks with a 12-task limit
- **Sound Effects**: Procedural audio feedback for spinning, stopping, and results
- **Confetti Celebration**: Visual feedback when results are shown
- **Multi-language Support**: English and Chinese (中文) interfaces
- **Developer Tools**: Built-in debug console for development
- **Responsive Design**: Works on desktop, tablet, and mobile devices (but needs improvements in non-desktop platforms)
- **Accessibility**: ARIA labels and semantic HTML for screen readers

## 🚀 Quick Start

### Local Setup

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd adhd-decision-wheel
   ```

2. **Open in your browser**
   - Simply open `index.html` in any modern web browser
   - No build process or server required!

3. **Start using it**
   - Add your tasks using the input field
   - Click "SPIN THE WHEEL!" to make a decision
   - Wait for the wheel to stop naturally, or use "STOP!" to manually stop the wheel

## 📁 Project Structure

```
adhd-decision-wheel/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # Main JavaScript logic
├── sounds.js           # Audio effects manager
└── README.md           # This file
```

## 🛠️ Development

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No Node.js or build tools required!

### Local Development

1. **Set up your environment**
   ```bash
   # No installation needed - just clone and open!
   git clone <repository-url>
   cd adhd-decision-wheel
   ```

2. **Open in your browser**
   ```bash
   # On macOS/Linux
   open index.html
   
   # On Windows
   start index.html
   
   # Or simply double-click the file
   ```

3. **Make changes and refresh**
   - Edit any file in your preferred code editor
   - Refresh the browser to see changes
   - No build process required!

### Code Organization

- **`index.html`**: Semantic HTML structure with accessibility features
- **`styles.css`**: Organized CSS with clear sections and comments
- **`script.js`**: Modular JavaScript with comprehensive documentation
- **`sounds.js`**: Web Audio API implementation for sound effects

### Key Functions

- `spinWheel()`: Handles wheel spinning animation and result calculation
- `stopWheel()`: Manually stops the wheel and calculates result
- `addTask()`: Adds new tasks to the wheel
- `setLanguage()`: Switches between English and Chinese
- `createConfetti()`: Generates celebration animation

## 🎨 Customization

### Adding New Languages

1. **Add translation data** in `script.js`:
   ```javascript
   const translations = {
     en: { /* English translations */ },
     zh: { /* Chinese translations */ },
     es: { /* Spanish translations */ }  // Add new language
   };
   ```

2. **Add language button** in `index.html`:
   ```html
   <button class="lang-btn" onclick="setLanguage('es')">Español</button>
   ```

### Styling Changes

- **Colors**: Modify CSS custom properties in `styles.css`
- **Animations**: Adjust timing in CSS transitions
- **Layout**: Responsive design with flexbox and CSS Grid

### Sound Customization

- **Modify frequencies** in `sounds.js` for different tones
- **Adjust timing** for longer/shorter sounds
- **Change wave types** (sine, square, triangle) for different effects

## 🧪 Testing

### Manual Testing Checklist

- [ ] Add tasks (max 12)
- [ ] Remove individual tasks
- [ ] Clear all tasks
- [ ] Spin wheel naturally
- [ ] Stop wheel manually
- [ ] Switch languages
- [ ] Test on mobile devices
- [ ] Test with screen reader
- [ ] Verify sound effects work

### Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📦 Deployment Options

### Static Hosting (Recommended)

**Perfect for this project!** No server-side code needed.

- **GitHub Pages**: Free, automatic deployment
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Git integration with previews
- **Firebase Hosting**: Google's static hosting
- **AWS S3**: Scalable static hosting

### NPM Package (Alternative)

While this is primarily a web app, you could create an NPM package:

```bash
# Create package.json
npm init

# Add build script if needed
npm run build

# Publish to NPM
npm publish
```

However, the static hosting approach is simpler and more appropriate for this type of application.

## 🔧 Configuration

### Environment Variables

None required! This is a pure frontend application.

### Build Process

None required! Just edit files and refresh browser.

### Performance Optimization

- Images are emoji-based (no external dependencies)
- Sounds are procedural (no audio files)
- CSS and JS are minified-ready
- No external libraries required

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Google Fonts** for the Poppins font family
- **Web Audio API** for procedural sound generation
- **CSS Grid & Flexbox** for responsive layouts
- **ADHD community** for inspiration and feedback

## 📞 Support

- **Issues**: Create an issue on GitHub
- **Questions**: Open a discussion
- **Feature Requests**: Submit via issues

## 🎯 Roadmap

- [ ] Add more languages
- [ ] Save tasks to localStorage
- [ ] Add wheel themes
- [ ] Export/import task lists
- [ ] Add tags for tasks
- [ ] Create mobile app version
- [ ] Connect with LLM API to automatically break selected task into smaller, doable steps that are suitable for ADHD people.

---

**Made with ❤️ for the ADHD community by Verver**

*Helping you make decisions, one spin at a time! 🎲*

</div>

---

<div id="chinese">

# ADHD 决策转盘 🎯

一个专为ADHD人群设计的趣味互动决策转盘，帮助他们选择下一步要做什么并停止拖延！转动转盘，让命运决定你的下一个任务。

## ✨ 功能特色

- **互动旋转转盘**: 流畅的动画效果，真实的物理感
- **任务管理**: 添加、删除和清空任务，最多12个任务
- **音效反馈**: 旋转、停止和结果显示的程序化音频
- **庆祝特效**: 结果显示时的视觉反馈
- **多语言支持**: 英文和中文（中文）界面
- **开发者工具**: 内置调试控制台
- **响应式设计**: 支持桌面、平板和移动设备（但在非桌面平台需要改进）
- **无障碍访问**: 为屏幕阅读器提供ARIA标签和语义化HTML

## 🚀 快速开始

### 本地运行

1. **克隆或下载项目**
   ```bash
   git clone <repository-url>
   cd adhd-decision-wheel
   ```

2. **在浏览器中打开**
   - 只需在任何现代网络浏览器中打开 `index.html`
   - 无需构建过程或服务器！

3. **开始使用**
   - 使用输入框添加你的任务
   - 点击"转盘开始！"来做出决定
   - 等待转盘停止，或者使用"停止！"手动停止转盘



## 📁 项目结构

```
adhd-decision-wheel/
├── index.html          # 主HTML文件
├── styles.css          # 所有CSS样式
├── script.js           # 主JavaScript逻辑
├── sounds.js           # 音频效果管理器
└── README.md           # 此文件
```

## 🛠️ 开发

### 前置要求

- 任何现代网络浏览器（Chrome、Firefox、Safari、Edge）
- 无需Node.js或构建工具！

### 本地开发

1. **设置环境**
   ```bash
   # 无需安装 - 只需克隆并打开！
   git clone <repository-url>
   cd adhd-decision-wheel
   ```

2. **在浏览器中打开**
   ```bash
   # 在macOS/Linux上
   open index.html
   
   # 在Windows上
   start index.html
   
   # 或直接双击文件
   ```

3. **修改并刷新**
   - 在你喜欢的代码编辑器中编辑任何文件
   - 刷新浏览器查看更改
   - 无需构建过程！

### 代码组织

- **`index.html`**: 带有无障碍功能的语义化HTML结构
- **`styles.css`**: 组织良好的CSS，有清晰的部分和注释
- **`script.js`**: 模块化JavaScript，有全面的文档
- **`sounds.js`**: 用于音效的Web Audio API实现

### 关键函数

- `spinWheel()`: 处理转盘旋转动画和结果计算
- `stopWheel()`: 手动停止转盘并计算结果
- `addTask()`: 向转盘添加新任务
- `setLanguage()`: 在英文和中文之间切换
- `createConfetti()`: 生成庆祝动画

## 🎨 自定义

### 添加新语言

1. **在 `script.js` 中添加翻译数据**:
   ```javascript
   const translations = {
     en: { /* 英文翻译 */ },
     zh: { /* 中文翻译 */ },
     es: { /* 西班牙文翻译 */ }  // 添加新语言
   };
   ```

2. **在 `index.html` 中添加语言按钮**:
   ```html
   <button class="lang-btn" onclick="setLanguage('es')">Español</button>
   ```

### 样式更改

- **颜色**: 在 `styles.css` 中修改CSS自定义属性
- **动画**: 调整CSS过渡的时间
- **布局**: 使用flexbox和CSS Grid的响应式设计

### 音效自定义

- **在 `sounds.js` 中修改频率**以获得不同的音调
- **调整时间**以获得更长/更短的音效
- **更改波形类型**（正弦、方波、三角波）以获得不同效果

## 🧪 测试

### 手动测试清单

- [ ] 添加任务（最多12个）
- [ ] 删除单个任务
- [ ] 清空所有任务
- [ ] 自然旋转转盘
- [ ] 手动停止转盘
- [ ] 切换语言
- [ ] 在移动设备上测试
- [ ] 使用屏幕阅读器测试
- [ ] 验证音效是否工作

### 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📦 部署选项

### 静态托管（推荐）

**非常适合这个项目！** 无需服务器端代码。

- **GitHub Pages**: 免费，自动部署
- **Netlify**: 拖拽部署
- **Vercel**: 带预览的Git集成
- **Firebase Hosting**: 谷歌的静态托管
- **AWS S3**: 可扩展的静态托管

### NPM包（替代方案）

虽然这主要是一个网络应用，但你可以创建一个NPM包：

```bash
# 创建package.json
npm init

# 如果需要，添加构建脚本
npm run build

# 发布到NPM
npm publish
```

但是，静态托管方法更简单，更适合这种类型的应用程序。

## 🔧 配置

### 环境变量

无需！这是一个纯前端应用程序。

### 构建过程

无需！只需编辑文件并刷新浏览器。

### 性能优化

- 图像基于表情符号（无外部依赖）
- 音效是程序化的（无音频文件）
- CSS和JS已准备好压缩
- 无需外部库

## 🤝 贡献

1. **Fork仓库**
2. **创建功能分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **进行更改**
4. **彻底测试**
5. **提交更改**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **推送到分支**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **打开Pull Request**

## 📝 许可证

本项目是开源的，可在 [MIT许可证](LICENSE) 下使用。

## 🙏 致谢

- **Google Fonts** 提供Poppins字体家族
- **Web Audio API** 用于程序化声音生成
- **CSS Grid & Flexbox** 用于响应式布局
- **ADHD社区** 提供灵感和反馈

## 📞 支持

- **问题**: 在GitHub上创建issue
- **问题**: 开启讨论
- **功能请求**: 通过issues提交

## 🎯 路线图

- [ ] 添加更多语言
- [ ] 将任务保存到localStorage
- [ ] 添加转盘主题
- [ ] 导出/导入任务列表
- [ ] 为任务添加标签
- [ ] 创建移动应用版本
- [ ] 连接LLM API，自动将选定的任务分解为适合ADHD人群的可执行小步骤

---

**由Verver为ADHD社区制作 ❤️**

*一次旋转，一次决策！🎲*

</div> 