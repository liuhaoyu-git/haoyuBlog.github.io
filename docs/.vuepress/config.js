module.exports = {
    title: 'haoyu的 blog',
    description: 'haoyu的博客',
    // 现在基本的目录和导航功能已经实现，但如果我还想要加载 loading、切换动画、模式切换（暗黑模式）、返回顶部、评论等功能呢，为了简化开发成本，我们可以直接使用主题，这里使用的主题是 vuepress-theme-reco：
    // 主题
    theme: 'reco',
    base: '/haoyuBlog.github.io',
    themeConfig: {
        // 导航栏
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'haoyu的 JavaScript 博客',
                items: [
                    { text: 'Github', link: '' },
                    { text: 'Gitgee', link: '' },
                    { text: '掘金', link: '' }
                ]
            }
        ],
        // 侧边栏
        sidebar: [
            {
                title: '欢迎',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/one',
                collapsable: false, // 不折叠
                children: [
                    { title: "one", path: "/handbook/one" },
                    { title: "two", path: "/handbook/two" }
                ],
            }
        ]
    }

    // 这里推荐,将导航栏和侧边栏单独拆分两个文件,以文件加载的方式引入,这样路由导航栏和侧边栏就可以无限嵌套,你也可以无限往下分级,
}