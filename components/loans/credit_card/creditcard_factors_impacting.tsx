import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function CreditcardFactors(props: {bankname: string | string[] | undefined}) {
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
        <h1>Factors that Affect {bankName} Credit Card EMI</h1>
        <ul>
          <li>
            <strong>Outstanding amount:</strong>The principal is the {bankName} Credit Card outstanding amount that you
            avail from the lender or bank. It is directly proportional to your other EMIs - lower outstanding&nbsp; will
            lower your monthly EMi instalments and vice versa.
          </li>
          <li>
            <strong>Rate of interest</strong>- The rate of interest at which the lender offers you the {bankName} Credit
            Card outstanding amount . It is also directly proportional to the value of {bankName} Credit Card
            outstanding amount EMIs.
          </li>
          <li>
            <strong>Tenure</strong>- The tenure is the time within which you repay {bankName} Credit Card outstanding
            amount. The tenure is inversely proportional to {bankName} Credit Card outstanding amount EMIs - longer
            tenure makes the monthly
            {bankName} Credit Card instalments cheaper and vice versa.
          </li>
        </ul>
        <h2>
          Things to consider that affect the <strong>{bankName} Credit Card EMI</strong>:
        </h2>
        <ol>
          <li>Income Levels</li>
          <li>Stability of Income</li>
          <li>Vehicle or car type&nbsp;</li>
          <li>Credit History( loan repayment history)</li>
          <li>Employment Status for Salaried</li>
          <li>Business Longevity for Self-employed&nbsp;</li>
          <li>Relationship with Lender or banker</li>
          <li>Category of Your Employer</li>
        </ol>
      </div>
    </Grid>
  )
}
