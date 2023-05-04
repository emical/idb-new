import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function Homeloan(props: {bankname: string | string[] | undefined}) {
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
          When one takes a {bankName} home loan, a natural question that comes to mind is how much the EMI would
          (Equated Monthly Installment) be that one must pay back to the bank every month.
        </p>
        <p>Hope the following FAQ&rsquo;s about {bankName} home loan will answer all your questions</p>
        <h2>What is {bankName} home loan Calculator?</h2>
        <p>
          A {bankName} home loan calculator helps you know the amount of the EMIs that you will need to pay towards your{' '}
          {bankName} home loan and helps make an informed decision. The EMI-Calculators.com's {bankName} home loan
          calculator also functions as a home loan interest calculator, as you will be able to know the interest amount
          due on your {bankName} home loan, in addition to the overall EMI amount, in just 3 simple steps. First, enter
          the loan amount that you wish to take. Then, select your preferred tenor. Finally, put in the {bankName} home
          loan interest rate advertised on the website. That's all!
        </p>
        <h2>What is {bankName} home loan?</h2>
        <p>
          EMI stands for Equated Monthly Instalment. EMI is the monthly repayment that a {bankName} home loan borrower
          must make to repay the {bankName} home loan within the specified loan tenor.
        </p>
        <p>
          The following table illustrates the EMI on several {bankName} home loan amounts with different tenures. The
          applicable rate of interest is 8.60%* onwards.
        </p>
        <h2>Factors that Affect {bankName} home loan</h2>
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
        <h1>Documents required to apply {bankName} home loan</h1>
        <h3>Salaried Employees:</h3>
        <ul>
          <li>Filled up loan application form</li>
          <li>2 Passport Size Photo</li>
          <li>
            Copy of <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a> PAN{' '}
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
        <h3>Self-Employed:</h3>
        <ul>
          <li>Filled up loan application form</li>
          <li>2 Passport Size Photo</li>
          <li>
            Copy of <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a> PAN{' '}
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
        <h2>{bankName} home loan for Different Loan Amounts</h2>
        <p>Following table shows the EMIs for various loan amount based on different tenures at 8.60%* onwards</p>
        <ul>
          <li>
            The EMI that you can avail with {bankName} home loan of 10 Lakh is 10,024 with 15-years tenure. The EMI
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
        <h1>Step by step guide before having {bankName} home loan:</h1>
        <h2>
          Step 1 : Check {bankName} home loan and calculate {bankName} home loan eligibility &ndash; {bankName} home
          loan Calculator
        </h2>
        <p>
          As you decide to take a {bankName} home loan, always estimate your loan amount eligibility to know the loan
          amount you will be eligible for and can apply for. Also calculate the monthly EMI that you can comfortably
          service given your net take personal salary and other existing fixed obligations including rent and EMIs on
          other existing loans, if any. Your house loan eligibility is calculated based on your age, net income,
          existing obligations, property type, LTV ratio and other factors. EMI is dependent on the loan amount,
          interest rate and tenure. Once you understand your minimum loan requirement, your eligibility and monthly EMI
          you can comfortably service, shortlist the banks which offer you maximum loan amount to meet your
          requirements.
        </p>
        <h2>Step 2 : Check loan approval status and legal documents &ndash; {bankName} home loan Calculator</h2>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <h2>
          Step 3 : Decide on type of {bankName} home loan interest rate offers &ndash; {bankName} home loan Calculator
        </h2>
        <p>
          As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on {bankName} home
          loan comparison of the loan offers of various banks. Some of the interest rate offers that needs to be checked
          are:
        </p>
        <p>
          Choice between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest
          compared to floating rate loans and interest rate remains constant during the tenure of {bankName} home loan.
          In floating rate loan, interest rates are reset at periodic intervals in response to changes in MCLR and PLR
          rates of banks or NBFCs. Majority of {bankName} home loans in India today are floating rate loans as it allows
          the borrowers to get {bankName} home loan interest rate in line with the current interest rates.
        </p>
        <p>
          Decide if you need a home saver loan &ndash; This is a loan with overdraft facility which allows you to
          deposit surplus amount in your {bankName} home loan overdraft account as and when available, allowing you to
          reduce your overall interest amount. This loan is highly recommended for salaried individuals with high
          bonuses and self employed business which is seasonal and has fluctuating cash flows. The interest rates on
          overdraft loan is slightly higher than that of a regular {bankName} home loan interest rate.
        </p>
        <p>
          You can also evaluate a mortgage guarantee house loan as it covers any default risk and allows the lender to
          give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to the bank.
        </p>
        <p>
          Check and compare the current {bankName} home loan interest rates of the banks on various types of loan
          products and take an informed decision.
        </p>
        <h2>Step 4 : Compare shortlisted banks | {bankName} home loan Calculator</h2>
        <p>
          In addition to interest rates, banks also charge many other fees on {bankName} home loans. Along with interest
          rates, you should check other associated costs with a your loan which include prepayment charges, processing
          fee, insurance premium and other charges offered by the shortlisted banks. You should calculate all inclusive
          costs on {bankName} home loan to be able to further shortlist the banks and reduce your choice to 2-3 banks.
        </p>

        <h2>
          Step 5 : Select the bank based on other service related parameters &nbsp;| &nbsp;{bankName} home loan
          Calculator
        </h2>
        <p>
          Finally as you decide to take the loan, also consider other service and transparency related parameters of the
          chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery, doorstep
          services, transparency in the loan process. You also need to understand the trends and changes in MCLR rates
          over a period. Last but not the least, read reviews of existing customers on banks on their services, interest
          rates and transparency to take your decision to borrow from a bank.
        </p>

        <h1>{bankName} home loan tax benefits related FAQs:</h1>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Can I claim tax benefits if I plan on constructing the house and selling it in a few years?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you sell the property within 5 years of possession, any tax deductions already claimed will be
              reversed. However the tax exemptions on interest paid will remain unchanged.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Who is eligible to claim tax deductions on {bankName} home loans?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                The owner of the property can claim tax benefits. If the spouse is a co-borrower, they can also file for
                tax deductions. In the case of a joint loan, both parties can claim for their share of the loan they
                pay.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>
                The property I purchased with a {bankName} home loan is still under construction. Can I claim tax
                benefits?
              </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You cannot claim tax deductions till the construction is completed. Once it is completed, you can claim an
              aggregate of interest paid for the period prior to the year of taking possession. This can be claimed in
              five equal instalments from the year in which construction is completed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Can I claim tax benefits on loans from friends?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can claim for tax deduction under Section 24(b) only for the interest paid. The friend will have to
              provide you with a certificate and will be liable to pay tax on the interest earned from the loan.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Can I claim tax benefit on two {bankName} home loans?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Generally, tax benefits can be availed only on the house claimed as self-occupied. In case if you own two
              houses, only one of them can be claimed as self-occupied property. The other house will be considered as a
              let-out property and will be taxed as per the tax slab applicable. The notional rent on your second house
              will be added to your income. To save on the applicable tax, one can consider investing the second house
              in his/her spouse&rsquo;s name. However, only one residential property can be relieved from being taxed.
              You will have to pay wealth tax on the second home.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Can my spouse claim income tax deduction if we buy a house jointly?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can claim separate deductions in your IT returns if your spouse is employed and has a different
              source of income. You can both claim deduction under Section 80C up to Rs.1.50 lakh from your total
              income. If the house is jointly owned, each co-owner can claim deductions up to Rs.2 lakh on account of
              the interest on borrowed money. However, if the house is being rented, there is no restriction on the
              claiming amount and you can individually claim deductions based on the ratio of possession on the
              property.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Is the {bankName} home loan principal part of Section 80C?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, {bankName} home loan principal is part of Section 80C of the Income Tax Act. Under this section, an
              individual is entitled to tax deductions on the amount paid as repayment of the principal component on the{' '}
              {bankName} home loan. An amount up to Rs.1.50 lakh can be claimed as tax deductions under Section 80C.
              However, the tax benefit on the repayment of the principal amount can be claimed only after the house is
              constructed. The section does not allow deductions for the repayment of the principal part during the
              years the house was being constructed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Can I claim tax benefits from a {bankName} home loan while claiming House Rent Allowance (HRA)?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                An individual is entitled to the following benefits if he/she is staying in a rented place after buying
                a home loan:
              </p>
              <ul>
                <li>House Rent Allowance (HRA) benefit</li>
                <li>Tax benefit on the interest amount paid under Section 24</li>
                <li>Tax benefit on principal amount repaid under Section 80C</li>
              </ul>
              <p>
                The Housing Rent Allowance benefit stops once the construction of the property is complete. You can
                avail all tax benefits on the {bankName} home loan only if the construction of property has been
                completed and is ready to move in during the same financial year. You can still claim tax benefits if
                you are living in a rented accommodation after giving your house on rent. However, the rent you receive
                on the property will be added to your taxable income and will be taxed as per the applicable tax slab.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Can self-employed individuals claim Housing Rent Allowance (HRA) benefit?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, self-employed individuals cannot claim Housing Rent Allowance (HRA) benefit. However, you can save tax
              on the house rent paid under Section 80GG of the Income Tax Act, provided the rent has not been claimed
              under another section of the IT Act.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>
                Are there any other tax deductions I can claim with respect to interest payment on the home other than
                the interest under Section 24(b)?
              </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can also claim tax deductions in respect of the interest on the {bankName} home loan under Section
              80EE of the Income Tax Act. Under this section, an individual is entitled to claim tax deductions up to a
              maximum amount of Rs.50,000 during a financial year. The deductions, however, cannot be claimed if you
              have repaid the entire
              {bankName} home loan. You can claim tax benefits under Section 80EE if you haven&rsquo;t purchased a house
              before. The value of the house should not exceed Rs.50 lakh and the {bankName} home loan taken for the
              property should be less than Rs.35 lakh to avail this benefit.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>Can I claim tax benefit on the principal repaid on a {bankName} home loan?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can avail tax benefits on the principal amount repaid on the {bankName} home loan from total
              income under Section 80C. However, you can only claim tax deductions up to a maximum amount of Rs.1.50
              lakh under this section.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h3>What is maximum amount I can avail for deduction of interest paid on my {bankName} home loan?</h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Under Section 24 of the Income Tax Act, an individual can claim tax deduction of the interest payment on
              the
              {bankName} home loan up to a maximum amount of Rs.2,00,000. However, there is no limit on the interest
              payment deduction of the property is rented.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <h1>Bank specific {bankName} home loan calculator FAQs</h1>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>What benefits do I get by calculating my EMI before taking an {bankName} home loan?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Calculating your EMI before taking a loan can help you in the following ways:</p>
              <p>
                You can manage your monthly expenses better. Once you know how much you must pay towards your loan each
                month, you can then budget the other expenses accordingly. You will be able to determine what tenure to
                choose depending on how much you can afford to repay every month. Planning prepayments and pre-closures
                can be done easily, helping you pay off your loan faster.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>Will my EMIs change in case of prepayment?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When you prepay a part of your loan, the outstanding principal will reduce. This allows you to opt for a
              lower EMI while keeping the loan tenure the same. Or, you can maintain the same monthly instalment as
              before and reduce the tenure of the loan. It is advisable to maintain the same EMI and reduce the tenure
              since this will reduce the amount of interest you pay in the long run.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>Can I use the same EMI calculator for all banks?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. An EMI calculator is a common tool and is not tied to any bank or financial institution. If you know
              your principal, interest rate, processing charges, and tenure, you should be able to generate your EMI.
              BankBazaar&rsquo;s calculator also allows you to factor in prepayment details.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>How accurate is an EMI calculator?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              An EMI calculator estimates your loan repayment details based on the data you give it. But the EMI that
              your bank gives you may be a little different due to other charges involved in the calculation. Also, if
              your home loan is subject to a floating rate, then the interest rate changes every year based on the MCLR
              or base rate change. Even a slight change in interest rate will make a difference to the total loan amount
              you repay, depending on the duration of the loan. These variables limit the accuracy of an EMI calculator.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>
                Why are the interest charges in the repayment table slightly higher during the initial months of the
                loan?
              </h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The interest rate of your loan is applied based on &ldquo;reducing balance principle&rdquo;. Because of
              this, the interest will be slightly higher during the initial phase since the principal outstanding is
              higher. As this amount reduces, the incidence of interest will also come down proportionately.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>How is {bankName} home loan Calculated?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                Equated Monthly Installment &ndash; EMI for short &ndash; is the amount payable every month to the bank
                or any other financial institution until the loan amount is fully paid off. It consists of the interest
                on loan as well as part of the principal amount to be repaid. The sum of principal amount and interest
                is divided by the tenure, i.e., number of months, in which the loan has to be repaid. This amount has to
                be paid monthly.
              </p>
              <p>
                <strong>E = P x r x (1+r)^n/((1+r)^n &ndash; 1)</strong>
              </p>
              <ol>
                <li>E is the amount that you will have to pay every month; basically, the EMI.</li>
                <li>P is the amount that you want to borrow.</li>
                <li>
                  r is the rate of interest that is applicable but calculated on a monthly basis instead of the annual
                  rate of interest. It is obtained by using the formula r = (annual interest/12) x 100.
                </li>
                <li>
                  n is the duration of the loan in terms of months. So if you select a term of 5 years, n will be 60.
                </li>
              </ol>
              <p>
                &nbsp;EMI is just the amount you (borrower) repay to the bank, each calendar month, to clear your
                outstanding loan.You have to repay the EMI each month, on a particular fixed date, for the entire
                duration (tenure) of the loan, till you repay the entire outstanding amount. (amount borrowed +
                interest).
              </p>
              <p>
                <strong>For Example</strong>, if you borrow 10,000,000 units of a currency from the bank at 10.5% annual
                interest for a period of 10 years (i.e., 120 months), then EMI = Units of currency 10,000,000 * 0.00875
                * (1 + 0.00875)^120 / ((1 + 0.00875)^120 &ndash; 1) = Units of currency 134,935. i.e., you will have to
                pay total currency units 134,935 for 120 months to repay the entire loan amount. The total amount
                payable will be 134,935 * 120 = 16,192,200 currency units that includes currency units 6,192,200 as
                interest toward the loan.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>How to Calculate EMI for {bankName} home loan?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                Calculating the EMI amount on your {bankName} home loan is quite easy. Simply enter the loan amount you
                wish to take, the tenor (in months, and not years) and the rate of interest, in the required fields.
              </p>
              <p>
                Once you find the EMI calculator for {bankName} home loan,&nbsp;To calculate the amount of EMI, you need
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
                The result will be your EMI, the total interest you&rsquo;ll be paying and the total amount you&rsquo;ll
                be paying by the end.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>What are the Advantages of Knowing {bankName} home loan in Advance?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Good planning always ensures stable finances. Calculating the {bankName} home loan in advance gives a
              better understanding of the amount of money you would have to spend every month. Hence, you can plan well
              and decide whether you are able to spare that much money or not.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>Components of a {bankName} home loan Calculator?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ol>
                <li>Amount of loan to calculate EMI</li>
                <li>Loan term (months or years) to calculate EMI</li>
                <li>Rate of interest (percentage) to calculate EMI</li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>How to use {bankName} home loan Calculator?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Using the EMI calculator is a very simple process. All you need to do is follow these steps&ndash;</p>
              <ul>
                <li>Go the {bankName} home loan calculator page</li>
                <li>Choose the loan amount, rate of interest, and tenor (in months)</li>
              </ul>
              <p>
                That's all! You will instantly get your {bankName} home loan amount along with the interest amount
                payable on the loan.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>What are the Advantages of a {bankName} home loan Calculator?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                A {bankName} home loan calculator helps you to decide whether you can afford the financial commitment of
                a {bankName} home loan in the long term. If you want, you can increase or decrease your EMI amount
                depending on the amount of loan you are taking and the time period for which you'll be paying the EMIs.
              </p>
              <p>
                <strong>Quick Results</strong> &ndash; Applicants can easily use this calculator to calculate the EMIs
                that they will be liable to pay for the pre-determined tenure and interest rate that the {bankName} home
                loans are offered, in mere seconds.
              </p>
              <p>
                <strong>Simplicity</strong> &ndash; The calculations using this EMI calculator for {bankName} home loan
                are based on the applicant providing three key bits of information i.e. the principal amount of the
                loan, the applicable rate of interest and the loan tenure.
              </p>
              <p>
                <strong>Varying Combinations</strong> &ndash; With the {bankName} home loan calculator, you can easily
                input different interest rates and tenures to look for a combination that will allow you to easily repay
                the principal amount, without putting undue pressure on your finances.
              </p>
              <p>
                Free Usage &ndash; The <a href="https://emi-calculators.com/">EMI-Calculators.com'</a>s {bankName} home
                loan calculator is a user friendly {bankName} home loan calculator that is available to everyone free of
                charge and is easy to use{' '}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>What Is a {bankName} home loan Amortization Schedule?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                A {bankName} home loan amortization schedule is the table or record which details all the periodic
                payments on your loan. This is generated through an amortization calculator.
              </p>
              <p>
                Amortization is basically the procedure of repaying a loan through regular payments over a specified
                period. An amortization schedule is the total tally of loan payments showing the amount of interest and
                principal contained in each payment, until the loan is repaid in full.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>What are the factors that impact monthly {bankName} home loan?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The estimated monthly investment (EMI) depends on a number of factors such the amount, the tenure of the
              loan, and the interest rate. The estimated monthly investment (EMI) differs according to the loan type and
              the amount. If the interest rate of the loan is fixed, the estimated monthly investment remains fixed as
              well for the entire time the loan is active. The borrower can also opt for a pre-payment wherein the
              estimated monthly investment (EMI) gets reduced. If the interest rate is floating, the EMI is also
              floating.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>
                What is Flat/Fixed Rate of Interest? And Flat/Fixed Rate of Interest Effect your EMI for {bankName} home
                loan?
              </h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                A fixed rate of interest is one where the interest rate on a loan remains fixed throughout the loan
                repayment period (loan tenure). This type of interest rate is comparatively higher than a floating rate
                of interest. Fixed rate of interest is better for those who don&rsquo;t prefer the risk of fluctuation
                that is an integral part of a variable interest rate. In the case of a fixed rate of interest, the loan
                EMI remains the same throughout the loan tenure.
              </p>
              <p>
                The online loan EMI calculator can be used to calculate loan EMIs with a fixed rate of
                interest.&nbsp;The different Interests Rates that can be implied in a Loan contract are Fixed Interest
                Rate and Floating Interest Rate.
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
                  Fixed Interest Rates are subject to change as per the market fluctuations, hence if by chance the
                  interest rate decreases, the fixed rate {bankName} home loan won&rsquo;t be benefited as the borrower
                  will have to pay the same fixed amount every month.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>
                What is Floating Rate of Interest? And Floating Rate of Interest Effect your EMI for {bankName} home
                loan?
              </h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                Floating rate of interest changes depending on the market-lending rate. It is also known as variable
                rate of interest. If the lending rate increases, the floating interest rate will also increase. Due to
                the risk of fluctuation, the floating rate of interest is usually lower than the fixed rate of interest.
                With a floating rate of interest for a specified loan tenure, you can either expect your EMI to reduce
                or increase depending on the rise in the interest rate.
              </p>
              <p>
                The online loan EMI calculator for {bankName} home loan can be used to calculate loan EMIs with a
                Floating rate of interest.
              </p>
              <p>
                Floating Interest Rate is the rate which changes as per the market conditions. Loans on floating
                interest rates are tied to a base rate PLUS a floating element thereof.
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
                Hence it is necessary that you conduct a proper cost and benefit analysis before choosing among Fixed
                and Floating Rate of Interests.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>Why should I use a {bankName} home loan calculator?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The simplest answer is that it&rsquo;s fast and it&rsquo;s convenient. This means that you can do multiple
              calculations in minutes where such calculations many take longer were you to sit down with a pen and
              paper. These calculators are also super accurate, so it eliminates the possibility of errors in
              calculations, provided you provide accurate data.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>Will banks provide the {bankName} home loan calculator?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. These days most, if not all, banks have {bankName} home loan calculator, specific to various loans,
              available on their websites.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>How much should I pay as monthly EMI for {bankName} home loan?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Monthly EMI for {bankName} home loan depends upon your income and expenses. Generally, banks advise you to
              limit your EMI to 35% to 45% of your net income so that you can pay your EMI without any burden or
              difficulty. You can calculate your EMI online which will help you to know your repayment capacity.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>What if I miss EMI payment for {bankName} home loan or there is an ECS bounce?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                If you miss your EMI payment on your {bankName} home loan or if there is an ECS bounce then bank may
                charge a penalty. In addition, it will also be reflected in your{' '}
                <a href="https://www.cibil.com/freecibilscore">CIBIL</a> report and your{' '}
                <a href="https://www.cibil.com/freecibilscore">CIBIL</a> score may get impacted.{' '}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>What if I get delay in paying the Home /House&nbsp; loan EMI?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Banks charges penalty for delaying EMI payment for {bankName} home loan. The amount of penalty varies from
              bank to bank.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>Why it is necessary to calculate EMI beforehand?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is important to calculate your EMI in advance to maintain stability in future payments. When you avail
              loan for your house, you promise the bank to pay a fixed amount at fixed date every month. So, before
              availing the
              {bankName} home loan you should consider the stability of your income, monthly expenses and the existing
              loan obligations to avoid any discrepancies in future payments.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <h2>Does the loan tenure affect my EMI for {bankName} home loan?</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {bankName} home loan can be availed for maximum tenure of 20 years. Tenure affects your monthly EMI.
              Longer the tenure of
              {bankName} home loan, lower will be your EMI.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}
