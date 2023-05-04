/* eslint-disable react/react-in-jsx-scope */
import {DiscussionEmbed} from 'disqus-react'

const DisqusComments = (props: {post: any; postid: any}) => {
  const {post, postid} = props
  const disqusShortname = 'islamicdreamsinfo'
  const disqusConfig = {
    url: 'https://islamicdreambook.com/meaning-of-dream',
    identifier: postid, // Single post id
    title: post.category, // Single post title
  }
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
export default DisqusComments
