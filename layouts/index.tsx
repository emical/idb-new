import React from 'react'
import {NextSeo} from 'next-seo'

import Container from 'layouts/container'
import {FrontMatter} from '@types'

type DefaultLayoutProps = {
  children: React.ReactNode
  frontMatter: FrontMatter
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  const {children, frontMatter} = props

  const url =
    frontMatter.slug === 'index'
      ? 'https://www.islamicdreambook.com/'
      : `https://www.islamicdreambook.com/${frontMatter.slug}`

  return (
    <>
      <NextSeo title={frontMatter.title} />
      <Container>
        <h1>{frontMatter.title}</h1>
        {children}
      </Container>
    </>
  )
}
