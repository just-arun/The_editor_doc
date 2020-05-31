module.exports = {
    title: 'The Editor doc',
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/images/icon.png'
        }]
    ],
    themeConfig: {
        nav: [{
                text: "Home",
                link: "/"
            },
            {
                text: "Guide",
                link: "/guide/"
            },
            {
                text: "Start Editing",
                link: "https://editor.techguide.dev"
            },
        ],
        sidebar: {
            "/guide/": ["", "context-menu/", "short-cuts/"],
        },
        repo: "just-arun/the-editor-doc/",
        repoLabel: "Contribute!",
        docsRepo: "just-arun/the-editor-doc/",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        editLinkText: "Help us improve this page!",
        smoothScroll: true,
        lastUpdated: "Last Updated",
    }
}
