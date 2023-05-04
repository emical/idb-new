import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function Businessloan(props: {bankname: string | string[] | undefined}) {
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
        <h2>
          {bankName} business loan Calculator &ndash; Calculate your loan EMI, interest rates by various banks,
          eligibility criteria,&nbsp; application process, Document required to apply in India
        </h2>
        <h2>What is {bankName} business loan Calculator?</h2>
        <p>
          When one takes a {bankName} business loan, a natural question that comes to mind is how much the EMI would
          (Equated Monthly Installment) be that one has to pay back to the bank every month. {bankName} business loan
          Calculator helps you in calculating your monthly EMI at your fingertips.
        </p>
        <h2>How to use {bankName} business loan Calculator?</h2>
        <p>
          Once you find the {bankName} business loan Calculator,&nbsp;To calculate the amount of Loan EMI, you need to
          put the following inputs in the {bankName} business loan Calculator:
        </p>
        <ul>
          <li>
            <strong>Loan Amount</strong>&nbsp;&ndash; The principal amount borrowed from the bank or financial
            institution is known as the loan amount.
          </li>
          <li>
            <strong>Interest Rate</strong>&nbsp;&ndash; Interest rate can be either fixed or floating.
          </li>
          <li>
            <strong>Loan tenure &ndash;&nbsp;</strong>Is the time over which you choose to repay the loan.
          </li>
        </ul>
        <p>
          The result will be your EMI, the total interest you&rsquo;ll be paying and the total amount you&rsquo;ll be
          paying by the end.
        </p>
        <h2>Benefits of {bankName} business loan Calculator?</h2>
        <ul>
          <li>Fast</li>
          <li>Simple</li>
          <li>Convenient</li>
          <li>Estimate your monthly expenses and have a healthy financial plan</li>
        </ul>
        <h2>Why should I use {bankName} business loan Calculator?</h2>
        <p>
          The simplest answer is that it&rsquo;s fast and it&rsquo;s convenient. This means that you can do multiple
          calculations in minutes where such calculations many take longer were you to sit down with a pen and paper.
          These calculators are also super accurate so it eliminates the possibility of errors in calculations, provided
          you provide accurate data.
        </p>
        <h2>Components of {bankName} business loan Calculator?</h2>
        <ol>
          <li>Amount of Loan to calculate {bankName} business loan EMI</li>
          <li>Loan term (months or years) to calculate Loan EMI</li>
          <li>Rate of interest (percentage)&nbsp; to calculate Loan EMI</li>
        </ol>
        <h2>Will Banks {bankName} business loan Calculator?</h2>
        <p>
          Yes. These days most, if not all, banks have {bankName} business loan Calculator, specific to various loans,
          available on their websites.
        </p>
        <h2>{bankName} business loan&nbsp;Calculator Eligibility</h2>
        <p>{bankName} business loan&nbsp;eligibility and&nbsp; interest rate depends upon following factors -</p>
        <ul>
          <li>
            <strong>Loan amount: </strong>Generally, banks offer lower interest rates for higher amount.
          </li>
          <li>
            <strong>Your Income :&nbsp;</strong>Higher Income bracket individuals are offered {bankName} business loans
            at lower interest rates. {bankName} business loan&nbsp;interest rate of the bank varies with your net
            monthly income.
          </li>
          <li>
            <strong>Relationship with the Bank: </strong>Every bank offers special rates, offers and charges to the
            existing account holders of the bank. Those who have managed their accounts and made all the payments on
            time in past will get benefit of low {bankName} business loan&nbsp;interest rate.
          </li>
          <li>
            <strong>Repayment Capacity: </strong>Before giving loan to the borrower, every bank checks the repayment
            capacity of the borrower. Bank verifies the repayment capacity of the customer through{' '}
            <a href="https://www.cibil.com/freecibilscore">CIBIL</a> score or{' '}
            <a href="https://www.cibil.com/freecibilscore">credit</a> score as it has all the details of previous loans
            taken and their repayments. <a href="https://www.cibil.com/freecibilscore">CIBIL</a> score also gives the
            information of credit card bills payment.
          </li>
        </ul>
        <table width="636">
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>Eligibility Criteria</strong>
                </p>
              </td>
              <td width="307">
                <p>
                  <strong>Eligibility Details</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Age</p>
              </td>
              <td width="307">
                <p>24 years - 65 years</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Minimum Annual Income</p>
              </td>
              <td width="307">
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
              <td width="307">
                <p>700 and above</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>&nbsp;</strong>
        </p>
        <h3>{bankName} business loans for Self Employed Professionals (SEP) :</h3>
        <p>
          Allopathic doctors, chartered accountants, company secretaries and architects who are practicing their
          profession. Proof of qualification needs to be shared.
        </p>
        <h3>{bankName} business loans for Self Employed Non-Professionals (SENP) :</h3>
        <p>Traders and manufacturers, retailers, proprietors, service providers, etc.</p>
        <h2>{bankName} business loans for Entities:</h2>
        <p>
          <br /> Partnerships,{' '}
          <a href="http://www.mca.gov.in/MinistryV2/incorporation.html">limited liability partnership</a>,{' '}
          <a href="http://www.mca.gov.in/MinistryV2/incorporation_company.html">private limited</a> and closely held
          limited companies. Other constitution types depending on their profile on a case to case basis.
          <br /> <br /> Based on your meeting the {bankName} business loan eligibility criteria, you can get the funds
          up to a limit of Rs.30 lakh to 5 cr.
        </p>
        <h1>Documents required to apply {bankName} business loan</h1>
        <p>
          It is possible to manage the cash flow, upgrade business equipment and grow the business by the option of
          {bankName} business loans. Each bank has specific requirements, criteria and eligibility factors. Here is the
          list of few banks document requirements and other details mentioned.
        </p>
        <ul>
          <ul>
            <li>Filled up loan application form</li>
            <li>2 Passport Size Photo</li>
            <li>
              Copy of <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a> PAN
            </li>
            <li>
              Identity Proof &ndash; <a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,{' '}
              <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a> /{' '}
              <a href="https://parivahan.gov.in/">Driving License</a> / <a href="https://www.nvsp.in/">Voter ID</a> /{' '}
              <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a> /{' '}
              <a href="https://portal2.passportindia.gov.in/AppOnlineProject/welcomeLink">Passport</a>
            </li>
            <li>
              Residential Address Proof - Leave and License /{' '}
              <a href="https://legaldesk.com/documents/rental-agreement">Registered Rent Agreement</a>/ Utility Bill
              (upto 3 months old),{' '}
              <a href="https://portal2.passportindia.gov.in/AppOnlineProject/welcomeLink">Passport</a>
            </li>
            <li>
              Financial documents: <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a> return (ITR)
              &nbsp;&amp; profit &amp; loss &amp; balance sheet of last 2 years, last 6 months bank statement &amp;
              business proof.
            </li>
            <li>
              Financial Documents: Copies of IT returns for the last two years along with the latest Bank statements for
              6 months and P &amp; L and balance sheet for last two years audited by a C.A.
            </li>
          </ul>
        </ul>
        <ul>
          <ul>
            <ul>
              <li>
                Self Employed (Private Ltd. Co. and Partnership Firms): P &amp; L Copies of{' '}
                <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a> returns for the last two years
                and P &amp; L and balance sheet for last two years audited by a chartered accountant.
              </li>
              <li>
                Self Employed Individuals - Professionals: Copies of{' '}
                <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a> returns for the last two years
                and Bank statements for last 6 months and &ndash; Professionals: P &amp; L and balance sheet for last
                two years audited by a chartered accountant
              </li>
              <li>
                Self Employed Individuals - Non Professionals: P &amp; L and balance sheet for last two years audited by
                a chartered accountant and Copies of{' '}
                <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a> returns for the last two years
                and Bank statements
              </li>
            </ul>
          </ul>
        </ul>
        <ul>
          <li>Current year performance and projected turnover on letterhead of the entity</li>
          <li>Proof of Business Continuation</li>
          <li>
            Business Ownership[ Proof: Other Mandatory Documents such as Sole Proprietorship Declaration, Certified true
            copy of Memorandum &amp; Articles of Association
          </li>
          <li>Last 3 years audited financials.</li>
        </ul>
        <h1>Step by step {bankName} business loan&nbsp;Application Process in India :</h1>
        <h3>Step 1 : Check {bankName} business loan EMI and calculate eligibility</h3>
        <p>
          As you decide to take a {bankName} business loan, always estimate your loan amount eligibility to know the
          loan amount you will be eligible for and can apply for. Also calculate the monthly EMI that you can
          comfortably service given your net take personal salary and other existing fixed obligations including rent
          and EMIs on other existing loans, if any. Your house loan eligibility is calculated based on your age, net
          income, existing obligations, property type, LTV ratio and other factors. EMI is dependent on the loan amount,
          interest rate and tenure. Once you understand your minimum loan requirement, your eligibility and monthly EMI
          you can comfortably service, shortlist the banks which offer you maximum loan amount to meet your
          requirements.
        </p>
        <p>&nbsp;</p>
        <h3>Step 2 : Check loan approval status and legal documents for {bankName} business loan</h3>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <h3>Step 3 : Decide on type of {bankName} business loan&nbsp;interest rate offers</h3>
        <p>
          As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on Business
          Loan&nbsp;comparison of the loan offers of various banks. Some of the interest rate offers that needs to be
          checked are:
        </p>
        <p>
          Choice between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest
          compared to floating rate loans and interest rate remains constant during the tenure of {bankName} business
          loan. In floating rate loan, interest rates are reset at periodic intervals in response to changes in MCLR and
          PLR rates of banks or NBFCs. Majority of housing loans in India today are floating rate loans as it allows the
          borrowers to get {bankName} business loan&nbsp;interest rate in line with the current interest rates.
        </p>
        <p>
          Decide if you need a personal saver loan &ndash; This is a loan with overdraft facility which allows you to
          deposit surplus amount in your {bankName} business loan&nbsp;overdraft account as and when available, allowing
          you to reduce your overall interest amount. This loan is highly recommended for salaried individuals with high
          bonuses and self employed business which is seasonal and has fluctuating cash flows. The interest rates on
          overdraft loan is slightly higher than that of a regular housing loan interest rate.
        </p>
        <p>
          You can also evaluate a mortgage guarantee house loan as it covers any default risk and allows the lender to
          give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to the bank.
        </p>
        <p>
          Check and compare the current {bankName} business loan&nbsp;interest rates of the banks on various types of
          loan products and take an informed decision.
        </p>
        <h3>Step 4 : Compare shortlisted banks for {bankName} business loan</h3>
        <p>
          In addition to interest rates, banks also charge many other fees on {bankName} business loans. Along with
          interest rates, you should check other associated costs with a your loan which include prepayment charges,
          processing fee, insurance premium and other charges offered by the shortlisted banks. You should calculate all
          inclusive costs on {bankName} business loan&nbsp;to be able to further shortlist the banks and reduce your
          choice to 2-3 banks.
        </p>
        <p>&nbsp;</p>
        <h3>Step 5 : Select the bank based on other service related parameters for {bankName} business loan</h3>
        <p>
          Finally as you decide to take the loan, also consider other service and transparency related parameters of the
          chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery, doorstep
          services, transparency in the loan process. You also need to understand the trends and changes in MCLR rates
          over a period of time. Last but not the least, read reviews of existing customers on banks on their services,
          interest rates and transparency to take your decision to borrow from a bank.
        </p>
        <h2>{bankName} business loan&nbsp;Interest Rates of Various Banks</h2>
        <table width="666">
          <tbody>
            <tr>
              <td width="23%">
                <p>
                  <strong>Bank</strong>
                </p>
              </td>
              <td width="22%">
                <p>
                  <strong>Interest Rates</strong>
                </p>
              </td>
              <td width="14%">
                <p>
                  <strong>Lowest EMI per Rs. one lakh</strong>
                </p>
              </td>
              <td width="39%">
                <p>
                  <strong>Processing Fee</strong>
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
                <p>&nbsp;</p>
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
        <p>&nbsp;</p>
        <h2>Lowest {bankName} business loan&nbsp;EMI per lakh</h2>
        <table width="668">
          <tbody>
            <tr>
              <td width="366">
                <p>
                  <strong>Bank</strong>
                </p>
              </td>
              <td width="162">
                <p>
                  <strong>Lowest EMI per lakh</strong>
                </p>
              </td>
              <td width="114">
                <p>
                  <strong>Max Tenure</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="366">
                <p>SBI {bankName} business loan</p>
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
                <p>HDFC Bank {bankName} business loan</p>
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
                <p>ICICI Bank {bankName} business loan</p>
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
        <h2>Factors affecting {bankName} business loan&nbsp;EMI :</h2>
        <p>
          <strong>Loan amount &ndash;&nbsp;</strong>This is the amount which a borrower decides to take from the bank in
          the form of a loan. Higher the&nbsp;{bankName} business loan&nbsp;amount, higher will be the EMI.
        </p>
        <p>
          <strong>Rate of interest &ndash;&nbsp;</strong>This is the interest charged on the borrowed loan amount. Lower
          the {bankName} business loan&nbsp;interest rate, lower the EMI.
        </p>
        <p>
          <strong>Loan Tenure &ndash;&nbsp;</strong>This is the time period for which you take a loan. Longer the
          {bankName} business loan&nbsp;tenure, lower will be the EMI. Longest loan tenure available across banks in
          India is 5 years, subject to borrower&rsquo;s current age and retirement age.
        </p>
        <p>Following table provides a comparison of EMI for a Rs. 1 lakh loan at different tenures:</p>
        <table width="626">
          <tbody>
            <tr>
              <td width="286">
                <p>
                  <strong>Loan Tenure</strong>
                </p>
              </td>
              <td width="95">
                <p>
                  <strong>2 years</strong>
                </p>
              </td>
              <td width="168">
                <p>
                  <strong>3 years</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>5 years</strong>
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
        <h1>{bankName} business loan&nbsp;Application Process in India :</h1>
        <h3>{bankName} business loan&nbsp;Application Process Online</h3>
        <p>
          If the {bankName} business loan&nbsp;applicant has an existing relationship with the financial lender, he/she
          can apply for a {bankName} business loan&nbsp;via his/her net banking account and could possibly be eligible
          for a pre-approval. For other customers, they can apply for a {bankName} business loan&nbsp;online by
          following the steps mentioned below:
        </p>
        <ul>
          <ul>
            <li>Visit the website of the financial lender.</li>
            <li>Under the loan section, choose {bankName} business loans.</li>
            <li>Click on the &lsquo;apply now&rsquo; option.</li>
            <li>Enter the details in the {bankName} business loan&nbsp;application form and submit it to the bank.</li>
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
        <h3>{bankName} business loan&nbsp;application offline</h3>
        <p>
          Listed below is the process of applying for a {bankName} business loan&nbsp;at the branch of the financial
          lender:
        </p>
        <ul>
          <li>Visit the branch of the financial lender</li>
          <li>Procure the {bankName} business loan&nbsp;application form and enter all the required details.</li>
          <li>Submit relevant documents that prove one&rsquo;s income, age, address and identity.</li>
          <li>The lender will then verify the documents and check the eligibility of the applicant.</li>
          <li>The loan amount will be transferred to the bank account of the applicant if he/she is found eligible.</li>
        </ul>
        <h3>Email and phone banking requests:</h3>
        <p>
          You can leave a request for {bankName} business loan&nbsp;with the bank through an email or at the customer
          service centre of the bank. The bank will review your eligibility and contact you to take the process further.
        </p>
        <h2>How {bankName} business loan&nbsp;Applications are processed :</h2>
        <p>
          The process of sanctioning of a {bankName} business loan&nbsp;is simpler than property loans such as home loan
          and car loan. This is because, in case of property loans, the bank has to verify not just your financial
          information, but also the credibility and eligibility of the asset that you are purchasing with the loan
          amount. For
          {bankName} business loan, you are the collateral security yourself, so the bank has to do a background
          verification only on you.
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
              <a href="https://www.cibil.com/freecibilscore">CIBIL</a> score. The higher the{' '}
              <a href="https://www.cibil.com/freecibilscore">CIBIL</a> rating, the more your chances of getting the loan
              approved.
            </li>
            <li>
              The bank will also review your age, number of years of employment left, and salary growth prospects, to
              decide how much loan it can approve for you and what the repayment period should be.
            </li>
          </ul>
        </ul>
        <h3>How is {bankName} business loan EMI calculated?</h3>
        <p>
          Loan {bankName} business loan Calculator uses the combination of loan amount, loan tenure and interest rate to
          calculate EMI online. Besides this, it also tells you how much rate of interest you would pay over your loan
          period. Longer the loan tenure, more the amount of interest for same loan amount and interest rate.
        </p>
        <h3>How much should I pay as monthly EMI for {bankName} business loan?</h3>
        <p>
          Monthly EMI depends upon your income and expenses. Generally, banks advise you to limit your EMI to 35% to 45%
          of your net income so that you can pay your EMI without any burden or difficulty. You can calculate your EMI
          online which will help you to know your repayment capacity.
        </p>
        <h3>What if I miss EMI payment or there is an ECS bounce?</h3>
        <p>
          If you miss your EMI payment or if there is an ECS bounce then bank may charge a penalty. In addition, it will
          also be reflected in your <a href="https://www.cibil.com/freecibilscore">CIBIL</a> report and your{' '}
          <a href="https://www.cibil.com/freecibilscore">CIBIL</a> score may get impacted.
        </p>
        <h3>What if I get delay in paying the {bankName} business loan EMI?</h3>
        <p>Banks charges penalty for delaying EMI payment. The amount of penalty varies from bank to bank.</p>
        <h3>Why it is necessary to calculate EMI beforehand?</h3>
        <p>
          It is important to calculate your EMI in advance to maintain stability in future payments. When you avail
          loan, you promise the bank to pay a fixed amount at fixed date every month. So, before availing the loan you
          should consider the stability of your income, monthly expenses and the existing loan obligations to avoid any
          discrepancies in future payments.
        </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
