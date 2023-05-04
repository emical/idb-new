import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function AutoloanInterestRates(props: {bankname: string | string[] | undefined}) {
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
        <h1>{bankName} Auto loan Interest rate</h1>
        <p>
          {bankName} Auto loan Interest Rate starts from 9.20% and range is between 9.20%-11.25% per annum is feasible
          for most borrowers.
        </p>
        <p>While there are lot of factors that impacts your interest rate, following are major factors.</p>
        <ol>
          <li>Income Levels</li>
          <li>Stability of Income</li>
          <li>Relationship with Lender or banker</li>
          <li>Category of Your Employer</li>
          <li>Employment Status for Salaried</li>
          <li>Business Longevity for Self-employed&nbsp;</li>
          <li>Vehicle or car type&nbsp;</li>
          <li>Credit History( loan repayment history)</li>
        </ol>
        <p>&nbsp;</p>
        <p>
          Following table shows the EMIs for various Auto&nbsp; loan amount based on different tenures at 8.60%* onwards
        </p>
        <ul>
          <li>
            &nbsp; The EMI that you can avail with {bankName} Auto loan of 10 Lakh is 10,024 with 15-years tenure. The
            EMI increases when you opt for tenure of 5 years.
          </li>
          <li>
            &nbsp; The EMI for a Auto&nbsp; loan of 15 Lakh is higher &ndash; 30,992, when you opt for 5-years. It
            decreases to 15,036 if you opt for tenure of 15 years.
          </li>
          <li>
            &nbsp; For a {bankName} Auto loan of 25 Lakh, the cheapest EMI you can avail with 15 year tenure - 25,060.
            Decreasing the tenure to 5 years increases the EMI to 51,654.
          </li>
          <li>
            &nbsp; The EMI is 72,315 when you avail {bankName} Auto loan of 35 Lakh for 5 years. The same will decrease
            to 35,084 if you increase the tenure to 15 years.
          </li>
          <li>
            &nbsp; The cheapest EMI comes with 15-years tenure with&nbsp; Auto&nbsp; loan of 50 Lakh &ndash; 50,120. The
            EMIs double when you opt for 5 years tenure.
          </li>
        </ul>
        <p>
          <br />
          <br />
        </p>
      </div>
    </Grid>
  )
}
