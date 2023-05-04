import React from 'react'
import Router from 'next/router'
import {AppProps} from 'next/app'
import {MDXProvider} from '@mdx-js/react'
import {DefaultSeo} from 'next-seo'
import NProgress from 'nprogress'

import MDXComponents from 'components/mdx-components'
import config from 'site.config'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/navstyle.scss'
import 'styles/tailwind.css'
import 'styles/css/fontAwesome5Pro.css'
import 'styles/css/flaticon.css'
import 'react-responsive-modal/styles.css'
import './index.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App(props: AppProps) {
  const {Component, pageProps} = props

  return (
    <MDXProvider
      // @ts-ignore
      components={MDXComponents}
    >
      <DefaultSeo {...config.seo} />
      <Component {...pageProps} />
    </MDXProvider>
  )
}
