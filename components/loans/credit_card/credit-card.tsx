import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function CreditCard(props: {bankname: string | string[] | undefined}) {
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
          When one takes a {bankName} Credit Card Loan, a natural question that comes to mind is how much the EMI would
          (Equated Monthly Installment) be that one must pay back to the bank every month.
        </p>
        <p>Hope the following FAQ&rsquo;s about {bankName} Credit Card EMI will answer all your questions</p>
        <h2>What is {bankName} Credit Card EMI Calculator?</h2>
        <p>
          A {bankName} Credit Card calculator helps you know the amount of the EMIs that you will need to pay towards
          your&nbsp;{bankName} Credit Card&nbsp;<u>and</u> helps make an informed decision. The EMI-Calculators{' '}
          {bankName} Credit Card EMI calculator also functions as a {bankName} Credit Card interest calculator, as you
          will be able to know the interest amount due on your {bankName} Credit Card, in addition to the overall EMI
          amount, in just 3 simple steps. First, enter the loan amount that you wish to take. Then, select your
          preferred tenor. Finally, put in the&nbsp;{bankName} Credit Card interest rate&nbsp;advertised on the website.
          That's all!
        </p>
        <h2>What is {bankName} Credit Card EMI?</h2>
        <p>
          EMI stands for Equated Monthly Instalment. EMI is the monthly repayment that a {bankName} Credit Card borrower
          must make to repay the {bankName} Credit Card within the specified loan tenor.
        </p>
        <p>
          The following table illustrates the EMI on several {bankName} Credit Card amounts with different tenures. The
          applicable rate of interest is 8.60%* onwards.
        </p>
        <h2>Factors that Affect {bankName} Credit Card EMI</h2>
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
        <h2>{bankName} Credit Card Eligibility</h2>
        <p>
          If you meet the following criteria, then you will be eligible for a {bankName} Credit Card from more than one
          bank.
        </p>
        <p>
          <strong>Age :&nbsp;</strong>The minimum age required to hold a{' '}
          <a href="https://www.myloancare.in/credit-card/">{bankName} Credit Card</a>&nbsp;is 18 years, while the
          maximum age at which a {bankName} Credit Card can be availed is 60 years.
        </p>
        <p>
          <strong>Credit Score :&nbsp;</strong>A minimum credit score of 650 is required to avail of a {bankName} Credit
          Card. the bank in which the individual already has an account.
        </p>
        <p>
          <strong>Employment Status :&nbsp;</strong>To avail of a {bankName} Credit Card, a steady flow of income is
          required. Both salaried and self-employed can avail of a card as long as you can provide proof of steady
          income flow.
        </p>
        <p>
          <strong>Net Monthly Income :&nbsp;</strong>Minimum Rs. 15,000 as net monthly income is required to avail of a
          {bankName} Credit Card.
        </p>
        <p>
          <strong>ITR :&nbsp;</strong>Self-employed individuals are required to submit last year&rsquo;s ITR as well,
          along with identity proof when applying for a {bankName} Credit Card.
        </p>
        <h2>&nbsp;</h2>
        <h2>Documents required to apply {bankName} Credit Card loan</h2>
        <p>
          <strong>
            <u>Salaried Employees:</u>
          </strong>
        </p>
        <ul>
          <li>Filled up {bankName} Credit Card application form</li>
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
        </ul>
        <p>
          <strong>
            <u>Self-Employed:</u>
          </strong>
        </p>
        <ul>
          <li>Filled up {bankName} Credit Card application form</li>
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
        </ul>
        <p>&nbsp;</p>
        <h2>Factors Affecting {bankName} Credit Card Eligibility</h2>
        <p>
          <strong>Credit Score :&nbsp;</strong>Credit score is an indication of a person&rsquo;s creditworthiness. Lower
          the score; lesser is the creditworthiness. Besides, the more benefits a card has, the more is the required
          credit score. Some banks do have a specified card for those who do not have a credit score. However, if you
          have a certain credit history, then the minimum credit score of 650 is required.
        </p>
        <p>
          <strong>Income :&nbsp;</strong>Although a minimum income of Rs. 15,000 is required to be eligible for the
          card, but it will be a card with very few to none benefits. Higher income will attract a better card, which
          has a lot more benefits and a robust reward system.
        </p>
        <p>
          <strong>Organization :</strong>
          <strong>&nbsp;</strong>Each bank has a list of organizations with it, which are considered by the bank as
          trusted companies. So, if you work among any of those organizations, then the eligibility criteria for you are
          relaxed as compared to those who do not.
        </p>
        <p>
          <strong>Previous {bankName} Credit Card Record :</strong>
          <strong>&nbsp;</strong>In case you already have a {bankName} Credit Card and want to apply for another one,
          then the record of your previous card can be used to consider your eligibility. Thus, if you have maintained a
          good repayment record in your previous card, then it will serve as a positive sign for the bank when
          considering your eligibility.
        </p>
        <p>
          <strong>Existing relationship with bank :&nbsp;</strong>If you already have a savings or salary account with a
          bank, then based on an existing relationship, you can easily be eligible for a {bankName} Credit Card issued
          by that bank. As compared to new customer banks have relaxed norms for existing ones. ICICI Bank has
          low-income criteria for customers who have a salary or savings account with the bank.
        </p>
        <p>&nbsp;</p>
        <h2>{bankName} Credit Card EMI for Different Loan Amounts</h2>
        <p>Following table shows the EMIs for various loan amount based on different tenures at 8.60%* onwards</p>
        <ul>
          <li>
            The EMI that you can avail with {bankName} Credit Card of 10 Lakh is 10,024 with 15-years tenure. The EMI
            increases when you opt for tenure of 5 years.
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
        <h2>How is {bankName} Credit Card EMI Calculated?</h2>
        <p>
          Equated Monthly Installment &ndash; EMI for short &ndash; is the amount payable every month to the bank or any
          other financial institution until the loan amount is fully paid off. It consists of the interest on loan as
          well as part of the principal amount to be repaid. The sum of principal amount and interest is divided by the
          tenure, i.e., number of months, in which the loan has to be repaid. This amount has to be paid monthly.
        </p>
        <p>E = P x r x (1+r)^n/((1+r)^n &ndash; 1)</p>
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
        <h2>How to Calculate EMI for {bankName} Credit Card?</h2>
        <p>
          Calculating the EMI amount on your {bankName} Credit Card is quite easy. Simply enter the loan amount you wish
          to take, the tenor (in months, and not years) and the rate of interest, in the required fields.
        </p>
        <p>
          Once you find the EMI calculator for {bankName} Credit Card,&nbsp;To calculate the amount of EMI, you need to
          put the following inputs in the EMI calculator:
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
        <h2>What are the Advantages of Knowing {bankName} Credit Card EMI in Advance?</h2>
        <p>
          Good planning always ensures stable finances. Calculating the {bankName} Credit Card EMI in advance gives a
          better understanding of the amount of money you would have to spend every month. Hence, you can plan well and
          decide whether you are able to spare that much money or not.
        </p>
        <h2>Components of a {bankName} Credit Card EMI Calculator?</h2>
        <ol>
          <li>Amount of loan to calculate EMI</li>
          <li>Loan term (months or years) to calculate EMI</li>
          <li>Rate of interest (percentage) to calculate EMI</li>
        </ol>
        <h2>How to use {bankName} Credit Card EMI Calculator?</h2>
        <p>Using the EMI Calculator is a very simple process. All you need to do is follow these steps&ndash;</p>
        <ul>
          <li>Go the {bankName} Credit Card Loan EMI Calculator page</li>
          <li>Choose the loan amount, rate of interest, and tenor (in months)</li>
        </ul>
        <p>
          That's all! You will instantly get your {bankName} Credit Card EMI amount along with the interest amount
          payable on the loan.
        </p>
        <h2>What are the Advantages of a {bankName} Credit Card EMI Calculator?</h2>
        <p>
          A {bankName} Credit Card EMI Calculator helps you to decide whether you can afford the financial commitment of
          a Credit Card in the long term. If you want, you can increase or decrease your EMI amount depending on the
          amount of loan you are taking and the time period for which you'll be paying the EMIs.
        </p>
        <p>
          <strong>Quick Results</strong> &ndash; Applicants can easily use this calculator to calculate the EMIs that
          they will be liable to pay for the pre-determined tenure and interest rate that the {bankName} Credit Card
          loans are offered, in mere seconds.
        </p>
        <p>
          <strong>Simplicity</strong> &ndash; The calculations using this EMI calculator for {bankName} Credit Card Loan
          are based on the applicant providing three key bits of information i.e. the principal amount of the loan, the
          applicable rate of interest and the loan tenure.
        </p>
        <p>
          <strong>Varying Combinations</strong> &ndash; With the {bankName} Credit Card Loan EMI calculator, you can
          easily input different interest rates and tenures to look for a combination that will allow you to easily
          repay the principal amount, without putting undue pressure on your finances.
        </p>
        <p>
          Free Usage &ndash; The <a href="https://emi-calculators.com/">EMI-Calculators.com'</a>s {bankName} Credit Card
          Loan EMI calculator is a user friendly {bankName} Credit Card Loan calculator that is available to everyone
          free of charge and is easy to use
        </p>
        <p>&nbsp;</p>
        <h2>What Is a {bankName} Credit Card EMI Amortization Schedule?</h2>
        <p>
          A {bankName} Credit Card amortization schedule is the table or record which details all the periodic payments
          on your loan. This is generated through an amortization calculator.
        </p>
        <p>
          Amortization is basically the procedure of repaying a loan through regular payments over a specified period.
          An amortization schedule is the total tally of loan payments showing the amount of interest and principal
          contained in each payment, until the loan is repaid in full.
        </p>
        <h2>What are the factors that impact monthly {bankName} Credit Card EMI?</h2>
        <p>
          The estimated monthly investment (EMI) depends on a number of factors such the amount, the tenure of the loan,
          and the interest rate. The estimated monthly investment (EMI) differs according to the loan type and the
          amount. If the interest rate of the loan is fixed, the estimated monthly investment remains fixed as well for
          the entire time the loan is active. The borrower can also opt for a pre-payment wherein the estimated monthly
          investment (EMI) gets reduced. If the interest rate is floating, the EMI is also floating.
        </p>
        <h2>
          What is Flat/Fixed Rate of Interest? And Flat/Fixed Rate of Interest Effect your EMI for {bankName} Credit
          Card?
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
        <h4>Benefits of Fixed Interest Rate:</h4>
        <ul>
          <li>Interest Rate does not change as per the market fluctuations</li>
          <li>Having a fixed interest rate brings a sense of safety and security for the borrower</li>
          <li>Since it entails a fixed monthly repayment schedule, it helps in easy budgeting</li>
        </ul>
        <h4>Drawbacks of Fixed Interest Rate:</h4>
        <ul>
          <li>Generally, Fixed Interest Rates are 1%-2.5% higher than Floating Interest Rate</li>
          <li>
            Fixed Interest Rates are subject to change as per the market fluctuations, hence if by chance the interest
            rate decreases, the fixed rate {bankName} Credit Card won&rsquo;t be benefited as the borrower will have to
            pay the same fixed amount every month.
          </li>
        </ul>
        <h2>
          What is Floating Rate of Interest? And Floating Rate of Interest Effect your EMI for {bankName} Credit Card?
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
          The online loan EMI calculator for {bankName} Credit Card can be used to calculate loan EMIs with a Floating
          rate of interest.
        </p>
        <p>
          Floating Interest Rate is the rate which changes as per the market conditions. Loans on floating interest
          rates are tied to a base rate PLUS a floating element thereof.
        </p>
        <h4>Benefits of Floating Interest Rate:</h4>
        <ul>
          <li>Floating Interest Rates are cheaper than Fixed Interest Rate</li>
          <li>
            During the long term, even if the floating interest rate rises up the fixed interest rate, they will
            eventually fall. Hence ensuring a lot of savings.
          </li>
        </ul>
        <h4>Drawbacks of Floating Interest Rate:</h4>
        <p>Due to frequent fluctuations in interest rate, the nature of monthly installments is quite uneven.</p>
        <p>
          Hence it is necessary that you conduct a proper cost and benefit analysis before choosing among Fixed and
          Floating Rate of Interests.
        </p>
        <h2>Why should I use a {bankName} Credit Card EMI calculator?</h2>
        <p>
          The simplest answer is that it&rsquo;s fast and it&rsquo;s convenient. This means that you can do multiple
          calculations in minutes where such calculations many take longer were you to sit down with a pen and paper.
          These calculators are also super accurate, so it eliminates the possibility of errors in calculations,
          provided you provide accurate data.
        </p>
        <h2>Will banks provide the {bankName} Credit Card EMI calculator?</h2>
        <p>
          Yes. These days most, if not all, banks have {bankName} Credit Card EMI calculator, specific to various loans,
          available on their websites.
        </p>
        <h2>How much should I pay as monthly EMI for {bankName} Credit Card?</h2>
        <p>
          Monthly EMI for {bankName} Credit Card depends upon your income and expenses. Generally, banks advise you to
          limit your EMI to 35% to 45% of your net income so that you can pay your EMI without any burden or difficulty.
          You can calculate your EMI online which will help you to know your repayment capacity.
        </p>
        <h2>What if I miss EMI payment for {bankName} Credit Card or there is an ECS bounce?</h2>
        <p>
          If you miss your EMI payment on your {bankName} Credit Card or if there is an ECS bounce then bank may charge
          a penalty. In addition, it will also be reflected in your{' '}
          <a href="https://www.cibil.com/freecibilscore">CIBIL</a> report and your{' '}
          <a href="https://www.cibil.com/freecibilscore">CIBIL</a> score may get impacted.
        </p>
        <h2>What if I get delay in paying the {bankName} Credit Card &nbsp;loan EMI?</h2>
        <p>
          Banks charges penalty for delaying EMI payment for {bankName} Credit Card. The amount of penalty varies from
          bank to bank. This also impacts your <a href="https://www.cibil.com/freecibilscore">CIBIL</a> Score.
        </p>
        <h2>What is No-Cost EMI on {bankName} Credit Card?</h2>
        <p>No-cost EMI' offers on the online retailers</p>
        <p>
          Essentially, you pay the original price of the phone in instalments: the retailer gets the discounted price
          and the balance (i.e., the 'discount amount') goes to pay the interest on the loan.
        </p>
        <h2>How does the EMI on {bankName} Credit Card work?</h2>
        <p>
          {bankName} Credit Card companies make money by earning interest on late payments that you make. ... EMI on{' '}
          {bankName} Credit Cards work much like a home loan or a personal loan &ndash; you pay the principal and
          interest each month and clear off your debt over a period of time. Put it simply, that is how EMIs on{' '}
          {bankName} Credit Cards work.
        </p>
        <h2>Can we pay EMI using {bankName} Credit Card?</h2>
        <h4>Debt Service - Make a Payment</h4>
        <p>
          You may pay your Loan EMI / {bankName} Credit Card overdues through below payment options: 'Click to Pay'
          offers payment facility using Net Banking of over 50 banks. You can view the outstanding amount against your
          any&nbsp; Bank Loan as on date before making the payment.
        </p>
        <h2>What if I pay more than EMI in {bankName} Credit Card?</h2>
        <p>
          If you opt for an EMI facility, the EMI amount will get reflected on your monthly {bankName} Credit Card bills
          along with your other dues. If you fail to pay your {bankName} Credit Card dues in any month, you will be
          charged a hefty interest of anywhere between 24%-36% for non-payment
        </p>
        <h2>How the No-Cost EMI Scheme from Banks Work?</h2>
        <p>Here are the steps:</p>
        <p>Divide the item cost by the number of months of EMI to arrive at EMI amount (say Rs X).</p>
        <p>
          Figure out the loan amount (L) (at a certain rate of interest and no. of months) that would result in EMI of
          Rs X.
        </p>
        <p>
          Your discount is Item Cost &ndash; Loan Amount. Your {bankName} Credit Card will be charged Rs L. This amount
          will be converted into EMIs.
        </p>
        <p>You will have to pay EMI for loan tenure. GST is charged on the interest amount.</p>
        <h2>Where Can I get No Cost EMI?</h2>
        <ol>
          <li>
            <a href="https://www.amazon.in/">
              <strong>Amazon</strong>
            </a>
          </li>
          <li>
            <a href="https://www.flipkart.com/">
              <strong>Flipkart</strong>
            </a>
          </li>
          <li>
            <a href="https://www.snapdeal.com/">
              <strong>Snapdeal</strong>
            </a>
          </li>
          <li>
            <a href="https://www.myntra.com/">
              <strong>Myntra</strong>
            </a>
          </li>
          <li>
            <a href="https://paytm.com/">
              <strong>PayTm</strong>
            </a>
          </li>
          <li>
            <a href="https://www.jabong.com/">
              <strong>Jabong</strong>
            </a>
          </li>
          <li>
            <a href="https://www.freecharge.in/">
              <strong>Freecharge</strong>
            </a>
          </li>
          <li>
            <a href="https://www.phonepe.com/en/">
              <strong>PhonePe</strong>
            </a>
          </li>
          <li>
            <a href="https://paytmmall.com/">
              <strong>PaytmMall</strong>
            </a>
          </li>
          <li>
            <a href="https://www.bajajfinserv.in/">
              <strong>Bajan FinServ</strong>
            </a>
          </li>
          <li>
            <a href="https://www.mobikwik.com/">
              <strong>Mobikwik</strong>
            </a>
          </li>
        </ol>
        <p>
          <strong>
            {bankName} Credit Cards can also be used on below online food delivery and cab booking companies.
          </strong>
        </p>
        <ol>
          <li>
            <a href="https://www.swiggy.com/">
              <strong>Swiggy</strong>
            </a>
          </li>
          <li>
            <a href="https://www.olacabs.com/">
              <strong>Ola</strong>
            </a>
          </li>
          <li>
            <a href="https://www.uber.com/in/en/">
              <strong>Uber</strong>
            </a>
          </li>
          <li>
            <a href="https://www.zomato.com/">
              <strong>Zomato</strong>
            </a>
          </li>
          <li>
            <a href="https://www.oyorooms.com/">
              <strong>Oyo</strong>
            </a>
          </li>
          <li>
            <a href="https://www.makemytrip.com/">
              <strong>Makemytrip</strong>
            </a>
          </li>
          <li>
            <a href="https://www.bigbasket.com/">
              <strong>Bigbasket</strong>
            </a>
          </li>
          <li>
            <a href="https://www.goibibo.com/">
              <strong>GoIbibo</strong>
            </a>
          </li>
          <li>
            <a href="https://www.zoomcar.com/">
              <strong>Zoomcar</strong>
            </a>
          </li>
        </ol>
        <h2>Why it is necessary to calculate EMI beforehand?</h2>
        <p>
          It is important to calculate your EMI in advance to maintain stability in future payments. When you avail loan
          for your {bankName} Credit Card, you promise the bank to pay a fixed amount at fixed date every month. So,
          before availing the {bankName} Credit Card you should consider the stability of your income, monthly expenses
          and the existing loan obligations to avoid any discrepancies in future payments.
        </p>
        <h2>Does the loan tenure affect my EMI for {bankName} Credit Card?</h2>
        <p>
          {bankName} Credit Card can be availed for maximum tenure of 20 years. Tenure affects your monthly EMI. Longer
          the tenure of {bankName} Credit Card, lower will be your EMI.
        </p>
        <h2>Must Know things before you have {bankName} Credit Card EMI:</h2>
        <h3>Can I foreclose my {bankName} Credit Card EMI?</h3>
        <p>
          Yes, you can clear the future EMI of your {bankName} Credit Card by paying the total outstanding in one go.
          But, you should first ask the concerned bank regarding the same. ... And, if your lender does not charge on
          the foreclosure, it would be better going with your impending move of paying the entire outstanding.
        </p>
        <h3>What happens if you don&rsquo;t pay EMI?</h3>
        <p>
          What happens if I miss my EMI payment? You can only miss your EMI if you have insufficient funds in your bank
          account. Few days grace period will be given to you to pay your EMIs. Further delay in payments will be
          reported to <a href="https://www.cibil.com/freecibilscore">CIBIL</a> and will have financial charges.
        </p>
        <h3>Should I pay my {bankName} Credit Card EMI/ bill early?</h3>
        <p>
          At a minimum, you should pay your {bankName} Credit Card bill or EMI before its statement due date. You can
          never pay your {bankName} Credit Card too early but be sure to check the statement period to which your early
          payment will be credited.
        </p>
        <h3>What happens if I only pay the minimum payment on my {bankName} Credit Card?</h3>
        <p>
          What Happens If I Make Only the Minimum Payment on My {bankName} Credit Card? Paying only the minimum keeps
          you in debt longer, costs you money in interest and could hurt your credit score. ... If you pay the minimum
          toward your balance each month, here's what you can expect to happen: Paying down your debt will take much
          longer.
        </p>
        <h3>Can I foreclose my {bankName} Credit Card EMI?</h3>
        <p>
          Yes, you can clear the future EMI of your {bankName} Credit Card by paying the total outstanding in one go.
          But you should first ask the concerned bank regarding the same. And, if your lender does not charge on the
          foreclosure, it would be better going with your impending move of paying the entire outstanding.
        </p>
        <h3>How can I avoid paying interest on my {bankName} Credit Card?</h3>
        <p>
          The best way to avoid paying interest on your {bankName} Credit Card is to pay off the balance in full every
          month. You can also avoid other fees, such as late charges, by paying your {bankName} Credit Card bill on
          time.
        </p>
        <h3>Is {bankName} Credit Card EMI better option?</h3>
        <p>
          Although a good EMI scheme is easy on your wallet, you must try to avoid it as the first option. You may not
          only be spending more than the actual worth of the product, but also splurging first and then relying on EMI
          payments is not healthy for your finances.
        </p>
        <h3>Is {bankName} Credit Card EMI good?</h3>
        <p>
          The best form of the EMI option is where there is no interest charged on the payment. ... So, an expense of Rs
          12,000 spread over 12 months will lead to an EMI of Rs 1,000 a month, that will come in each month's credit
          card bill.
        </p>
        <h3>How is EMI deducted from {bankName} Credit Card?</h3>
        <p>
          The entire amount will get deducted if a purchaser purchases anything on EMI using his {bankName} Credit Card.
          The amount is released as on when the payment towards the EMI is made. EMI is similar to a loan you have taken
          to buy phone or whatever, which has been fully paid by bank to{' '}
          <a href="https://www.flipkart.com/">flipkart</a> or to the merchant.
        </p>
        <h3>
          Who is eligible for <a href="https://www.amazon.in/">Amazon</a> pay EMI?
        </h3>
        <p>
          You must be 18 years of age or above. Further eligibility is decided basis information already available with{' '}
          <a href="https://www.amazon.in/">
            <strong>Amazon</strong>
          </a>{' '}
          and your credit bureau history. Based on these and a host of other factors, Lending partner will decide the{' '}
          <a href="https://www.amazon.in/">
            <strong>Amazon</strong>
          </a>{' '}
          Pay EMI limit for you.
        </p>
        <h3>What is {bankName} Credit Card EMI scheme?</h3>
        <p>
          To facilitate {bankName} Credit Card EMI option, banks charge a loan processing fee upfront. The loan
          processing fee varies from bank to bank and is usually 0.5% to 1% of the amount of your purchase. Interest.{' '}
          {bankName} Credit Card EMI facility allows you to repay in easy instalments up to 24 month tenure. Some cards
          allow up to 36 months.
        </p>
        <h3>Is {bankName} Credit Card EMI good or bad?</h3>
        <p>
          Although a good EMI scheme is easy on your wallet, you must try to avoid it as the first option. You may not
          only be spending more than the actual worth of the product, but also splurging first and then relying on EMI
          payments is not healthy for your finances.
        </p>
        <h3>Is {bankName} Credit Card necessary for EMI?</h3>
        <p>
          Typically, you would associate EMI with a {bankName} Credit Card or a loan. If you don't own a {bankName}{' '}
          Credit Card and would still prefer paying in instalments, you can use your Debit card to make select purchases
          on EMI. By the way, Debit Card EMI is not a concept launched by{' '}
          <a href="https://www.flipkart.com/">flipkart</a>.{' '}
          <a href="https://www.amazon.in/">
            <strong>Amazon</strong>
          </a>{' '}
          also offers the scheme
        </p>
        <p>&nbsp;</p>
        <h2>Step by step guide before having {bankName} Credit Card EMI:</h2>
        <h3>
          Step 1 : Check {bankName} Credit Card EMI and calculate {bankName} Credit Card eligibility &ndash; {bankName}{' '}
          Credit Card EMI Calculator
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
        <h3>Step 2 : Check loan approval status and legal documents &ndash; {bankName} Credit Card EMI Calculator</h3>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <h3>
          Step 3 : Decide on type of {bankName} Credit Card interest rate offers &ndash; {bankName} Credit Card EMI
          Calculator
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
        <h3>Step 4 : Compare shortlisted banks | {bankName} Credit Card EMI Calculator</h3>
        <p>
          In addition to interest rates, banks also charge many other fees on {bankName} Credit Cards. Along with
          interest rates, you should check other associated costs with a your loan which include prepayment charges,
          processing fee, insurance premium and other charges offered by the shortlisted banks. You should calculate all
          inclusive costs on {bankName} Credit Card to be able to further shortlist the banks and reduce your choice to
          2-3 banks.
        </p>
        <h3>
          Step 5 : Select the bank based on other service related parameters &nbsp;| &nbsp;{bankName} Credit Card EMI
          Calculator
        </h3>
        <p>
          Finally as you decide to take the loan, also consider other service and transparency related parameters of the
          chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery, doorstep
          services, transparency in the loan process. You also need to understand the trends and changes in MCLR rates
          over a period of time. Last but not the least, read reviews of existing customers on banks on their services,
          interest rates and transparency to take your decision to borrow from a bank.
        </p>
        <h2>Bank specific {bankName} Credit Card EMI Calculator FAQs</h2>
        <ol>
          <li>
            <strong> What benefits do I get by calculating my EMI before taking an SBI property loan?</strong>
          </li>
        </ol>
        <p>Calculating your EMI before taking a loan can help you in the following ways:</p>
        <p>
          You can manage your monthly expenses better. Once you know how much you have to pay towards your loan each
          month, you can then budget the other expenses accordingly. You will be able to determine what tenure to choose
          depending on how much you can afford to repay every month. Planning prepayments and pre-closures can be done
          easily, helping you pay off your loan faster.
        </p>
        <ol>
          <li>
            <strong> Will my EMIs change in case of prepayment?</strong>
          </li>
        </ol>
        <p>
          When you prepay a part of your loan, the outstanding principal will reduce. This allows you to opt for a lower
          EMI while keeping the loan tenure the same. Or, you can maintain the same monthly instalment as before and
          reduce the tenure of the loan. It is advisable to maintain the same EMI and reduce the tenure since this will
          reduce the amount of interest you pay in the long run.
        </p>
        <ol>
          <li>
            <strong> Can I use the same EMI calculator for all banks?</strong>
          </li>
        </ol>
        <p>
          Yes. An EMI calculator is a common tool and is not tied to any bank or financial institution. If you know your
          principal, interest rate, processing charges, and tenure, you should be able to generate your EMI.
          BankBazaar&rsquo;s calculator also allows you to factor in prepayment details.
        </p>
        <p>
          <strong>4.How accurate is an EMI calculator?</strong>
        </p>
        <p>
          An EMI calculator estimates your loan repayment details based on the data you give it. But the EMI that your
          bank gives you may be a little different due to other charges involved in the calculation. Also, if your
          {bankName} Credit Card is subject to a floating rate, then the interest rate changes every year based on the
          MCLR or base rate change. Even a slight change in interest rate will make a difference to the total loan
          amount you repay, depending on the duration of the loan. These variables limit the accuracy of an EMI
          calculator.
        </p>
        <ol>
          <li>
            <strong>
              {' '}
              Why are the interest charges in the repayment table slightly higher during the initial months of the loan?
            </strong>
          </li>
        </ol>
        <p>
          The interest rate of your loan is applied based on &ldquo;reducing balance principle&rdquo;. Because of this,
          the interest will be slightly higher during the initial phase since the principal outstanding is higher. As
          this amount reduces, the incidence of interest will also come down proportionately.
        </p>
      </div>
    </Grid>
  )
}
