import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function PersonalloanFactors(props: {bankname: string | string[] | undefined}) {
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
        <h1>Factors affecting {bankName} personal loan EMI :</h1>
        <p>
          <strong>Loan amount &ndash; </strong>This is the amount which a borrower decides to take from the bank in the
          form of a loan. Higher the {bankName} personal loan amount, higher will be the EMI.
        </p>
        <p>
          <strong>Rate of interest &ndash; </strong>This is the interest charged on the borrowed loan amount. Lower the
          {bankName} personal loan interest rate, lower the EMI.
        </p>
        <p>
          <strong>Loan Tenure &ndash; </strong>This is the time period for which you take a loan. Longer the personal
          loan tenure, lower will be the EMI. Longest loan tenure available across banks in India is 5 years, subject to
          borrower&rsquo;s current age and retirement age.
        </p>
        <p>Following table provides a comparison of EMI for a Rs. 1 lakh loan at different tenures:</p>
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>Loan Tenure</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>2 years</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>3 years</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>5 years</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>EMI amount for loan amount Rs. 1 lakh at 10.50%</p>
              </td>
              <td>
                <p>₹ 4,638</p>
              </td>
              <td>
                <p>₹ 3,250</p>
              </td>
              <td>
                <p>₹ 2,149</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Total amount you pay back to the bank including principal and interest</p>
              </td>
              <td>
                <p>₹ 1.23 Lakh</p>
              </td>
              <td>
                <p>₹ 1.36 Lakh</p>
              </td>
              <td>
                <p>₹ 1.68 Lakh</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Interest you have to pay over loan tenure</p>
              </td>
              <td>
                <p>₹ 23,034</p>
              </td>
              <td>
                <p>₹ 36,470</p>
              </td>
              <td>
                <p>₹ 67,905</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          At the lowest interest rate of 10.50%, the lowest EMI for tenure of 5 years is ₹ 2,149 per lakh. You need to
          pay an interest of ₹ 67,905 on your loan amount of Rs. 1 lakh over 5 years.
        </p>
        <p>
          If you take a loan for 2 years at the same rate of interest, you will have to pay a higher EMI of ₹ 4,638 and
          a total interest of ₹ 23,034 on your loan amount of Rs. 1 lakh for 2 years, which is much lesser than what you
          paid for a 5 years loan.
        </p>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
