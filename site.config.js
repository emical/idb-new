/**
 * @type import('@types').Config
 */

const config = {
  meta: {
    title: 'IslamicDreamBook.com',
    copyright: 'islamicdreambook.com ©2021-2023',
  },
  seo: {
    description:
      'Authentic Islamic dream interpretation site with all dreams searchable easily and explained discussed. dream look up dictionary, All dream symbols, dream meanings',
    titleTemplate: '%s',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.islamicdreambook.com/',
      title: 'Islamic Dream Book - All Islamic dream explanations, interpretations & meanings',
      description:
        'Authentic Islamic dream interpretation site with all dreams searchable easily and explained discussed. dream look up dictionary, All dream symbols, dream meanings',
      images: [
        // {
        //   url: 'https://eckertalex.dev/static/img/og.png',
        //   alt: 'islamicdreambook.com',
        //   width: 1280,
        //   height: 720,
        // },
      ],
    },
    // twitter: {
    //   handle: '@CalculatorEmi',
    //   site: '@CalculatorEmi',
    //   cardType: 'summary_large_image',
    // },
  },
}

module.exports = config
