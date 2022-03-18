// @ts-check

const theme = require('prism-react-renderer/themes/nightOwlLight')
const darkTheme = require('prism-react-renderer/themes/nightOwl')
const sidebarPath = require.resolve('./src/utils/sidebar.js')
const customCss = require.resolve('./src/styles/custom.css')

module.exports = {
    title: 'KB2ABot Docs',
    tagline: 'All the docs you need to know about KB2ABot.',
    url: 'https://kb2abot-docs.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'icons/favicon.ico',
    organizationName: 'kb2ateam',
    projectName: 'kb2abot-docs',
    staticDirectories: ['public'],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath,
                    editUrl:
                        'https://github.com/kb2ateam/kb2abot-docs/tree/main/',
                },
                theme: {
                    customCss,
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.8,
                },
            },
        ],
    ],
    themeConfig: {
        metadata: [{ name: 'keywords', content: 'kb2abot' }],
        navbar: {
            title: 'KB2ABot Docs',
            hideOnScroll: true,
            logo: {
                alt: 'KB2ABot Docs',
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
            ],
        },
        prism: {
            theme,
            darkTheme,
        },
    },
}
