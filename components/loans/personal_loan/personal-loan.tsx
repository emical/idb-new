import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function Personalloan(props: {bankname: string | string[] | undefined}) {
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
        <p>
          <h2>
            <u>What is {bankName} Personal Loan Calculator?</u>
          </h2>
        </p>
        <p>
          When one takes a {bankName} Personal Loan, a natural question that comes to mind is how much the EMI would
          (Equated Monthly Installment) be that one has to pay back to the bank every month. {bankName} Personal Loan
          calculator helps you in calculating your monthly EMI at your fingertips.
        </p>
        <p>
          <h2>
            <u>How to use {bankName} Personal Loan Calculator?</u>
          </h2>
        </p>
        <p>
          Once you find the {bankName} Personal Loan calculator,&nbsp;To calculate the amount of {bankName} Personal
          Loan EMI, you need to put the following inputs in the {bankName} Personal Loan calculator:
        </p>
        <ul>
          <ul>
            <li>
              <h4>Loan Amount</h4> &ndash; The principal amount borrowed from the bank or financial institution is known
              as the loan amount.
            </li>
            <li>
              <h4>Interest Rate</h4> &ndash; Interest rate can be either fixed or floating.
            </li>
            <li>
              <h4>Loan tenure &ndash;&nbsp;</h4>Is the time over which you choose to repay the loan.
            </li>
          </ul>
        </ul>
        <p>
          The end result will be your EMI, the total interest you&rsquo;ll be paying and the total amount you&rsquo;ll
          be paying by the end.
        </p>
        <p>
          <h2>
            <u>Benefits of {bankName} Personal Loan Calculator?</u>
          </h2>
        </p>
        <ul>
          <li>Fast</li>
          <li>Simple</li>
          <li>Convenient</li>
          <li>Estimate your monthly expenses and have a healthy financial plan</li>
        </ul>
        <p>
          <h2>
            <u>Why should I use {bankName} Personal Loan Calculator?</u>
          </h2>
        </p>
        <p>
          The simplest answer is that it&rsquo;s fast and it&rsquo;s convenient. This means that you can do multiple
          calculations in minutes where such calculations many take longer were you to sit down with a pen and paper.
          These calculators are also super accurate so it eliminates the possibility of errors in calculations, provided
          you provide accurate data.
        </p>
        <p>
          <h2>
            <u>Components of {bankName} Personal Loan Calculator?</u>
          </h2>
        </p>
        <ol>
          <li>
            Amount of {bankName} Personal Loan to calculate {bankName} Personal Loan EMI
          </li>
          <li>Loan term (months or years) to calculate {bankName} Personal Loan EMI</li>
          <li>Rate of interest (percentage) &nbsp;to calculate {bankName} Personal Loan EMI</li>
        </ol>
        <p>
          <h2>
            <u>Will Banks {bankName} Personal Loan Calculator?</u>
          </h2>
        </p>
        <p>
          Yes. These days most, if not all, banks have {bankName} Personal Loan calculator, specific to various loans,
          available on their websites.
        </p>
        <p>
          <h2>
            <u>{bankName} Personal Loan Calculator Eligibility </u>
          </h2>
        </p>
        <p>{bankName} Personal Loan eligibility and &nbsp;interest rate depends upon following factors -</p>
        <ul>
          <li>
            <h4>Loan amount:&nbsp;</h4>Generally, banks offer lower interest rates for higher amount.
          </li>
          <li>
            <h4>Your Salary:&nbsp;</h4>Higher salary bracket individuals are offered {bankName} Personal Loans at lower
            interest rates. {bankName} Personal Loan interest rate of the bank varies with your net monthly income.
          </li>
          <li>
            <h4>Employer Category:&nbsp;</h4>Employer category of the borrower is a major deciding factor in order to
            determine his/her rate of interest. Every bank has a list of company categories of salaried individuals to
            which they avail {bankName} Personal Loan. So, higher company category leads to low bank {bankName} Personal
            Loan rate.
          </li>
          <li>
            <h4>Relationship with the Bank:&nbsp;</h4>Every bank offers special rates, offers and charges to the
            existing account holders of the bank. Those who have managed their accounts and made all the payments on
            time in past will get benefit of low {bankName} Personal Loan interest rate.
          </li>
          <li>
            <h4>Loan Tenure:&nbsp;</h4>
            {bankName} Personal Loans are of longer repayment tenure of 7 years.
          </li>
          <li>
            <h2>Repayment Capacity:&nbsp;</h2>Before giving loan to the borrower, every bank checks the repayment
            capacity of the borrower. Bank verifies the repayment capacity of the customer through{' '}
            <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
              CIBIL
            </a>{' '}
            score or{' '}
            <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
              credit
            </a>{' '}
            score as it has all the details of previous loans taken and their repayments.{' '}
            <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
              CIBIL
            </a>{' '}
            score also gives the information of credit card bills payment.
          </li>
        </ul>
        <table className="" width="636">
          <tbody>
            <tr>
              <td>
                <p>
                  <h2>Eligibility Criteria</h2>
                </p>
              </td>
              <td width="307">
                <p>
                  <h2>Eligibility Details</h2>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Age</p>
              </td>
              <td width="307">
                <p>21 years - 65 years</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum Annual Income</p>
              </td>
              <td width="307">
                <p>
                  Salaried: ₹ 3 Lakhs &nbsp;Self Employed Professionals: ₹ 4 Lakhs &nbsp;Self Employed Businessmen: ₹ 4
                  Lakhs{' '}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum Credit Score</p>
              </td>
              <td width="307">
                <p>700 and above</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Loan Tenure</p>
              </td>
              <td width="307">
                <p>7 years</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <h2>&nbsp;</h2>
        </p>
        <p>
          <h2>
            <u>Documents required to apply {bankName} Personal Loan </u>
          </h2>
        </p>
        <p>
          <h2>
            <u>Salaried Employees:</u>
          </h2>
        </p>
        <ul>
          <ul>
            <li>Filled up loan application form</li>
            <li>2 Passport Size Photo</li>
            <li>
              Copy of{' '}
              <a
                data-mce-href="https://www.incometaxindiaefiling.gov.in/home"
                href="https://www.incometaxindiaefiling.gov.in/home"
              >
                Income Tax
              </a>{' '}
              PAN{' '}
            </li>
            <li>
              Identity Proof &ndash;{' '}
              <a data-mce-href="https://eaadhaar.uidai.gov.in/#/" href="https://eaadhaar.uidai.gov.in/#/">
                Aadhaar
              </a>
              ,{' '}
              <a
                data-mce-href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"
                href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"
              >
                Passport
              </a>{' '}
              /{' '}
              <a data-mce-href="https://parivahan.gov.in/" href="https://parivahan.gov.in/">
                Driving License
              </a>{' '}
              /{' '}
              <a data-mce-href="https://www.nvsp.in/" href="https://www.nvsp.in/">
                Voter ID
              </a>{' '}
              /{' '}
              <a
                data-mce-href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
                href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
              >
                PAN
              </a>
            </li>
            <li>
              Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill (upto 3 months
              old), Passport
            </li>
            <li>
              Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement showing salary credit
              and any EMI debit
            </li>
          </ul>
        </ul>
        <p>
          <h2>
            <u>Self-Employed:</u>
          </h2>
        </p>
        <ul>
          <ul>
            <li>Filled up loan application form</li>
            <li>2 Passport Size Photo</li>
            <li>
              Copy of{' '}
              <a
                data-mce-href="https://www.incometaxindiaefiling.gov.in/home"
                href="https://www.incometaxindiaefiling.gov.in/home"
              >
                Income Tax
              </a>{' '}
              PAN{' '}
            </li>
            <li>
              Identity Proof &ndash;{' '}
              <a data-mce-href="https://eaadhaar.uidai.gov.in/#/" href="https://eaadhaar.uidai.gov.in/#/">
                Aadhaar
              </a>
              ,{' '}
              <a
                data-mce-href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"
                href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"
              >
                Passport
              </a>{' '}
              /{' '}
              <a data-mce-href="https://parivahan.gov.in/" href="https://parivahan.gov.in/">
                Driving License
              </a>{' '}
              /{' '}
              <a data-mce-href="https://www.nvsp.in/" href="https://www.nvsp.in/">
                Voter ID
              </a>{' '}
              /{' '}
              <a
                data-mce-href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
                href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
              >
                PAN
              </a>
            </li>
            <li>
              Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill (upto 3 months
              old), Passport
            </li>
            <li>
              Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement showing salary credit
              and any EMI debit
            </li>
          </ul>
        </ul>
        <p>
          <h2>
            <u>Lowest {bankName} Personal Loan EMI per lakh </u>
          </h2>
        </p>
        <table className="mce-item-table" width="668">
          <tbody>
            <tr>
              <td width="366">
                <p>
                  <h2>Bank</h2>
                </p>
              </td>
              <td width="162">
                <p>
                  <h2>Lowest EMI per lakh</h2>
                </p>
              </td>
              <td width="114">
                <p>
                  <h2>Max Tenure</h2>
                </p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>SBI {bankName} Personal Loan</p>
              </td>
              <td width="162">
                <p>₹ 2,658</p>
              </td>
              <td width="114">
                <p>48 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>HDFC Bank {bankName} Personal Loan</p>
              </td>
              <td width="162">
                <p>₹ 2,162</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>ICICI Bank {bankName} Personal Loan</p>
              </td>
              <td width="162">
                <p>₹ 2,187</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Bajaj Finserv</p>
              </td>
              <td width="162">
                <p>₹ 2,224</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Citibank</p>
              </td>
              <td width="162">
                <p>₹ 2,174</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>IDFC First Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,199</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Axis Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,187</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Tata Capital</p>
              </td>
              <td width="162">
                <p>₹ 1,942</p>
              </td>
              <td width="114">
                <p>72 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Fullerton India</p>
              </td>
              <td width="162">
                <p>₹ 2,732</p>
              </td>
              <td width="114">
                <p>48 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>IndusInd Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,174</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Kotak Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,149</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>RBL Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,326</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>IIFL</p>
              </td>
              <td width="162">
                <p>₹ 2,275</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>HDB Financial</p>
              </td>
              <td width="162">
                <p>₹ 2,326</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>PNB</p>
              </td>
              <td width="162">
                <p>₹ 2,224</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Andhra Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,202</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Yes Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,174</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Union Bank of India</p>
              </td>
              <td width="162">
                <p>₹ 2,260</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Bank of Baroda</p>
              </td>
              <td width="162">
                <p>₹ 3,302</p>
              </td>
              <td width="114">
                <p>36 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Syndicate Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,296</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Standard Chartered Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,174</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Bank of Maharashtra</p>
              </td>
              <td width="162">
                <p>₹ 3,471</p>
              </td>
              <td width="114">
                <p>36 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Canara Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,683</p>
              </td>
              <td width="114">
                <p>48 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Corporation Bank</p>
              </td>
              <td width="162">
                <p>₹ 3,367</p>
              </td>
              <td width="114">
                <p>36 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Karur Vysya Bank</p>
              </td>
              <td width="162">
                <p>₹ 3,413</p>
              </td>
              <td width="114">
                <p>36 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Federal Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,608</p>
              </td>
              <td width="114">
                <p>48 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Indian Overseas Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,260</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Indian Bank</p>
              </td>
              <td width="162">
                <p>₹ 3,276</p>
              </td>
              <td width="114">
                <p>36 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>Allahabad Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,283</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>IDBI Bank</p>
              </td>
              <td width="162">
                <p>₹ 2,286</p>
              </td>
              <td width="114">
                <p>60 months</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <h2>
            <u>Factors affecting {bankName} Personal Loan EMI :</u>
          </h2>
        </p>
        <p>
          <h2>Loan amount &ndash;&nbsp;</h2>This is the amount which a borrower decides to take from the bank in the
          form of a loan. Higher the&nbsp;{bankName} Personal Loan&nbsp;amount, higher will be the EMI.
        </p>
        <p>
          <h2>Rate of interest &ndash;&nbsp;</h2>This is the interest charged on the borrowed loan amount. Lower the{' '}
          {bankName} Personal Loan interest rate, lower the EMI.
        </p>
        <p>
          <h2>Loan Tenure &ndash;&nbsp;</h2>This is the time period for which you take a loan. Longer the {bankName}{' '}
          Personal Loan tenure, lower will be the EMI. Longest loan tenure available across banks in India is 5 years,
          subject to borrower&rsquo;s current age and retirement age.
        </p>
        <p>Following table provides a comparison of EMI for a Rs. 1 lakh loan at different tenures:</p>
        <table className="mce-item-table" width="626">
          <tbody>
            <tr>
              <td width="286">
                <p>
                  <h2>Loan Tenure</h2>
                </p>
              </td>
              <td width="95">
                <p>
                  <h2>2 years</h2>
                </p>
              </td>
              <td width="168">
                <p>
                  <h2>3 years</h2>
                </p>
              </td>
              <td>
                <p>
                  <h2>5 years</h2>
                </p>
              </td>
            </tr>
            <tr>
              <td width="286">
                <p>EMI amount for loan amount Rs. 1 lakh at 10.50%</p>
              </td>
              <td width="95">
                <p>₹ 4,638</p>
              </td>
              <td width="168">
                <p>₹ 3,250</p>
              </td>
              <td>
                <p>₹ 2,149</p>
              </td>
            </tr>
            <tr>
              <td width="286">
                <p>Total amount you pay back to the bank including principal and interest</p>
              </td>
              <td width="95">
                <p>₹ 1.23 Lakh</p>
              </td>
              <td width="168">
                <p>₹ 1.36 Lakh</p>
              </td>
              <td>
                <p>₹ 1.68 Lakh</p>
              </td>
            </tr>
            <tr>
              <td width="286">
                <p>Interest you have to pay over loan tenure</p>
              </td>
              <td width="95">
                <p>₹ 23,034</p>
              </td>
              <td width="168">
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
          If you take a loan for 2 years at the same rate of interest, you will have to pay a higher EMI of ₹ 4,638 and
          a total interest of ₹ 23,034 on your loan amount of Rs. 1 lakh for 2 years, which is much lesser than what you
          paid for a 5 years loan.
        </p>
        <p>
          <h2>
            <u>{bankName} Personal Loan Application Process in India :</u>
          </h2>
        </p>
        <ol>
          <li>
            <h4>{bankName} Personal Loan Application Process Online</h4>
          </li>
        </ol>
        <p>
          If the {bankName} Personal Loan applicant has an existing relationship with the financial lender, he/she can
          apply for a {bankName} Personal Loan via his/her net banking account and could possibly be eligible for a
          pre-approval. For other customers, they can apply for a {bankName} Personal Loan online by following the steps
          mentioned below:
        </p>
        <ul>
          <ul>
            <li>Visit the website of the financial lender.</li>
            <li>Under the loan section, choose {bankName} Personal Loans.</li>
            <li>Click on the &lsquo;apply now&rsquo; option.</li>
            <li>Enter the details in the {bankName} Personal Loan application form and submit it to the bank.</li>
            <li>
              The bank will assess the eligibility of the applicant and request for the submission of the required KYC
              documents and income documents.
            </li>
            <li>
              If the applicant is found eligible, the bank will disburse the loan amount to the bank account of the
              applicant, as mentioned in the application form.
            </li>
          </ul>
        </ul>
        <ol>
          <li>
            <h4>{bankName} Personal Loan application offline</h4>
          </li>
        </ol>
        <p>
          Listed below is the process of applying for a {bankName} Personal Loan at the branch of the financial lender:
        </p>
        <ul>
          <ul>
            <li>Visit the branch of the financial lender.</li>
            <li>Procure the {bankName} Personal Loan application form and enter all the required details.</li>
            <li>Submit relevant documents that prove one&rsquo;s income, age, address and identity.</li>
            <li>The lender will then verify the documents and check the eligibility of the applicant.</li>
            <li>
              The loan amount will be transferred to the bank account of the applicant if he/she is found eligible.
            </li>
          </ul>
        </ul>
        <ol>
          <li>
            <h4>Email and phone banking requests:</h4>
          </li>
        </ol>
        <p>
          You can leave a request for {bankName} Personal Loan with the bank through an email or at the customer service
          centre of the bank. The bank will review your eligibility and contact you to take the process further.
        </p>
        <ol>
          <li>
            <h4>Request through ATM machine:</h4>
          </li>
        </ol>
        <p>
          Nowadays you can apply for {bankName} Personal Loan via ATM kiosks as well. Once you raise a request the bank
          personnel will contact you.
        </p>
        <p>
          <h2>
            <u>How {bankName} Personal Loan Applications are processed :</u>
          </h2>
        </p>
        <p>
          The process of sanctioning of a {bankName} Personal Loan is simpler than property loans such as home loan and
          car loan. This is because, in case of property loans, the bank has to verify not just your financial
          information, but also the credibility and eligibility of the asset that you are purchasing with the loan
          amount. For {bankName} Personal Loan, you are the collateral security yourself, so the bank has to do a
          background verification only on you.
        </p>
        <ul>
          <ul>
            <li>
              Once the bank receives your loan application, it will check the information provided by you against the
              data available with them, such as bank balance, salary deposits made into your account, EMIs being
              deducted from your account, etc.
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
              Some banks might ascertain your credit-worthiness by finding out your{' '}
              <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
                CIBIL
              </a>{' '}
              score. The higher the{' '}
              <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
                CIBIL
              </a>{' '}
              rating, the more your chances of getting the loan approved.{' '}
            </li>
            <li>
              The bank will also review your age, number of years of employment left, and salary growth prospects, to
              decide how much loan it can approve for you and what the repayment period should be.
            </li>
          </ul>
        </ul>
        <p>
          <h2>
            <u>{bankName} Personal Loan for Govt Employees </u>
          </h2>
        </p>
        <ul>
          <li>Interest rate {bankName} Personal Loan for government employee starts @11.49%</li>
          <li>Special offers available for government employees of India and public sector undertakings</li>
          <li>Nil processing fees for defense personnel</li>
          <li>Lowest interest rates for employees of public sector banks</li>
        </ul>
        <p>
          As per the current rates, both HDFC and ICICI bank offer the lowest interest rates of 11.49% for Government
          Employees. Based on processing fee, HDFC Bank and ICICI Bank offer lowest processing fee with 0.99 charges for
          government employees working in Defense. For central govt. employees, the best {bankName} Personal Loan rates
          are 12.25% to 17.25%.
        </p>
        <p>
          <h2>
            <u>SBI {bankName} Personal Loans for Govt Employees</u>
          </h2>
        </p>
        <p>
          SBI offers special Loan Schemes for Government Employees in order to meet their urgent fund requirements. SBI
          Xpress Credit is a loan for meeting medical emergency, wedding or family vacation expenses. All government
          employees are eligible to avail loan of up to Rs. 15 Lakh from SBI with a maximum tenure of 48 months. SBI
          Xpress Credit {bankName} Personal Loan interest rate starts from 11.90%. Another similar scheme, SBI Pension
          Loan is a specially designed schemes for government pensioners. Under the scheme, an amount of up to Rs. 14
          Lakh is available for government pensioners for a tenure of up to 60 months . Interest rates charged on SBI
          Pension loan starts at 12.45%.
        </p>
        <p>
          <u>Government Bodies Who Offer {bankName} Personal Loans</u>
        </p>
        <p>
          <h2>Maharatna PSU &ndash;&nbsp;</h2>Maharatna Pubic Sector Undertaking (PSU) can raise the investment of any
          company from Rs. 1,000 crore to Rs. 5,000 crore. The companies whose 3 years average annual profit is Rs.
          5,000 crore or average annual net worth of Rs. 10,000 crore for 3 years or average annual turnover for 3 years
          is Rs. 20,000 crore are eligible to become a Maharatna PSU. Presently, there are 7 government companies which
          comes under Maharatna categories and these are BHEL, GAIL India, ONGC, NTPC, Coal India, Indian Oil
          Corporation and Steel Authority of India. The rates for these PSUs are different from the rates offered to
          private sector companies. The {bankName} Personal Loan rates for Maharatna PSU employees in HDFC Bank are
          11.49% - 13.99% and in ICICI Bank are 11.60%.
        </p>
        <p>
          <h2>Navratna PSU &ndash;&nbsp;</h2>Navratna PSUs are decided on six parameters like net worth, net profit,
          total manpower cost, total cost of production, cost of services, PBDIT (Profit before Depreciation, Interest
          and Taxes), capital employed etc. A Miniratna company with 4 independent directors on its board team can
          become a Navratna PSU. Navratna PSU includes 17 companies and some of these are Bharat Electronics, Hindustan
          Aeronautics, Bharat Petroleum Corporation, Oil India, NMDC etc. {bankName} Personal Loan interest rates for
          Navratna PSU in HDFC Bank are 11.49% - 13.99% and in ICICI Bank are 12.25%.
        </p>
        <p>
          <h2>Public Sector Banks &ndash;&nbsp;</h2>These banks are those whose majority share of more than 50% is held
          by a government. Currently, there are 21 nationalized banks in India which mainly includes SBI, PNB, Bank of
          Baroda, UCO Bank etc. The loan rates for Public Sector Bank employees in HDFC Bank are 15.50% and in ICICI
          Bank are 13.25% - 15.75%.
        </p>
        <p>
          <h2>Central Government Enterprises &ndash;&nbsp;</h2>In these companies, direct holding of Central Government
          Departments/ Institutes or other Central Public Sector Undertaking is 51% or more. The {bankName} Personal
          Loan rates offered to Central Government Enterprises by HDFC Bank are 15.50% - 17.25% and by ICICI Bank are
          12.25% - 16.75%.
        </p>
        <p>
          <h2>Railways &ndash;&nbsp;</h2>Indian Railways is a State-owned national transporter and is owned and operated
          by Government of India via the Ministry of Railways. Indian Railways employees can&nbsp;get {bankName}{' '}
          Personal Loan&nbsp;by HDFC Bank at 14.99% - 16.99% and by ICICI Bank at 12.25% - 16.75%.
        </p>
        <p>
          <h2>State Government Enterprises -&nbsp;</h2>The rates for State Government employees and Institutes like
          Universities, Colleges, etc. vary from bank to bank. Currently, HDFC Bank {bankName} Personal Loan rates for
          State Government Enterprises are 15.50% - 17.25% and ICICI Bank rates are 12.25% - 16.75%.
        </p>
        <p>
          <h2>
            <u>{bankName} Personal Loans for Defense Personnel</u>
          </h2>
        </p>
        <p>
          Banks have come out with special offers for our armed forces, in lieu of their unmatched contribution to
          India. HDFC and ICICI Bank offer special rates on {bankName} Personal Loans for defense personnel as they
          classify under the armed forces category. Key armed forces category which are eligible for these offers are
          BSF, CRPF, ITBP, CISF, SSB, NDRF, The Indian Airforce, The Indian Navy and The Indian Army. Some banks also
          include the Police Department under their schemes for defense personnel. The eligibility of these loan schemes
          is linked to the seniority and designation of the personnel. The {bankName} Personal Loan rates for defense
          personnel in HDFC Bank are 15.75% and in ICICI Bank are 11.75% - 13.50%. Also, remember to compare the
          processing fees before taking a {bankName} Personal Loan offer for defense personnel as many banks offer nil
          processing fee on loans for armed forces.
        </p>
        <p>
          <h2>
            <u>{bankName} Personal Loan for Pensioners</u>
          </h2>
        </p>
        <p>
          Pensioners or retired individuals are often in need of funds to meet their personal expenses such as a
          child&rsquo;s wedding or medical expenses. Leading banks such as SBI and ICICI Bank offer loans for pensioners
          at lowest discounted rates. These loans can be availed by retired employees of Central Government, State Govt.
          or defense forces. Banks cap the maximum age of pensioners to be eligible for a {bankName} Personal Loan at 76
          years with a maximum loan tenure of up to 5 years. Banks charge a nominal processing fee for pensioners. SBI
          charges 12.45% interest rates for pensioners and interest rate of ICICI Bank for pensioners is in the range of
          16.00% .
        </p>
        <p>
          <h2>
            <u>Government Employees {bankName} Personal Loan Eligibility</u>
          </h2>
        </p>
        <ul>
          <li>Minimum age of the applicant should be 21 years and maximum 65 years.</li>
          <li>
            and permanent salaried employees with minimum income of Rs. 20,000 per month are eligible for {bankName}{' '}
            Personal Loan. Income eligibility may vary depending upon your profile.
          </li>
          <li>
            Bank gives loans to those applicants who are at least 6 months experienced in their current job with a total
            experience of 3 years although it may vary bank to bank.
          </li>
          <li>
            <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
              CIBIL
            </a>{' '}
            score matters as {bankName} Personal Loans are unsecured loans. Your{' '}
            <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
              CIBIL
            </a>{' '}
            score should be 700 or more than that with a good credit history which is equally important to get approval
            on loan application.
          </li>
        </ul>
        <p>
          <h2>
            <u>Loan for Government Employees &ndash; Fees &amp; Charges</u>
          </h2>
        </p>
        <p>
          Bank charge fee from PSU employees on processing and pre closure of {bankName} Personal Loan. These charges
          include -
        </p>
        <p>
          <h2>Processing Fee &ndash;</h2> This fee varies from bank to bank and is higher than secured loans and can
          range upto 2% for government employees.
        </p>
        <p>
          <h2>Pre Closure Fee &ndash;&nbsp;</h2>This fee is charged when you want to close your loan before the
          completion of the tenure. Foreclosure charges are different in all banks. Most of the banks charge a
          preclosure fee from nil to up to 5% on outstanding loan amount.
        </p>
        <p>
          <h2>
            <u>Documents Required for Public Sector {bankName} Personal Loan</u>
          </h2>
        </p>
        <ul>
          <li>Signed application form</li>
          <li>Age proof - Passport, PAN Card, Birth Certificate, Employee ID Card</li>
          <li>
            Copy of{' '}
            <a
              data-mce-href="https://www.incometaxindiaefiling.gov.in/home"
              href="https://www.incometaxindiaefiling.gov.in/home"
            >
              Income Tax
            </a>{' '}
            PAN{' '}
          </li>
          <li>
            Identity Proof &ndash;{' '}
            <a data-mce-href="https://eaadhaar.uidai.gov.in/#/" href="https://eaadhaar.uidai.gov.in/#/">
              Aadhaar
            </a>
            ,{' '}
            <a
              data-mce-href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"
              href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"
            >
              Passport
            </a>{' '}
            /{' '}
            <a data-mce-href="https://parivahan.gov.in/" href="https://parivahan.gov.in/">
              Driving License
            </a>{' '}
            /{' '}
            <a data-mce-href="https://www.nvsp.in/" href="https://www.nvsp.in/">
              Voter ID
            </a>{' '}
            /{' '}
            <a
              data-mce-href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
              href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
            >
              PAN
            </a>
          </li>
          <li>
            Address proof &ndash; Passport, Voter ID Card, Aadhar Card, Utility bills (not more than 3 months old)
          </li>
          <li>
            Income proof &ndash; Form 16 of last 2 years, salary slips of last 6 months and last 6 months bank statement
          </li>
        </ul>
        <p>
          <h2>
            <u>{bankName} Personal Loan Interest Rates of Various Banks </u>
          </h2>
        </p>
        <table className="mce-item-table" width="666">
          <tbody>
            <tr>
              <td width="23%">
                <p>
                  <h2>Bank</h2>
                </p>
              </td>
              <td width="22%">
                <p>
                  <h2>Interest Rates</h2>
                </p>
              </td>
              <td width="14%">
                <p>
                  <h2>Lowest EMI per Rs. one lakh</h2>
                </p>
              </td>
              <td width="39%">
                <p>
                  <h2>Processing Fee</h2>
                </p>
              </td>
            </tr>
            <tr>
              <td width="23%">
                <p>HDFC Bank</p>
              </td>
              <td width="22%">
                <p>10.75% - 22.00%</p>
              </td>
              <td width="14%">
                <p>Rs. 2,162</p>
              </td>
              <td width="39%">
                <p>Upto 2.50% Min Rs. 1,999</p>
              </td>
            </tr>
            <tr>
              <td width="23%">
                <p>Citibank</p>
              </td>
              <td width="22%">
                <p>10.99% - 18.99%</p>
              </td>
              <td width="14%">
                <p>Rs. 2,174</p>
              </td>
              <td width="39%">
                <p>Upto 0.5%</p>
              </td>
            </tr>
            <tr>
              <td width="23%">
                <p>ICICI Bank</p>
              </td>
              <td width="22%">
                <p>11.25% - 22.00%</p>
              </td>
              <td width="14%">
                <p>Rs. 2,187</p>
              </td>
              <td width="39%">
                <p>Starting from 0.99%, Up to 2.25%</p>
              </td>
            </tr>
            <tr>
              <td width="23%">
                <p>Bajaj Finserv</p>
              </td>
              <td width="22%">
                <p>11.99% - 15.50%</p>
              </td>
              <td width="14%">
                <p>Rs. 2,224</p>
              </td>
              <td width="39%">
                <p>Starting from 1.50%, Up to 3%</p>
              </td>
            </tr>
            <tr>
              <td width="23%">
                <p>IDFC Bank</p>
              </td>
              <td width="22%">
                <p>11.50% - 19.50%</p>
              </td>
              <td width="14%">
                <p>Rs. 2,199</p>
              </td>
              <td width="39%">
                <p>Starting from 0.75%, Up to 2%</p>
              </td>
            </tr>
            <tr>
              <td width="23%">
                <p>Tata Capital</p>
              </td>
              <td width="22%">
                <p>11.75% - 18.00%</p>
              </td>
              <td width="14%">
                <p>Rs. 1,942</p>
              </td>
              <td width="39%">
                <p>Flat fee of Rs. 1499*, Upto 2.50%</p>
              </td>
            </tr>
            <tr>
              <td width="23%">
                <p>RBL Bank</p>
              </td>
              <td width="22%">
                <p>13.99% - 18.00%</p>
              </td>
              <td width="14%">
                <p>Rs. 2,326</p>
              </td>
              <td width="39%">
                <p>Upto 2%</p>
              </td>
            </tr>
            <tr>
              <td width="23%">
                <p>IndusInd Bank</p>
              </td>
              <td width="22%">
                <p>11.00% - 20.00%</p>
              </td>
              <td width="14%">
                <p>Rs. 2,174</p>
              </td>
              <td width="39%">
                <p>Min 1% to Max 2.50%</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          <h2>Step 1 : Check loan EMI and calculate eligibility</h2>
        </p>
        <p>
          As you decide to take a {bankName} Personal Loan, always estimate your loan amount eligibility to know the
          loan amount you will be eligible for and can apply for. Also calculate the monthly EMI that you can
          comfortably service given your net take personal salary and other existing fixed obligations including rent
          and EMIs on other existing loans, if any. Your house loan eligibility is calculated based on your age, net
          income, existing obligations, property type, LTV ratio and other factors. EMI is dependent on the loan amount,
          interest rate and tenure. Once you understand your minimum loan requirement, your eligibility and monthly EMI
          you can comfortably service, shortlist the banks which offer you maximum loan amount to meet your
          requirements.
        </p>
        <p>&nbsp;</p>
        <p>
          <h2>Step 2 : Check loan approval status and legal documents</h2>
        </p>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <p>
          <h2>Step 3 : Decide on type of {bankName} Personal Loan interest rate offers</h2>
        </p>
        <p>
          As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on {bankName}{' '}
          Personal Loan comparison of the loan offers of various banks. Some of the interest rate offers that needs to
          be checked are:
        </p>
        <p>
          Choice between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest
          compared to floating rate loans and interest rate remains constant during the tenure of {bankName} Personal
          Loan. In floating rate loan, interest rates are reset at periodic intervals in response to changes in MCLR and
          PLR rates of banks or NBFCs. Majority of housing loans in India today are floating rate loans as it allows the
          borrowers to get {bankName} Personal Loan interest rate in line with the current interest rates.
        </p>
        <p>
          Decide if you need a personal saver loan &ndash; This is a loan with overdraft facility which allows you to
          deposit surplus amount in your {bankName} Personal Loan overdraft account as and when available, allowing you
          to reduce your overall interest amount. This loan is highly recommended for salaried individuals with high
          bonuses and self employed business which is seasonal and has fluctuating cash flows. The interest rates on
          overdraft loan is slightly higher than that of a regular housing loan interest rate.
        </p>
        <p>
          You can also evaluate a mortgage guarantee house loan as it covers any default risk and allows the lender to
          give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to the bank.
        </p>
        <p>
          Check and compare the current {bankName} Personal Loan interest rates of the banks on various types of loan
          products and take an informed decision.
        </p>
        <p>
          <h2>Step 4 : Compare shortlisted banks</h2>
        </p>
        <p>
          In addition to interest rates, banks also charge many other fees on {bankName} Personal Loans. Along with
          interest rates, you should check other associated costs with a your loan which include prepayment charges,
          processing fee, insurance premium and other charges offered by the shortlisted banks. You should calculate all
          inclusive costs on {bankName} Personal Loan to be able to further shortlist the banks and reduce your choice
          to 2-3 banks.
        </p>
        <p>&nbsp;</p>
        <p>
          <h2>Step 5 : Select the bank based on other service related parameters</h2>
        </p>
        <p>
          Finally as you decide to take the loan, also consider other service and transparency related parameters of the
          chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery, doorstep
          services, transparency in the loan process. You also need to understand the trends and changes in MCLR rates
          over a period of time. Last but not the least, read reviews of existing customers on banks on their services,
          interest rates and transparency to take your decision to borrow from a bank.
        </p>
        <p>
          <h2>How is {bankName} Personal Loan calculated?</h2>
        </p>
        <p>
          {bankName} Personal Loan EMI Calculator uses the combination of loan amount, loan tenure and interest rate to
          calculate EMI online. Besides this, it also tells you how much rate of interest you would pay over your loan
          period. Longer the loan tenure, more the amount of interest for same loan amount and interest rate.
        </p>
        <p>
          <h2>How much should I pay as monthly EMI for {bankName} Personal Loan?</h2>
        </p>
        <p>
          Monthly EMI depends upon your income and expenses. Generally, banks advise you to limit your EMI to 35% to 45%
          of your net income so that you can pay your EMI without any burden or difficulty. You can calculate your EMI
          online which will help you to know your repayment capacity.
        </p>
        <p>
          <h2>What if I miss EMI payment or there is an ECS bounce?</h2>
        </p>
        <p>
          If you miss your EMI payment or if there is an ECS bounce then bank may charge a penalty. In addition, it will
          also be reflected in your{' '}
          <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
            CIBIL
          </a>{' '}
          report and your{' '}
          <a data-mce-href="https://www.cibil.com/freecibilscore" href="https://www.cibil.com/freecibilscore">
            CIBIL
          </a>{' '}
          score may get impacted.{' '}
        </p>
        <p>
          <h2>What if I get delay in paying the {bankName} Personal Loan EMI?</h2>
        </p>
        <p>Banks charges penalty for delaying EMI payment. The amount of penalty varies from bank to bank.</p>
        <p>
          <h2>Why it is necessary to calculate EMI beforehand?</h2>
        </p>
        <p>
          It is important to calculate your EMI in advance to maintain stability in future payments. When you avail
          loan, you promise the bank to pay a fixed amount at fixed date every month. So, before availing the loan you
          should consider the stability of your income, monthly expenses and the existing loan obligations to avoid any
          discrepancies in future payments.
        </p>
        <p>
          <h2>Does the loan tenure affect my EMI for {bankName} Personal Loan?</h2>
        </p>
        <p>
          {bankName} Personal Loan can be availed for maximum tenure of 5 years. Tenure affects your monthly EMI. Longer
          the tenure of {bankName} Personal Loan, lower will be your EMI.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
