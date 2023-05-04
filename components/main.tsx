import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

export default function Main(props: {posts: any; title: any}) {
  const {posts, title} = props

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post: string) => (
        // eslint-disable-next-line react/jsx-key
        <p>{post}</p>
        // <Markdown  key={post.substring(0, 40)}>
        //   {post}
        // </Markdown>
      ))}
    </Grid>
  )
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
}
