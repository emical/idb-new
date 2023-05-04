import React from 'react'
import {NextSeo, ArticleJsonLd} from 'next-seo'

import Container from 'layouts/container'
import PostInfo from 'components/post-info'
import {FrontMatter} from '@types'

type PostLayoutProps = {
  children: React.ReactNode
  frontMatter: FrontMatter
}

export default function PostLayout(props: PostLayoutProps) {
  const {children, frontMatter} = props

  const url = `https://islamicdreambook.com/${frontMatter.slug}`

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: frontMatter.date,
          },
          url,
          title: `${frontMatter.title} | islamicdreambook.com`,
        }}
      />
      <ArticleJsonLd
        authorName="EMI Calculators"
        dateModified={frontMatter.date}
        datePublished={frontMatter.date}
        description={frontMatter.summary}
        images={[]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="EMI Calculators"
        title={frontMatter.title}
        url={url}
      />
      <Container>
        <h1>{frontMatter.title}</h1>
        <PostInfo post={frontMatter} />
        <article>{children}</article>
      </Container>
    </>
  )
}
