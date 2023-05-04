const data = require('../data/isdr/isdreams.json')
const menuJson = require('../data/isdrmenu.json')

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
  // const response = await fetch('https://www.islamicdreambook.com/api/sitemap')
  // const issuers = await response.json()
  // const issuers = []
  // let issuers = await getAllIssuers()
  outputarray.push(`
  <url>
      <loc>${`https://www.islamicdreambook.com/`}</loc>
      <lastmod>${modifiedDate}</lastmod>
  </url>
`)
  menuJson.menu.menuitems.map((menuitem) => {
    outputarray.push(`
    <url>
        <loc>${`https://www.islamicdreambook.com/popular-dreams/${menuitem.url}/`}</loc>
        <lastmod>${modifiedDate}</lastmod>
    </url>
`)
  })
  for (i = 1; i < 254; i++) {
    outputarray.push(`
    <url>
        <loc>${`https://www.islamicdreambook.com/dream-interpretation-search/${i}/`}</loc>
        <lastmod>${modifiedDate}</lastmod>
    </url>
`)
  }
  data.map((dream) => {
    outputarray.push(`
      <url>
      <loc>${`https://www.islamicdreambook.com/meaning-of-dream/${dream.categoryUrl}/`}</loc>
      <lastmod>${modifiedDate}</lastmod>
  </url>
  `)
  })
  // outputarray.push(`
  //           <url>
  //               <loc>${`https://www.islamicdreambook.com/dream-meaning-search/${loantype}/`}</loc>
  //               <lastmod>${modifiedDate}</lastmod>
  //           </url>
  //       `)
  // banks.map((bank) => {
  //   childPages.map((page) => {
  //     outputarray.push(`
  //           <url>
  //               <loc>${`https://www.islamicdreambook.com/india/loans/${loantype}/${bank}/${page}/`}</loc>
  //               <lastmod>${modifiedDate}</lastmod>
  //           </url>
  //       `)
  //   })
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

  promisify(fs.writeFile)('public/sitemap.xml', formatted)
    .then(() => console.log('✅ISDR Sitemap successfully created!'))
    .catch((err) => console.error(err))
})()
