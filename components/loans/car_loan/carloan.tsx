import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function Carloan(props: {bankname: string | string[] | undefined}) {
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
        {/* <h2>{bankName}</h2> */}
        <h2>
          {' '}
          {bankName} car loan Calculator – interest rates, eligibility criteria, application process, documents
          required, tax benefits, schemes in India
        </h2>
        <h3>What is {bankName} car loan Calculator?</h3>
        <p>
          A {bankName} car loan calculator helps you know the amount of the EMIs that you will need to pay towards your{' '}
          {bankName} car loan and helps make an informed decision. The EMI-Calculators.com's {bankName} car loan
          calculator also functions as a {bankName} car loan interest calculator, as you will be able to know the
          interest amount due on your {bankName} car loan, in addition to the general EMI amount, in only 3 simple
          steps. First, enter the loan amount that you wish to take. Then, select your preferred tenor. Finally, put in
          the {bankName} car loan interest rate advertised on the website. That's all!
        </p>
        <h3>What is {bankName} car loan?</h3>
        EMI stands for Equated Monthly Instalment. EMI is the monthly repayment that a {bankName} car loan borrower must
        make to repay the {bankName} car loan within the specified loan tenor. The following table illustrates the EMI
        on several {bankName} car loan amounts with different tenures. The applicable fixed rate of interest is 8.60%*
        onwards and floating rate of interest 8 % onwards.
        <h3>Factors that Affect {bankName} car loan</h3>
        <strong>Principal</strong>- The principal is the loan amount that you avail from the lender. It is directly
        proportional to your EMIs - lower principal will lower your monthly instalments and vice versa.
        <strong>Rate of interest</strong>- The rate of interest is the rate at which the lender offers you the loan. It
        is also directly proportional to the worth of your loan EMIs.
        <strong>Tenure</strong>- The tenure is the time within which you repay your loan. The tenure is inversely
        proportional to your loan EMIs - longer tenure makes the monthly instalments cheaper and vice versa.
        <h2>Eligibility Criteria for {bankName} car loan</h2>
        Click here for Eligibility Calculator for {bankName} car loan
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Minimum and Maximum Age</strong>
              </td>
              <td>
                Minimum and Maximum Age 21 Yrs. – 65 Yrs. Note: However, almost all banks require a minimum age of 18
                years
              </td>
            </tr>
            <tr>
              <td>
                <strong>Loan Amount</strong>
              </td>
              <td>
                Loan Amount -up to Rs. 10 lakhs. Some banks give maximum loan up to Rs. 50 lakhs Note: Loan amount
                depends upon the worth of the Car and therefore the EMI you'll pay
              </td>
            </tr>
            <tr>
              <td>
                <strong>Net Monthly Income</strong>
              </td>
              <td>Minimum Rs. 18,000 per month</td>
            </tr>
            <tr>
              <td>
                <strong>Employment Type</strong>
              </td>
              <td>
                Salaried and Self Employed Interest rates are typically in the range of 7.75% to 29.00% once a year
              </td>
            </tr>
            <tr>
              <td>
                <strong>Minimum Work Experience</strong>
              </td>
              <td>
                At least 1 year of total work experience Business tenure should of 5 years &amp; ITR required for a
                minimum of 2 years (For Self Employed only)
              </td>
            </tr>
            <tr>
              <td>
                <strong>CIBIL Score to apply for {bankName} car loan</strong>
              </td>
              <td>700+ more credit history Note: Most banks avoid giving loans if you've got low credit score</td>
            </tr>
          </tbody>
        </table>
        <h2>Documents required to apply {bankName} car loan</h2>a detailed article on Documents checklist for {bankName}{' '}
        car loan
        <h3>Salaried Employees:</h3>
        <ul>
          <li>Filled up the loan application form</li>
          <li>2 Passport Size Photo</li>
          <li>
            Copy of{' '}
            <a href="https://www.incometaxindiaefiling.gov.in/home" target="_blank" rel="nofollow noopener noreferrer">
              Income Tax
            </a>{' '}
            and{' '}
            <a
              href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              PAN card
            </a>
            <u></u>
          </li>
          <li>
            Identity Proof –any one{' '}
            <a href="https://eaadhaar.uidai.gov.in/#/" target="_blank" rel="nofollow noopener noreferrer">
              Aadhaar card
            </a>
            ,{' '}
            <a
              href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Passport
            </a>{' '}
            ,{' '}
            <a href="https://parivahan.gov.in/" target="_blank" rel="nofollow noopener noreferrer">
              Driving License
            </a>{' '}
            ,{' '}
            <a href="https://www.nvsp.in/" target="_blank" rel="nofollow noopener noreferrer">
              Voter ID
            </a>{' '}
            ,{' '}
            <a
              href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              PAN card
            </a>
            <u></u>
          </li>
          <li>
            Address Proof (Residential Proof) - Leave and License/ Registered Rent Agreement/ Utility Bill (up to 3
            months old), Passport
          </li>
          <li>
            Income documents – related documents such as 3 months’ pay slip, 2 years Form 16, 3 months statement showing
            salary credit and any EMI debit
          </li>
          <li>
            <a href="https://www.cibil.com/freecibilscore" target="_blank" rel="nofollow noopener noreferrer">
              CIBIL Score or Credit Score
            </a>
          </li>
          <li>Car quotation</li>
        </ul>
        <h3>Self-Employed:</h3>
        <ul>
          <li>Filled up loan application form</li>
          <li>2 Passport Size Photo</li>
          <li>
            Copy of{' '}
            <a href="https://www.incometaxindiaefiling.gov.in/home" target="_blank" rel="nofollow noopener noreferrer">
              Income Tax
            </a>{' '}
            and{' '}
            <a
              href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              PAN card
            </a>
            <u></u>
          </li>
          <li>
            Identity Proof –any one{' '}
            <a href="https://eaadhaar.uidai.gov.in/#/" target="_blank" rel="nofollow noopener noreferrer">
              Aadhaar card
            </a>
            ,{' '}
            <a
              href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Passport
            </a>{' '}
            ,{' '}
            <a href="https://parivahan.gov.in/" target="_blank" rel="nofollow noopener noreferrer">
              Driving License
            </a>{' '}
            ,{' '}
            <a href="https://www.nvsp.in/" target="_blank" rel="nofollow noopener noreferrer">
              Voter ID
            </a>{' '}
            ,{' '}
            <a
              href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              PAN card
            </a>
          </li>
          <li>
            Address Proof (Residential Proof) - Leave and License/ Registered Rent Agreement/ Utility Bill (up to 3
            months old), Passport
          </li>
          <li>
            Income documents – related documents such as 3 months pay slip, 2 years Form 16, 3 months statement showing
            salary credit and any EMI debit
          </li>
          <li>
            <a href="https://www.cibil.com/freecibilscore" target="_blank" rel="nofollow noopener noreferrer">
              CIBIL Score or Credit Score
            </a>
          </li>
          <li>Car quotation</li>
        </ul>
        <h3>{bankName} car loan for Different Loan Amounts</h3>
        Following table shows the EMIs for a various loan amount based on different tenures at 8.60%* onwards
        <ul>
          <li>
            The EMI that you can avail with a {bankName} car loan of 10 Lakh is 10,024 with 15-years tenure. The EMI
            increases once you choose tenure of 5 years.
          </li>
          <li>
            The EMI for a loan of 15 Lakh is higher – 30,992, when you opt for 5-years. It decreases to 15,036 if you
            opt for a tenure of 15 years.
          </li>
          <li>
            For a loan of 25 Lakh, the cheapest EMI you can avail with 15-year tenure - 25,060. Decreasing the tenure to
            5 years increases the EMI to 51,654.
          </li>
          <li>
            The EMI is 72,315 when you avail a loan of 35 Lakh for 5 years. The same will decrease to 35,084 if you
            increase the tenure to 15 years.
          </li>
          <li>
            The cheapest EMI comes with a 15-years tenure with a loan of 50 Lakh – 50,120. The EMIs double when you opt
            for 5 years' tenure.
          </li>
        </ul>
        <h2>Step by step guide before having {bankName} car loan – Application process :</h2>
        detailed article on {bankName} car loan application process
        <h3>
          Step 1 : Check {bankName} car loan and calculate {bankName} car loan eligibility – {bankName} car loan
          Calculator
        </h3>
        As you opt to require a {bankName} car loan, always estimate your loan amount eligibility to understand the loan
        amount you'll be eligible for and may apply for. Also calculate the monthly EMI that you simply can comfortably
        service given your net take personal salary and other existing fixed obligations including rent and EMIs on
        other existing loans, if any. Your {bankName} car loan eligibility is calculated supported your age, net income,
        existing obligations and other factors. EMI depends on the loan amount, rate of interest and tenure. Once you
        understand your minimum loan requirement, your eligibility and monthly EMI you'll comfortably service, shortlist
        the banks which supply your maximum loan amount to satisfy your requirements.
        <h3>useful links on official {bankName} car loan:</h3>
        <h3>Step 2 : Check authorization status and processing fee – {bankName} car loan Calculator</h3>
        If you're buying a car, then check for the banks which have approved the cars you've got shortlisted. For resale
        car, check the approved interest rates and processing fee on loan and compare it with all other banks. Shortlist
        the banks which lend on your chosen car.
        <h3>
          Step 3 : choose sort of {bankName} car loan rate of interest offers – {bankName} car loan Calculator
        </h3>
        As you cut down the list of banks in Step 2 and three, you would like to conduct an rate of interest on{' '}
        {bankName} car loan comparison of the loan offers of varied banks. a number of the rate of interest offers that
        must be checked are: Choice between fixed and floating rates – Fixed rates come at a rather higher rate of
        interest compared to floating rate loans and rate of interest remains constant during the tenure of {bankName}{' '}
        car loan. In floating interest rate loan, interest rates are reset at periodic intervals in response to changes
        in MCLR and PLR rates of NBFCs or banks. Majority of {bankName} car loan s in India today are floating rate
        loans because it allows the borrowers to urge {bankName} car loan rate of interest in line with the present
        interest rates. Decide if you would like a car saver loan – this is often a loan with overdraft facility which
        allows you to deposit surplus amount in your {bankName} car loan overdraft account as and when available,
        allowing you to scale back your overall interest amount. This loan is very recommended for salaried individuals
        with high bonuses and self-employed business which is seasonal and has fluctuating cash flows. The rate of
        interest s on overdraft loan is slightly above that of a daily {bankName} {bankName} car loan interest rate.
        Check and compare the present {bankName} car loan interest rates of the banks on various sorts of loan products
        and take an informed decision.
        <h3>Step 4 : Compare shortlisted banks | {bankName} car loan Calculator</h3>
        In addition to interest rates, banks also charge many other fees on {bankName} car loans. alongside interest
        rates, you ought to check other associated costs with a your loan which include prepayment charges, processing
        fee, premium and other charges offered by the shortlisted banks. you ought to calculate all-inclusive costs on{' '}
        {bankName} car loan to be ready to further shortlist the banks and reduce your option to 2-3 banks. You can take
        the assistance of loan advisors of online on various websites
        <h3>Step 5 : Select the bank supported other service related parameters | {bankName} car loan Calculator</h3>
        Finally as you opt to require the loan, also consider other service and transparency related parameters of the
        chosen banks. a number of these factors are turnaround offered by the banks, quick loan delivery, doorstep
        services, transparency within the loan process. you furthermore may get to understand the trends and changes in
        MCLR rates over a period. Last but not the smallest amount, read reviews of existing customers on banks on their
        services, interest rates and transparency to require your decision to borrow from a bank.
        <h3>Comparison of {bankName} car loan Interest Rates in India</h3>
        <ul>
          <li>
            <strong>Processing fees</strong> – Most banks charges minimum processing fees of Nil to up to Rs.1,000. to
            urge lowest fee, comparison of {bankName} car loan rates, offers and cashback applying online after
            comparison
          </li>
          <li>
            <strong>Premium (Insurance)</strong> – {bankName} car loans are secured loans, but it's advisable to require
            an policy when availing a loan. However, the premium varies from bank to bank depending upon the danger
            coverage under various policies. So, check the loan sanction letter carefully to understand the coverage and
            premium.
          </li>
          <li>
            <strong>Prepayment and foreclosure –</strong> once you want to repay your {bankName} car loan partially
            before time, it's called part prepayment. just in case you opt to pay the whole {bankName} {bankName} car
            loan amount before time, it's called foreclosure. Banks typically levy foreclosure or prepayment charges in
            such situations, and these can range from nil to even upto 3%. So, check carefully if the low rate of
            interest {bankName} car loan you're getting comes with high prepayment or foreclosure charges. Note that
            some {bankName} car loans can't be repaid before time.
          </li>
          <li>
            <strong>Deposit (Down payment)</strong> – Banks offer {bankName} car loans either at 80% of on-road price or
            100% of ex-showroom price. However, 80% of on-road is nearly like 95% of ex-showroom price. you're advised
            to fund maximum as deposit because it reduces your burden of high monthly payments.
          </li>
        </ul>
        <h2>Do’s and Don’ts while taking {bankName} car loan</h2>
        To get best and lowest {bankName} car loan interest rates online, read the do’s and don’ts mentioned below.
        <table width="694">
          <thead>
            <tr>
              <td>
                <strong>
                  <u>Do’s</u>
                </strong>
              </td>
              <td>
                <strong>
                  <u>Don’ts</u>
                </strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Check best offers and discounts</strong> – Always check current offers and {bankName} Car loan
                interest rates offered to employees of large reputed companies
              </td>
              <td>
                <strong>Do not apply for loan amount more than what you are eligible for</strong> – Applying for an
                amount higher than your eligibility may lead to rejection of your loan application
              </td>
            </tr>
            <tr>
              <td>
                <strong>Compare Car rates based on loan amount</strong> – Some banks offer lowest interest rate for{' '}
                {bankName} car loan at higher loan amount
                <strong>decide carefully on which type of insurance</strong> would be required - Comprehensive, Third
                Party, or Zero Dep insurance. Check and compare the value , coverage and claim settlement ratio
              </td>
              <td>
                <strong>Do not apply with multiple banks</strong> – Simultaneous loan applications gets recorded in your
                CIBIL report and can hurt your chances of getting a {bankName} car loan
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <strong>Discount or offers on tenures</strong> – Banks may offer lower rates on {bankName} Car loan for
                certain tenure
              </td>
              <td>
                <strong>Your salary bank may not offer the cheapest loan</strong> – Various banks offer attractive
                schemes to acquire premium customers. Hence, salary bank might not be the simplest option
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Schemes under {bankName} car loan associated with EMI and Interest</h2>
        detailed article on the list of schemes for {bankName} car loan
        <ul>
          <li>
            <strong>EMI in arrears scheme</strong> – This is a standard method of paying EMI where the interest for a
            month (and principal repayment) is payable at or after the end of the month.
          </li>
          <li>
            <strong>Advance EMI scheme</strong> – Under this scheme, you pay interest and EMI at the start of the month.
            So, each month, you pay interest on amount that you have already repaid to the bank at the beginning of the
            month.
          </li>
          <li>
            Imp <strong>Note</strong> – In case your bank charges EMI in advance, the EMI amount should be about 1%
            lower than that in case of EMI in arrears. For those curious about more precise figures, EMI per Rs. 1 lakh
            loan amount on a 5-year {bankName} car loan at 10% rate of interest as per EMI behind method involves Rs.
            2,125 while that as per EMI beforehand method involves Rs. 2,107.
          </li>
          <li>
            <strong> Zero interest scheme (also called 0% finance scheme)</strong> – this is often one among those free
            lunches scheme that really doesn’t exist. So, watch out for schemes that claim to supply zero interest. It
            is likely that the car company is offering a subvention scheme whereby the interest is paid by it to the
            bank upfront. Now, you'll always ask the dealer for an equivalent amount as a cash discount. It’s like
            padding up the worth of the car for the interest amount and marketing it under a pleasant name.
          </li>
          <li>
            <strong> Flat rate of interest scheme</strong> – during this method, you pay interest on the whole principal
            amount of loan till maturity. So, on a loan of Rs. 5 lakhs at 10% for 5 years, you'd need to pay back a
            complete of Rs. 5 lakhs plus interest of Rs. 50,000 a year, that's a sum of Rs. 7,50,000. The EMI in this
            case would be Rs. 12,500.
          </li>
          <li>
            <strong>Reducing balance scheme</strong> - during this method, you pay interest on the quantity outstanding
            monthly . as you pay EMI, the balance principal amount keeps reducing. So, on a Rs. 5 lakh loan at 10% for
            five years, you would have to pay back a total of Rs. 5 lakhs plus interest on reducing basis which involves
            Rs. 1,37,411 or Rs. 6,37,411 including principal. The EMI in this case would be Rs. 10,624, an honest 15%
            but that for a flat rate scheme.
          </li>
          <li>
            <strong>Very Important Note</strong> – Never get hoodwinked with the low rate of interest offered on a flat
            rate scheme. A flat rate of 10% is adequate to an rate of interest of 18.7% on reducing rate basis on a 5
            year {bankName} car loan .
          </li>
        </ul>
        <h2 id={getId('{bankName} car loan Calculator FAQs')}>
          {bankName} car loan Calculator FAQs
          <a href={getHref('{bankName} car loan Calculator FAQs')} aria-hidden="true">
            <span>#</span>
          </a>
        </h2>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <Icon className="fa fa-hand-point-right"></Icon> What are the additional charges?{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Apart from rate of interest, there are two sorts of charges being charged by the banks.
              <ol>
                <li>
                  {bankName} car loan processing fee: this is often charged once you apply for the loan. The processing
                  fee charged is upto Rs. 3,000 of the loan amount and will be reduced if you'll bargain.
                </li>
                <li>
                  {bankName} car loan pre-closure fee: this is often charged once you close your loan before the
                  completion of loan tenure. Prepayment penalty charged could also be up to five of the outstanding
                  amount.
                </li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <Icon className="fa fa-hand-point-right"></Icon> Is CIBIL Score for {bankName} car loan important?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              CIBIL score is extremely important. Good CIBIL score indicates good repayment record and hence banks
              offers you higher loan amount at low rate of interest for {bankName} car loan . Bad CIBIL Score will end
              in either loan at higher rate of interest or rejection of the application . So, make all of your payments
              on time and maintain your CIBIL so as to urge best {bankName} car loan rates.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Can I apply jointly with my spouse?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you'll apply for loan jointly with a co-applicant (either your spouse or your parents). This helps
              you to extend your eligibility. Hence you'll get higher loan amount as your co-applicant’s income also
              gets added to your income. In co-applicant cases, the entire income is taken into consideration for
              calculating the eligibility.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Does it effect co-applicant credibility if I default in loan?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, if you fail to pay the loan on time then it'll also affect your co-applicant. Default in loan will
              affect his/her CIBIL rating also .
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Can I get a loan for the complete cost of my car?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Typically, banks loans only up to 80% to 90% of the entire cost of the vehicle. However, there are a
              couple of banks which will cover the whole cost of the car.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <h3>Is a guarantor mandatory for a replacement {bankName} car loan?</h3>
        In case you're unable to satisfy the eligibility, criteria set by the lender, then a guarantor is mandatory.
        <h3>What is the minimum amount of loan we will apply for?</h3>
        In most cases, you'll apply for a minimum loan of Rs. 1 Lac.
        <h3>Is there a provision to pre-pay the whole loan amount?</h3>A small fee within the sort of pre-payment
        penalty are going to be chargeable by the bank, but yes, it's allowed to pre pay the loan amount and save vital
        interest payments. This however is subject to a minimum period that the loan must be held which is typically 6
        months.
        <h3>Are all cars financed by the loan institutions?</h3>
        All small to medium sized cars, sport utility vehicle Vehicles (SUV) and Multi Utility Vehicles (MUV) usually
        come under the {bankName} car loans finances available in India.
        <h3>What is the maximum and minimum tenure of {bankName} car loan?</h3>
        {bankName} car loan is usually taken for a brief period of your time . Generally, {bankName} Car loan tenure is
        between 3 years to eight years.
        <h3>What is ex-showroom price and on road price?</h3>
        Ex-showroom price is that the price of the Car including excise duty but excluding local duties and statutory
        charges. On road price is that the price you buy the Car including the ex-showroom price and price of
        registration, insurance, octroi, municipal entry tax, road tax and any accessories. The on road price tends to
        be 15-25% quite the ex-showroom price and should vary from city to city.
        <h3>How am i able to prevent rejection of my loan application?</h3>
        Banks or NBFCs give Car finance to those borrowers about whom they're sure that he/her can repay the loan. you
        would like to understand few things if you don’t want your application to urge rejected:
        <ol>
          <li>
            Job stability for {bankName} car loan is vital . you would like to be stable in your current job as too many
            job changes can impact negatively at the time of authorization
          </li>
          <li>
            You shouldn't be having too many loans running at just one occasion . Banks can reject your application if
            you're already paying too many EMI’s at same time.
          </li>
          <li>
            Don’t offer you landline number for tele-verification if you recognize that no-one else is there reception
            once you are at work. A typing mistake in apartment number also can put negative impact on lenders.
          </li>
        </ol>
        Banks or lenders keep it up adding these small things and reject your application .
        <h3>What should I do if the {bankName} car loan application gets rejected due to any reason ?</h3>
        Some possible reasons why your application gets rejected are already running multiple loans and hence a bank
        could also be unsure about your repayment ability of a replacement loan.
        <ol>
          <li>
            In this case, if you've got a spouse who is additionally working, you'll add him/her as a co-applicant to
            spice up the combined salary levels.
          </li>
          <li>Clear your old debts first in order that your leverage levels come down.</li>
          <li>
            Balance transfer of your existing loans in order that the speed of interest on loans can come down and extra
            loan are often availed.
          </li>
        </ol>
        <h3>What is the interest rate on {bankName} car loan?</h3>
        The rate of interest for a {bankName} car loan starts at 18.00%. The interest rates may vary across different
        Banks. Further, the interest factor is additionally hooked in to the sort of two-wheelers you would like to shop
        for , the income of the applicant, age, and occupation.
        <h3>How to finance a Car?</h3>
        Opting for a {bankName} car loan is that the easiest method to finance a Car. a spread of Banks and other
        lenders could provide you with funds to shop for your dream Car. However, one must meet the essential
        eligibility criteria and documentation requirements
        <h3>Can a student get a {bankName} car loan?</h3>A student can apply for a {bankName} car loan if he or she
        fulfills the basic eligibility criteria. An applicant must be a minimum of 21 years of age. However, the loan
        can be applied only with a co-applicant, who has a good CIBIL score and a fixed, reliable source of income.
        <h3>How much can I pay as a down payment on a Car?</h3>A down payment usually ranges from 15-30% of the
        two-wheeler value. However, it may vary across the lender. The amount of down payment made on the two-wheeler
        will decide the EMI of the {bankName} car loan. The bigger the down payment, the lower the EMI.
        <h3>What benefits do I get by calculating my EMI before taking an {bankName} car loan?</h3>
        Calculating your EMI before taking a loan can help you in the following ways: You can manage your monthly
        expenses better. Once you know how much you must pay towards your loan each month, you can then budget the other
        expenses accordingly. You will be able to determine what tenure to choose depending on how much you can afford
        to repay every month. Planning prepayments and pre-closures can be done easily, helping you pay off your loan
        faster.
        <h3>2. Will my EMIs change in case of prepayment?</h3>
        When you prepay a part of your loan, the outstanding principal will reduce. This allows you to opt for a lower
        EMI while keeping the loan tenure the same. Or, you can maintain the same monthly instalment as before and
        reduce the tenure of the loan. It is advisable to maintain the same EMI and reduce the tenure since this will
        reduce the amount of interest you pay in the long run.
        <h3>3. Can I use the same EMI calculator for all banks?</h3>
        Yes. An EMI calculator is a common tool and is not tied to any bank or financial institution. If you know your
        principal, interest rate, processing charges, and tenure, you should be able to generate your EMI. BankBazaar’s
        calculator also allows you to factor in prepayment details.
        <h3>4.How accurate is an EMI calculator?</h3>
        An EMI calculator estimates your loan repayment details based on the data you give it. But the EMI that your
        bank gives you may be a little different due to other charges involved in the calculation. Also, if your{' '}
        {bankName} car loan is subject to a floating rate, then the interest rate changes every year based on the MCLR
        or base rate change. Even a slight change in interest rate will make a difference to the total loan amount you
        repay, depending on the duration of the loan. These variables limit the accuracy of an EMI calculator.
        <h3>
          5. Why are the interest charges in the repayment table slightly higher during the initial months of the loan?
        </h3>
        The interest rate of your loan is applied based on “reducing balance principle”. Because of this, the interest
        will be slightly higher during the initial phase since the principal outstanding is higher. As this amount
        reduces, the incidence of interest will also come down proportionately.
        <h3>How is {bankName} car loan Calculated?</h3>
        Equated Monthly Installment – EMI for short – is the amount payable every month to the bank or any other
        financial institution until the loan amount is fully paid off. It consists of the interest on loan as well as
        part of the principal amount to be repaid. The sum of principal amount and interest is divided by the tenure,
        i.e., number of months, in which the loan has to be repaid. This amount has to be paid monthly.
        <strong>E = P x r x (1+r)^n/((1+r)^n – 1)</strong>
        <p>E is the amount that you will have to pay every month; basically, the EMI.</p>
        <p>P is the amount that you want to borrow.</p>
        <p>
          r is the rate of interest that is applicable but calculated on a monthly basis instead of the annual rate of
          interest. It is obtained by using the formula r = (annual interest/12) x 100.
        </p>
        <p>n is the duration of the loan in terms of months. So if you select a term of 5 years, n will be 60.</p>
        EMI is simply the quantity you (borrower) repay to the bank, each month , to clear your outstanding loan.You
        have to repay the EMI monthly , on a specific fixed date, for the whole duration (tenure) of the loan, till you
        repay the whole outstanding amount. (amount borrowed + interest). For Example, if you borrow 10,000,000 units of
        a currency from the bank at 10.5% annual interest for a period of 10 years (i.e., 120 months), then EMI = Units
        of currency 10,000,000 * 0.00875 * (1 + 0.00875)^120 / ((1 + 0.00875)^120 – 1) = Units of currency 134,935.
        i.e., you'll need to pay total currency units 134,935 for 120 months to repay the whole loan amount. the entire
        amount payable are going to be 134,935 * 120 = 16,192,200 currency units that has currency units 6,192,200 as
        interest toward the loan.
        <h3>How to Calculate EMI for {bankName} car loan?</h3>
        Calculating the EMI amount on your {bankName} car loan is sort of easy. Simply enter the loan amount you would
        like to require , the tenor (in months, and not years) and therefore the rate of interest, within the required
        fields. Once you discover the EMI calculator for {bankName} car loan , To calculate the quantity of EMI, you
        would like to place the subsequent inputs within the EMI calculator:
        <ul>
          <li>
            Loan Amount – The principal amount borrowed from the bank or financial organization is understood because
            the loan amount.
          </li>
          <li>Interest Rate – rate of interest are often either fixed or floating.</li>
          <li>Loan tenure – is that the time over which you select to repay the loan.</li>
        </ul>
        The result are going to be your EMI, the entire interest you’ll be paying and therefore the total amount you’ll
        be paying by the top .<h3>What are the benefits of Knowing {bankName} car loan in Advance?</h3>
        Good planning always ensures stable finances. Calculating the {bankName} car loan beforehand gives a far better
        understanding of the quantity of cash you'd need to spend monthly . Hence, ready to "&gt; you'll plan well and
        choose whether you're able to spare that much money or not.
        <h3>Components of a {bankName} car loan Calculator?</h3>
        <ol>
          <li>Amount of loan to calculate EMI</li>
          <li>Loan term (months or years) to calculate EMI</li>
          <li>Rate of interest (percentage) to calculate EMI</li>
        </ol>
        <h3>How to use {bankName} car loan Calculator?</h3>
        Using the EMI Calculator may be a very simple process. All you would like to try to to is follow these steps–
        <ul>
          <li>Go the {bankName} car loan Calculator page</li>
          <li>Choose the loan amount, rate of interest, and tenor (in months)</li>
        </ul>
        That's all! you'll instantly get your {bankName} car loan amount along side the interest amount payable on the
        loan.
        <h3>What are the benefits of a {bankName} car loan Calculator?</h3>A {bankName} car loan Calculator helps you to
        make a decision whether you'll afford the financial commitment of a {bankName} car loan within the future . If
        you would like , you'll increase or decrease your EMI amount counting on the quantity of loan you're taking and
        therefore the period of time that you will be paying the EMIs. Quick Results – Applicants can easily use this
        calculator to calculate the EMIs that they're going to be susceptible to buy the pre-determined tenure and rate
        of interest that the {bankName} {bankName} car loans are offered, in just seconds. Simplicity – The calculations
        using this EMI calculator for {bankName} car loan are supported the applicant providing three key bits of data
        i.e. the principal amount of the loan, the applicable rate of interest and therefore the loan tenure. Varying
        Combinations – With the {bankName} car loan calculator, you'll easily input different interest rates and tenures
        to seem for a mixture which will allow you to simply repay the principal amount, without putting undue pressure
        on your finances. Free Usage – The EMI-Calculators.com's {bankName} car loan calculator may be a user friendly{' '}
        {bankName} car loan calculator that's available to everyone freed from charge and is straightforward to use
        <h3>What Is a {bankName} car loan Amortization Schedule?</h3>A {bankName} car loan amortization schedule is that
        the table or record which details all the periodic payments on your loan. this is often generated through an
        amortization calculator. Amortization is essentially the procedure of repaying a loan through regular payments
        over a specified period. An amortization schedule is that the total tally of loan payments showing the quantity
        of interest and principal contained in each payment, until the loan is repaid fully .
        <h3>What are the factors that impact monthly {bankName} car loan?</h3>
        The estimated monthly investment (EMI) depends on variety of things such the quantity , the tenure of the loan,
        and therefore the rate of interest . The estimated monthly investment (EMI) differs consistent with the loan
        type and therefore the amount. If the rate of interest of the loan is fixed, the estimated monthly investment
        remains fixed also for the whole time the loan is active. The borrower also can choose a pre-payment wherein the
        estimated monthly investment (EMI) gets reduced. If the rate of interest is floating, the EMI is additionally
        floating.
        <h3>
          What is Flat/Fixed Rate of Interest? And Flat/Fixed Rate of Interest Effect your EMI for {bankName} Car loan?
        </h3>
        A fixed rate of interest is one where the rate of interest on a loan remains fixed throughout the loan repayment
        period (loan tenure). this sort of rate of interest is relatively above a floating rate of interest. Fixed rate
        of interest is best for those that don’t prefer the danger of fluctuation that's an integral a part of a
        variable rate of interest . within the case of a hard and fast rate of interest, the loan EMI remains an
        equivalent throughout the loan tenure. The online loan EMI calculator are often wont to calculate loan EMIs with
        a hard and fast rate of interest. the various Interests Rates which will be implied during a Loan contract are
        Fixed rate of interest and Floating rate of interest . Fixed rate of interest means interest payment on loan are
        going to be in fixed equal installments over the whole period of the loan. The rate of interest won't change no
        matter any market fluctuations.
        <h3>Benefits of Fixed Interest Rate:</h3>
        <ul>
          <li>Interest Rate doesn't change as per the market fluctuations</li>
          <li>Having a hard and fast rate of interest brings a way of safety and security for the borrower</li>
          <li>Since it entails a hard and fast monthly repayment schedule, it helps in easy budgeting</li>
        </ul>
        <h3>Drawbacks of Fixed Interest Rate:</h3>
        <ul>
          <li>Generally, Fixed Interest Rates are 1%-2.5% above Floating rate of interest</li>
          <li>
            Fixed Interest Rates are subject to vary as per the market fluctuations, hence if accidentally the rate of
            interest decreases, the fixed rate {bankName} car loan won’t be benefited because the borrower will need to
            pay an equivalent fixed amount monthly .
          </li>
        </ul>
        <h3>
          What is Floating Rate of Interest? And Floating Rate of Interest Effect your EMI for {bankName} Car loan?
        </h3>
        Floating rate of interest changes counting on the market-lending rate. it's also referred to as variable rate of
        interest. If the lending rate increases, the floating rate of interest also will increase. thanks to the danger
        of fluctuation, the floating rate of interest is typically less than the fixed rate of interest. With a floating
        rate of interest for a specified loan tenure, you'll either expect your EMI to scale back or increase counting
        on the increase within the rate of interest . The online loan EMI calculator for {bankName} car loan are often
        wont to calculate loan EMIs with a Floating rate of interest. Floating rate of interest is that the rate which
        changes as per the market conditions. Loans on floating interest rates are tied to a interest rate PLUS a
        floating element thereof.
        <h3>Benefits of Floating Interest Rate:</h3>
        <ul>
          <li>Floating rate of interest s are cheaper than Fixed Interest Rate</li>
          <li>
            During the future , albeit the floating rate of interest rises up the fixed rate of interest , they're going
            to eventually fall. Hence ensuring tons of savings.
          </li>
        </ul>
        <h3>Drawbacks of Floating Interest Rate:</h3>
        Due to frequent fluctuations in rate of interest , the character of monthly installments is sort of uneven.
        Hence it's necessary that you simply conduct a correct cost and benefit analysis before choosing among Fixed and
        Floating Rate of Interests.
        <h3>Why should i exploit a {bankName} car loan calculator?</h3>
        The simplest answer is that it’s fast and it’s convenient. this suggests that you simply can do multiple
        calculations in minutes where such calculations many take longer were you to take a seat down with a pen and
        paper. These calculators also are super accurate, so it eliminates the likelihood of errors in calculations,
        provided you provide accurate data.
        <h3>Will banks provide the {bankName} car loan calculator?</h3>
        Yes. lately most, if not all, banks have {bankName} car loan calculator, specific to varied loans, available on
        their websites.
        <h3>How much should I pay as monthly EMI for {bankName} car loan?</h3>
        Monthly EMI for {bankName} car loan depends upon your income and expenses. Generally, banks advise you to limit
        your EMI to 35% to 45% of your net in order that you'll pay your EMI with none burden or difficulty. you'll
        calculate your EMI online which can assist you to understand your repayment capacity.
        <h3>What if I miss EMI payment for {bankName} car loan or there's an ECS bounce?</h3>
        If you miss your EMI payment on your {bankName} car loan or if there's an ECS bounce then bank may charge a
        penalty. additionally , it'll even be reflected in your CIBIL report and your CIBIL score may get impacted.
        <h3>What if i buy delay in paying the {bankName} car loan EMI?</h3>
        Banks charges penalty for delaying EMI payment for {bankName} car loan . the quantity of penalty varies from
        bank to bank.
        <h3>Why it's necessary to calculate EMI beforehand?</h3>
        It is important to calculate your EMI beforehand to take care of stability in future payments. once you avail
        loan for your house, you promise the bank to pay a hard and fast amount at fixed date monthly . So, before
        availing the {bankName} car loan you ought to consider the steadiness of your income, monthly expenses and
        therefore the existing loan obligations to avoid any discrepancies in future payments.
        <strong>Disclaimer:</strong>
        Display of any trademarks, tradenames, logos and other subject matters of intellectual property belong to their
        respective intellectual property owners. Display of such IP along with the related product information does not
        imply <a href="https://emi-calculators.com/">EMI-Calculators.com'</a>s partnership with the owner of the
        Intellectual Property or issuer/manufacturer of such products.
      </div>
    </Grid>
  )
}
