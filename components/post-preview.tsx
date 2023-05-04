import React from 'react'
import NextLink from 'next/link'

import {FrontMatter} from '@types'
import PostInfo from 'components/post-info'

type PostProps = {
  post: FrontMatter
}
const cityList = [
  {
    country: 'USA',
    city: 'NewYork',
  },
  {
    country: 'Spain',
    city: 'Madrid',
  },
  {
    country: 'England',
    city: 'London',
  },
]

export default function Post(props: PostProps) {
  const {post} = props

  return (
    <div className="mb-16">
      <ul>
        {cityList.map((item, index) => (
          <li key={index}>
            <NextLink href={`/${item.city}`}>
              <a>{item.city}</a>
            </NextLink>
          </li>
        ))}
      </ul>
      <PostInfo post={post} />
      <NextLink href={post.slug}>
        <a className="text-2xl font-semibold">{post.title}</a>
      </NextLink>
      <PostInfo post={post} />
      <p>{post.summary}</p>
      <NextLink href={post.slug}>
        <a className="text-xl">
          <span>Read more </span>
          <span role="img" aria-label="Arrow Right">
            ➞
          </span>
        </a>
      </NextLink>
    </div>
  )
}
