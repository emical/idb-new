import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function BusinessloanDocumentsRequired(props: {bankname: string | string[] | undefined}) {
  const bankName = props.bankname

  // const loanInfo: PersonalLoan[] = personalLoansIndia
  const bank: PersonalLoan = personalLoansJson?.filter((bank) => bank?.id === bankName)[0]

  function getId(idstring: string) {
    return idstring.replace(/\s/g, '-')
  }
  function getHref(idstring: string) {
    return '#' + idstring.replace(/\s/g, '-')
  }
  return (
    <Grid item xs={12} md={8}>
      <div>
        <h1>
          <strong>Documents required to apply {bankName} business loan</strong>
        </h1>
        <p>
          It is possible to manage the cash flow, upgrade business equipment and grow the business by the option of
          {bankName} business loans. Each bank has specific requirements, criteria and eligibility factors. Here is the
          list of few banks document requirements and other details mentioned.
        </p>
        <ul>
          <li>Filled up loan application form</li>
          <li>2 Passport Size Photo</li>
          <li>
            Copy of<a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a> PAN
          </li>
          <li>
            Identity Proof &ndash;<a href="https://eaadhaar.uidai.gov.in/#/"> Aadhaar</a>,
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"> Passport</a> /
            <a href="https://parivahan.gov.in/"> Driving License</a> /<a href="https://www.nvsp.in/"> Voter ID</a> /
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"> PAN</a> /
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/welcomeLink"> Passport</a>
          </li>
          <li>
            Residential Address Proof - Leave and License /
            <a href="https://legaldesk.com/documents/rental-agreement"> Registered Rent Agreement</a>/ Utility Bill
            (upto 3 months old),
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/welcomeLink"> Passport</a>
          </li>
          <li>
            Financial documents:<a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a> return
            (ITR)&nbsp; &amp; profit &amp; loss &amp; balance sheet of last 2 years, last 6 months bank statement &amp;
            business proof.
          </li>
          <li>
            Financial Documents: Copies of IT returns for the last two years along with the latest Bank statements for 6
            months and P &amp; L and balance sheet for last two years audited by a C.A.
          </li>
        </ul>
        <ul>
          <li>
            Self Employed (Private Ltd. Co. and Partnership Firms): P &amp; L Copies of
            <a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a> returns for the last two years and P
            &amp; L and balance sheet for last two years audited by a chartered accountant.
          </li>
          <li>
            Self Employed Individuals - Professionals: Copies of
            <a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a> returns for the last two years and
            Bank statements for last 6 months and &ndash; Professionals: P &amp; L and balance sheet for last two years
            audited by a chartered accountant
          </li>
          <li>
            Self Employed Individuals - Non Professionals: P &amp; L and balance sheet for last two years audited by a
            chartered accountant and Copies of<a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a>{' '}
            returns for the last two years and Bank statements
          </li>
        </ul>
        <ul>
          <li>&nbsp; &nbsp; &nbsp; Current year performance and projected turnover on letterhead of the entity</li>
          <li>&nbsp; &nbsp; &nbsp; Proof of Business Continuation</li>
          <li>
            &nbsp; &nbsp; &nbsp; Business Ownership[ Proof: Other Mandatory Documents such as Sole Proprietorship
            Declaration, Certified true copy of Memorandum &amp; Articles of Association
          </li>
          <li>&nbsp; &nbsp; &nbsp; Last 3 years audited financials.</li>
        </ul>
      </div>
    </Grid>
  )
}
