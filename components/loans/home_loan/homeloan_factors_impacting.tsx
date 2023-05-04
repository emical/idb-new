import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function HomeloanFactors(props: {bankname: string | string[] | undefined}) {
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
        <h1>Factors that Affect {bankName} home loan</h1>
        <ul>
          <li>
            <strong>Principal</strong>- The principal is the {bankName} home loan amount that you avail from the lbank
            or ender. It is directly proportional to EMIs you have on your name - lower principal of {bankName} home
            loan&nbsp; will lower your monthly instalments/EMI and vice versa.
          </li>
          <li>
            <strong>Rate of interest</strong>- The rate of interest for {bankName} home loan&nbsp; is the rate at which
            the lender/bank offers you the {bankName} home loan. It is also directly proportional to the value of your
            other type of loan EMIs.
          </li>
          <li>
            <strong>Tenure</strong>- The tenure is the time within which you repay your {bankName} home loan. The tenure
            is inversely proportional to your other types of loan EMIs - longer tenure for {bankName} home loan makes
            the monthly instalments easy to repay and vice versa.
          </li>
        </ul>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
