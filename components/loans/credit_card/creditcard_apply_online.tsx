import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function CreditcardApplyOnline(props: {bankname: string | string[] | undefined}) {
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
        <h1>Application process for {bankName} Credit Card:</h1>
        <h2>
          <strong>Step by step guide before having {bankName} Credit Card EMI:</strong>
        </h2>
        <h3>
          <strong>
            Step 1 : Check {bankName} Credit Card EMI and calculate {bankName} Credit Card eligibility &ndash;{' '}
            {bankName} Credit Card EMI Calculator
          </strong>
        </h3>
        <p>
          As you decide to take a {bankName} Credit Card, always estimate your loan amount eligibility to know the loan
          amount you will be eligible for and can apply for. Also calculate the monthly EMI that you can comfortably
          service given your net take personal salary and other existing fixed obligations including rent and EMIs on
          other existing loans, if any. Your {bankName} Credit Card eligibility is calculated based on your age, net
          income, existing obligations, property type, LTV ratio and other factors. EMI is dependent on the loan amount,
          interest rate and tenure. Once you understand your minimum loan requirement, your eligibility and monthly EMI
          you can comfortably service, shortlist the banks which offer you maximum loan amount to meet your
          requirements.
        </p>
        <h3>
          <strong>
            Step 2 : Check loan approval status and legal documents &ndash; {bankName} Credit Card EMI Calculator
          </strong>
        </h3>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <h3>
          <strong>
            Step 3 : Decide on type of {bankName} Credit Card interest rate offers &ndash; {bankName} Credit Card EMI
            Calculator
          </strong>
        </h3>
        <p>
          As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on {bankName}{' '}
          Credit Card comparison of the loan offers of various banks. Some of the interest rate offers that needs to be
          checked are:
        </p>
        <p>
          Choice between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest
          compared to floating rate loans and interest rate remains constant during the tenure of {bankName} Credit
          Card. In floating rate loan, interest rates are reset at periodic intervals in response to changes in MCLR and
          PLR rates of banks or NBFCs. Majority of {bankName} Credit Cards in India today are floating rate loans as it
          allows the borrowers to get {bankName} Credit Card interest rate in line with the current interest rates.
        </p>
        <p>
          Decide if you need a home saver loan &ndash; This is a loan with overdraft facility which allows you to
          deposit surplus amount in your {bankName} Credit Card overdraft account as and when available, allowing you to
          reduce your overall interest amount. This loan is highly recommended for salaried individuals with high
          bonuses and self employed business which is seasonal and has fluctuating cash flows. The interest rates on
          overdraft loan is slightly higher than that of a regular {bankName} Credit Card interest rate.
        </p>
        <p>
          You can also evaluate a mortgage guarantee {bankName} Credit Card as it covers any default risk and allows the
          lender to give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to the
          bank.
        </p>
        <p>
          Check and compare the current {bankName} Credit Card interest rates of the banks on various types of loan
          products and take an informed decision.
        </p>
        <h3>
          <strong>Step 4 : Compare shortlisted banks | {bankName} Credit Card EMI Calculator</strong>
        </h3>
        <p>
          In addition to interest rates, banks also charge many other fees on {bankName} Credit Cards. Along with
          interest rates, you should check other associated costs with a your loan which include prepayment charges,
          processing fee, insurance premium and other charges offered by the shortlisted banks. You should calculate all
          inclusive costs on {bankName} Credit Card to be able to further shortlist the banks and reduce your choice to
          2-3 banks.
        </p>
        <h3>
          <strong>
            Step 5 : Select the bank based on other service related parameters&nbsp; |&nbsp; {bankName} Credit Card EMI
            Calculator
          </strong>
        </h3>
        <p>
          Finally as you decide to take the loan, also consider other service and transparency related parameters of the
          chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery, doorstep
          services, transparency in the loan process. You also need to understand the trends and changes in MCLR rates
          over a period of time. Last but not the least, read reviews of existing customers on banks on their services,
          interest rates and transparency to take your decision to borrow from a bank.
        </p>
        <h2>{bankName} Credit Card Application Process Online</h2>
        <p>
          If the {bankName} Credit Card applicant has an existing relationship with the financial lender banker, he/she
          can apply for a {bankName} Credit Card via his/her net banking account and could possibly be eligible for a
          pre-approval. For other customers, they can apply for a {bankName} Credit Card online by following the steps
          mentioned below:
        </p>
        <ul>
          <li>&nbsp; &nbsp; &nbsp; Visit the website of the financial lender.</li>
          <li>&nbsp; &nbsp; &nbsp; Under the loan section, choose {bankName} Credit Cards.</li>
          <li>&nbsp; &nbsp; &nbsp; Click on the &lsquo;apply now&rsquo; option.</li>
          <li>
            &nbsp; &nbsp; &nbsp; Enter the details in the {bankName} Credit Card application form and submit it to the
            bank.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The bank will assess the eligibility for {bankName} Credit Card of the applicant and
            request for the submission of the required KYC documents and income documents for {bankName} Credit Card.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; If the applicant is found eligible for {bankName} Credit Card, the bank will disburse
            the loan amount to the bank account of the applicant, as mentioned in the application form.
          </li>
        </ul>
        <h2>{bankName} Credit Card application offline</h2>
        <p>
          Listed below is the process of applying for a {bankName} Credit Card at the branch of the financial lender:
        </p>
        <ul>
          <li>&nbsp; &nbsp; &nbsp; Visit the branch of the financial lender bank</li>
          <li>
            &nbsp; &nbsp; &nbsp; Procure the {bankName} Credit Card application form and enter all the required details.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; Submit relevant documents for a {bankName} Credit Card that prove one&rsquo;s income,
            age, address and identity.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The lender will then verify the documents for a {bankName} Credit Card and check the
            eligibility credit of the applicant.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The loan amount will be transferred to the bank account of the applicant for a Credit
            card if he/she is found eligible for a {bankName} Credit Card.
          </li>
        </ul>
        <h2>Email and phone banking requests:</h2>
        <p>
          You can leave a request for {bankName} Credit Card with the bank through an email for a {bankName} Credit Card
          or at the customer service centre of the bank. The bank will review your eligibility&nbsp; for a {bankName}{' '}
          Credit Card and contact you to take the process further.
        </p>
      </div>
    </Grid>
  )
}
