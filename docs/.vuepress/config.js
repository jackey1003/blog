module.exports = {
  title: "JackeyWang的博客",
  base: "/blogs/",
  description: "YYY",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "JackeyWang 的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/3417743457520461" },
          { text: "Github", link: "https://github.com/jackey1003" },
        ],
      },
    ],
    subSidebar: "auto",
    authorAvatar: "/avatar.jpg",
    type: "blog",
    author: "JackeyWang",
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
  },
  plugins: [
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        },
      },
    ],
    [
      "cursor-effects",
      {
        size: 4, // size of the particle, default: 2
        shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
  ],
};
