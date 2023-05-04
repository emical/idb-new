import Container from 'layouts/container'
import {NextSeo} from 'next-seo'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {GetAllCategories, searchByString, searchCountByString} from 'data/isdr/isdrhelper'
import Icon from '@mui/material/Icon'
import Posts from 'components/isdr/Posts'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {AccordionSummary, Typography, AccordionDetails, Button} from '@mui/material'

const Searchdreams = ({data}: any) => {
  const router = useRouter()
  const [baseURL, setHost] = useState('')
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])
  const searchPlaceholder = data?.searchtext ? data?.searchtext : 'Search dream you got'
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
            <h1>
              Search results for <u>{data?.searchtext}</u> dream interpretations & meanings
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
          </div>
          <Posts
            frompopuplar={false}
            totalPosts={data?.searchCount[0]?.dcount}
            searchText={data?.searchtext}
            pnum={data?.pnum}
            dreamsList={data?.dreamsList}
            searchPlaceholder={searchPlaceholder}
            fromsearch={true}
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
  let searchtext: string
  let pnum: number
  if (context.params) {
    searchtext = context.query.searchtext
    pnum = context.query.pnum
  } else {
    searchtext = breadcrumbArray[3]
    pnum = context.query.pnum
  }
  if (!searchtext) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const startingindex = pnum ? pnum * 25 : 1

  const dreamsList = await searchByString(searchtext, startingindex)
  const searchCount = await searchCountByString(searchtext)

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
    searchtext,
    searchCount,
  }
  return {props: {data}}
}
function returnSEOtitle() {
  return '✓ Search your Islamic dream interpretation, meaning- Islamic dream lookup'
}
function returnSEODesc() {
  return '✓ One stop search for your dream meaning in Islam, Search and get any dream meaning and its interpretations'
}
export default Searchdreams
