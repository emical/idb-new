const data = require('../data/india/sitemap_data.json')

const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const {promisify} = require('util')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby(['pages/**/*.+(js|jsx|ts|tsx|mdx)', '!pages/_*.+(js|jsx|ts|tsx|mdx)'])
  let loantypes = data.loantypes
  let banks = data.banks
  let childPages = data.pages
  let outputarray = []
  let modifiedDate = new Date().toISOString()
  // const response = await fetch('https://www.emi-calculators.com/api/sitemap')
  // const issuers = await response.json()
  // const issuers = []
  // let issuers = await getAllIssuers()
  loantypes.map((loantype) => {
    outputarray.push(`
              <url>
                  <loc>${`https://www.emi-calculators.com/india/loans/${loantype}/`}</loc>
                  <lastmod>${modifiedDate}</lastmod>
              </url>
          `)
    banks.map((bank) => {
      childPages.map((page) => {
        outputarray.push(`
              <url>
                  <loc>${`https://www.emi-calculators.com/india/loans/${loantype}/${bank}/${page}/`}</loc>
                  <lastmod>${modifiedDate}</lastmod>
              </url>
          `)
      })
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

  promisify(fs.writeFile)('public/sitemap.xml', formatted)
    .then(() => console.log('✅ Sitemap successfully created!'))
    .catch((err) => console.error(err))
})()
