var sidebar = require('./config/sidebar');

module.exports = {
    title: 'alwaysdh的个人空间',
    description: "雄关漫道真如铁，而今迈步从头越。",
    dest: "dist",
    head: [
        [
            "link",
            {
                "rel": "icon",
                "href": "/avatar.png"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        // ['script', {}, `
        //   var _hmt = _hmt || [];
        //   (function() {
        //     var hm = document.createElement("script");
        //     hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
        //     var s = document.getElementsByTagName("script")[0];
        //     s.parentNode.insertBefore(hm, s);
        //   })();
        // `] //百度统计
    ],
    "locales": {
        "/": {
            "lang": 'zh-CN'
        }
    },
    theme: 'reco', //vuepress-theme-reco
    themeConfig: {
        nav: [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "关于",
                "link": "/about/",
                "icon": "reco-account"
            }
        ],
        type: 'blog',
        sidebar: sidebar.sidebar,
        // 博客配置
        blogConfig: {
            category: {
                location: 2,
                text: '博客'
            },
            tag: {
                location: 3,
                text: '标签'
            }
        },
        valineConfig: {
            appId: "0JlRjzddFKM7ozlDtNceBnC2-9Nh9j0Va",// your appId
            appKey: "BuvYTTY49vh5oqOxTVOH6gDm", // your appKey
            avatar: "",
            enableQQ: true, //启用昵称框自动获取QQ昵称和QQ头像
            requiredFields: ['nick', 'mail'], //设置必填项
            placeholder: "留言评论~",
            visitor: true, // 阅读量统计
            enableQQ: true
        },
        logo: "/avatar.png",
        huawei: true, //首页出现华为文案
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        author: "邓洪",
        authorAvatar: '/avatar.png',
        record: "你的备案号 ", //icp备案
        startYear: "2020",
        info: "一名追求技术喜欢安静的程序猿。",
        socials: {
            github: "https://github.com/alwaysdh", //github
            gitlub: false, //gitlub
            gitee: false, //gitee
            jianshu: false, //简书
            zhihu: false, //知乎
            toutiao: false, //知乎
            juejin: false, //掘金
            segmentfault: false, //思否
            csdn: "https://blog.csdn.net/Seasons_in_your_sun?spm=1010.2135.3001.5343", //CSDN
            wechat: "alwaysdh55", //微信
            qq: "987809534" //QQ
        },
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                logo: '/avatar.png',
                link: 'https://www.recoluan.com'
            }
        ],
        mottos: [
            {
                zh: "愿你保持初心和善良,笑里尽是温暖与坦荡。",
                en: "May you keep your original heart and kindness, and smile with warmth and magnanimity."
            },
            {
                zh: "年轻就是无限的可能。",
                en: "Youth means limitless possibilities."
            },
            {
                zh: "真正的梦就是现实的彼岸。",
                en: "Real dream is the other shore of reality."
            },
            {
                zh: "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
                en: "Don't worry about the vague future, just strive for the clear present."
            },
            {
                zh: "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
                en: "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
            }, {
                zh: "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
                en: "God is fair, as long as effort will include results, otherwise is you hard enough."
            },
            {
                zh: "人生没有后悔，我们只能尽力去不让自己后悔。",
                en: "Life without regret, we can only do our best to not to regret."
            }
        ],
        covers: [
            'https://pan.zealsay.com/zealsay/cover/7.jpg',
            'https://pan.zealsay.com/zealsay/cover/1.jpg',
            'https://pan.zealsay.com/zealsay/cover/2.jpg',
            'https://pan.zealsay.com/zealsay/cover/3.jpg',
            'https://pan.zealsay.com/zealsay/cover/4.jpg',
            'https://pan.zealsay.com/zealsay/cover/5.jpg',
            'https://pan.zealsay.com/zealsay/cover/6.jpg'
        ],
        codeTheme: "tomorrow"
    },
    markdown: {
        "lineNumbers": false
    }
};