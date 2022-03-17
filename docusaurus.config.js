// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight')
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl')

module.exports = {
    title: 'KB2A Docs',
    tagline:
        'All the docs you need to know about KB2A products (currently KB2A Bot).',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'icons/favicon.ico',
    organizationName: 'kb2ateam',
    projectName: 'kb2a-docs',
    staticDirectories: ['public'],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebar.js'),
                    editUrl: 'https://github.com/kb2ateam/kb2a-docs/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./src/styles/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.8,
                },
            },
        ],
    ],
    themeConfig: {
        navbar: {
            title: 'KB2A Docs',
            logo: {
                alt: 'KB2A Docs',
                src: 'icons/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'about',
                    label: 'Documentation',
                    position: 'right',
                },
                {
                    type: 'dropdown',
                    label: 'Community',
                    position: 'right',
                    items: [
                        {
                            label: 'Official Website',
                            href: 'https://kb2atool.com',
                        },
                        {
                            label: 'Facebook Page',
                            href: 'https://www.facebook.com/KB2A',
                        },
                        {
                            label: 'Facebook Group',
                            href: 'https://www.facebook.com/groups/KB2A.Team',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/c/KB2ATeam',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/kb2ateam',
                        },
                    ],
                },

                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    i18n: {
        locales: ['en', 'vi'],
        defaultLocale: 'en',
    },
}
