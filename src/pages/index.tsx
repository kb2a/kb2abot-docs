import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Layout from '@theme/Layout'
import React from 'react'

export default function Home(): JSX.Element {
    const { title } = useDocusaurusContext().siteConfig
    return (
        <Layout
            title={title}
            description='Description will go into a meta tag in <head />'
        >
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}
