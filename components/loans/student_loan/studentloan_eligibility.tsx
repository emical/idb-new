import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function StudentloanEligibility(props: {bankname: string | string[] | undefined}) {
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
        <h1>Who can apply for an {bankName} Student Loan?</h1>
        <h2>The eligibility criteria for {bankName} Student Loan are as follows:</h2>
        <ul>
          <li>
            &nbsp;&nbsp;The applicant and co-applicant should be over 18 years of age for {bankName} Student Loan and
            citizen of India(Identity Proof &ndash; <a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,{' '}
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a> /{' '}
            <a href="https://parivahan.gov.in/">Driving License</a> / <a href="https://www.nvsp.in/">Voter ID</a> /{' '}
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>)
          </li>
          <li>
            &nbsp;&nbsp;The student needs to have secured at least 50% marks for {bankName} Student Loan during HSC and
            graduation
          </li>
          <li>
            &nbsp;&nbsp;The student needs to have obtained admission for {bankName} Student Loan to career-oriented
            courses viz. Medicine, Engineering, Management, etc., either at the graduate or post-graduate level
          </li>
          <li>
            &nbsp;&nbsp;Secured admission in India or abroad from a recognized college for {bankName} Student Loan
            <a href="https://en.wikipedia.org/wiki/List_of_universities_in_India">
              / Student institutions in India
            </a>{' '}
            through entrance test/merit based selection process for {bankName} Student Loan post completion of HSC
            (10+2), is a must
          </li>
          <li>&nbsp;&nbsp;The co-applicant, such as parent(s) or guardian, need to have a regular source of income</li>
        </ul>
        <p>
          <br />
          <br />
        </p>
      </div>
    </Grid>
  )
}
