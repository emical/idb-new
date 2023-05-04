import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function PersonalloanEligibility(props: {bankname: string | string[] | undefined}) {
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
        <h1>{bankName} personal loan Calculator Eligibility</h1>
        <p>{bankName} personal loan eligibility and&nbsp; interest rate depends upon following factors -</p>
        <ul>
          <li>
            <strong>Loan amount: </strong>Generally, banks offer lower interest rates for higher amount.
          </li>
          <li>
            <strong>Your Salary: </strong>Higher salary bracket individuals are offered {bankName} personal loans at
            lower interest rates. {bankName} personal loan interest rate of the bank varies with your net monthly
            income.
          </li>
          <li>
            <strong>Employer Category: </strong>Employer category of the borrower is a major deciding factor in order to
            determine his/her rate of interest. Every bank has a list of company categories of salaried individuals to
            which they avail {bankName} personal loan. So, higher company category leads to low bank {bankName} personal
            loan rate.
          </li>
          <li>
            <strong>Relationship with the Bank: </strong>Every bank offers special rates, offers and charges to the
            existing account holders of the bank. Those who have managed their accounts and made all the payments on
            time in past will get benefit of low {bankName} personal loan interest rate.
          </li>
          <li>
            <strong>Loan Tenure: </strong>
            {bankName} personal loans are of longer repayment tenure of 7 years.
          </li>
          <li>
            <strong>Repayment Capacity: </strong>Before giving loan to the borrower, every bank checks the repayment
            capacity of the borrower. Bank verifies the repayment capacity of the customer through
            <a href="https://www.cibil.com/freecibilscore"> CIBIL</a> score or credit score as it has all the details of
            previous loans taken and their repayments.<a href="https://www.cibil.com/freecibilscore"> CIBIL</a> score
            also gives the information of credit card bills payment.
          </li>
        </ul>
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>Eligibility Criteria</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Eligibility Details</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Age</p>
              </td>
              <td>
                <p>21 years - 65 years</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum Annual Income</p>
              </td>
              <td>
                <p>Salaried: ₹ 3 Lakhs</p>
                <p>Self Employed Professionals: ₹ 4 Lakhs</p>
                <p>Self Employed Businessmen: ₹ 4 Lakhs</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum Credit Score</p>
              </td>
              <td>
                <p>700 and above</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>{bankName} personal loan Tenure</p>
              </td>
              <td>
                <p>7 years</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>&nbsp;</strong>
        </p>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
