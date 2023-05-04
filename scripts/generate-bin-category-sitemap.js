const bincountries = require('../data/bincodes/countries.json')
const bincategories = require('../data/bincodes/categories.json')

const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const {promisify} = require('util')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  let outputarray = []

  bincountries.map((country) => {
    bincategories.map((category) => {
      outputarray.push(`
              <url>
                  <loc>${`https://www.emi-calculators.com/bin-code-search-iin-lookup/country/${country.CountryUrl}/card-category/${category.categoryUrl}/`}</loc>
              </url>
          `)
    })
  })
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

  promisify(fs.writeFile)('public/binsitemap2.xml', formatted)
    .then(() => console.log('✅ BIN CategorySitemap successfully created!'))
    .catch((err) => console.error(err))
})()
