import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function AutoloanApplyOnline(props: {bankname: string | string[] | undefined}) {
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
        <h1>
          <span>Application process for {bankName} Auto loan:</span>
        </h1>
        <h2>
          <strong>Step by step guide before having {bankName} Auto loan:</strong>
        </h2>
        <h2>
          <strong>
            Step 1 : Check {bankName} Auto loan EMI and calculate {bankName} Auto loan eligibility for your income&nbsp;
          </strong>
        </h2>
        <p>
          <span>
            As you decide to take a {bankName} Auto loan, always estimate your loan amount eligibility to know the loan
            amount you will be eligible for and can apply for. Also calculate the monthly EMI that you can comfortably
            service given your net take personal salary and other existing fixed obligations including rent and EMIs on
            other existing loans, if any.&nbsp;
          </span>
        </p>
        <p>
          <span>
            Your {bankName} Auto loan eligibility is calculated based on your age, net income, existing obligations,
            vehicle type, LTV ratio and other factors. EMI is dependent on the loan amount, interest rate and tenure.
            Once you understand your minimum loan requirement, your eligibility and monthly EMI you can comfortably
            service, shortlist the banks which offer you maximum loan amount to meet your requirements.
          </span>
        </p>
        <h2>
          <strong>Step 2 : Check loan approval status and legal documents verification</strong>
        </h2>
        <p>
          <span>
            If you are buying a vehicle, then check for the banks which have approved the projects you have shortlisted.
            For resale vehicle, check the approved map plans and ensure that all vehicle registration papers for the
            complete chain from the first owner to current owner are in place. Shortlist the banks which lend on your
            chosen property.
          </span>
        </p>
        <h2>
          <strong>Step 3 : Decide on type of {bankName} Auto loan and interest rate offered</strong>
        </h2>
        <p>
          <span>
            As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on {bankName}{' '}
            Auto loan comparison of the loan offers of various banks. Some of the interest rate offers that needs to be
            checked are:
          </span>
        </p>
        <p>
          <span>
            Choice between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest
            compared to floating rate loans and interest rate remains constant during the tenure of {bankName} Auto
            loan. In floating rate loan, interest rates are reset at periodic intervals in response to changes in MCLR
            and PLR rates of banks or NBFCs. Majority of {bankName} Auto loans in India today are floating rate loans as
            it allows the borrowers to get {bankName} Auto loan interest rate in line with the current interest rates.
          </span>
        </p>
        <p>
          <span>
            Decide if you need a home saver loan &ndash; This is a loan with overdraft facility which allows you to
            deposit surplus amount in your {bankName} Auto loan overdraft account as and when available, allowing you to
            reduce your overall interest amount. This loan is highly recommended for salaried individuals with high
            bonuses and self employed Auto which is seasonal and has fluctuating cash flows. The interest rates on
            overdraft loan is slightly higher than that of a regular {bankName} Auto loan interest rate.
          </span>
        </p>
        <p>
          <span>
            You can also evaluate a mortgage guarantee {bankName} Auto loan as it covers any default risk and allows the
            lender to give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to
            the bank.
          </span>
        </p>
        <p>
          <span>
            Check and compare the current {bankName} Auto loan interest rates of the banks on various types of loan
            products and take an informed decision.
          </span>
        </p>
        <h2>
          <strong>Step 4 : Compare with other banks on various parameters</strong>
        </h2>
        <p>
          <span>
            In addition to interest rates, banks also charge many other fees on {bankName} Auto loans. Along with
            interest rates, you should check other associated costs with a your loan which include{' '}
          </span>
          <strong>prepayment charges, processing fee, insurance premium and other charges</strong>
          <span>
            {' '}
            offered by the shortlisted banks. You should calculate all inclusive costs on {bankName} Auto loan to be
            able to further shortlist the banks and reduce your choice to 2-3 banks.
          </span>
        </p>
        <h2>
          <strong>Step 5 : Select the bank based on other service related parameters</strong>
        </h2>
        <p>
          <span>
            Finally as you decide to take the {bankName} Auto loan, also consider other service and transparency related
            parameters of the chosen banks. Some of these factors are turnaround time offered by the banks, quick loan
            delivery, doorstep services, transparency in the {bankName} Auto loan process. You also need to understand
            the trends and changes in MCLR rates over a period. Last but not the least, read reviews of existing
            customers who has taken the
            {bankName} Auto loan on banks on their services, interest rates and transparency to take your decision to
            borrow from a bank.
          </span>
        </p>
        <h2>
          <span>{bankName} Auto loan Application Process Online</span>
        </h2>
        <p>
          <span>
            If the {bankName} Auto loan applicant has an existing relationship with the financial lender, he/she can
            apply for a{bankName} Auto loan via his/her net banking account and could possibly be eligible for a
            pre-approval. For other customers, they can apply for a {bankName} Auto loan online by following the steps
            mentioned below:
          </span>
        </p>
        <ul>
          <li>
            <span> &nbsp; &nbsp; &nbsp; Visit the website of the financial lender.</span>
          </li>
          <li>
            <span> &nbsp; &nbsp; &nbsp; Under the loan section, choose {bankName} Auto loans.</span>
          </li>
          <li>
            <span> &nbsp; &nbsp; &nbsp; Click on the &lsquo;apply now&rsquo; option.</span>
          </li>
          <li>
            <span>
              {' '}
              &nbsp; &nbsp; &nbsp; Enter the details in the {bankName} Auto loan application form and submit it to the
              bank.
            </span>
          </li>
          <li>
            <span>
              {' '}
              &nbsp; &nbsp; &nbsp; The bank will assess the eligibility of the applicant and request for the submission
              of the required KYC documents and income documents.
            </span>
          </li>
          <li>
            <span>
              {' '}
              &nbsp; &nbsp; &nbsp; If the applicant is found eligible, the bank will disburse the loan amount to the
              bank account of the applicant, as mentioned in the application form.
            </span>
          </li>
        </ul>
        <h2>
          <span>{bankName} Auto loan application offline</span>
        </h2>
        <p>
          <span>
            Listed below is the process of applying for a {bankName} Auto loan at the branch of the financial lender:
          </span>
        </p>
        <ul>
          <li>
            <span> &nbsp; &nbsp; &nbsp; Visit the branch of the financial lender</span>
          </li>
          <li>
            <span>
              {' '}
              &nbsp; &nbsp; &nbsp; Procure the {bankName} Auto loan application form and enter all the required details.
            </span>
          </li>
          <li>
            <span>
              {' '}
              &nbsp; &nbsp; &nbsp; Submit relevant documents that prove one&rsquo;s income, age, address and identity.
            </span>
          </li>
          <li>
            <span>
              {' '}
              &nbsp; &nbsp; &nbsp; The lender will then verify the documents and check the eligibility of the applicant.
            </span>
          </li>
          <li>
            <span>
              {' '}
              &nbsp; &nbsp; &nbsp; The loan amount will be transferred to the bank account of the applicant if he/she is
              found eligible.
            </span>
          </li>
        </ul>
        <h2>
          <span>Email and phone banking requests {bankName} Auto loan:</span>
        </h2>
        <p>
          <span>
            You can leave a request for {bankName} Auto loan with the bank through an email or at the customer service
            centre of the bank. The bank will review your eligibility and contact you to take the process further.
          </span>
        </p>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
