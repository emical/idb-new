import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function Twowheelerloan(props: {bankname: string | string[] | undefined}) {
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
          When one takes a {bankName} Two wheeler loan, a natural question that comes to mind is how much the EMI would
          (Equated Monthly Installment) be that one must pay back to the bank every month.
        </p>
        <p>Hope the following FAQ&rsquo;s about {bankName} Two wheeler loan will answer all your questions</p>
        <h2>
          {bankName} Two wheeler loan Calculator &ndash; interest rates, eligibility criteria, application process,
          documents required, tax benefits, schemes, tips before applying
        </h2>
        <h2>What is {bankName} Two wheeler loan Calculator?</h2>
        <p>
          A {bankName} Two wheeler loan calculator helps you know the amount of the EMIs that you will need to pay
          towards your Two wheeler loan and helps make an informed decision. The{' '}
          <a href="https://emi-calculators.com/">EMI-Calculators.com'</a>s {bankName} Two wheeler loan calculator also
          functions as a {bankName} Two wheeler loan interest calculator, as you will be able to know the interest
          amount due on your Two wheeler loan, in addition to the overall EMI amount, in just 3 simple steps. First,
          enter the loan amount that you wish to take. Then, select your preferred tenor. Finally, put in the {bankName}{' '}
          Two wheeler loan interest rate advertised on the website. That's all!
        </p>
        <h2>What is {bankName} Two wheeler loan?</h2>
        <p>
          EMI stands for Equated Monthly Instalment. EMI is the monthly repayment that a {bankName} Two wheeler loan
          borrower must make to repay the {bankName} Two wheeler loan within the specified loan tenor.
        </p>
        <p>
          The following table illustrates the EMI on several {bankName} Two wheeler loan amounts with different tenures.
          The applicable rate of interest is 8.60%* onwards.
        </p>
        <h2>Factors that Affect {bankName} Two wheeler loan</h2>
        <ul>
          <li>
            <strong>Principal</strong>- The principal is the loan amount that you avail from the lender. It is directly
            proportional to your EMIs - lower principal will lower your monthly instalments and vice versa.
          </li>
          <li>
            <strong>Rate of interest</strong>- The rate of interest is the rate at which the lender offers you the loan.
            It is also directly proportional to the value of your loan EMIs.
          </li>
          <li>
            <strong>Tenure</strong>- The tenure is the time within which you repay your loan. The tenure is inversely
            proportional to your loan EMIs - longer tenure makes the monthly instalments cheaper and vice versa.
          </li>
        </ul>
        <h2>Eligibility Criteria for {bankName} Two wheeler loan</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Minimum and Maximum Age</p>
              </td>
              <td>
                <p>
                  21 Yrs. &ndash; 65 Yrs.
                  <br /> Note: However, many banks require minimum age of 18 years
                </p>
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
                    <br /> Note: Loan amount depends upon the value of the Two wheeler and the EMI you can pay
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
                <p>CIBIL Score for {bankName} Two wheeler loan</p>
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
        <p>&nbsp;</p>
        <h2>Documents required to apply {bankName} Two wheeler loan</h2>
        <h3>Salaried Employees:</h3>
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
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>
          </li>
          <li>
            Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill (upto 3 months old),
            Passport
          </li>
          <li>
            Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement showing salary credit
            and any EMI debit
          </li>
          <li>CIBIL Report</li>
          <li>Two wheeler quotation</li>
        </ul>
        <h3>Self-Employed:</h3>
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
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>
          </li>
          <li>
            Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill (upto 3 months old),
            Passport
          </li>
          <li>
            Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement showing salary credit
            and any EMI debit
          </li>
          <li>CIBIL Report</li>
          <li>Two wheeler quotation</li>
        </ul>
        <h2>{bankName} Two wheeler loan for Different Loan Amounts</h2>
        <p>Following table shows the EMIs for various loan amount based on different tenures at 8.60%* onwards</p>
        <ul>
          <li>
            The EMI that you can avail with {bankName} Two wheeler loan of 10 Lakh is 10,024 with 15-years tenure. The
            EMI increases when you opt for tenure of 5 years.
          </li>
          <li>
            The EMI for a loan of 15 Lakh is higher &ndash; 30,992, when you opt for 5-years. It decreases to 15,036 if
            you opt for tenure of 15 years.
          </li>
          <li>
            For a loan of 25 Lakh, the cheapest EMI you can avail with 15 year tenure - 25,060. Decreasing the tenure to
            5 years increases the EMI to 51,654.
          </li>
          <li>
            The EMI is 72,315 when you avail loan of 35 Lakh for 5 years. The same will decrease to 35,084 if you
            increase the tenure to 15 years.
          </li>
          <li>
            The cheapest EMI comes with 15-years tenure with loan of 50 Lakh &ndash; 50,120. The EMIs double when you
            opt for 5 years tenure.
          </li>
        </ul>
        <h2>Step by step guide before having {bankName} Two wheeler loan:</h2>
        <h2>
          Step 1 : Check {bankName} Two wheeler loan and calculate {bankName} Two wheeler loan eligibility &ndash;{' '}
          {bankName} Two wheeler loan Calculator
        </h2>
        <p>
          As you decide to take a {bankName} Two wheeler loan, always estimate your loan amount eligibility to know the
          loan amount you will be eligible for and can apply for. Also calculate the monthly EMI that you can
          comfortably service given your net take personal salary and other existing fixed obligations including rent
          and EMIs on other existing loans, if any. Your house loan eligibility is calculated based on your age, net
          income, existing obligations, property type, LTV ratio and other factors. EMI is dependent on the loan amount,
          interest rate and tenure. Once you understand your minimum loan requirement, your eligibility and monthly EMI
          you can comfortably service, shortlist the banks which offer you maximum loan amount to meet your
          requirements.
        </p>
        <h2>Step 2 : Check loan approval status and legal documents &ndash; {bankName} Two wheeler loan Calculator</h2>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <h2>
          Step 3 : Decide on type of {bankName} Two wheeler loan interest rate offers &ndash; {bankName} Two wheeler
          loan Calculator
        </h2>
        <p>
          As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on {bankName} Two
          wheeler loan comparison of the loan offers of various banks. Some of the interest rate offers that needs to be
          checked are:
        </p>
        <p>
          Choice between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest
          compared to floating rate loans and interest rate remains constant during the tenure of {bankName} Two wheeler
          loan. In floating rate loan, interest rates are reset at periodic intervals in response to changes in MCLR and
          PLR rates of banks or NBFCs. Majority of {bankName} Two wheeler loans in India today are floating rate loans
          as it allows the borrowers to get {bankName} Two wheeler loan interest rate in line with the current interest
          rates.
        </p>
        <p>
          Decide if you need a home saver loan &ndash; This is a loan with overdraft facility which allows you to
          deposit surplus amount in your {bankName} Two wheeler loan overdraft account as and when available, allowing
          you to reduce your overall interest amount. This loan is highly recommended for salaried individuals with high
          bonuses and self employed business which is seasonal and has fluctuating cash flows. The interest rates on
          overdraft loan is slightly higher than that of a regular {bankName} Two wheeler loan interest rate.
        </p>
        <p>
          You can also evaluate a mortgage guarantee house loan as it covers any default risk and allows the lender to
          give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to the bank.
        </p>
        <p>
          Check and compare the current {bankName} Two wheeler loan interest rates of the banks on various types of loan
          products and take an informed decision.
        </p>
        <h2>Step 4 : Compare shortlisted banks | {bankName} Two wheeler loan Calculator</h2>
        <p>
          In addition to interest rates, banks also charge many other fees on {bankName} Two wheeler loans. Along with
          interest rates, you should check other associated costs with a your loan which include prepayment charges,
          processing fee, insurance premium and other charges offered by the shortlisted banks. You should calculate all
          inclusive costs on {bankName} Two wheeler loan to be able to further shortlist the banks and reduce your
          choice to 2-3 banks.
        </p>
        <h2>
          Step 5 : Select the bank based on other service related parameters &nbsp;| &nbsp;{bankName} Two wheeler loan
          Calculator
        </h2>
        <p>
          Finally as you decide to take the loan, also consider other service and transparency related parameters of the
          chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery, doorstep
          services, transparency in the loan process. You also need to understand the trends and changes in MCLR rates
          over a period. Last but not the least, read reviews of existing customers on banks on their services, interest
          rates and transparency to take your decision to borrow from a bank.
        </p>
        <h2>Comparison of {bankName} Two wheeler loan Interest Rates in India</h2>
        <p>
          &nbsp;&nbsp;&nbsp; <strong>Processing fees</strong> &ndash; Most banks charges minimum processing fees of Nil
          to upto Rs.1,000. To get lowest fee, comparison of {bankName} Two wheeler loan rates, offers and cashback
          applying online after comparison
        </p>
        <p>
          &nbsp;&nbsp;&nbsp; <strong>Insurance premium</strong> &ndash; {bankName} Two wheeler loans are secured loans,
          but it is advisable to take an insurance policy when availing a loan. However, the premium varies from bank to
          bank depending upon the risk coverage under various policies. So, check the loan sanction letter carefully to
          know the coverage and premium.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp; <strong>Prepayment and foreclosure</strong> &ndash; When you want to repay your Two wheeler
          loan partially before time, it is called part prepayment. In case you decide to pay the entire Two wheeler
          loan amount before time, it is called foreclosure. Banks typically levy prepayment or foreclosure charges in
          such situations and these can range from nil to even upto 3%. So, check carefully if the low interest rate Two
          wheeler loan you are getting comes with high prepayment or foreclosure charges. Note that some Two wheeler
          loans cannot be repaid before time.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp; <strong>Down payment</strong> &ndash; Banks offer {bankName} Two wheeler loans either at
          80% of on-road price or 100% of ex-showroom price. However, 80% of on-road is almost equivalent to 95% of
          ex-showroom price. You are advised to fund maximum as down payment as it reduces your burden of high monthly
          payments.
        </p>
        <h2>Do&rsquo;s and Don&rsquo;ts while taking {bankName} Two wheeler loan</h2>
        <p>
          To get best and lowest {bankName} Two wheeler loan interest rates online, read the do&rsquo;s and don&rsquo;ts
          mentioned below.
        </p>
        <table width="694">
          <thead>
            <tr>
              <td>
                <p>
                  <strong>
                    <u>Do&rsquo;s</u>
                  </strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Don&rsquo;ts</strong>
                </p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>
                    <strong>Check best discount and offers &ndash;</strong> Always check current offers and Two wheeler
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
                    <strong>Compare Two wheeler rates based on loan amount &ndash;</strong> Some banks offer lowest
                    interest rate for {bankName} Two wheeler loan at higher loan amount
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    <strong>Do not apply with multiple banks &ndash;</strong> Simultaneous loan applications gets
                    recorded in your CIBIL report and can hurt your chances of getting a {bankName} Two wheeler loan
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>
                    <strong>Discount for tenures &ndash;</strong> Banks may offer lower rates on {bankName} Two wheeler
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
        <h2>{bankName} Two wheeler loan Calculator FAQs</h2>
        <h3>What is the minimum and maximum tenure of {bankName} Two wheeler loan?</h3>
        <p>
          {bankName} Two wheeler loan is generally taken for a short period of time. Generally, {bankName} Two wheeler
          loan tenure is between 2 years to 5 years.
        </p>
        <h3>What is ex-showroom price and on road price?</h3>
        <p>
          <strong>
            <u>Ex-showroom price</u>
          </strong>{' '}
          is the price of the Two wheeler including excise duty but excluding local duties and statutory charges.
        </p>
        <p>
          <strong>
            <u>On road price</u>
          </strong>{' '}
          is the price you pay for the Two wheeler including the ex-showroom price and cost of registration, insurance,
          octroi, municipal entry tax, road tax and any accessories. The on road price tends to be 15-25% more than the
          ex-showroom price and may vary from city to city.
        </p>
        <h3>How can I prevent rejection of my loan application?</h3>
        <p>
          Banks or NBFCs give Two wheeler finance to those borrowers about whom they are sure that he/her can repay the
          loan. You need to know few things if you don&rsquo;t want your application to get rejected:
        </p>
        <ul>
          <li>
            Job stability for {bankName} Two wheeler loan is important. You need to be stable in your current job as too
            many job changes can impact negatively at the time of loan approval
          </li>
          <li>
            You should not be having too many loans running at one time. Banks can reject your application if you are
            already paying too many EMI&rsquo;s at same time.
          </li>
          <li>
            Don&rsquo;t give you landline number for tele-verification if you know that nobody else is there at home
            when you are at work. A typing mistake in apartment number can also put negative impact on lenders.
          </li>
        </ul>
        <p>Banks or lenders keep on adding these small things and reject your loan application.</p>
        <h3>What should I do if my {bankName} Two wheeler loan application gets rejected by bank?</h3>
        <p>
          Some possible reasons why your application gets rejected are already running multiple loans and hence a bank
          may be in doubt about your repayment ability of a new loan.
        </p>
        <ul>
          <li>
            In this case, if you have a spouse who is also working, you can add him/her as a co-applicant to boost the
            combined salary levels.
          </li>
          <li>Clear your old debts first so that your leverage levels come down.</li>
          <li>
            Balance transfer of your existing loans so that the rate of interest on loans can come down and additional
            loan can be availed.
          </li>
        </ul>
        <h3>What is the interest rate on the {bankName} Two wheeler loan?</h3>
        <p>
          The interest rate for a {bankName} Two wheeler loan starts at 18.00%. The interest rates may vary across
          different Banks. Further, the interest factor is also dependent on the type of two-wheelers you wish to buy,
          the income of the applicant, age, and occupation.
        </p>
        <h3>How to finance a Two wheeler?</h3>
        <p>
          Opting for a {bankName} Two wheeler loan is the easiest way to finance a Two wheeler. A variety of Banks and
          other lenders could provide you with funds to buy your dream Two wheeler. However, one needs to meet the
          essential eligibility criteria and documentation requirements.
        </p>
        <h3>Can a student get a {bankName} Two wheeler loan?</h3>
        <p>
          A student can apply for a {bankName} Two wheeler loan if he or she fulfills the basic eligibility criteria. An
          applicant must be a minimum of 21 years of age. However, the loan can be applied only with a co-applicant, who
          has a good CIBIL score and a fixed, reliable source of income.
        </p>
        <h3>How much can I pay as a down payment on a Two wheeler?</h3>
        <p>
          A down payment usually ranges from 15-30% of the two-wheeler value. However, it may vary across the lender.
          The amount of down payment made on the two-wheeler will decide the EMI of the {bankName} Two wheeler loan. The
          bigger the down payment, the lower the EMI.
        </p>
        <h3>What benefits do I get by calculating my EMI before taking an {bankName} Two wheeler loan?</h3>
        <p>Calculating your EMI before taking a loan can help you in the following ways:</p>
        <p>
          You can manage your monthly expenses better. Once you know how much you must pay towards your loan each month,
          you can then budget the other expenses accordingly. You will be able to determine what tenure to choose
          depending on how much you can afford to repay every month. Planning prepayments and pre-closures can be done
          easily, helping you pay off your loan faster.
        </p>
        <h3>2. Will my EMIs change in case of prepayment?</h3>
        <p>
          When you prepay a part of your loan, the outstanding principal will reduce. This allows you to opt for a lower
          EMI while keeping the loan tenure the same. Or, you can maintain the same monthly instalment as before and
          reduce the tenure of the loan. It is advisable to maintain the same EMI and reduce the tenure since this will
          reduce the amount of interest you pay in the long run.
        </p>
        <h3>3. Can I use the same EMI calculator for all banks?</h3>
        <p>
          Yes. An EMI calculator is a common tool and is not tied to any bank or financial institution. If you know your
          principal, interest rate, processing charges, and tenure, you should be able to generate your EMI.
          BankBazaar&rsquo;s calculator also allows you to factor in prepayment details.
        </p>
        <h3>4.How accurate is an EMI calculator?</h3>
        <p>
          An EMI calculator estimates your loan repayment details based on the data you give it. But the EMI that your
          bank gives you may be a little different due to other charges involved in the calculation. Also, if your Two
          wheeler loan is subject to a floating rate, then the interest rate changes every year based on the MCLR or
          base rate change. Even a slight change in interest rate will make a difference to the total loan amount you
          repay, depending on the duration of the loan. These variables limit the accuracy of an EMI calculator.
        </p>
        <h3>
          5. Why are the interest charges in the repayment table slightly higher during the initial months of the loan?
        </h3>
        <p>
          The interest rate of your loan is applied based on &ldquo;reducing balance principle&rdquo;. Because of this,
          the interest will be slightly higher during the initial phase since the principal outstanding is higher. As
          this amount reduces, the incidence of interest will also come down proportionately.
        </p>
        <h3>How is {bankName} Two wheeler loan Calculated?</h3>
        <p>
          Equated Monthly Installment &ndash; EMI for short &ndash; is the amount payable every month to the bank or any
          other financial institution until the loan amount is fully paid off. It consists of the interest on loan as
          well as part of the principal amount to be repaid. The sum of principal amount and interest is divided by the
          tenure, i.e., number of months, in which the loan has to be repaid. This amount has to be paid monthly.
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
          <li>n is the duration of the loan in terms of months. So if you select a term of 5 years, n will be 60.</li>
        </ol>
        <p>
          &nbsp;EMI is just the amount you (borrower) repay to the bank, each calendar month, to clear your outstanding
          loan.You have to repay the EMI each month, on a particular fixed date, for the entire duration (tenure) of the
          loan, till you repay the entire outstanding amount. (amount borrowed + interest).
        </p>
        <p>
          <strong>For Example</strong>, if you borrow 10,000,000 units of a currency from the bank at 10.5% annual
          interest for a period of 10 years (i.e., 120 months), then EMI = Units of currency 10,000,000 * 0.00875 * (1 +
          0.00875)^120 / ((1 + 0.00875)^120 &ndash; 1) = Units of currency 134,935. i.e., you will have to pay total
          currency units 134,935 for 120 months to repay the entire loan amount. The total amount payable will be
          134,935 * 120 = 16,192,200 currency units that includes currency units 6,192,200 as interest toward the loan.
        </p>
        <h3>How to Calculate EMI for {bankName} Two wheeler loan?</h3>
        <p>
          Calculating the EMI amount on your {bankName} Two wheeler loan is quite easy. Simply enter the loan amount you
          wish to take, the tenor (in months, and not years) and the rate of interest, in the required fields.
        </p>
        <p>
          Once you find the EMI calculator for {bankName} Two wheeler loan,&nbsp;To calculate the amount of EMI, you
          need to put the following inputs in the EMI calculator:
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
        <h3>What are the Advantages of Knowing {bankName} Two wheeler loan in Advance?</h3>
        <p>
          Good planning always ensures stable finances. Calculating the {bankName} Two wheeler loan in advance gives a
          better understanding of the amount of money you would have to spend every month. Hence, you can plan well and
          decide whether you are able to spare that much money or not.
        </p>
        <h3>Components of a {bankName} Two wheeler loan Calculator?</h3>
        <ol>
          <li>Amount of loan to calculate EMI</li>
          <li>Loan term (months or years) to calculate EMI</li>
          <li>Rate of interest (percentage) to calculate EMI</li>
        </ol>
        <h3>How to use {bankName} Two wheeler loan Calculator?</h3>
        <p>Using the EMI Calculator is a very simple process. All you need to do is follow these steps&ndash;</p>
        <ul>
          <li>Go the {bankName} Two wheeler loan Calculator page</li>
          <li>Choose the loan amount, rate of interest, and tenor (in months)</li>
        </ul>
        <p>
          That's all! You will instantly get your {bankName} Two wheeler loan amount along with the interest amount
          payable on the loan.
        </p>
        <h3>What are the Advantages of a {bankName} Two wheeler loan Calculator?</h3>
        <p>
          A {bankName} Two wheeler loan Calculator helps you to decide whether you can afford the financial commitment
          of a Two wheeler loan in the long term. If you want, you can increase or decrease your EMI amount depending on
          the amount of loan you are taking and the time period for which you'll be paying the EMIs.
        </p>
        <p>
          <strong>Quick Results</strong> &ndash; Applicants can easily use this calculator to calculate the EMIs that
          they will be liable to pay for the pre-determined tenure and interest rate that the {bankName} Two wheeler
          loans are offered, in mere seconds.
        </p>
        <p>
          <strong>Simplicity</strong> &ndash; The calculations using this EMI calculator for {bankName} Two wheeler loan
          are based on the applicant providing three key bits of information i.e. the principal amount of the loan, the
          applicable rate of interest and the loan tenure.
        </p>
        <p>
          <strong>Varying Combinations</strong> &ndash; With the {bankName} Two wheeler loan calculator, you can easily
          input different interest rates and tenures to look for a combination that will allow you to easily repay the
          principal amount, without putting undue pressure on your finances.
        </p>
        <p>
          Free Usage &ndash; The <a href="https://emi-calculators.com/">EMI-Calculators.com'</a>s {bankName} Two wheeler
          loan calculator is a user friendly {bankName} Two wheeler loan calculator that is available to everyone free
          of charge and is easy to use
        </p>
        <h3>What Is a {bankName} Two wheeler loan Amortization Schedule?</h3>
        <p>
          A {bankName} Two wheeler loan amortization schedule is the table or record which details all the periodic
          payments on your loan. This is generated through an amortization calculator.
        </p>
        <p>
          Amortization is basically the procedure of repaying a loan through regular payments over a specified period.
          An amortization schedule is the total tally of loan payments showing the amount of interest and principal
          contained in each payment, until the loan is repaid in full.
        </p>
        <h3>What are the factors that impact monthly {bankName} Two wheeler loan?</h3>
        <p>
          The estimated monthly investment (EMI) depends on a number of factors such the amount, the tenure of the loan,
          and the interest rate. The estimated monthly investment (EMI) differs according to the loan type and the
          amount. If the interest rate of the loan is fixed, the estimated monthly investment remains fixed as well for
          the entire time the loan is active. The borrower can also opt for a pre-payment wherein the estimated monthly
          investment (EMI) gets reduced. If the interest rate is floating, the EMI is also floating.
        </p>
        <h3>
          What is Flat/Fixed Rate of Interest? And Flat/Fixed Rate of Interest Effect your EMI for {bankName} Two
          wheeler loan?
        </h3>
        <p>
          A fixed rate of interest is one where the interest rate on a loan remains fixed throughout the loan repayment
          period (loan tenure). This type of interest rate is comparatively higher than a floating rate of interest.
          Fixed rate of interest is better for those who don&rsquo;t prefer the risk of fluctuation that is an integral
          part of a variable interest rate. In the case of a fixed rate of interest, the loan EMI remains the same
          throughout the loan tenure.
        </p>
        <p>
          The online loan EMI calculator can be used to calculate loan EMIs with a fixed rate of interest.&nbsp;The
          different Interests Rates that can be implied in a Loan contract are Fixed Interest Rate and Floating Interest
          Rate.
        </p>
        <p>
          <strong>
            Fixed Interest Rate means interest payment on loan will be in fixed equal installments over the entire
            period of the loan. The interest rate will not change regardless of any market fluctuations.
          </strong>
        </p>
        <h3>Benefits of Fixed Interest Rate:</h3>
        <ul>
          <li>Interest Rate does not change as per the market fluctuations</li>
          <li>Having a fixed interest rate brings a sense of safety and security for the borrower</li>
          <li>Since it entails a fixed monthly repayment schedule, it helps in easy budgeting</li>
        </ul>
        <h3>Drawbacks of Fixed Interest Rate:</h3>
        <ul>
          <li>Generally, Fixed Interest Rates are 1%-2.5% higher than Floating Interest Rate</li>
          <li>
            Fixed Interest Rates are subject to change as per the market fluctuations, hence if by chance the interest
            rate decreases, the fixed rate {bankName} Two wheeler loan won&rsquo;t be benefited as the borrower will
            have to pay the same fixed amount every month.
          </li>
        </ul>
        <h3>
          What is Floating Rate of Interest? And Floating Rate of Interest Effect your EMI for {bankName} Two wheeler
          loan?
        </h3>
        <p>
          Floating rate of interest changes depending on the market-lending rate. It is also known as variable rate of
          interest. If the lending rate increases, the floating interest rate will also increase. Due to the risk of
          fluctuation, the floating rate of interest is usually lower than the fixed rate of interest. With a floating
          rate of interest for a specified loan tenure, you can either expect your EMI to reduce or increase depending
          on the rise in the interest rate.
        </p>
        <p>
          The online loan EMI calculator for {bankName} Two wheeler loan can be used to calculate loan EMIs with a
          Floating rate of interest.
        </p>
        <p>
          Floating Interest Rate is the rate which changes as per the market conditions. Loans on floating interest
          rates are tied to a base rate PLUS a floating element thereof.
        </p>
        <h3>Benefits of Floating Interest Rate:</h3>
        <ul>
          <li>Floating Interest Rates are cheaper than Fixed Interest Rate</li>
          <li>
            During the long term, even if the floating interest rate rises up the fixed interest rate, they will
            eventually fall. Hence ensuring a lot of savings.
          </li>
        </ul>
        <h3>Drawbacks of Floating Interest Rate:</h3>
        <p>Due to frequent fluctuations in interest rate, the nature of monthly installments is quite uneven.</p>
        <p>
          Hence it is necessary that you conduct a proper cost and benefit analysis before choosing among Fixed and
          Floating Rate of Interests.
        </p>
        <h3>Why should I use a {bankName} Two wheeler loan calculator?</h3>
        <p>
          The simplest answer is that it&rsquo;s fast and it&rsquo;s convenient. This means that you can do multiple
          calculations in minutes where such calculations many take longer were you to sit down with a pen and paper.
          These calculators are also super accurate, so it eliminates the possibility of errors in calculations,
          provided you provide accurate data.
        </p>
        <h3>Will banks provide the {bankName} Two wheeler loan calculator?</h3>
        <p>
          Yes. These days most, if not all, banks have {bankName} Two wheeler loan calculator, specific to various
          loans, available on their websites.
        </p>
        <h3>How much should I pay as monthly EMI for {bankName} Two wheeler loan?</h3>
        <p>
          Monthly EMI for {bankName} Two wheeler loan depends upon your income and expenses. Generally, banks advise you
          to limit your EMI to 35% to 45% of your net income so that you can pay your EMI without any burden or
          difficulty. You can calculate your EMI online which will help you to know your repayment capacity.
        </p>
        <h3>What if I miss EMI payment for {bankName} Two wheeler loan or there is an ECS bounce?</h3>
        <p>
          If you miss your EMI payment on your {bankName} Two wheeler loan or if there is an ECS bounce then bank may
          charge a penalty. In addition, it will also be reflected in your{' '}
          <a href="https://www.cibil.com/freecibilscore">CIBIL</a> report and your{' '}
          <a href="https://www.cibil.com/freecibilscore">CIBIL</a> score may get impacted.
        </p>
        <h3>What if I get delay in paying the {bankName} Two wheeler loan EMI?</h3>
        <p>
          Banks charges penalty for delaying EMI payment for {bankName} Two wheeler loan. The amount of penalty varies
          from bank to bank.
        </p>
        <h3>Why it is necessary to calculate EMI beforehand?</h3>
        <p>
          It is important to calculate your EMI in advance to maintain stability in future payments. When you avail loan
          for your house, you promise the bank to pay a fixed amount at fixed date every month. So, before availing the
          {bankName} Two wheeler loan you should consider the stability of your income, monthly expenses and the
          existing loan obligations to avoid any discrepancies in future payments.
        </p>
      </div>
    </Grid>
  )
}
