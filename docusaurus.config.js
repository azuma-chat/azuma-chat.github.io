module.exports = {
    title: "Azuma Documentation",
    favicon: "img/favicon.ico",
    url: "https://azuma-chat.github.io",
    baseUrl: "/",
    projectName: "azuma-chat.github.io",
    organizationName: "azuma-chat",
    themes: ["@docusaurus/theme-classic"],
    themeConfig: {
        colorMode: {
            respectPrefersColorScheme: true
        },
        navbar: {
            title: "Azuma Documentation"
        }
    },
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                path: "docs",
                routeBasePath: "/",
                sidebarPath: "docs/sidebar.js"
            }
        ]
    ]
}
