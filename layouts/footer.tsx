import React from 'react'
import NextLink from 'next/link'

import config from 'site.config'

export default function Footer() {
  return (
    <footer className="py-4 text-gray-700 dark:text-gray-400 space-x-4 justify-center">
      <div>
        <p className="text-xs">
          Disclaimer: islamicdreambook.com is purely for informational purposes and does not offer any specific
          financial, investment, accounting, tax,commercial or legal advice. All the information on islamicdreambook.com
          should never be used without verification, on any kind of transaction therefore users are requested to confirm
          information with their respective bank before using the information. Liability claims regarding damage caused
          by the use of any information provided, including any kind of information which is incomplete or incorrect,
          will therefore be rejected. In case you find errors or mistakes, kindly report them to{' '}
          <a href="mailto:islamicdreamb@gmail.com">islamicdreamb@gmail.com</a>
        </p>
        <br></br>
      </div>
      <div>
        <span>{config.meta.copyright}</span>
      </div>
      {/* <NextLink href="/banks">
        <a>Banks</a>
      </NextLink>
      <NextLink href="/loans">
        <a>Loans</a>
      </NextLink>
      <NextLink href="/loans">
        <a>Interest Rates</a>
      </NextLink>
      <NextLink href="/loans">
        <a>Loan Calculators</a>
      </NextLink> */}
    </footer>
  )
}
