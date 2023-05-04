import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function UsedbikeloanEligibility(props: {bankname: string | string[] | undefined}) {
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
        <h1>Eligibility Criteria for {bankName} Used Bike loan</h1>
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
                    Upto Rs. 10 lakhs. Some banks give maximum loan upto Rs. 15 lakhs
                    <br /> Note: {bankName} Used Bike loan amount depends upon the value of the Used Bike and the EMI
                    you can pay
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
                <p>CIBIL Score for {bankName} Used Bike loan</p>
              </td>
              <td>
                <ul>
                  <li>
                    600 &amp; more credit history
                    <br /> Note: Most banks avoid giving loans if you have low credit score
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>
          <strong>{bankName} Used Bike loan&nbsp; Eligibility</strong>
        </h2>
        <p>
          <strong>Income Level of Individual</strong>
        </p>
        <p>
          Based on the income of the borrower, the {bankName} Used Bike loan&nbsp; amount to be disbursed from the
          lender side will vary. Obviously, with a greater income sufficing the payment of EMIs without any discomfort,
          the Used Bike loan&nbsp; amount disbursal can be much more. However, income levels are not much to deal with
          the pressure of higher EMIs, the lender or banker will most probably disburse a comparatively lower amount of
          Used Bike loan&nbsp; so that the repayment from borrower side can be a lot smoother.
        </p>
        <p>
          <strong>Stability of Income&nbsp;</strong>
        </p>
        <p>
          When the lenders/bankers sit down to calculate your eligibility based on income, they not only check the
          amount of your earning but also the stability of the job/work be it as a salaried or self-employed. Higher the
          stability, higher the probability are the chances of more {bankName} Used Bike loan&nbsp; amount coming your
          way.
        </p>
        <p>
          <strong>Credit History</strong>
        </p>
        <p>
          &nbsp;All your trials of obtaining a {bankName} Used Bike loan&nbsp; can go down in vain if you have a poor
          credit history resulting from a default in payments of credit cards or other loans prevously. So, please make
          sure you have and maintain a very good CIBIL score preferably above 750&nbsp; to get the {bankName} Used Bike
          loan&nbsp; approved from most banks.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Used BikeType</strong> <strong>/ Vehicle Type</strong>
        </p>
        <p>
          The eligibility criteria also varies depending on type of Used Bikes you are buying. As you know, a wide range
          Used Bikes. The Used Bikes, which figure in these type /segment, are expected to have a slightly different
          resale value based on the model, reviews, engine performance and other features.
        </p>
        <p>
          <strong>Employment Status for Salaried</strong> &ndash; When in the case of a salaried, the individual is
          should have worked for atleast 2-3 years and in the current job for a minimum 1 year to convince the banks for
          a smooth approval of the {bankName} Used Bike loan .
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Relationship with Bank</strong>&ndash; The strength of relationship with the lender/bank can either be
          a gain or loss-making proposition. If you are applying for a {bankName} Used Bike loan&nbsp; at a bank with
          whom you already have a successful journey in the form of CASA or other products, you could then negotiate for
          a higher
          {bankName} Used Bike loan&nbsp; amount at best interest rates.
        </p>
        <p>
          <strong>Business continuity for Self-employed</strong> &ndash; Businessmen or Self-employed professionals must
          be in the same business line for a minimum of 2-3 years to get the approval for a {bankName} Used Bike loan .
        </p>
        <p>
          <strong>Category of Your Employer</strong>&nbsp;
        </p>
        <p>
          &nbsp;If you are from a&nbsp; Fortune 500 company of India, you should put yourself in the right position to
          get a larger amount of {bankName} Used Bike loan&nbsp; as lenders or banks will confirm your job stability to
          be pretty good. If you are not belong to such firms, it is necessary you must earn reasonably higher income so
          that a higher {bankName} Used Bike loan&nbsp; amount could come running at your doorstep. Now that you know
          the critical major factors you should take care of while applying for a {bankName} Used Bike loan , get
          yourself aware of the eligibility params set by select lenders and banks in India.
        </p>
        <p>
          <br />
          <br />
        </p>
      </div>
    </Grid>
  )
}
