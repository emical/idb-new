import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function UsedbikeloanApplyOnline(props: {bankname: string | string[] | undefined}) {
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
        <h1>Step by step {bankName} Used Bike loan application process:</h1>
        <h2>{bankName} Used Bike loan Application Process Online</h2>
        <p>
          If the {bankName} Used Bike loan applicant has an existing relationship with the financial lender, he/she can
          apply for a{bankName} Used Bike loan via his/her net banking account and could possibly be eligible for a
          pre-approval. For other customers, they can apply for a {bankName} Used Bike loan online by following the
          steps mentioned below:
        </p>
        <ul>
          <li>&nbsp; &nbsp; &nbsp; Visit the website of the financial lender.</li>
          <li>&nbsp; &nbsp; &nbsp; Under the loan section, choose {bankName} Used Bike loans.</li>
          <li>&nbsp; &nbsp; &nbsp; Click on the &lsquo;apply now&rsquo; option.</li>
          <li>
            &nbsp; &nbsp; &nbsp; Enter the details in the {bankName} Used Bike loan application form and submit it to
            the bank.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The bank will assess the eligibility of the applicant and request for the submission of
            the required KYC documents and income documents.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; If the applicant is found eligible, the bank will disburse the loan amount to the bank
            account of the applicant, as mentioned in the application form.
          </li>
        </ul>
        <h2>{bankName} Used Bike loan application offline</h2>
        <p>
          Listed below is the process of applying for a {bankName} Used Bike loan at the branch of the financial lender:
        </p>
        <ul>
          <li>&nbsp; &nbsp; &nbsp; Visit the branch of the financial lender</li>
          <li>
            &nbsp; &nbsp; &nbsp; Procure the {bankName} Used Bike loan application form and enter all the required
            details.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; Submit relevant documents that prove one&rsquo;s income, age, address and identity.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The lender will then verify the documents and check the eligibility of the applicant.
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; The loan amount will be transferred to the bank account of the applicant if he/she is
            found eligible.
          </li>
        </ul>
        <h2>Email and phone banking requests for {bankName} Used Bike loan:</h2>
        <p>
          You can leave a request for {bankName} Used Bike loan with the bank through an email or at the customer
          service centre of the bank. The bank will review your eligibility and contact you to take the process further.
        </p>
        <p>&nbsp;</p>
        <h2>
          <strong>
            Step 1 : Check {bankName} Used Bike loan and calculate {bankName} Used Bike loan eligibility &ndash;{' '}
            {bankName} Used Bike loan Calculator
          </strong>
        </h2>
        <p>
          As you decide to take a {bankName} Used Bike loan, always estimate your loan amount eligibility to know the
          loan amount you will be eligible for and can apply for. Also calculate the monthly EMI that you can
          comfortably service given your net take personal salary and other existing fixed obligations including rent
          and EMIs on other existing loans, if any. Your house loan eligibility is calculated based on your age, net
          income, existing obligations, property type, LTV ratio and other factors. EMI is dependent on the loan amount,
          interest rate and tenure. Once you understand your minimum loan requirement, your eligibility and monthly EMI
          you can comfortably service, shortlist the banks which offer you maximum loan amount to meet your
          requirements.
        </p>
        <h2>
          <strong>
            Step 2 : Check loan approval status and legal documents &ndash; {bankName} Used Bike loan Calculator
          </strong>
        </h2>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <h2>
          <strong>
            Step 3 : Decide on type of {bankName} Used Bike loan interest rate offers &ndash; {bankName} Used Bike loan
            Calculator
          </strong>
        </h2>
        <p>
          As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on {bankName} Used
          Bike loan comparison of the loan offers of various banks. Some of the interest rate offers that needs to be
          checked are:
        </p>
        <p>
          Choice between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest
          compared to floating rate loans and interest rate remains constant during the tenure of {bankName} Used Bike
          loan. In floating rate loan, interest rates are reset at periodic intervals in response to changes in MCLR and
          PLR rates of banks or NBFCs. Majority of {bankName} Used Bike loans in India today are floating rate loans as
          it allows the borrowers to get {bankName} Used Bike loan interest rate in line with the current interest
          rates.
        </p>
        <p>
          Decide if you need a home saver loan &ndash; This is a loan with overdraft facility which allows you to
          deposit surplus amount in your {bankName} Used Bike loan overdraft account as and when available, allowing you
          to reduce your overall interest amount. This loan is highly recommended for salaried individuals with high
          bonuses and self employed Used bike which is seasonal and has fluctuating cash flows. The interest rates on
          overdraft loan is slightly higher than that of a regular {bankName} Used Bike loan interest rate.
        </p>
        <p>
          You can also evaluate a mortgage guarantee house loan as it covers any default risk and allows the lender to
          give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to the bank.
        </p>
        <p>
          Check and compare the current {bankName} Used Bike loan interest rates of the banks on various types of loan
          products and take an informed decision.
        </p>
        <h2>
          <strong>Step 4 : Compare shortlisted banks | {bankName} Used Bike loan Calculator</strong>
        </h2>
        <p>
          In addition to interest rates, banks also charge many other fees on {bankName} Used Bike loans. Along with
          interest rates, you should check other associated costs with a your loan which include prepayment charges,
          processing fee, insurance premium and other charges offered by the shortlisted banks. You should calculate all
          inclusive costs on {bankName} Used Bike loan to be able to further shortlist the banks and reduce your choice
          to 2-3 banks.
        </p>
        <h2>
          <strong>
            Step 5 : Select the bank based on other service related parameters&nbsp; |&nbsp; {bankName} Used Bike loan
            Calculator
          </strong>
        </h2>
        <p>
          Finally as you decide to take the loan, also consider other service and transparency related parameters of the
          chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery, doorstep
          services, transparency in the loan process. You also need to understand the trends and changes in MCLR rates
          over a period. Last but not the least, read reviews of existing customers on banks on their services, interest
          rates and transparency to take your decision to borrow from a bank.
        </p>
        <h2>
          <strong>Comparison of {bankName} Used Bike loan Interest Rates with other banks and lenders in India:</strong>
        </h2>
        <p>
          It is important to compare various banks and their offers before choosing {bankName} Used Bike loan. Here is
          the guide how to compare {bankName} Used Bike loan with other other banks and lenders. Compare using below
          factors.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp; <strong>Processing fees</strong> &ndash; Most banks charges minimum processing fees of Nil
          to upto Rs.1,000. To get lowest fee, comparison of {bankName} Used Bike loan rates, offers and cashback
          applying online after comparison
        </p>
        <p>
          &nbsp;&nbsp;&nbsp; <strong>Insurance premium</strong> &ndash; {bankName} Used Bike loans are secured loans,
          but it is advisable to take an insurance policy when availing a loan. However, the premium varies from bank to
          bank depending upon the risk coverage under various policies. So, check the loan sanction letter carefully to
          know the coverage and premium.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp; <strong>Prepayment and foreclosure</strong> &ndash; When you want to repay your Used bike
          loan partially before time, it is called part prepayment. In case you decide to pay the entire {bankName} Used
          Bike loan amount before time, it is called foreclosure. Banks typically levy prepayment or foreclosure charges
          in such situations and these can range from nil to even upto 3%. So, check carefully if the low interest rate
          Used Bike Loan you are getting comes with high prepayment or foreclosure charges. Note that some {bankName}{' '}
          Used Bike loans cannot be repaid before time.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp; <strong>Down payment</strong> &ndash; Banks offer {bankName} Used Bike loans either at 80%
          of on-road price or 100% of ex-showroom price. However, 80% of on-road is almost equivalent to 95% of
          ex-showroom price. You are advised to fund maximum as down payment as it reduces your burden of high monthly
          payments.
        </p>
        <h2>
          <strong>Do&rsquo;s and Don&rsquo;ts while taking {bankName} Used Bike loan</strong>
        </h2>
        <p>
          To get best and lowest {bankName} Used Bike loan interest rates online, read the do&rsquo;s and don&rsquo;ts
          mentioned below.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>Do&rsquo;s</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Don&rsquo;ts</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>
                    <strong>Check best discount and offers &ndash;</strong> Always check current offers and Used bike
                    loan interest rates offered to employees of large reputed companies
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <strong>Do not apply for loan amount more than what you are eligible for &ndash;</strong> Applying
                    for an amount higher than your eligibility may lead to rejection of your loan application
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>
                    <strong>Compare Used bike rates based on loan amount &ndash;</strong> Some banks offer lowest
                    interest rate for {bankName} Used Bike loan at higher loan amount
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <strong>Do not apply with multiple banks &ndash;</strong> Simultaneous loan applications gets
                    recorded in your CIBIL report and can hurt your chances of getting a {bankName} Used Bike loan
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>
                    <strong>Discount for tenures &ndash;</strong> Banks may offer lower rates on {bankName} Used Bike
                    loan for certain tenure
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <strong>Your salary bank may not offer the cheapest loan &ndash;</strong> Various banks keep
                    offering attractive schemes to acquire premium customers. Hence, salary bank may not be the best
                    option
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p>
          <br />
          <br />
        </p>
      </div>
    </Grid>
  )
}
