# 我的个人主页 / My Personal Homepage

这是一个漂亮的GitHub Pages个人主页，带有动态二次元风格背景轮播效果。

## ✨ 特性

- 🎨 精美的二次元风格背景图片轮播
- 🌈 流畅的动画和过渡效果
- 📱 响应式设计，完美支持移动端
- ✨ 鼠标追踪特效
- 🎮 隐藏彩蛋（试试 Konami Code）
- 🌐 自定义域名支持

## 🌐 访问地址

- GitHub Pages: https://roman666123.github.io/mybackground/
- 自定义域名: https://donghaha.online

## 📝 域名配置说明

已创建 CNAME 文件，将域名指向 GitHub Pages。

### 需要在域名提供商处完成的DNS配置：

1. 登录你的域名提供商（购买 donghaha.online 的地方）
2. 进入 DNS 管理页面
3. 添加以下 DNS 记录：

**方式一：使用 CNAME（推荐）**
```
类型: CNAME
主机记录: @
记录值: roman666123.github.io
```

**方式二：使用 A 记录**
```
类型: A
主机记录: @
记录值: 185.199.108.153
记录值: 185.199.109.153
记录值: 185.199.110.153
记录值: 185.199.111.153
```

如果想要 www.donghaha.online 也能访问，再添加：
```
类型: CNAME
主机记录: www
记录值: roman666123.github.io
```

4. 等待 DNS 生效（通常 5-30 分钟，最长可能需要 24 小时）

### GitHub Pages 设置：

1. 进入仓库的 Settings
2. 找到 Pages 部分
3. Source 选择 main 分支
4. Custom domain 会自动显示 donghaha.online
5. 勾选 "Enforce HTTPS"（DNS 生效后）

## 🎨 自定义背景图片

如果想要替换背景图片，编辑 `style.css` 文件中的以下部分：

```css
.slide:nth-child(1) {
    background-image: url('你的图片链接1');
}

.slide:nth-child(2) {
    background-image: url('你的图片链接2');
}

.slide:nth-child(3) {
    background-image: url('你的图片链接3');
}
```

## 🛠️ 技术栈

- HTML5
- CSS3 (Animations, Gradients, Backdrop Filter)
- JavaScript (ES6+)
- GitHub Pages

## 📄 许可

MIT License

---

Made with ❤️ by Roman666123
