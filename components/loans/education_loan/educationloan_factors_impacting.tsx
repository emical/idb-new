import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function EducationloanFactors(props: {bankname: string | string[] | undefined}) {
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
        <h1>Factors that Affect {bankName} Education Loan</h1>
        <ul>
          <li>
            <strong>Principal</strong>- The principal is the {bankName} Education Loan amount that you avail from the
            lender or banker. It is directly proportional to your all EMIs - lower principal will lower your monthly
            instalments for {bankName} Education Loan and vice versa.
          </li>
          <li>
            <strong>Rate of interest</strong>- The rate of interest for {bankName} Education Loan is the rate at which
            the lender offers you the {bankName} Education Loan. It is also directly proportional to the value of your{' '}
            {bankName} Education Loan EMIs.
          </li>
          <li>
            <strong>Tenure</strong>- The tenure is the time within which you repay your {bankName} Education Loan. The
            tenure is inversely proportional to your all other loan EMIs - longer tenure makes the monthly EMI
            instalments cheaper and vice versa.
          </li>
        </ul>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
