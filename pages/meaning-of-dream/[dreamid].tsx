/* eslint-disable react/jsx-key */
import Container from 'layouts/container'
import {NextSeo} from 'next-seo'
import React, {useEffect, useState} from 'react'
import {getCategoryDreams} from 'data/isdr/isdrhelper'
import DreamsHeader from 'components/isdr/DreamsHeader'
import {AccordionSummary, Typography, AccordionDetails, Button} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Accordion} from 'react-bootstrap'
import DisqusComments from 'components/comment/disquscomments'
import {recentDreams} from 'data/menu'
import {useRouter} from 'next/router'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

// import Script from 'next/script'

const DreamCategory = ({data}: any) => {
  const imageUrl = '/static/islamic-dream-book-interpretation-service-dream.webp'
  function generateRandomDreamSentence(parameter: string): string {
    const dreamSentences = [
      `Decode your dreams: Discover ${parameter} in dream meaning.`,
      `${parameter} dreams: Inner thoughts revealed from this dream.`,
      `Dreaming of ${parameter}: Power of this dream meaning.`,
      `${parameter} dream: What does this dream indicating you`,
      `${parameter} dreams: Dive into this dream meaning.`,
      `${parameter} dreams: Unfold the meaning of this dream!`,
      `Dreaming of ${parameter}: Hidden meaning of this dream`,
      `${parameter} dream: What Islam interpretate about this dream!`,
      `${parameter} dream : Explore dream analysis according to islam`,
      `Dreaming of a ${parameter}: Unlock secrets of this dream interpretation`,
      `What do dreams about ${parameter} mean to you? Find out now!`,
      `Dreaming about ${parameter}? Discover its significance here!`,
      `Discover the hidden meaning of dreams about ${parameter} with us!`,
      `Curious about the meaning of ${parameter} in your dreams? Click here to find out!`,
      `Unlock the mystery of dreaming about ${parameter} with our dream interpretation guide.`,
    ]
    const randomIndex = Math.floor(Math.random() * dreamSentences.length)
    return dreamSentences[randomIndex].replace('{parameter}', parameter)
  }

  const router = useRouter()
  const [baseURL, setHost] = useState('')
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])

  function generateUniqueRandomNumbers(length: number): number[] {
    const generatedNumbers: number[] = []
    let randomNumber
    do {
      randomNumber = Math.floor(Math.random() * 70) + 1
      if (!generatedNumbers.includes(randomNumber)) {
        generatedNumbers.push(randomNumber)
      }
    } while (generatedNumbers.length < length)
    return generatedNumbers
  }
  const generatedNumbers = generateUniqueRandomNumbers(10)
  const whatsAppUrl =
    'https://api.whatsapp.com/send?phone=919063900300&text=Assalamu%20Alaikum,%20I%20would%20like%20to%20interpret%20my%20dream.%20Here%20are%20details'
  const openWhatsApp = () => {
    window.open(whatsAppUrl, '_blank')
  }

  if (data?.dreamDetails) {
    return (
      <>
        <NextSeo
          title={data?.seoTitle}
          description={data?.seoDesc}
          openGraph={{
            title: data?.seoTitle,
            description: data?.seoDesc,
          }}
        />

        <Container>
          <h1>
            {' '}
            Islamic dream interpretation of {data.dreamDetails[0]?.category}, Explanation & Meaning for{' '}
            {data.dreamDetails[0]?.category} dreams{' '}
          </h1>
          <ins
            className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-5152402002915558"
            data-ad-slot="6398249164"
            data-ad-format="auto"
            data-full-width-responsive="true"
          >
            {' '}
          </ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

          <DreamsHeader search="" setSearch="" onChange="Search" searchPlaceholder="" />
          <h3 className="author-accolade">
            Below {data.dreamDetails[0]?.category} dream interpretations are based on Ibn Sireen's teachings.
          </h3>
          {/* <h4> {data.dreamDetails[0]?.category} Dream Explanation, meaning, details</h4> */}
          {data.dreamDetails?.map((dream: {category: any; desc: any; title: any}, index: number) => (
            <>
              <div key={dream.desc} className="dream-box">
                <h3>{dream?.title}</h3>
                <p>{dream?.desc}</p>
              </div>
              {(index + 1) % 3 === 0 && (
                <h3 className="dream-box-recommendation">
                  Recommended for you :{' '}
                  <a href={baseURL + '/meaning-of-dream/' + recentDreams[generatedNumbers[(index + 1) / 3]].id + '/'}>
                    {generateRandomDreamSentence(recentDreams[generatedNumbers[(index + 1) / 3]].submenuName)}
                  </a>
                </h3>
              )}
            </>
          ))}

          <h3>{data.dreamDetails[0]?.category} dreams FAQs:</h3>
          <ins
            className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-5152402002915558"
            data-ad-slot="6398249164"
            data-ad-format="auto"
            data-full-width-responsive="true"
          >
            {' '}
          </ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>
                <h3>Seeing {data.dreamDetails[0]?.category} dreams good or bad?</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are different type of {data.dreamDetails[0]?.category} dreams, It depends on what is the context
                inside {data.dreamDetails[0]?.category} dream Refer to {data.dreamDetails[0]?.category} islamic dream
                interpretation
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>
                <h3>
                  I dream about {data.dreamDetails[0]?.category} very frequently, What does it mean if you dream of{' '}
                  {data.dreamDetails[0]?.category}?
                </h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are different meanings of {data.dreamDetails[0]?.category} dreams, Meaning depends on what is the
                context inside {data.dreamDetails[0]?.category} dream Refer to above {data.dreamDetails[0]?.category}{' '}
                islamic dream interpretation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>
                <h3>What do {data.dreamDetails[0]?.category} symbolise in dreams?</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are different symbols of {data.dreamDetails[0]?.category} dreams in Islam, dream symbol depends on
                what is the context inside {data.dreamDetails[0]?.category} dream Refer to above{' '}
                {data.dreamDetails[0]?.category} islamic dream symbols.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>
                <h3>Is it good luck to see {data.dreamDetails[0]?.category} in dream?</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {data.dreamDetails[0]?.category} dream is good luck or bad luck depends on context inside{' '}
                {data.dreamDetails[0]?.category} dream Refer to above {data.dreamDetails[0]?.category} islamic dream
                explanations.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <ins
            className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-5152402002915558"
            data-ad-slot="4119021443"
            data-ad-format="autorelaxed"
            data-full-width-responsive="true"
          >
            {' '}
          </ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          {/* <DisqusComments post={data.dreamDetails[0]} postid={data?.dreamid}></DisqusComments> */}
          {/* <div className="smartBanner">
            <img className="thumbnail" src={imageUrl} alt="Thumbnail" />
            <div className="info">
              <p className="description">Connect on whatsapp with certified interpreter for your dream</p>
            </div>
            <Button
              onClick={openWhatsApp}
              className=""
              variant="contained"
              startIcon={<WhatsAppIcon sx={{color: 'white', backgroundColor: '#25D366', borderRadius: '50%'}} />}
            >
              Connect
            </Button>
          </div> */}
        </Container>
      </>
    )
  } else return null
}

export async function getServerSideProps(context: any) {
  const breadcrumbArray = context.resolvedUrl.split('/')
  let dreamid
  if (context.params) {
    dreamid = context.params.dreamid
  } else {
    dreamid = breadcrumbArray[3]
  }
  const dreamDetails = await getCategoryDreams(dreamid)

  if (!dreamDetails) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const seoTitle = returnSEOtitle(dreamDetails[0])
  const seoDesc = returnSEODesc(dreamDetails[0])
  const data = {
    dreamDetails,
    seoTitle,
    seoDesc,
    dreamid,
  }
  return {props: {data}}
}
function returnSEOtitle(dreamDetails: any) {
  return '✓Islamic dream meaning of ' + dreamDetails?.category + ' explanation , interpretation'
}
function returnSEODesc(dreamDetails: any) {
  return '✓' + dreamDetails?.desc.substring(0, 160) + '..'
}
export default DreamCategory
