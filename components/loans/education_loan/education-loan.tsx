import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function Educationloan(props: {bankname: string | string[] | undefined}) {
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
          Use {bankName} Education Loan Calculator to calculate your monthly installments &amp; plan your future and
          have a proper financial plan monthly EMI&rsquo;s
        </p>
        <p>
          In a knowledge economy that we live in today in India, education plays a pivotal role. Education empowers us
          to reach new heights in our career, enables to live a respectable life, elevates our standard of living, aids
          accomplish financial goals, and much more!
        </p>
        <p>Education is a long-term personal investment that has the potential to generate returns like none other.</p>
        <p>
          With an {bankName} Education Loan, you can make your dreams come true. The loan for education is available for
          career-oriented courses like medicine, engineering, management, etc. either at a graduate or post-graduate
          level in prime institutes in India and abroad. The loan covers tuition fees, examination fees, library
          subscription, cost of books, needed lab tools/equipment, laptop/computer, hostel charges (if any), and so on.
        </p>
        <p>
          Students can directly apply for an {bankName} Education Loan. However, their parent(s) or guardian will be
          treated as co-applicants, and their role will be akin to a primary debtor (a person who owes money).
        </p>
        <p>
          But before you apply for an {bankName} Education Loan, as a prudent loan planning exercise, assess how much
          the Equated Monthly Instalment (EMI) will be.
        </p>
        <p>
          When one takes a {bankName} Education Loan, a natural question that comes to mind is how much the EMI would
          (Equated Monthly Installment) be that one has to pay back to the bank every month.
        </p>
        <p>Hope the following FAQ&rsquo;s about {bankName} Education Loan will answer all your questions</p>
        <h1>What is {bankName} Education Loan Calculator?</h1>
        <p>
          A {bankName} Education Loan calculator helps you know the amount of the EMIs that you will need to pay towards
          your
          {bankName} Education Loan and helps make an informed decision. The EMI-Calculators.com's {bankName} Education
          Loan calculator also functions as a {bankName} Education Loan interest calculator, as you will be able to know
          the interest amount due on your
          {bankName} Education Loan, in addition to the overall EMI amount, in just 3 simple steps. First, enter the
          loan amount that you wish to take. Then, select your preferred tenor. Finally, put in the {bankName} Education
          Loan interest rate advertised on the website. That's all!
        </p>
        <p>
          Our EMI-Calculators.com's {bankName} Education Loan calculator has been designed to offer utmost efficiency
          with maximum simplicity. This EMI calculator is user friendly, saves time and is highly scalable. What is{' '}
          {bankName} Education Loan?
        </p>
        <p>
          EMI stands for Equated Monthly Instalment. EMI is the monthly repayment that a {bankName} Education Loan
          borrower must make to repay the {bankName} Education Loan within the specified loan tenor.
        </p>
        <p>
          The following table illustrates the EMI on several {bankName} Education Loan amounts with different tenures.
        </p>
        <h2>Factors that Affect {bankName} Education Loan</h2>
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
        <h2>{bankName} Education Loan for Different Loan Amounts</h2>
        <p>Following table shows the EMIs for various loan amount based on different tenures at 11.00%* onwards</p>
        <ul>
          <li>
            The EMI that you can avail with {bankName} Education Loan of 10 Lakh is 10,024 with 15-years tenure. The EMI
            increases when you opt for tenure of 5 years.
          </li>
          <li>
            The EMI for a loan of 15 Lakh is higher &ndash; 30,992, when you opt for 5-years. It decreases to 15,036 if
            you opt for tenure of 15 years.
          </li>
          <li>
            For a loan of 25 Lakh, the cheapest EMI you can avail with 15-year tenure - 25,060. Decreasing the tenure to
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
        <h2>How is {bankName} Education Loan Calculated?</h2>
        <p>
          Equated Monthly Installment &ndash; EMI for short &ndash; is the amount payable every month to the bank or any
          other financial institution until the loan amount is fully paid off. It consists of the interest on loan as
          well as part of the principal amount to be repaid. The sum of principal amount and interest is divided by the
          tenure, i.e., number of months, in which the loan must be repaid. This amount has to be paid monthly.
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
          <li>n is the duration of the loan in terms of months. So, if you select a term of 5 years, n will be 60.</li>
        </ol>
        <p>
          &nbsp;EMI is just the amount you (borrower) repay to the bank, each calendar month, to clear your outstanding
          loan. You have to repay the EMI each month, on a particular fixed date, for the entire duration (tenure) of
          the loan, till you repay the entire outstanding amount. (amount borrowed + interest).
        </p>
        <p>
          <strong>For Example</strong>, if you borrow 10,000,000 units of a currency from the bank at 10.5% annual
          interest for a period of 10 years (i.e., 120 months), then EMI = Units of currency 10,000,000 * 0.00875 * (1 +
          0.00875)^120 / ((1 + 0.00875)^120 &ndash; 1) = Units of currency 134,935. i.e., you will have to pay total
          currency units 134,935 for 120 months to repay the entire loan amount. The total amount payable will be
          134,935 * 120 = 16,192,200 currency units that includes currency units 6,192,200 as interest toward the loan.
        </p>
        <h2>How to Calculate EMI for {bankName} Education Loan?</h2>
        <p>
          Calculating the EMI amount on your {bankName} Education Loan is quite easy. Simply enter the loan amount you
          wish to take, the tenor (in months, and not years) and the rate of interest, in the required fields.
        </p>
        <p>
          Once you find the EMI calculator for {bankName} Education Loan,&nbsp;to calculate the amount of EMI, you need
          to put the following inputs in the EMI calculator:
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
        <h2>Who can apply for an {bankName} Education Loan?</h2>
        <p>The eligibility criteria are as follows:</p>
        <ul>
          <li>
            The applicant and co-applicant should be over 18 years of age and citizen of India(Identity Proof
            &ndash;&nbsp;<a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,&nbsp;
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a>
            &nbsp;/&nbsp;<a href="https://parivahan.gov.in/">Driving License</a>&nbsp;/&nbsp;
            <a href="https://www.nvsp.in/">Voter ID</a>&nbsp;/&nbsp;
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>)
          </li>
          <li>The student needs to have secured at least 50% marks during HSC and graduation</li>
          <li>
            The student needs to have obtained admission to career-oriented courses viz. Medicine, Engineering,
            Management, etc., either at the graduate or post-graduate level
          </li>
          <li>
            Secured admission in India or abroad from a recognized college
            <a href="https://en.wikipedia.org/wiki/List_of_universities_in_India">/ education institutions in India</a>
            &nbsp;through entrance test/merit based selection process post completion of HSC (10+2), is a must
          </li>
          <li>The co-applicant, i.e. parent(s) or guardian, need to have a regular source of income</li>
        </ul>
        <h1>Step by step guide before having {bankName} Education Loan:</h1>
        <h3>
          Step 1 : Check {bankName} Education Loan and calculate {bankName} Education Loan eligibility &ndash;{' '}
          {bankName} Education Loan Calculator
        </h3>
        <p>
          As you decide to take a {bankName} Education Loan, always estimate your loan amount eligibility to know the
          loan amount you will be eligible for and can apply for. Also calculate the monthly EMI that you can
          comfortably service given your net take personal salary and other existing fixed obligations including rent
          and EMIs on other existing loans, if any. Your {bankName} Education Loan eligibility is calculated based on
          your age, net income, existing obligations, property type, LTV ratio and other factors. EMI is dependent on
          the loan amount, interest rate and tenure. Once you understand your minimum loan requirement, your eligibility
          and monthly EMI you can comfortably service, shortlist the banks which offer you maximum loan amount to meet
          your requirements.
        </p>
        <h3>Step 2 : Check loan approval status and legal documents &ndash; {bankName} Education Loan Calculator</h3>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <h3>
          Step 3 : Decide on type of {bankName} Education Loan interest rate offers &ndash; {bankName} Education Loan
          Calculator
        </h3>
        <p>
          As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on {bankName}{' '}
          Education Loan comparison of the loan offers of various banks. Some of the interest rate offers that needs to
          be checked are:
        </p>
        <p>
          Choice between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest
          compared to floating rate loans and interest rate remains constant during the tenure of {bankName} Education
          Loan. In floating rate loan, interest rates are reset at periodic intervals in response to changes in MCLR and
          PLR rates of banks or NBFCs. Majority of {bankName} Education Loans in India today are floating rate loans as
          it allows the borrowers to get {bankName} Education Loan interest rate in line with the current interest
          rates.
        </p>
        <p>
          Decide if you need a home saver loan &ndash; This is a loan with overdraft facility which allows you to
          deposit surplus amount in your {bankName} Education Loan overdraft account as and when available, allowing you
          to reduce your overall interest amount. This loan is highly recommended for salaried individuals with high
          bonuses and self-employed business which is seasonal and has fluctuating cash flows. The interest rates on
          overdraft loan is slightly higher than that of a regular {bankName} Education Loan interest rate.
        </p>
        <p>
          You can also evaluate a mortgage guarantee {bankName} Education Loan as it covers any default risk and allows
          the lender to give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to
          the bank.
        </p>
        <p>
          Check and compare the current {bankName} Education Loan interest rates of the banks on various types of loan
          products and take an informed decision.
        </p>
        <h3>Step 4 : Compare shortlisted banks | {bankName} Education Loan Calculator</h3>
        <p>
          In addition to interest rates, banks also charge many other fees on {bankName} Education Loans. Along with
          interest rates, you should check other associated costs with your loan which include prepayment charges,
          processing fee, insurance premium and other charges offered by the shortlisted banks. You should calculate
          all-inclusive costs on {bankName} Education Loan to be able to further shortlist the banks and reduce your
          choice to 2-3 banks.
        </p>
        <p>&nbsp;</p>
        <h3>
          Step 5: Select the bank based on other service related parameters | {bankName} Education Loan Calculator
        </h3>
        <p>
          Finally, as you decide to take the loan, also consider other service and transparency related parameters of
          the chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery,
          doorstep services, transparency in the loan process. You also need to understand the trends and changes in
          MCLR rates over a period. Last but not the least, read reviews of existing customers on banks on their
          services, interest rates and transparency to take your decision to borrow from a bank.
        </p>
        <p>&nbsp;</p>
        <h1>What are the documents required to avail an {bankName} Education Loan?</h1>
        <p>The following need to be submitted along with the {bankName} Education Loan application form:</p>
        <ul>
          <li>
            <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a>
            <u>&nbsp;</u>statements (Salary slip, Form 16, Income-Tax Returns of the last 2 years, and Computation of
            income of last 2 years certified by a Chartered Accountant)
          </li>
          <li>
            Bank Statement/Pass Book of the last 6 months along with&nbsp;
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>
          </li>
          <li>Copy of the admission letter of the Institute along with the &lsquo;fee schedule&rsquo;</li>
          <li>Mark sheets and/or pass certificates of SSC, HSC, Degree Courses, National level entrance test</li>
          <li>
            Age proof (<a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,&nbsp;
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a>
            &nbsp;/&nbsp;<a href="https://parivahan.gov.in/">Driving License</a>&nbsp;/&nbsp;
            <a href="https://www.nvsp.in/">Voter ID</a>&nbsp;/&nbsp;
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>, driving license)
          </li>
          <li>
            Address proof (<a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,&nbsp;
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a>
            &nbsp;/&nbsp;<a href="https://parivahan.gov.in/">Driving License</a>&nbsp;/&nbsp;
            <a href="https://www.nvsp.in/">Voter ID</a>&nbsp;/&nbsp;
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>, latest electricity
            bill, latest telephone bill, ration card, existing house lease agreement, bank account statement)
          </li>
          <li>
            Photo identification proofs (<a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,&nbsp;
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a>
            &nbsp;/&nbsp;<a href="https://parivahan.gov.in/">Driving License</a>&nbsp;/&nbsp;
            <a href="https://www.nvsp.in/">Voter ID</a>&nbsp;/&nbsp;
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>)
          </li>
          <li>Passport size photos of the applicant and co-applicants</li>
          <li>Guarantor form (optional)</li>
        </ul>
        <h2>What are the documents required at the time of disbursement of {bankName} Education Loan?</h2>
        <p>The documents required for the first disbursement are:</p>
        <ul>
          <li>Demand Letter from college or university</li>
          <li>Disbursement Request Form (DRF) signed by the applicant, co-applicants</li>
          <li>
            A signed copy of Loan Agreement (which includes Demand Promissory Note, DP Note Delivery-cum-Waiver Letter,
            Standing Instruction Request, PDC (Post-dated Cheque)
          </li>
          <li>Sanction Letter signed by the applicant, co-applicants</li>
          <li>
            Form A2 signed (for the purchase of foreign exchange) by applicant or co-applicants in case abroad Institute
            cases
          </li>
          <li>
            Receipts of Margin Money paid to the college/university along with bank statement reflecting the transaction
          </li>
          <li>Documents for collateral security ( if applicable)</li>
          <li>Form A2 signed by the applicant or co-applicants in case of overseas institute</li>
          <li>
            For subsequent disbursements as well, many of the aforementioned documents will be needed, particularly the
            demand letter from the college or university, DRF, receipt of margin money paid, and one any from the exam
            progress report, mark sheet, bonafide certificate.
          </li>
        </ul>
        <h1>Must Know things / Tips before you apply {bankName} Education Loan:</h1>
        <h2>
          How much time does the bank take to convey its decision of sanctioning or rejecting the loan application?
        </h2>
        <p>
          The bank sanctions the {bankName} Education Loan only after thorough due diligence. Any Bank usually disburses
          loans within 15 days from the date of receipt of the complete application along with all documents required
          for a full appraisal.
        </p>
        <h2>How much is the margin money required to avail an {bankName} Education Loan?</h2>
        <p>
          There is no margin for {bankName} Education Loans up to Rs 4 Lakhs. For loans above Rs 4 Lakh, the margin for
          studies within India is 5% and for studies overseas is 15%.
        </p>
        <h2>What if I miss my {bankName} Education Loan or pay late? Are there any charges?</h2>
        <p>
          Yes, Rs 500 + taxes per cheque bounce and a penal interest @24% per annum i.e. @ 2% per month on the overdue
          instalment/s. So, as far as possible, keep your repayment track record clean.
        </p>
        <h2>Is an {bankName} Education Loan eligible for tax deduction?</h2>
        <p>
          Yes. When you avail an {bankName} Education Loan, the interest paid (which is a component of your EMI) on the
          education loan is allowed as a deduction under Section 80E of the Income Tax Act, 1961. The deduction is
          available for a maximum of 8 years or till the interest is paid, whichever is earlier.
        </p>
        <h2>What are the Advantages of Knowing {bankName} Education Loan in Advance?</h2>
        <p>
          Good planning always ensures stable finances. Calculating the {bankName} Education Loan in advance gives a
          better understanding of the amount of money you would have to spend every month. Hence, you can plan well and
          decide whether you are able to spare that much money or not.
        </p>
        <h2>Components of a {bankName} Education Loan Calculator?</h2>
        <ol>
          <li>Amount of loan to calculate EMI</li>
          <li>Loan term (months or years) to calculate EMI</li>
          <li>Rate of interest (percentage) to calculate EMI</li>
        </ol>
        <h2>How to use {bankName} Education Loan Calculator?</h2>
        <p>Using the EMI Calculator is a very simple process. All you need to do is follow these steps&ndash;</p>
        <ul>
          <li>Go the {bankName} Education Loan Calculator page</li>
          <li>Choose the loan amount, rate of interest, and tenor (in months)</li>
        </ul>
        <ul>
          <li>
            That's all! You will instantly get your {bankName} Education Loan amount along with the interest amount
            payable on the loan.
          </li>
        </ul>
        <h2>What are the Advantages of a {bankName} Education Loan Calculator?</h2>
        <p>
          A {bankName} Education Loan Calculator helps you to decide whether you can afford the financial commitment of
          a Education Loan in the long term. If you want, you can increase or decrease your EMI amount depending on the
          amount of loan you are taking and the time period for which you'll be paying the EMIs.
        </p>
        <p>
          <strong>Quick Results</strong>&nbsp;&ndash; Applicants can easily use this calculator to calculate the EMIs
          that they will be liable to pay for the pre-determined tenure and interest rate that the {bankName} Education
          Loans are offered, in mere seconds.
        </p>
        <p>
          <strong>Simplicity</strong>&nbsp;&ndash; The calculations using this EMI calculator for {bankName} Education
          Loan are based on the applicant providing three key bits of information i.e. the principal amount of the loan,
          the applicable rate of interest and the loan tenure.
        </p>
        <p>
          <strong>Varying Combinations</strong>&nbsp;&ndash; With the {bankName} Education Loan calculator, you can
          easily input different interest rates and tenures to look for a combination that will allow you to easily
          repay the principal amount, without putting undue pressure on your finances.
        </p>
        <p>
          Free Usage &ndash; The&nbsp;<a href="https://emi-calculators.com/">EMI-Calculators.com'</a>s {bankName}{' '}
          Education Loan calculator is a user-friendly {bankName} Education Loan calculator that is available to
          everyone free of charge and is easy to use
        </p>
        <p>&nbsp;</p>
        <h2>What Is a {bankName} Education Loan Amortization Schedule?</h2>
        <p>
          A {bankName} Education Loan amortization schedule is the table or record which details all the periodic
          payments on your loan. This is generated through an amortization calculator.
        </p>
        <p>
          Amortization is basically the procedure of repaying a loan through regular payments over a specified period.
          An amortization schedule is the total tally of loan payments showing the amount of interest and principal
          contained in each payment, until the loan is repaid in full.
        </p>
        <h2>What are the factors that impact monthly {bankName} Education Loan?</h2>
        <p>
          The estimated monthly investment (EMI) depends on several factors such the amount, the tenure of the loan, and
          the interest rate. The estimated monthly investment (EMI) differs according to the loan type and the amount.
          If the interest rate of the loan is fixed, the estimated monthly investment remains fixed as well for the
          entire time the loan is active. The borrower can also opt for a pre-payment wherein the estimated monthly
          investment (EMI) gets reduced. If the interest rate is floating, the EMI is also floating.
        </p>
        <h2>
          What is Flat/Fixed Rate of Interest? And Flat/Fixed Rate of Interest Effect your EMI for {bankName} Education
          Loan?
        </h2>
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
            rate decreases, the fixed rate {bankName} Education Loan won&rsquo;t be benefited as the borrower will have
            to pay the same fixed amount every month.
          </li>
        </ul>
        <h2>
          What is Floating Rate of Interest? And Floating Rate of Interest Effect your EMI for {bankName} Education
          Loan?
        </h2>
        <p>
          Floating rate of interest changes depending on the market-lending rate. It is also known as variable rate of
          interest. If the lending rate increases, the floating interest rate will also increase. Due to the risk of
          fluctuation, the floating rate of interest is usually lower than the fixed rate of interest. With a floating
          rate of interest for a specified loan tenure, you can either expect your EMI to reduce or increase depending
          on the rise in the interest rate.
        </p>
        <p>&nbsp;</p>
        <p>
          The online loan EMI calculator for {bankName} Education Loan can be used to calculate loan EMIs with a
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
            During the long term, even if the floating interest rate rises the fixed interest rate, they will eventually
            fall. Hence ensuring a lot of savings.
          </li>
        </ul>
        <h3>Drawbacks of Floating Interest Rate:</h3>
        <p>Due to frequent fluctuations in interest rate, the nature of monthly installments is quite uneven.</p>
        <p>
          Hence it is necessary that you conduct a proper cost and benefit analysis before choosing among Fixed and
          Floating Rate of Interests.
        </p>
        <h2>Why should I use an {bankName} Education Loan calculator?</h2>
        <p>
          The simplest answer is that it&rsquo;s fast and it&rsquo;s convenient. This means that you can do multiple
          calculations in minutes where such calculations many take longer were you to sit down with a pen and paper.
          These calculators are also super accurate, so it eliminates the possibility of errors in calculations,
          provided you provide accurate data.
        </p>
        <h2>Will banks provide the {bankName} Education Loan calculator?</h2>
        <p>
          Yes. These days most, if not all, banks have {bankName} Education Loan calculator, specific to various loans,
          available on their websites.
        </p>
        <h2>How much should I pay as monthly EMI for {bankName} Education Loan?</h2>
        <p>
          Monthly EMI for {bankName} Education Loan depends upon your income and expenses. Generally, banks advise you
          to limit your EMI to 35% to 45% of your net income so that you can pay your EMI without any burden or
          difficulty. You can calculate your EMI online which will help you to know your repayment capacity.
        </p>
        <h2>What if I miss EMI payment for {bankName} Education Loan or there is an ECS bounce?</h2>
        <p>
          If you miss your EMI payment on your {bankName} Education Loan or if there is an ECS bounce then bank may
          charge a penalty. In addition, it will also be reflected in your&nbsp;
          <a href="https://www.cibil.com/freecibilscore">CIBIL</a>&nbsp;report and your&nbsp;
          <a href="https://www.cibil.com/freecibilscore">CIBIL</a>&nbsp;score may get impacted.
        </p>
        <h2>What if I get delay in paying the {bankName} Education Loan?</h2>
        <p>
          Banks charges penalty for delaying EMI payment for {bankName} Education Loan. The amount of penalty varies
          from bank to bank. This also impacts your&nbsp;<a href="https://www.cibil.com/freecibilscore">CIBIL</a>
          &nbsp;Score.
        </p>
        <h2>Why it is necessary to calculate {bankName} Education Loan beforehand?</h2>
        <p>
          It is important to calculate your EMI in advance to maintain stability in future payments. When you avail loan
          for your {bankName} Education Loan, you promise the bank to pay a fixed amount at fixed date every month. So,
          before availing the {bankName} Education Loan you should consider the stability of your income, monthly
          expenses and the existing loan obligations to avoid any discrepancies in future payments.
        </p>
        <h2>Does the loan tenure affect my EMI for {bankName} Education Loan?</h2>
        <p>
          {bankName} Education Loan can be availed for maximum tenure of 20 years. Tenure affects your monthly EMI.
          Longer the tenure of {bankName} Education Loan, lower will be your EMI.
        </p>
        <h3>What happens if you don&rsquo;t pay {bankName} Education Loan?</h3>
        <p>
          What happens if I miss my EMI payment? You can only miss your EMI if you have insufficient funds in your bank
          account. Few days grace period will be given to you to pay your EMIs. Further delay in payments will be
          reported to&nbsp;<a href="https://www.cibil.com/freecibilscore">CIBIL</a>&nbsp;and will have financial
          charges.
        </p>
        <h3>Should I pay my {bankName} Education Loan/ bill early?</h3>
        <p>
          At a minimum, you should pay your {bankName} Education Loan bill or EMI before its statement due date. You can
          never pay your {bankName} Education Loan too early but be sure to check the statement period to which your
          early payment will be credited.
        </p>
        <h3>What happens if I only pay the minimum payment on my {bankName} Education Loan?</h3>
        <p>
          What Happens If I Make Only the Minimum Payment on My {bankName} Education Loan? Paying only the minimum keeps
          you in debt longer, costs you money in interest and could hurt your credit score. ... If you pay the minimum
          toward your balance each month, here's what you can expect to happen: Paying down your debt will take much
          longer.
        </p>
        <h3>Can I foreclose my {bankName} Education Loan?</h3>
        <p>
          Yes, you can clear the future EMI of your {bankName} Education Loan by paying the total outstanding in one go.
          But you should first ask the concerned bank regarding the same. And, if your lender does not charge on the
          foreclosure, it would be better going with your impending move of paying the entire outstanding.
        </p>
        <h3>How can I avoid paying interest on my {bankName} Education Loan?</h3>
        <p>
          The best way to avoid paying interest on your {bankName} Education Loan is to pay off the balance in full
          every month. You can also avoid other fees, such as late charges, by paying your {bankName} Education Loan
          bill on time.
        </p>
        <h3>Is {bankName} Education Loan better option?</h3>
        <p>
          Although a good EMI scheme is easy on your wallet, you must try to avoid it as the first option. You may not
          only be spending more than the actual worth of the product, but also splurging first and then relying on EMI
          payments is not healthy for your finances.
        </p>
        <h3>Is {bankName} Education Loan good?</h3>
        <p>
          The best form of the EMI option is where there is no interest charged on the payment. ... So, an expense of Rs
          12,000 spread over 12 months will lead to an EMI of Rs 1,000 a month, that will come in each month's Education
          Loan bill.
        </p>
        <h3>What is {bankName} Education Loan scheme?</h3>
        <p>
          To facilitate {bankName} Education Loan option, banks charge a loan processing fee upfront. The loan
          processing fee varies from bank to bank and is usually 0.5% to 1% of the amount of your purchase. Interest.
        </p>
        <h1>Bank specific {bankName} Education Loan Calculator FAQs</h1>
        <h2>1. What benefits do I get by calculating my EMI before taking an {bankName} Education Loan?</h2>
        <p>Calculating your EMI before taking a loan can help you in the following ways:</p>
        <p>
          You can manage your monthly expenses better. Once you know how much you have to pay towards your loan each
          month, you can then budget the other expenses accordingly. You will be able to determine what tenure to choose
          depending on how much you can afford to repay every month. Planning prepayments and pre-closures can be done
          easily, helping you pay off your loan faster.
        </p>
        <h2>2. Will my EMIs change in case of prepayment?</h2>
        <p>
          When you prepay a part of your loan, the outstanding principal will reduce. This allows you to opt for a lower
          EMI while keeping the loan tenure the same. Or, you can maintain the same monthly instalment as before and
          reduce the tenure of the loan. It is advisable to maintain the same EMI and reduce the tenure since this will
          reduce the amount of interest you pay in the long run.
        </p>
        <h2>3. Can I use the same {bankName} Education Loan calculator for all banks?</h2>
        <p>
          Yes. An EMI calculator is a common tool and is not tied to any bank or financial institution. If you know your
          principal, interest rate, processing charges, and tenure, you should be able to generate your EMI.
          BankBazaar&rsquo;s calculator also allows you to factor in prepayment details.
        </p>
        <h2>4.How accurate is an {bankName} Education Loan calculator?</h2>
        <p>
          An EMI calculator estimates your loan repayment details based on the data you give it. But the EMI that your
          bank gives you may be a little different due to other charges involved in the calculation. Also, if your
          {bankName} Education Loan is subject to a floating rate, then the interest rate changes every year based on
          the MCLR or base rate change. Even a slight change in interest rate will make a difference to the total loan
          amount you repay, depending on the duration of the loan. These variables limit the accuracy of an EMI
          calculator.
        </p>
        <h2>
          5. Why are the interest charges in the repayment table slightly higher during the initial months of the loan?
        </h2>
        <p>
          The interest rate of your loan is applied based on &ldquo;reducing balance principle&rdquo;. Because of this,
          the interest will be slightly higher during the initial phase since the principal outstanding is higher. As
          this amount reduces, the incidence of interest will also come down proportionately.
        </p>
      </div>
    </Grid>
  )
}
