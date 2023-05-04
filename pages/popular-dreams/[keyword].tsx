import Container from 'layouts/container'
import {NextSeo} from 'next-seo'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {GetPopularDreamsByString, GetPopularDreamsCountByString} from 'data/isdr/isdrhelper'
import {isdrmenuJson} from 'data/menu'
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
            <h1>Popular {data?.dreamtype?.seoText} Dreams - Islamic Meaning & Interpretations</h1>
          </div>

          <div id="ezoic-pub-ad-placeholder-101"> </div>
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
          <Posts
            frompopuplar={true}
            totalPosts={data?.searchCount[0]?.dcount}
            searchText={data?.keyword}
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
  let keyword: string
  let popularStringQuery = ''
  let pnum: number
  if (context.params) {
    keyword = context?.params?.keyword
    pnum = context.query?.pnum
    if (!pnum) {
      pnum = 1
    }
  } else {
    keyword = breadcrumbArray[3]
    pnum = context.query?.pnum
  }
  if (!keyword) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const startingindex = pnum ? pnum * 25 : pnum
  const dreamtype = isdrmenuJson.menu?.menuitems.filter((menu) => menu.url == keyword)[0]
  if (!dreamtype) {
    popularStringQuery = ''
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } else {
    dreamtype?.submenuitems?.map((submenuitem: {id: any; submenuName: any}) => {
      if (popularStringQuery && popularStringQuery != '') {
        popularStringQuery = popularStringQuery + ' or category like "%' + submenuitem.submenuName + '%" '
      } else {
        popularStringQuery = ' category like "%' + submenuitem.submenuName + '%" '
      }
    })
  }

  const dreamsList = await GetPopularDreamsByString(popularStringQuery, startingindex)
  const searchCount = await GetPopularDreamsCountByString(popularStringQuery)
  const seoTitle = returnSEOtitle(dreamtype?.seoText)
  const seoDesc = returnSEODesc(dreamtype?.seoText)
  const data = {
    dreamsList,
    dreamtype,
    seoTitle,
    seoDesc,
    keyword,
    searchCount,
    pnum,
  }
  return {props: {data}}
}
function returnSEOtitle(dreamtext: string) {
  return dreamtext + ' dreams- Islamic dream explanations, interpretations'
}
function returnSEODesc(dreamtext: string) {
  return (
    'Authentic Islamic interpretation of ' +
    dreamtext +
    ' dreams, popular, mostly searched islamic dream symbols, meanings'
  )
}
export default Alldreams
