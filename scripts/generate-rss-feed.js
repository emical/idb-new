const fs = require('fs')
const {join} = require('path')
const {promisify} = require('util')
const matter = require('gray-matter')
const {Feed} = require('feed')

const POSTS_DIR = join(process.cwd(), 'pages/blog')

function getPostSlugs(dir) {
  return fs.readdirSync(dir)
}

function getAllPosts() {
  return getPostSlugs(POSTS_DIR)
}

function getPostBySlug(slug) {
  if (!slug) {
    return false
  }

  const fullPath = join(POSTS_DIR, slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  return {
    ...data,
    slug,
    content,
  }
}

;(async () => {
  const author = {
    name: 'EMI Calculators',
    email: 'me@emi-calculators.com',
    link: 'https://www.emi-calculators.com/',
  }

  const feed = new Feed({
    title: 'emi-calculators.com',
    description: 'Personal blog by EMI Calculators. I write about React, JavaScript, and TypeScript.',
    id: 'https://www.emi-calculators.com',
    link: 'https://www.emi-calculators.com',
    language: 'en',
    image: 'https://www.emi-calculators.com/static/img/og.png',
    favicon: 'https://www.emi-calculators.com/static/favicons/favicon.ico',
    copyright: 'EMI Calculators © 2017 - 2020',
    feedLinks: {
      rss: 'https://www.emi-calculators.com/rss.xml',
    },
    author: author,
  })

  getAllPosts().forEach((post) => {
    const frontmatter = getPostBySlug(post)
    const slug = frontmatter.slug.replace('.mdx', '')

    feed.addItem({
      title: frontmatter.title,
      id: slug,
      link: `https://www.emi-calculators.com/blog/${slug}`,
      description: frontmatter.summary,
      content: `${frontmatter.summary} - To read in full, please visit https://www.emi-calculators.com/blog/${slug}`,
      author: [author],
      date: new Date(frontmatter.date),
    })
  })

  feed.addCategory('Programming')
  feed.addCategory('Technology')
  feed.addCategory('Web Development')
  feed.addCategory('Development')

  promisify(fs.writeFile)('public/rss.xml', feed.rss2())
    .then(() => console.log('✅ RSS feed successfully created!'))
    .catch((err) => console.error(err))
})()
