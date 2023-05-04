import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function EducationloanInterestRates(props: {bankname: string | string[] | undefined}) {
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
        <h1>{bankName} Education Loan Interest Rate&nbsp;</h1>
        <p>
          starts from 10.20% and range is between 10.20%-11.25% per annum is feasible for most borrowers and goes upto
          14% depending upon various factors.
        </p>
        <p>
          While there are a lot of factors that impact your interest rate, following are major factors of co-applicant
        </p>
        <ol>
          <li>Income Levels of co-applicant</li>
          <li>Stability of Income&nbsp; of co-applicant</li>
          <li>Relationship with Lender or banker</li>
          <li>Category of Your Employer of&nbsp; of co-applicant</li>
          <li>Employment Status for Salaried</li>
          <li>Business Longevity for Self-employed&nbsp;</li>
          <li>College tier in which admission( IIT/NIT)</li>
          <li>Credit History( loan repayment history)</li>
        </ol>
        <h2>&nbsp;</h2>
        <h2>{bankName} Education Loan for Different Loan Amounts</h2>
        <p>Following table shows the EMIs for various loan amount based on different tenures at 11.00%* onwards</p>
        <ul>
          <li>
            &nbsp; &nbsp; &nbsp; The EMI that you can avail with {bankName} Education Loan of 10 Lakh is 10,024 with
            15-years tenure. The EMI increases when you opt for tenure of 5 years.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The EMI for a {bankName} Education Loan of 15 Lakh is higher &ndash; 30,992, when you
            opt for 5-years. It decreases to 15,036 if you opt for tenure of 15 years.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; For a {bankName} Education Loan of 25 Lakh, the cheapest EMI you can avail with 15-year
            tenure - 25,060. Decreasing the tenure to 5 years increases the EMI to 51,654.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The EMI is 72,315 when you avail {bankName} Education Loan of 35 Lakh for 5 years. The
            same will decrease to 35,084 if you increase the tenure to 15 years.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The cheapest EMI comes with 15-years tenure with {bankName} Education Loan of 50 Lakh
            &ndash; 50,120. The EMIs double when you opt for 5 years tenure.
          </li>
        </ul>
        <h2>How is {bankName} Education Loan Interest Calculated?</h2>
        <p>
          Equated Monthly Installment &ndash; EMI for short &ndash; is the amount payable every month to the bank or any
          other financial institution until the {bankName} Education Loan amount is fully paid off. It consists of the
          interest on
          {bankName} Education Loan as well as part of the principal amount to be repaid. The sum of principal amount
          and interest is divided by the tenure, i.e., number of months, in which the loan must be repaid. This amount
          has to be paid monthly.
        </p>
        <p>
          <strong>E = P x r x (1+r)^n/((1+r)^n &ndash; 1)</strong>
        </p>
        <ol>
          <li>E is the amount that you will have to pay every month; basically, the EMI.</li>
          <li>P is the amount that you want to borrow.</li>
          <li>
            r is the rate of interest that is applicable but calculated on a monthly basis instead of the annual rate of
            interest. It is obtained by using the formula r = (annual interest/12) x 100.
          </li>
          <li>
            n is the duration of the {bankName} Education Loan in terms of months. So, if you select a term of 5 years,
            n will be 60.
          </li>
        </ol>
        <p>
          &nbsp;EMI is just the amount you (borrower) repay to the bank, each calendar month, to clear your outstanding
          educationloan. You have to repay the EMI each month, on a particular fixed date, for the entire duration
          (tenure) of the {bankName} Education Loan, till you repay the entire outstanding amount. (amount borrowed +
          interest).
        </p>
        <p>
          <strong>For Example</strong>, if you borrow 10,000,000 units of {bankName} Education Loan of a currency from
          the bank at 10.5% annual interest for a period of 10 years (i.e., 120 months), then EMI = Units of currency
          10,000,000 * 0.00875 * (1 + 0.00875)^120 / ((1 + 0.00875)^120 &ndash; 1) = Units of currency 134,935. i.e.,
          you will have to pay total currency units 134,935 for 120 months to repay the entire {bankName} Education Loan
          amount. The total amount payable will be 134,935 * 120 = 16,192,200 currency units that includes currency
          units 6,192,200 as interest toward the {bankName} Education Loan.
        </p>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
