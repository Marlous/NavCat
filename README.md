# NavCat
## Introduction - 介绍
### Summary - 概要
NavCat（导航猫），简约纯粹的导航网站。基于 [MoKit](https://github.com/Marlous/MoKit) 项目。

### Feature - 特性
- 可灵活定制成属于自己的导航网站，配置简单。
- 可自动获取网站图标。
- 响应式布局，当高度或宽度变小时，左侧导航栏会自动消失变为悬浮导航栏，具体见效果截图。
- 效果 1：  
![效果](readme_img/图1.PNG)
- 效果 2：  
![效果](readme_img/图2.PNG)

## Usage - 用法
1. 在 `config` 文件夹中根据 `template.json` 模板文件填写自己收藏的网站。

2. 在 `js/config.js` 文件中找到对应的代码，直接调用 `generateNav()` 函数即可，填写文件路径和导航栏名称：
```js
/* 按顺序填写 */
generateNav("config/检索导航门户.json", "检索导航门户");
generateNav("config/设计相关.json", "设计相关");
generateNav("config/开发者.json", "开发者");
generateNav("config/白帽子黑客.json", "白帽子黑客");
generateNav("config/学术办公.json", "学术办公");
generateNav("config/其他小工具.json", "其他小工具");
generateNav("config/文档模板.json", "文档模板");
```

3. 注意 :
为避免混乱，json 文件以想要显示的导航栏名称命名即可，其它两处也使用相同的名字。

## Support - 支持
### Contact - 联系
- By Marlous
- E-mail：Goonecat@foxmail.com

## License - 版权信息
NavCat is released under the GPL license. See [LICENSE](https://github.com/Marlous/NavCat/blob/master/LICENSE) for additional details.