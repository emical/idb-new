import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function BusinessloanEligibility(props: {bankname: string | string[] | undefined}) {
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
        <h1>{bankName} business loan Calculator Eligibility</h1>
        <p>{bankName} business loan eligibility and&nbsp; interest rate depends upon following factors -</p>
        <ul>
          <li>
            <strong>Loan amount: </strong>Generally, banks offer lower interest rates for higher amount.
          </li>
          <li>
            <strong>Your Income : </strong>Higher Income bracket individuals are offered {bankName} business loans at
            lower interest rates. {bankName} business loan interest rate of the bank varies with your net monthly
            income.
          </li>
          <li>
            <strong>Relationship with the Bank: </strong>Every bank offers special rates, offers and charges to the
            existing account holders of the bank. Those who have managed their accounts and made all the payments on
            time in past will get benefit of low {bankName} business loan interest rate.
          </li>
          <li>
            <strong>Repayment Capacity: </strong>Before giving loan to the borrower, every bank checks the repayment
            capacity of the borrower. Bank verifies the repayment capacity of the customer through
            <a href="https://www.cibil.com/freecibilscore"> CIBIL</a> score or credit score as it has all the details of
            previous loans taken and their repayments. CIBIL score also gives the information of credit card bills
            payment.
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
                <p>24 years - 65 years</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum Annual Income</p>
              </td>
              <td>
                <p>
                  Net income of the concern should be more than ₹150,000 per annum for {bankName} business loan up to
                  ₹1,500,000 and over ₹300,000 for {bankName} business loan above ₹1,500,000.
                </p>
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
          </tbody>
        </table>
        <p>
          <strong>&nbsp;</strong>
        </p>
        <h2>{bankName} business loans for Self Employed Professionals (SEP) :</h2>
        <p>
          Allopathic doctors, chartered accountants, company secretaries and architects who are practicing their
          profession. Proof of qualification needs to be shared.
        </p>
        <h2>{bankName} business loans for Self Employed Non-Professionals (SENP) :</h2>
        <p>Traders and manufacturers, retailers, proprietors, service providers, etc.</p>
        <h2>{bankName} business loans for Entities:</h2>
        <p>&nbsp;</p>
        <p>
          Partnerships,<a href="http://www.mca.gov.in/MinistryV2/incorporation.html"> limited liability partnership</a>,
          <a href="http://www.mca.gov.in/MinistryV2/incorporation_company.html"> private limited</a> and closely held
          limited companies. Other constitution types depending on their profile on a case to case basis.
        </p>
        <p>&nbsp;</p>
        <p>
          Based on your meeting the {bankName} business loan eligibility criteria, you can get the funds up to a limit
          of Rs.30 lakh to 5 cr.
        </p>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
