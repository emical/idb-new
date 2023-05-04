import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function PersonalloanApplyOnline(props: {bankname: string | string[] | undefined}) {
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
        <h1>{bankName} personal loan Application Process Step by step:</h1>
        <h2>{bankName} personal loan Application Process Online</h2>
        <p>
          If the {bankName} personal loan applicant has an existing relationship with the financial lender, he/she can
          apply for a{bankName} personal loan via his/her net banking account and could possibly be eligible for a
          pre-approval. For other customers, they can apply for a {bankName} personal loan online by following the steps
          mentioned below:
        </p>
        <ul>
          <li>Visit the website of the financial lender.</li>
          <li>Under the loan section, choose {bankName} personal loans.</li>
          <li>Click on the &lsquo;apply now&rsquo; option.</li>
          <li>Enter the details in the {bankName} personal loan application form and submit it to the bank.</li>
          <li>
            The bank will assess the eligibility of the applicant and request for the submission of the required KYC
            documents and income documents.
          </li>
          <li>
            If the applicant is found eligible, the bank will disburse the loan amount to the bank account of the
            applicant, as mentioned in the application form.
          </li>
        </ul>
        <h2>{bankName} personal loan application offline</h2>
        <p>
          Listed below is the process of applying for a {bankName} personal loan at the branch of the financial lender:
        </p>
        <ul>
          <li>&nbsp; &nbsp; &nbsp;</li>
        </ul>
        <ul>
          <li>Visit the branch of the financial lender.</li>
          <li>Procure the {bankName} personal loan application form and enter all the required details.</li>
          <li>Submit relevant documents that prove one&rsquo;s income, age, address and identity.</li>
          <li>The lender will then verify the documents and check the eligibility of the applicant.</li>
          <li>The loan amount will be transferred to the bank account of the applicant if he/she is found eligible.</li>
        </ul>
        <h2>Email and phone banking requests:</h2>
        <p>
          You can leave a request for {bankName} personal loan with the bank through an email or at the customer service
          centre of the bank. The bank will review your eligibility and contact you to take the process further.
        </p>
        <h2>Request through ATM machine:</h2>
        <p>
          Nowadays you can apply for {bankName} personal loan via ATM kiosks as well. Once you raise a request the bank
          personnel will contact you.
        </p>
        <h2>How {bankName} personal loan Applications are processed :</h2>
        <p>
          The process of sanctioning of a {bankName} personal loan is simpler than property loans such as home loan and
          car loan. This is because, in case of property loans, the bank has to verify not just your financial
          information, but also the credibility and eligibility of the asset that you are purchasing with the loan
          amount. For personal loan, you are the collateral security yourself, so the bank has to do a background
          verification only on you.
        </p>
        <ul>
          <li>
            Once the bank receives your loan application, it will check the information provided by you against the data
            available with them, such as bank balance, salary deposits made into your account, EMIs being deducted from
            your account, etc.
          </li>
          <li>
            The bank will cross-check and confirm your identity and address details through your Know Your Customer
            (KYC) documents. Banks may visit you at home to confirm your place of residence and check with your office
            on your employment tenure.
          </li>
          <li>
            The copy of your Income Tax Return or salary pays lips will help the bank gauge your repayment capacity.
            This will help determine how much loan amount the bank is willing to sanction to you.
          </li>
          <li>
            Some banks might ascertain your credit-worthiness by finding out your
            <a href="https://www.cibil.com/freecibilscore"> CIBIL</a> score. The higher the CIBIL rating, the more your
            chances of getting the loan approved.
          </li>
          <li>
            The bank will also review your age, number of years of employment left, and salary growth prospects, to
            decide how much loan it can approve for you and what the repayment period should be.
          </li>
        </ul>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
