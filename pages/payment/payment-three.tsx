/* eslint-disable react/jsx-key */
import Container from 'layouts/container'
import {NextSeo} from 'next-seo'
import React, {useEffect, useState} from 'react'
import {getCategoryDreams} from 'data/isdr/isdrhelper'
import DreamsHeader from 'components/isdr/DreamsHeader'
import {Button} from '@mui/material'
import {useRouter} from 'next/router'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
declare const paypal: any
const DreamCategory = ({data}: any) => {
  {
    const whatsAppUrl =
      'https://api.whatsapp.com/send?phone=919063900300&text=Assalamu%20Alaikum,%20I%20would%20like%20to%20interpret%20my%20dream.%20Here%20are%20details'
    const imageUrl = '/static/islamic-dream-book-interpretation-service-dream.webp'
    const authorName = 'Arif Abu Muhammad'
    const greeting = 'Assalamu Alaykum'
    const authorDescription1 =
      'We are team of certified interpreters and together we interpreted 7500+ of dreams across the globe'

    const authorDescription2 =
      'We provide a personal service of dream interpretation where you can contact us directly for your dreams. This is confidential between you and us.'

    const authorDescription3 =
      'We are charging a nominal fee of 3$ only, so that it helps us to help people like you, Insha Allah!'
    const authorDescription4 =
      'Please connect with us using connect button at the bottom after successful payment, Insha Allah!'

    const router = useRouter()
    const [baseURL, setHost] = useState('')
    useEffect(() => {
      if (!router.isReady) return
      else {
        setHost(window.location.origin)
      }
    }, [router.isReady])

    const openWhatsApp = () => {
      window.open(whatsAppUrl, '_blank')
    }

    useEffect(() => {
      function initPayPalButton() {
        paypal
          .Buttons({
            style: {
              shape: 'rect',
              color: 'gold',
              layout: 'vertical',
              label: 'pay',
            },

            createOrder: function (data: any, actions: any) {
              return actions.order.create({
                purchase_units: [
                  {description: 'Personal dream interpretation service', amount: {currency_code: 'USD', value: 3}},
                ],
              })
            },

            onApprove: function (data: any, actions: any) {
              return actions.order.capture().then(function (orderData: any) {
                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2))

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container')
                if (element) {
                  element.innerHTML = ''
                  element.innerHTML = '<h3>Thank you for your payment!</h3>'
                }

                // Or go to another URL:  actions.redirect('thank_you.html');
              })
            },

            onError: function (err: any) {
              console.log(err)
            },
          })
          .render('#paypal-button-container')
      }
      initPayPalButton()
    }, [])

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
            {/* <section className="author-section">
              <div className="about-author-image">
                <img src={imageUrl} alt={authorName} width="500" height="500" />
              </div>
              <div className="author-info">
                <h1>Personal Dream interpretation service</h1>
                <p>{greeting}</p>
                <p>{authorDescription1}</p>
                <p>{authorDescription2}</p>
                <p>{authorDescription3}</p>
                <p>{authorDescription4}</p>

                <div id="smart-button-container">
                  <div>
                    <div id="paypal-button-container"></div>
                  </div>
                </div>
              </div>
            </section> */}
            <DreamsHeader search="" setSearch="" onChange="Search" searchPlaceholder="" />

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
  return 'Islamic dream interpreter service online- Islamic dream book'
}
function returnSEODesc(dreamDetails: any) {
  return 'Connect with certified interpreter for personal dream interpretation service for your dream meaning'
}
export default DreamCategory
