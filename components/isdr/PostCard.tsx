import Link from '@mui/material/Link'
import LongText from 'components/longtext'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'

const PostCard = (props: {post: any; fromsearch: any}) => {
  const {post, fromsearch} = props
  const router = useRouter()
  const [baseURL, setHost] = useState('')
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])
  if (fromsearch) {
    return (
      <div key={post?.categoryUrl} className="post">
        <>
          <h2>{post?.title}</h2>
          <p>{post?.catdesc}</p>
        </>
        <Link
          underline="none"
          lineHeight={2}
          display="block"
          variant="body1"
          href={baseURL + '/meaning-of-dream/' + post?.categoryUrl + '/'}
        >
          {/* <h3> */} Found in <u> {post?.category} dreams</u>
          {/* </h3> */}
        </Link>
        {/* <LongText
          category={post?.category}
          content={post?.catdesc}
          limit={120}
          readmoreUrl={baseURL + '/meaning-of-dream/' + post?.categoryUrl + '/'}
        /> */}
      </div>
    )
  } else {
    return (
      <div key={post?.categoryUrl} className="post">
        <Link
          lineHeight={2}
          display="block"
          variant="body1"
          href={baseURL + '/meaning-of-dream/' + post?.categoryUrl + '/'}
        >
          <h2> {post?.category} dream meanings & interpretations</h2>
        </Link>
        <LongText
          category={post?.category}
          content={post?.catdesc}
          limit={120}
          readmoreUrl={baseURL + '/meaning-of-dream/' + post?.categoryUrl + '/'}
        />
      </div>
    )
  }
  return (
    <div key={post?.categoryUrl} className="post">
      <Link
        lineHeight={2}
        display="block"
        variant="body1"
        href={baseURL + '/meaning-of-dream/' + post?.categoryUrl + '/'}
      >
        <h2> {post?.category} dream meanings & interpretations</h2>
      </Link>
      <LongText
        category={post?.category}
        content={post?.catdesc}
        limit={120}
        readmoreUrl={baseURL + '/meaning-of-dream/' + post?.categoryUrl + '/'}
      />
    </div>
  )
}

export default PostCard
