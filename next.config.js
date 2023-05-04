const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withMdxEnhanced = require('next-mdx-enhanced')
const readingTime = require('reading-time')
const remarkSlug = require('remark-slug')
const remarkAutolinkHeadings = require('remark-autolink-headings')
// const path = require('path/posix')
const autolinkHeadingsOptions = {
  behavior: 'append',
  content: {
    type: 'element',
    tagName: 'span',
    properties: {
      style: {
        marginLeft: '0.5rem',
      },
    },
    children: [
      {
        type: 'text',
        value: '#',
      },
    ],
  },
}

function extendFrontmatterProcess(mdxContent, frontmatter) {
  return {
    ...frontmatter,
    slug: frontmatter.__resourcePath.replace('.mdx', ''),
    readingTime: readingTime(mdxContent),
  }
}

function generateExportPath() {
  path = {}

  path['/'] = {page: '/'}
  path['/blog'] = {page: '/blog'}
  return path
}

const nextConfig = {
  trailingSlash: true,
  presets: ['@next/babel'],
  images: {
    loader: 'imgix',
    path: '/',
  },
  exportPathMap: async function () {
    let maps = generateExportPath()
    return maps
  },
  //distDir: 'out',
  pageExtensions: ['ts', 'tsx'],

  webpack: (config, options) => {
    if (options.isServer) {
      require('./scripts/generate-isdr-sitemap')
    }

    return config
  },

  async redirects() {
    let redirectsList = []
    redirectsList.push({
      source: '/',
      destination: '/dream-interpretation-search/1/',
      permanent: true,
    })
    return redirectsList
  },
}

module.exports = withPlugins(
  [
    withSourceMaps,
    withBundleAnalyzer,
    withMdxEnhanced({
      layoutPath: 'layouts',
      defaultLayout: true,
      fileExtensions: ['mdx'],
      remarkPlugins: [remarkSlug, [remarkAutolinkHeadings, autolinkHeadingsOptions]],
      rehypePlugins: [],
      extendFrontMatter: {
        process: extendFrontmatterProcess,
      },
    }),
  ],
  nextConfig
)
