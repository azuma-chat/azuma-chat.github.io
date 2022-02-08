module.exports = {
    title: "Azuma Documentation",
    url: "https://azuma-chat.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "azuma-chat",
    projectName: "azuma-chat.github.io",
    //    staticDirectories: ["static"],
    themes: ["@docusaurus/theme-classic"],
    themeConfig: {
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: "Azuma Documentation",
        },
    },
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                path: "docs",
                routeBasePath: "/",
                sidebarPath: "docs/sidebar.js",
            },
        ],
    ],
};
