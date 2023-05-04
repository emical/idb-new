import Container from 'layouts/container'
import {NextSeo} from 'next-seo'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {GetAllCategories, getCategoryDreams} from 'data/isdr/isdrhelper'
import Icon from '@mui/material/Icon'
import Posts from 'components/isdr/Posts'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {AccordionSummary, Typography, AccordionDetails, Button} from '@mui/material'
const Alldreams = ({data}: any) => {
  const router = useRouter()
  const [baseURL, setHost] = useState('')
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])
  const imageUrl = '/static/islamic-dream-book-interpretation-service-dream.webp'
  const whatsAppUrl =
    'https://api.whatsapp.com/send?phone=919063900300&text=Assalamu%20Alaikum,%20I%20would%20like%20to%20interpret%20my%20dream.%20Here%20are%20details'
  const openWhatsApp = () => {
    window.open(whatsAppUrl, '_blank')
  }
  if (data) {
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
          <div className="title">
            {' '}
            <h1>Islamic Dream Meanings & Interpretations</h1>
          </div>
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
          <div id="ezoic-pub-ad-placeholder-101"> </div>

          {/* <h1>
            {' '}
            <Icon className="fa fa-hand-point-right"></Icon>
            <Icon className="fa fa-hand-point-right"></Icon>
            Islamic Dream Meanings & Interpretations
          </h1> */}
          <Posts
            frompopuplar={false}
            totalPosts={6000}
            searchText={''}
            pnum={data?.pnum}
            dreamsList={data?.dreamsList}
            searchPlaceholder={''}
            fromsearch={false}
          ></Posts>
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
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </Container>
      </>
    )
  } else return null
}

export async function getServerSideProps(context: any) {
  const breadcrumbArray = context.resolvedUrl.split('/')
  let pnum: number
  if (context.params) {
    pnum = context.params.pnum
  } else {
    pnum = breadcrumbArray[3]
  }
  if (pnum < 1) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const startingindex = pnum ? pnum * 25 : pnum
  const dreamsList = await GetAllCategories(startingindex)
  if (!dreamsList) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const seoTitle = returnSEOtitle()
  const seoDesc = returnSEODesc()
  const data = {
    dreamsList,
    seoTitle,
    seoDesc,
    pnum,
  }
  return {props: {data}}
}
function returnSEOtitle() {
  return '✓ All Islamic dream explanations, interpretations & meanings'
}
function returnSEODesc() {
  return '✓ Authentic Islamic dream interpretation site with all dreams searchable easily and explained discussed. dream look up dictionary, All dream symbols, dream meanings'
}
export default Alldreams
