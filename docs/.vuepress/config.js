
module.exports = {
  title: "JackeyWang的博客",
  base: "/blog/",
  description: "言念君子，温其如玉。",
  head: [["link", { rel: "icon", href: "avatar.jpg" }]],
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
          { text: "CSDN", link: "https://blog.csdn.net/jackey254" }
        ],
      },
    ],
    subSidebar: "auto",
    logo: "/avatar.jpg",
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
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "龙卷风",
            artist: "Jackey Wang",
            url: "龙卷风.mp3",
            cover: "avatar.jpg",
          },
          {
            name: "我落泪情绪零碎",
            artist: "周杰伦",
            url: "我落泪情绪零碎.mp3",
            cover:
              "https://img0.baidu.com/it/u=2658170218,2751607704&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          },
          {
            name: "最长的电影",
            artist: "周杰伦",
            url: "https://other-web-ra01-sycdn.kuwo.cn/1dcfb0f8c1aab87318d4d3390d6ca40e/642148e5/resource/n1/128/95/7/1096986206.mp3",
            cover:
              "https://img1.baidu.com/it/u=145479874,3045041805&fm=253&fmt=auto&app=138&f=JPEG?w=758&h=500",
          },
          {
            name: "晴天",
            artist: "周杰伦",
            url: "https://sy-sycdn.kuwo.cn/41e89f8fde46dcf5fa733fdb505f123a/64213f60/resource/n1/84/19/2974502628.mp3",
            cover:
              "https://img1.baidu.com/it/u=1695647923,411497886&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
          },
          {
            name: "夜曲",
            artist: "周杰伦",
            url: "https://rl01-sycdn.kuwo.cn/03edfb08faf269013b00fa12d9a5aa90/6421462e/resource/n1/3/76/295106251.mp3",
            cover:
              "https://img0.baidu.com/it/u=2095393750,346200247&fm=253&fmt=auto&app=138&f=JPEG?w=900&h=500",
          },
          {
            name: "蒲公英的约定",
            artist: "周杰伦",
            url: "https://other-web-ra01-sycdn.kuwo.cn/d9adbed30f7c7c82970ed3b6e01beeef/642141d9/resource/n3/128/42/67/324748197.mp3",
            cover:
              "https://img0.baidu.com/it/u=2250153257,3053520561&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
          },
          {
            name: "给我一首歌的时间",
            artist: "周杰伦",
            url: "https://em-sycdn.kuwo.cn/9e9ab1a341dd0ed0aa695b0d078f9d5d/64214b70/resource/n1/31/27/2585156930.mp3",
            cover:
              "https://img1.baidu.com/it/u=145479874,3045041805&fm=253&fmt=auto&app=138&f=JPEG?w=758&h=500",
          },
          {
            name: "暗号",
            artist: "周杰伦",
            url: "https://sy-sycdn.kuwo.cn/254eb70bc293ea28747dbe769e68c747/64224ee4/resource/n1/65/10/566385765.mp3",
            cover:
              "https://img0.baidu.com/it/u=906711466,1240768851&fm=253&fmt=auto&app=120&f=JPEG?w=799&h=500",
          },
          {
            name: "珊瑚海",
            artist: "周杰伦&梁心颐",
            url: "https://other-web-ra01-sycdn.kuwo.cn/abcb72a2dd762d66430608531600990a/642250a2/resource/n2/192/64/36/2130102047.mp3",
            cover:
              "https://img1.baidu.com/it/u=1764792661,1758789348&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
          },
          {
            name: "龙卷风",
            artist: "周杰伦",
            url: "https://sx-sycdn.kuwo.cn/6b41a76be2959f6a797b7133c925dece/6422542d/resource/n2/3/18/3271758988.mp3",
            cover:
              "https://img0.baidu.com/it/u=4153981717,3384976276&fm=253&fmt=auto&app=120&f=JPEG?w=801&h=500",
          },
          {
            name: "我不配",
            artist: "周杰伦",
            url: "https://other-web-nf01-sycdn.kuwo.cn/f92197693135cf8c5d37eff4b1f71110/6422539b/resource/n1/49/26/2463380135.mp3",
            cover:
              "https://img0.baidu.com/it/u=1933743895,233579483&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
          },
          {
            name: "断了的弦",
            artist: "周杰伦",
            url: "https://other-web-nf01-sycdn.kuwo.cn/b527534b324ad555fdfacf85dee7f4fa/6422532d/resource/n3/3/30/2945248611.mp3",
            cover:
              "https://img1.baidu.com/it/u=3962046919,3023507110&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
          },
          {
            name: "安静",
            artist: "周杰伦",
            url: "https://sx-sycdn.kuwo.cn/4166417fec1764e97a614bf860ee20c5/642254e1/resource/n1/28/73/2359151793.mp3",
            cover:
              "https://img0.baidu.com/it/u=3321682076,1535696439&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=427",
          },
          {
            name: "回到过去",
            artist: "周杰伦",
            url: "https://sy-sycdn.kuwo.cn/3e07b4fb74bb75f9b406597c9b4ae731/6422494a/resource/n2/81/13/2398897842.mp3",
            cover:
              "https://img0.baidu.com/it/u=1049834849,2527937319&fm=253&fmt=auto&app=120&f=JPEG?w=731&h=457",
          },
          {
            name: "止战之殇",
            artist: "周杰伦",
            url: "https://other-web-ra01-sycdn.kuwo.cn/4ec69cc07e61e13b317dc2868c1f1a3a/64225547/resource/n1/192/28/58/321386047.mp3",
            cover:
              "https://img2.baidu.com/it/u=2381456894,563815707&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
          },
          {
            name: "黑色幽默",
            artist: "周杰伦",
            url: "https://sx-sycdn.kuwo.cn/93b238e0c316c52c2d27f5e2f0e9fd38/6422535d/resource/n2/73/14/1825328972.mp3",
            cover:
              "https://img1.baidu.com/it/u=3793133864,2217009132&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=435",
          },
          {
            name: "黑色毛衣",
            artist: "周杰伦",
            url: "https://other-web-ra01-sycdn.kuwo.cn/6b4cfb4e7e97e08265931cf349bedcb5/642255b2/resource/n1/320/71/39/1905287738.mp3",
            cover:
              "https://img1.baidu.com/it/u=808794500,2067963841&fm=253&fmt=auto&app=120&f=JPEG?w=801&h=500",
          },
          {
            name: "可爱女人",
            artist: "周杰伦",
            url: "https://sy-sycdn.kuwo.cn/20cd8d8317584cf2800178caeb76c192/6422534b/resource/n3/89/22/332024558.mp3",
            cover:
              "https://img1.baidu.com/it/u=1672547379,3041809081&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
          },
          {
            name: "退后",
            artist: "周杰伦",
            url: "https://other-web-ra01-sycdn.kuwo.cn/f15ade2aa876fcb6281d21829519912e/64225619/resource/n3/320/36/53/1801363014.mp3",
            cover:
              "https://img1.baidu.com/it/u=3513460032,443932509&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
          },
          {
            name: "彩虹",
            artist: "周杰伦",
            url: "https://other-web-ra01-sycdn.kuwo.cn/c49145c9cb21117ea3ae81ae5ad3fdb3/64225642/resource/n2/192/32/3/1072608663.mp3",
            cover:
              "https://img0.baidu.com/it/u=1789812534,1600075421&fm=253&fmt=auto&app=138&f=JPEG?w=612&h=500",
          },
          {
            name: "手写的从前",
            artist: "周杰伦",
            url: "https://other-web-rf01-sycdn.kuwo.cn/d63499225ca92ff2026164aff0f9b175/6422567a/resource/n3/62/25/2636931122.mp3",
            cover:
              "https://img0.baidu.com/it/u=141209501,397335235&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
          },
          {
            name: "说了再见",
            artist: "周杰伦",
            url: "https://other-web-ra01-sycdn.kuwo.cn/614d834fb47aa75f187de6fc2bbcdf8a/642256c2/resource/n3/320/85/39/169183652.mp3",
            cover:
              "https://img1.baidu.com/it/u=68821826,3374943986&fm=253&fmt=auto&app=138&f=JPEG?w=794&h=500",
          },
          {
            name: "几个你",
            artist: "薛之谦",
            url: "https://other-web-rh01-sycdn.kuwo.cn/e3ff58c0160bb3c407e76253fcfec838/64225753/resource/n2/49/1/335033840.mp3",
            cover:
              "https://img0.baidu.com/it/u=2319874340,542588306&fm=253&fmt=auto&app=138&f=PNG?w=500&h=460",
          },
          {
            name: "butterfly",
            artist: "防弹少年团",
            url: "butterfly.mp3",
            cover: "logo.png",
          },
          {
            name: "강남역 4번 출구",
            artist: "Plastic / Fallin` Dild",
            url: "https://assets.smallsunnyfox.com/music/2.mp3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
          {
            name: "팔베개",
            artist: "최낙타",
            url: "https://assets.smallsunnyfox.com/music/3.mp3",
            cover:
              "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        autoplay: true,
        // 悬浮窗样式
        floatStyle: { bottom: "20px", "z-index": "999999" },
      },
    ],
    ["@vuepress/nprogress"],
    [
      "vuepress-plugin-helper-live2d",
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "shizuku",
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: true, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    // 评论插件
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#valine-vuepress-comment",
          appId: "NUx3fbKtSp3BXD6X8belSgCZ-gzGzoHsz",
          appKey: "SRSeVthQSUNxuPEMs0CNbEG9",
          path: "<%- frontmatter.to.path %>",
        },
      },
    ],
  ],
};
