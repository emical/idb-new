import React, {useState} from 'react'
import NextLink from 'next/link'

import config from 'site.config'
import ThemeToggle from 'components/theme-toggle'
import Link from 'next/link'
import {Button, Menu, MenuItem} from '@mui/material'
import Navigation from './navigation'
import HeaderTwo from 'components/Layout/Header/HeaderOne/HeaderTwo'

export default function Header() {
  const [active, setActive] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogoClick = () => {
    setActive(!active)
  }
  return (
    <>
      <header className="pb-4 flex flex-col">
        {/* <nav className="flex items-center flex-wrap bg-pink-500 p-3 ">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-xl text-white font-bold uppercase tracking-wide">EMI Calculator</span>
            </a>
          </Link>
          <button
            className=" inline-flex p-3 bg-pink-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
            onClick={handleLogoClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              {config.navigation.map((link) => (
                <NextLink key={link.slug} href={link.slug}>
                  <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:no-underline hover:text-white ">
                    {link.title}
                  </a>
                </NextLink>
              ))}
            </div>
          </div>
        </nav> */}
        {/* <div className="flex justify-between items-center">
        <NextLink href="/">
          <a className="text-pink-500 dark:text-yellow hover:no-underline text-4xl">{config.meta.title}</a>
        </NextLink>
        <ThemeToggle />
      </div>
      <div className="pt-4 sm:flex sm:justify-between">
        <div className="space-x-6">
          {config.navigation.map((link) => (
            <NextLink key={link.slug} href={link.slug}>
              <a className="text-gray-700 dark:text-gray-400 hover:underline font-light">{link.title}</a>
            </NextLink>
          ))}
        </div>
        <div className="space-x-6">
          {config.externalLinks.map((link) => (
            <a key={link.url} href={link.url} className="text-gray-700 dark:text-gray-400 hover:underline font-light">
              {link.name}
            </a>
          ))}
        </div>
      </div> */}
      </header>
      {/* <HeaderOne /> */}
      <HeaderTwo />
      {/* <Navigation /> */}
    </>
  )
}
