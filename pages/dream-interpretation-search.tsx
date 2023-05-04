import Container from 'layouts/container'
import {NextSeo} from 'next-seo'
import React from 'react'
import {GetAllCategories} from 'data/isdr/isdrhelper'
import Icon from '@mui/material/Icon'
import Posts from 'components/isdr/Posts'

const Alldreams = ({data}: any) => {
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
            pnum={1}
            dreamsList={data?.dreamsList}
            searchPlaceholder={''}
            fromsearch={false}
          ></Posts>
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
