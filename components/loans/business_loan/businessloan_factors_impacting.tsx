import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function BusinessloanFactors(props: {bankname: string | string[] | undefined}) {
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
        <h1>Factors affecting {bankName} business loan EMI :</h1>
        <p>
          <strong>Loan amount &ndash; </strong>This is the amount which a borrower decides to take from the bank in the
          form of a loan. Higher the {bankName} business loan amount, higher will be the EMI.
        </p>
        <p>
          <strong>Rate of interest &ndash; </strong>This is the interest charged on the borrowed loan amount. Lower the
          {bankName} business loan interest rate, lower the EMI.
        </p>
        <p>
          <strong>Loan Tenure &ndash; </strong>This is the time period for which you take a loan. Longer the Business
          Loan tenure, lower will be the EMI. Longest loan tenure available across banks in India is 5 years, subject to
          borrower&rsquo;s current age and retirement age.
        </p>
        <p>&nbsp;</p>
        <h2>Things to consider that affect the {bankName} business loan:</h2>
        <ol>
          <li>Income Level of business</li>
          <li>Stability of revenue, balance sheet</li>
          <li>Business type&nbsp;</li>
          <li>Credit History( loan repayment history of business)</li>
          <li>Relationship with Lender or banker</li>
          <li>Category of Your Business</li>
        </ol>
        <p>
          <br />
          <br />
        </p>
      </div>
    </Grid>
  )
}
