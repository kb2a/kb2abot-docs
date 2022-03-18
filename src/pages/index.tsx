import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import React from 'react'
import HomeFeatures from '../components/HomeFeatures'

const Home = () => {
    const { title } = useDocusaurusContext().siteConfig
    return (
        <Layout
            title={title}
            description='Description will go into a meta tag in <head />'
        >
            <main>
                <HomeFeatures />
            </main>
        </Layout>
    )
}

export default Home
