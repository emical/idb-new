import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function BusinessloanInterestRates(props: {bankname: string | string[] | undefined}) {
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
        <h1>{bankName} business loan Interest rate</h1>
        <p>
          {bankName} business loan Interest Rate starts from 9.20% and range is between 9.20%-11.25% per annum is
          feasible for most borrowers.
        </p>
        <p>While there are lot of factors that impacts your interest rate, following are major factors.</p>
        <ol>
          <li>Income Level of business</li>
          <li>Stability of revenue, balance sheet</li>
          <li>Business type&nbsp;</li>
          <li>Credit History( loan repayment history of business)</li>
          <li>Relationship with Lender or banker</li>
          <li>Category of Your Business</li>
        </ol>
        <p>&nbsp;</p>
        <p>
          Following table shows the EMIs for various {bankName} business loan amount based on different tenures at
          8.60%* onwards
        </p>
        <p>
          Following table provides a comparison of {bankName} business loan EMI for a Rs. 1 lakh Business &nbsp;loan at
          different tenures:
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>Business </strong>
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
                <p>
                  EMI amount for <strong>Business </strong>
                  <strong>Loan </strong>amount Rs. 1 lakh at 10.50%
                </p>
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
          If you take a {bankName} business loan for 2 years at the same rate of interest, you have to pay a higher EMI
          of ₹ 4,638 and a total interest amount of ₹ 23,034 on your loan amount of Rs. 1 lakh for 2 years, which is
          much lesser than what your business paid for a 5 years {bankName} business loan.
        </p>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
