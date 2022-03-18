import clsx from 'clsx'
import React, { ComponentProps, ComponentType } from 'react'
import styles from './styles.module.css'

type FeatureItem = {
    title: string
    Svg: ComponentType<ComponentProps<'svg'>>
    description: string
}

const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        Svg: require('../../../public/images/undraw_docusaurus_mountain.svg')
            .default,
        description: `Initially designed for target of non-developer users. It won't
                take you too long to complete setting up, usually within 10
                minutes.`,
    },
    {
        title: 'Work in any environment effectively',
        Svg: require('../../../public/images/undraw_docusaurus_tree.svg')
            .default,
        description:
            'Compatible with any OS, from mobile to desktop. In development stage, it got tested for millions of times to avoid getting trouble with hidden bugs.',
    },
    {
        title: 'Powered by ESM-based NodeJS',
        Svg: require('../../../public/images/undraw_docusaurus_react.svg')
            .default,
        description: `It's so easy to extend components, and customize or add/remove
                built-in plugins as your needs changes. Keep creative and build
                your own plugin today! `,
    },
]

const Feature = ({ title, Svg, description }: FeatureItem) => {
    return (
        <div className={clsx('col col--4')}>
            <div className='text--center'>
                <Svg className={styles.featureSvg} role='img' />
            </div>
            <div className='text--center padding-horiz--md'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

const HomeFeatures = () => {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeFeatures
