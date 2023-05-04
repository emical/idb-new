import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function CreditcardEligibility(props: {bankname: string | string[] | undefined}) {
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
        <h1>{bankName} Credit Card Eligibility Calculator</h1>
        <p>
          If you meet the following criteria, then you will be eligible for a {bankName} Credit Card from more than one
          bank.
        </p>
        <p>
          <strong>Age : </strong>The minimum age required to hold a {bankName} Credit Card is 18 years, while the
          maximum age at which a {bankName} Credit Card can be availed is 60 years.
        </p>
        <p>
          <strong>Credit Score : </strong>A minimum credit score of 650 is required to avail of a {bankName} Credit
          Card. the bank in which the individual already has an account.
        </p>
        <p>
          <strong>Employment Status : </strong>To avail of a {bankName} Credit Card, a steady flow of income is
          required. Both salaried and self-employed can avail of a card as long as you can provide proof of steady
          income flow.
        </p>
        <p>
          <strong>Net Monthly Income : </strong>Minimum Rs. 15,000 as net monthly income is required to avail of a
          {bankName} Credit Card.
        </p>
        <p>
          <strong>ITR : </strong>Self-employed individuals are required to submit last year&rsquo;s ITR as well, along
          with identity proof when applying for a {bankName} Credit Card.
        </p>
        <h2>
          <strong>Factors Affecting {bankName} Credit Card Eligibility</strong>
        </h2>
        <p>
          <strong>Credit Score : </strong>Credit score is an indication of a person&rsquo;s creditworthiness. Lower the
          score; lesser is the creditworthiness. Besides, the more benefits a card has, the more is the required credit
          score. Some banks do have a specified card for those who do not have a credit score. However, if you have a
          certain credit history, then the minimum credit score of 650 is required.
        </p>
        <p>
          <strong>Income : </strong>Although a minimum income of Rs. 15,000 is required to be eligible for the card, but
          it will be a card with very few to none benefits. Higher income will attract a better card, which has a lot
          more benefits and a robust reward system.
        </p>
        <p>
          <strong>Organization : </strong>Each bank has a list of organizations with it, which are considered by the
          bank as trusted companies. So, if you work among any of those organizations, then the eligibility criteria for
          you are relaxed as compared to those who do not.
        </p>
        <p>
          <strong>Previous {bankName} Credit Card Record : </strong>In case you already have a {bankName} Credit Card
          and want to apply for another one, then the record of your previous card can be used to consider your
          eligibility. Thus, if you have maintained a good repayment record in your previous card, then it will serve as
          a positive sign for the bank when considering your eligibility.
        </p>
        <p>
          <strong>Existing relationship with bank : </strong>If you already have a savings or salary account with a
          bank, then based on an existing relationship, you can easily be eligible for a {bankName} Credit Card issued
          by that bank. As compared to new customer banks have relaxed norms for existing ones. ICICI Bank has
          low-income criteria for customers who have a salary or savings account with the bank.
        </p>
        <p>&nbsp;</p>
        <h2>
          <strong>Eligibility Criteria for {bankName} Credit Card</strong>
        </h2>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Minimum and Maximum Age</p>
              </td>
              <td>
                <p>21 Yrs. &ndash; 65 Yrs.</p>
                <p>Note: However, many banks require minimum age of 18 years</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Loan Amount</p>
              </td>
              <td>
                <ul>
                  <li>
                    Upto Rs. 10 lakhs. Some banks give maximum loan upto Rs. 50 lakhs
                    <br /> Note: Loan amount depends upon the value of the Vehicle and the EMI you can pay
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <p>Net Monthly Income</p>
              </td>
              <td>
                <ul>
                  <li>Min. Rs. 15,000 per month</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <p>Employment Type</p>
              </td>
              <td>
                <ul>
                  <li>Salaried and Self Employed</li>
                  <li>Interest rates are typically in the range of 7.75% to 29.00% per annum</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum Work Experience</p>
              </td>
              <td>
                <ul>
                  <li>1 year of total work experience</li>
                  <li>
                    Business tenure should of 5 years &amp; ITR required for at least 2 years (For Self Employed only)
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <p>CIBIL Score for {bankName} Credit Card</p>
              </td>
              <td>
                <ul>
                  <li>
                    650 &amp; more credit history
                    <br /> Note: Most banks avoid giving {bankName} Credit Cards if you have low credit score
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <br />
          <br />
        </p>
      </div>
    </Grid>
  )
}
