const data = require('../data/india/sitemap_data.json')
const bincountries = require('../data/bincodes/countries.json')
const bincategories = require('../data/bincodes/categories.json')
const binbrands = require('../data/bincodes/brands.json')
const bincardTypes = require('../data/bincodes/cardtypes.json')

const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const {promisify} = require('util')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby(['pages/**/*.+(js|jsx|ts|tsx|mdx)', '!pages/_*.+(js|jsx|ts|tsx|mdx)'])
  let outputarray = []
  // const response = await fetch('https://www.emi-calculators.com/api/sitemap')
  // const issuers = await response.json()
  // const issuers = []
  // let issuers = await getAllIssuers()

  bincountries.map((country) => {
    outputarray.push(`
        <url>
            <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/country/${country.CountryUrl}/`}</loc>
        </url>
      `)
    binbrands.map((brand) => {
      outputarray.push(`
              <url>
                  <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/country/${country.CountryUrl}/card-brand/${brand.brandurl}/`}</loc>
              </url>
          `)
    })
    bincardTypes.map((type) => {
      outputarray.push(`
              <url>
                  <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/country/${country.CountryUrl}/card-type/${type.cardtypeUrl}/`}</loc>
              </url>
          `)
    })
    // issuers.map((issuer) => {
    //   outputarray.push(`
    //           <url>
    //               <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/country/${country.CountryUrl}/issuer/${issuer.issuer_url}/`}</loc>
    //           </url>
    //       `)
    // })
  })
  binbrands.map((brand) => {
    outputarray.push(`
            <url>
                <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/card-brand/${brand.brandurl}/`}</loc>
            </url>
        `)
  })
  bincardTypes.map((type) => {
    outputarray.push(`
            <url>
                <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/card-type/${type.cardtypeUrl}/`}</loc>
            </url>
        `)
  })
  bincategories.map((category) => {
    outputarray.push(`
            <url>
                <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/card-category/${category.categoryUrl}/`}</loc>
            </url>
        `)
  })
  // issuers.map((issuer) => {
  //   outputarray.push(`
  //           <url>
  //               <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/issuer/${issuer.issuer_url}/`}</loc>
  //           </url>
  //       `)
  // })
  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${outputarray.join('')}
      </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  promisify(fs.writeFile)('public/binsitemap.xml', formatted)
    .then(() => console.log('✅ BIN Sitemap successfully created!'))
    .catch((err) => console.error(err))
})()
