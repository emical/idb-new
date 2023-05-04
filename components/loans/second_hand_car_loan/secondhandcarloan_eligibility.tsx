import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function SecondhandcarloanEligibility(props: {bankname: string | string[] | undefined}) {
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
        <h1>Eligibility Criteria for {bankName} second hand car loan</h1>
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
                  <li>Min. Rs. 18,000 per month</li>
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
                <p>CIBIL Score for {bankName} second hand car loan</p>
              </td>
              <td>
                <ul>
                  <li>
                    700 &amp; more credit history
                    <br /> Note: Most banks avoid giving {bankName} second hand car loans if you have low credit score
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <h2>
          <strong>{bankName} second hand car loan Eligibility</strong>
        </h2>
        <p>
          <strong>Income Level of Individual</strong>
        </p>
        <p>
          Based on the income of the borrower, the {bankName} second hand car loan amount to be disbursed from the
          lender side will vary. Obviously, with a greater income sufficing the payment of EMIs without any discomfort,
          the second hand car loan amount disbursal can be much more. However, income levels are not much to deal with
          the pressure of higher EMIs, the lender or banker will most probably disburse a comparatively lower amount of
          second hand car loan so that the repayment from borrower side can be a lot smoother.
        </p>
        <p>
          <strong>Stability of Income&nbsp;</strong>
        </p>
        <p>
          When the lenders/bankers sit down to calculate your eligibility based on income, they not only check the
          amount of your earning but also the stability of the job/work be it as a salaried or self-employed. Higher the
          stability, higher the probability are the chances of more {bankName} second hand car loan amount coming your
          way.
        </p>
        <p>
          <strong>Credit History</strong>
        </p>
        <p>
          &nbsp;All your trials of obtaining a {bankName} second hand car loan can go down in vain if you have a poor
          credit history resulting from a default in payments of credit cards or other loans prevously. So, please make
          sure you have and maintain a very good CIBIL score preferably above 750&nbsp; to get the {bankName} second
          hand car loan approved from most banks.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Car Type</strong> <strong>/ Vehicle Type</strong>
        </p>
        <p>
          The eligibility criteria also varies depending on type of cars you are buying. As you know, a wide range of
          cars in passenger car, sedan,hatchbacks, Sports-utility Vehicles (SUVs), Multi-utility vehicles, and other
          segments. The vehicles , which figure in these type /segment, are expected to have a slightly different resale
          value based on the model, reviews, engine performance and other features.
        </p>
        <p>
          <strong>Employment Status for Salaried</strong> &ndash; When in the case of a salaried, the individual is
          should have worked for atleast 2-3 years and in the current job for a minimum 1 year to convince the banks for
          a smooth approval of the {bankName} second hand car loan.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Relationship with Bank</strong>&ndash; The strength of relationship with the lender/bank can either be
          a gain or loss-making proposition. If you are applying for a {bankName} second hand car loan at a bank with
          whom you already have a successful journey in the form of CASA or other products, you could then negotiate for
          a higher
          {bankName} second hand car loan amount at best interest rates.
        </p>
        <p>
          <strong>Business continuity for Self-employed</strong> &ndash; Businessmen or Self-employed professionals must
          be in the same business line for a minimum of 2-3 years to get the approval for a {bankName} second hand car
          loan.
        </p>
        <p>
          <strong>Category of Your Employer</strong>&nbsp;
        </p>
        <p>
          &nbsp;If you are from a&nbsp; Fortune 500 company of India, you should put yourself in the right position to
          get a larger amount of {bankName} second hand car loan as lenders or banks will confirm your job stability to
          be pretty good. If you are not belong to such firms, it is necessary you must earn reasonably higher income so
          that a higher {bankName} second hand car loan amount could come running at your doorstep. Now that you know
          the critical major factors you should take care of while applying for a {bankName} second hand car loan, get
          yourself aware of the eligibility params set by select lenders and banks in India.
        </p>
        <p>
          <br />
          <br />
          <br />
        </p>
      </div>
    </Grid>
  )
}
