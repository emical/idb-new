/* eslint-disable react/react-in-jsx-scope */
import Button from '@mui/material/Button'
import {useState} from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

const LongText = (props: {category: any; content: any; limit: any; readmoreUrl: any}) => {
  const {category, content, limit, readmoreUrl} = props
  const [showAll, setShowAll] = useState(false)

  const showMore = () => {
    window.location.href = readmoreUrl
  }
  const showLess = () => setShowAll(false)

  if (content?.length <= limit) {
    // there is nothing more to show
    return (
      <>
        <div>
          Islamic interpretation of {category} dream ? {content}
        </div>
      </>
    )
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return (
      <div>
        Islamic interpretation of {category} dream ? {content}
        <button onClick={showLess}>Read less</button>
      </div>
    )
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = 'Islamic interpretation of ' + category + ' dream? ' + content?.substring(0, limit) + '.....'
  return (
    <>
      <div>{toShow}</div>

      <Button className="readmoreBtn" variant="outlined" onClick={showMore} endIcon={<ArrowCircleRightIcon />}>
        Read more
      </Button>
    </>
  )
}

export default LongText
