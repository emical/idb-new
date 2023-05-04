import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function UsedbikeloanFactors(props: {bankname: string | string[] | undefined}) {
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
        <h1>Factors that Affect {bankName} Used Bike loan</h1>
        <ul>
          <li>
            <strong>Principal</strong>- The principal is the {bankName} Used Bike loan amount that you avail from the
            lender or bank or NBFC. It is directly proportional to all your EMIs - lower principal of {bankName} Used
            Bike loan will lower your monthly EMI instalments and vice versa applies.
          </li>
          <li>
            <strong>Rate of interest</strong>- The rate of interest is the rate at which the lender or bank offers you
            the {bankName} Used Bike loan. It is also directly proportional to the purchase value of your {bankName}{' '}
            Used Bike loan EMIs.
          </li>
          <li>
            <strong>Tenure</strong>- The tenure is the time within which you should repay your {bankName} Used Bike
            loan. The tenure is inversely proportional to all your loan EMIs - longer tenure makes the monthly
            instalments low.
          </li>
        </ul>
        <h2>Things to consider that affect the {bankName} Used Bike loan:</h2>
        <ol>
          <li>Income Levels</li>
          <li>Stability of Income</li>
          <li>Used Bike type, model, year, engine</li>
          <li>Credit History( loan repayment history)</li>
          <li>Employment Status for Salaried</li>
          <li>Business Longevity for Self-employed&nbsp;</li>
          <li>Relationship with Lender or banker</li>
          <li>Category of Your Employer</li>
        </ol>
        <p>
          <br />
          <br />
        </p>
      </div>
    </Grid>
  )
}
