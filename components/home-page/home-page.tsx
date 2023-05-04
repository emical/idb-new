import React from 'react'
import Grid from '@mui/material/Grid'
import {NextSeo} from 'next-seo'
import Link from '@mui/material/Link'
import config from 'site.config'
import Icon from '@mui/material/Icon'
import Box from '@mui/material/Box'

const HomePageContent = () => {
  function getId(idstring: string) {
    return idstring.replace(/\s/g, '-')
  }
  function getHref(idstring: string) {
    return '#' + idstring.replace(/\s/g, '-')
  }
  const seoTitle = 'EMI Calculator - home loan, car loan, personal loan , student loan in India'
  const seoDesc =
    'Calculate your EMI for personal loan, home loan, car loan, student loan, business loan in India.Check EMI eligibilty, interest rates, application process, loan documents.'
  return (
    <>
      <NextSeo title={seoTitle} description={seoDesc} />
      <Grid item xs={12} md={12}>
        <h1>
          <strong>
            EMI Calculator &ndash; Calculate your loan EMI, interest rates by various banks, eligibility criteria,
            application process, Document required to apply loan in India
          </strong>
        </h1>
        <h3>
          <strong>What is EMI Calculator?</strong>
        </h3>
        <p>
          When one takes a EMI, a natural question that comes to mind is how much the EMI would (Equated Monthly
          Installment) be that one has to pay back to the bank every month. EMI calculator helps you in calculating your
          monthly EMI at your fingertips.
        </p>
        <h2>
          <span>
            <strong>Different types of EMI Calculators or Loan calculators :</strong>
          </span>
        </h2>
        <ul>
          <li>
            <p>
              <a href="/india/loans/personal-loan/">Personal loan calculator</a> -Helps you to calculate personal loan
              monthly EMI and interest rates by various banks and helps in the financial planning of every month to
              reach our financial goals.
            </p>
          </li>
          <li>
            <p>
              <a href="/india/loans/home-loan/">Home loan calculator</a> -calculate home loan monthly EMI and interest
              rates by various banks using this calculator and helps to plan and calculate interest to buy your dream
              home.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <a href="/india/loans/car-loan/">Car loan calculator </a> - An online calculator easy to use to calculate
              car loan EMI and interest rates by various lenders using this car loan calculator and helps to plan and
              calculate interest to buy your dream car.
            </p>
          </li>
          <li>
            <p>
              also people search it as <a href="/india/loans/auto-loan/">Auto loan calculator</a>
              -calculate auto loan monthly EMI and interest rates by various banks using this calculator for auto loan
            </p>
          </li>
          <li>
            <p>
              <a href="/india/loans/business-loan/">Business loan calculator</a> : It is very important for us to scale
              the business for small scare or medium scale businessman and entrepreneurs , using this calculator for
              business loan , you can calculate business loan monthly EMI and interest rates by various banks using
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <a href="/india/loans/education-loan/">Education loan calculator-</a> It is every student dream to pursue
              higher education in top-notch universities across the globe, use this calculator for education loan to
              calculate monthly EMI and interest rates by various banks. Many students also use our{' '}
              <a href="/india/loans/student-loan/">Student loan calculator </a> to
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>
              <a href="/india/loans/bike-loan/">Bike loan calculator</a> ( also as{' '}
              <a href="/india/loans/two-wheeler-loan/">Two wheeler loan calculator</a>
              )-calculate Bike Loan monthly EMI and interest rates by various banks using this calculator and helps to
              plan and calculate interest to buy your dream bike or any two wheeler.
            </p>
          </li>
          <li>
            <p>
              <a href="/india/loans/used-car-loan/">Used car loan calculator</a> ( know more about{' '}
              <a href="/india/loans/preowned-car-loan/">Preowned car loan calculator</a> and{' '}
              <a href="/india/loans/second-hand-car-loan/">second hand car loan calculator</a>
              )- Now a days it has become mandatory to get finance for preowned cars and used cars, this loan calculator
              for preowned car and second hand cars helps you to precize the car loan emi for used ones
            </p>
          </li>
        </ul>
        <div>&nbsp;</div>
        {/* <h2>
          <Icon className="fa fa-hand-point-right"></Icon>
          <Icon className="fa fa-hand-point-right"></Icon>Most searched Countries for BIN Codes/ IIN Codes:
        </h2>
        <br />
        <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 4, sm: 8, md: 12}}>
          {config?.largestCountriesList.map((country: any, index: any) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Box
                component="div"
                sx={{
                  '.inline-country': {
                    display: 'inline-flex',
                  },
                }}
              >
                <div className="inline-country">
                  <img
                    loading="lazy"
                    width="28"
                    height="21"
                    src={`https://flagcdn.com/w20/${country.Alpha2.toLowerCase()}.png`}
                    alt=""
                  />
                  <Link href={'/bin-code-search-iin-lookup/country/' + country?.CountryUrl + '/'}>
                    {country.CountryName} BIN Codes
                  </Link>
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
        <br />
        <br /> */}
        <h3>
          <strong>How to use EMI Calculator?</strong>
        </h3>
        <p>
          Once you find the EMI calculator, To calculate the amount of Loan EMI, you need to put the following inputs in
          the EMI calculator:
        </p>
        <ul>
          <li>
            <strong>Loan Amount</strong> &ndash; The principal amount borrowed from the bank or financial institution is
            known as the loan amount.
          </li>
          <li>
            <strong>Interest Rate</strong> &ndash; Interest rate can be either fixed or floating.
          </li>
          <li>
            <strong>Loan tenure &ndash; </strong>Is the time over which you choose to repay the loan.
          </li>
        </ul>
        <p>
          The result will be your EMI, the total interest you&rsquo;ll be paying and the total amount you&rsquo;ll be
          paying by the end.
        </p>
        <h2>
          <strong>
            <span>Eligibility criteria for any loan - EMI Calculator</span>{' '}
          </strong>
        </h2>
        <p>Loan eligibility and interest rate depends upon following factors -</p>
        <ul>
          <li>
            <strong>Loan amount: </strong>Generally, banks offer lower interest rates for higher amount.
          </li>
          <li>
            <strong>Your Salary: </strong>Higher salary bracket individuals are offered Loan s at lower interest rates.
            Loan interest rate of the bank varies with your net monthly income.
          </li>
          <li>
            <strong>Employer Category: </strong>Employer category of the borrower is a major deciding factor in order to
            determine his/her rate of interest. Every bank has a list of company categories of salaried individuals to
            which they avail Loan . So, higher company category leads to low bank Loan rate.
          </li>
          <li>
            <strong>Relationship with the Bank: </strong>Every bank offers special rates, offers and charges to the
            existing account holders of the bank. Those who have managed their accounts and made all the payments on
            time in past will get benefit of low Loan interest rate.
          </li>
          <li>
            <strong>Loan Tenure: </strong>Loan s are of longer repayment tenure of 7 years.
          </li>
          <li>
            <strong>Repayment Capacity: </strong>Before giving loan to the borrower, every bank checks the repayment
            capacity of the borrower. Bank verifies the repayment capacity of the customer through CIBIL score or credit
            score as it has all the details of previous loans taken and their repayments. CIBIL score also gives the
            information of credit card bills payment.
          </li>
        </ul>
        <table width="636">
          <tbody>
            <tr>
              <td>
                <strong>Eligibility Criteria</strong>
              </td>
              <td width="307">
                <strong>Eligibility Details</strong>
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td width="307">21 years - 65 years</td>
            </tr>
            <tr>
              <td>Minimum Annual Income</td>
              <td width="307">
                Salaried: ₹ 3 Lakhs Self Employed Professionals: ₹ 4 Lakhs Self Employed Businessmen: ₹ 4 Lakhs
              </td>
            </tr>
            <tr>
              <td>Minimum Credit Score</td>
              <td width="307">700 and above</td>
            </tr>
            <tr>
              <td>Loan Tenure</td>
              <td width="307">7 years</td>
            </tr>
          </tbody>
        </table>
        <h2>
          <span>
            <strong>Documents required to apply Loan - EMI Calculator</strong>
          </span>
        </h2>
        <h4>
          <strong>Salaried Employees:</strong>
        </h4>
        <ul>
          <li>
            <ul>
              <li>Filled up loan application form</li>
              <li>2 Passport Size Photo</li>
              <li>Copy of Income Tax PAN</li>
              <li>Identity Proof &ndash; Aadhaar, Passport / Driving License / Voter ID / PAN</li>
              <li>
                Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill (upto 3 months
                old), Passport
              </li>
              <li>
                Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement showing salary
                credit and any EMI debit
              </li>
            </ul>
          </li>
        </ul>
        <h4>
          <strong>Self-Employed:</strong>
        </h4>
        <ul>
          <li>
            <ul>
              <li>Filled up loan application form</li>
              <li>2 Passport Size Photo</li>
              <li>Copy of Income Tax PAN</li>
              <li>Identity Proof &ndash; Aadhaar, Passport / Driving License / Voter ID / PAN</li>
              <li>
                Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill (upto 3 months
                old), Passport
              </li>
              <li>
                Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement showing salary
                credit and any EMI debit
              </li>
            </ul>
          </li>
        </ul>
        <h2>
          <span>
            <strong>Loan Application Process in India - EMI Calculator</strong>
          </span>
        </h2>
        <h4>Step 1 : Check loan EMI and calculate eligibility</h4>
        <p>
          As you decide to take a Loan , always estimate your loan amount eligibility to know the loan amount you will
          be eligible for and can apply for. Also calculate the monthly EMI that you can comfortably service given your
          net take personal salary and other existing fixed obligations including rent and EMIs on other existing loans,
          if any. Your house loan eligibility is calculated based on your age, net income, existing obligations,
          property type, LTV ratio and other factors. EMI is dependent on the loan amount, interest rate and tenure.
          Once you understand your minimum loan requirement, your eligibility and monthly EMI you can comfortably
          service, shortlist the banks which offer you maximum loan amount to meet your requirements.
        </p>
        <h4>Step 2 : Check loan approval status and legal documents</h4>
        <p>
          If you are buying a property from builder, then check for the banks which have approved the projects you have
          shortlisted. For resale property, check the approved map plans and ensure that all property registration
          papers for the complete chain from the first owner to current owner are in place. Shortlist the banks which
          lend on your chosen property.
        </p>
        <h4>Step 3 : Decide on type of Loan interest rate offers</h4>
        <p>
          As you narrow down the list of banks in Step 2 and 3, you need to conduct an interest rate on Loan comparison
          of the loan offers of various banks. Some of the interest rate offers that needs to be checked are: Choice
          between fixed and floating rates &ndash; Fixed rates come at a slightly higher rate of interest compared to
          floating rate loans and interest rate remains constant during the tenure of Loan . In floating rate loan,
          interest rates are reset at periodic intervals in response to changes in MCLR and PLR rates of banks or NBFCs.
          Majority of housing loans in India today are floating rate loans as it allows the borrowers to get Loan
          interest rate in line with the current interest rates. Decide if you need a personal saver loan &ndash; This
          is a loan with overdraft facility which allows you to deposit surplus amount in your Loan overdraft account as
          and when available, allowing you to reduce your overall interest amount. This loan is highly recommended for
          salaried individuals with high bonuses and self employed business which is seasonal and has fluctuating cash
          flows. The interest rates on overdraft loan is slightly higher than that of a regular housing loan interest
          rate. You can also evaluate a mortgage guarantee house loan as it covers any default risk and allows the
          lender to give you loan at low rate of interest. You will however need to pay a mortgage guarantee fee to the
          bank. Check and compare the current Loan interest rates of the banks on various types of loan products and
          take an informed decision.
        </p>
        <h4>Step 4 : Compare shortlisted banks</h4>
        <p>
          In addition to interest rates, banks also charge many other fees on Loan s. Along with interest rates, you
          should check other associated costs with a your loan which include prepayment charges, processing fee,
          insurance premium and other charges offered by the shortlisted banks. You should calculate all inclusive costs
          on Loan to be able to further shortlist the banks and reduce your choice to 2-3 banks.
        </p>
        <h4>Step 5 : Select the bank based on other service related parameters</h4>
        <p>
          Finally as you decide to take the loan, also consider other service and transparency related parameters of the
          chosen banks. Some of these factors are turnaround time offered by the banks, quick loan delivery, doorstep
          services, transparency in the loan process. You also need to understand the trends and changes in MCLR rates
          over a period of time. Last but not the least, read reviews of existing customers on banks on their services,
          interest rates and transparency to take your decision to borrow from a bank.
        </p>
        <h2>
          <strong>Loan Application Process Online- - EMI Calculator</strong>
        </h2>
        <p>
          If the Loan applicant has an existing relationship with the financial lender, he/she can apply for a Loan via
          his/her net banking account and could possibly be eligible for a pre-approval. For other customers, they can
          apply for a Loan online by following the steps mentioned below:
        </p>
        <ul>
          <li>Visit the website of the financial lender.</li>
          <li>Under the loan section, choose Loan s.</li>
          <li>Click on the &lsquo;apply now&rsquo; option.</li>
          <li>Enter the details in the Loan application form and submit it to the bank.</li>
          <li>
            The bank will assess the eligibility of the applicant and request for the submission of the required KYC
            documents and income documents.
          </li>
          <li>
            If the applicant is found eligible, the bank will disburse the loan amount to the bank account of the
            applicant, as mentioned in the application form.
          </li>
        </ul>
        <h3>
          <strong>Loan application offline - </strong>
          <strong>EMI Calculator</strong>
        </h3>
        <p>Listed below is the process of applying for a Loan at the branch of the financial lender:</p>
        <ul>
          <li>Visit the branch of the financial lender.</li>
          <li>Procure the Loan application form and enter all the required details.</li>
          <li>Submit relevant documents that prove one&rsquo;s income, age, address and identity.</li>
          <li>The lender will then verify the documents and check the eligibility of the applicant.</li>
          <li>The loan amount will be transferred to the bank account of the applicant if he/she is found eligible.</li>
        </ul>
        <h3>
          <strong>Loan Application Process via Email and phone banking requests:</strong>
        </h3>
        <p>
          You can leave a request for Loan with the bank through an email or at the customer service centre of the bank.
          The bank will review your eligibility and contact you to take the process further.
        </p>
        <h3>
          <strong>Loan Application Request through ATM machine:</strong>
        </h3>
        <p>
          Nowadays you can apply for Loan via ATM kiosks as well. Once you raise a request the bank personnel will
          contact you.
        </p>
        <h3>
          <strong>How Loan Applications are processed: - </strong>
          <strong>EMI Calculator</strong>
        </h3>
        <p>
          The process of sanctioning of a Loan is simpler than property loans such as home loan and car loan. This is
          because, in case of property loans, the bank has to verify not just your financial information, but also the
          credibility and eligibility of the asset that you are purchasing with the loan amount. For Loan , you are the
          collateral security yourself, so the bank has to do a background verification only on you.
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
            Some banks might ascertain your credit-worthiness by finding out your CIBIL The higher the CIBIL rating, the
            more your chances of getting the loan approved.
          </li>
          <li>
            The bank will also review your age, number of years of employment left, and salary growth prospects, to
            decide how much loan it can approve for you and what the repayment period should be.
          </li>
        </ul>
        <h2>
          <span>
            <strong>Loan for Govt Employees - EMI Calculator</strong>
          </span>
        </h2>
        <ul>
          <li>Interest rate Loan for government employee starts @11.49%</li>
          <li>Special offers available for government employees of India and public sector undertakings</li>
          <li>Nil processing fees for defense personnel</li>
          <li>Lowest interest rates for employees of public sector banks</li>
        </ul>
        <p>
          As per the current rates, both HDFC and ICICI bank offer the lowest interest rates of 11.49% for Government
          Employees. Based on processing fee, HDFC Bank and ICICI Bank offer lowest processing fee with 0.99 charges for
          government employees working in Defense. For central govt. employees, the best Loan rates are 12.25% to
          17.25%.
        </p>
        <h4>SBI Loan s for Govt Employees</h4>
        <p>
          SBI offers special Loan Schemes for Government Employees in order to meet their urgent fund requirements. SBI
          Xpress Credit is a loan for meeting medical emergency, wedding or family vacation expenses. All government
          employees are eligible to avail loan of up to Rs. 15 Lakh from SBI with a maximum tenure of 48 months. SBI
          Xpress Credit Loan interest rate starts from 11.90%. Another similar scheme, SBI Pension Loan is a specially
          designed schemes for government pensioners. Under the scheme, an amount of up to Rs. 14 Lakh is available for
          government pensioners for a tenure of up to 60 months . Interest rates charged on SBI Pension loan starts at
          12.45%.
        </p>
        <h4>
          <strong>Government Bodies Who Offer Loan s</strong>
        </h4>
        <p>
          <strong>Maharatna PSU &ndash; </strong>Maharatna Pubic Sector Undertaking (PSU) can raise the investment of
          any company from Rs. 1,000 crore to Rs. 5,000 crore. The companies whose 3 years average annual profit is Rs.
          5,000 crore or average annual net worth of Rs. 10,000 crore for 3 years or average annual turnover for 3 years
          is Rs. 20,000 crore are eligible to become a Maharatna PSU. Presently, there are 7 government companies which
          comes under Maharatna categories and these are BHEL, GAIL India, ONGC, NTPC, Coal India, Indian Oil
          Corporation and Steel Authority of India. The rates for these PSUs are different from the rates offered to
          private sector companies. The Loan rates for Maharatna PSU employees in HDFC Bank are 11.49% - 13.99% and in
          ICICI Bank are 11.60%.<strong>Navratna PSU &ndash; </strong>Navratna PSUs are decided on six parameters like
          net worth, net profit, total manpower cost, total cost of production, cost of services, PBDIT (Profit before
          Depreciation, Interest and Taxes), capital employed etc. A Miniratna company with 4 independent directors on
          its board team can become a Navratna PSU. Navratna PSU includes 17 companies and some of these are Bharat
          Electronics, Hindustan Aeronautics, Bharat Petroleum Corporation, Oil India, NMDC etc. Loan interest rates for
          Navratna PSU in HDFC Bank are 11.49% - 13.99% and in ICICI Bank are 12.25%.
          <strong>Public Sector Banks &ndash; </strong>
          These banks are those whose majority share of more than 50% is held by a government. Currently, there are 21
          nationalized banks in India which mainly includes SBI, PNB, Bank of Baroda, UCO Bank etc. The loan rates for
          Public Sector Bank employees in HDFC Bank are 15.50% and in ICICI Bank are 13.25% - 15.75%.{' '}
          <strong>Central Government Enterprises &ndash; </strong>In these companies, direct holding of Central
          Government Departments/ Institutes or other Central Public Sector Undertaking is 51% or more. The Loan rates
          offered to Central Government Enterprises by HDFC Bank are 15.50% - 17.25% and by ICICI Bank are 12.25% -
          16.75%. <strong>Railways &ndash; </strong>Indian Railways is a State-owned national transporter and is owned
          and operated by Government of India via the Ministry of Railways. Indian Railways employees can get Loan by
          HDFC Bank at 14.99% - 16.99% and by ICICI Bank at 12.25% - 16.75%.
          <strong>State Government Enterprises - </strong>
          The rates for State Government employees and Institutes like Universities, Colleges, etc. vary from bank to
          bank. Currently, HDFC Bank Loan rates for State Government Enterprises are 15.50% - 17.25% and ICICI Bank
          rates are 12.25% - 16.75%.
        </p>
        <h4>Loan s for Defense Personnel</h4>
        <p>
          Banks have come out with special offers for our armed forces, in lieu of their unmatched contribution to
          India. HDFC and ICICI Bank offer special rates on Loan s for defense personnel as they classify under the
          armed forces category. Key armed forces category which are eligible for these offers are BSF, CRPF, ITBP,
          CISF, SSB, NDRF, The Indian Airforce, The Indian Navy and The Indian Army. Some banks also include the Police
          Department under their schemes for defense personnel. The eligibility of these loan schemes is linked to the
          seniority and designation of the personnel. The Loan rates for defense personnel in HDFC Bank are 15.75% and
          in ICICI Bank are 11.75% - 13.50%. Also, remember to compare the processing fees before taking a Loan offer
          for defense personnel as many banks offer nil processing fee on loans for armed forces.
        </p>
        <h4>Loan for Pensioners</h4>
        <p>
          Pensioners or retired individuals are often in need of funds to meet their personal expenses such as a
          child&rsquo;s wedding or medical expenses. Leading banks such as SBI and ICICI Bank offer loans for pensioners
          at lowest discounted rates. These loans can be availed by retired employees of Central Government, State Govt.
          or defense forces. Banks cap the maximum age of pensioners to be eligible for a Loan at 76 years with a
          maximum loan tenure of up to 5 years. Banks charge a nominal processing fee for pensioners. SBI charges 12.45%
          interest rates for pensioners and interest rate of ICICI Bank for pensioners is in the range of 16.00% .
        </p>
        <h4>Government Employees Loan Eligibility</h4>
        <ul>
          <li>Minimum age of the applicant should be 21 years and maximum 65 years.</li>
          <li>
            and permanent salaried employees with minimum income of Rs. 20,000 per month are eligible for Loan . Income
            eligibility may vary depending upon your profile.
          </li>
          <li>
            Bank gives loans to those applicants who are at least 6 months experienced in their current job with a total
            experience of 3 years although it may vary bank to bank.
          </li>
          <li>
            CIBIL score matters as Loan s are unsecured loans. Your CIBIL score should be 700 or more than that with a
            good credit history which is equally important to get approval on loan application.
          </li>
        </ul>
        <h4>
          <u>Loan for Government Employees &ndash; Fees &amp; Charges</u>
        </h4>
        <p>
          Bank charge fee from PSU employees on processing and pre closure of Loan . These charges include -{' '}
          <strong>Processing Fee &ndash;</strong> This fee varies from bank to bank and is higher than secured loans and
          can range upto 2% for government employees.<strong>Pre Closure Fee &ndash; </strong>This fee is charged when
          you want to close your loan before the completion of the tenure. Foreclosure charges are different in all
          banks. Most of the banks charge a preclosure fee from nil to up to 5% on outstanding loan amount.
        </p>
        <h3>
          Documents Required for Public Sector Loan<strong> - </strong>
          <strong>EMI Calculator</strong>
        </h3>
        <ul>
          <li>Signed application form</li>
          <li>Age proof - Passport, PAN Card, Birth Certificate, Employee ID Card</li>
          <li>Copy of Income Tax PAN</li>
          <li>Identity Proof &ndash; Aadhaar, Passport / Driving License / Voter ID / PAN</li>
          <li>
            Address proof &ndash; Passport, Voter ID Card, Aadhar Card, Utility bills (not more than 3 months old)
          </li>
          <li>
            Income proof &ndash; Form 16 of last 2 years, salary slips of last 6 months and last 6 months bank statement
          </li>
        </ul>
        <h3>
          <strong>Benefits of EMI Calculator?</strong>
        </h3>
        <ul>
          <li>Fast</li>
          <li>Simple</li>
          <li>Convenient</li>
          <li>Estimate your monthly expenses and have a healthy financial plan</li>
        </ul>
        <h3>
          <strong>Why should I use EMI Calculator?</strong>
        </h3>
        <p>
          The simplest answer is that it&rsquo;s fast and it&rsquo;s convenient. This means that you can do multiple
          calculations in minutes where such calculations many take longer were you to sit down with a pen and paper.
          These calculators are also super accurate so it eliminates the possibility of errors in calculations, provided
          you provide accurate data.
        </p>
        <h3>
          <strong>Components of EMI Calculator?</strong>
        </h3>
        <ol>
          <li>Amount of Loan to calculate personal loan EMI</li>
          <li>Loan term (months or years) to calculate Loan EMI</li>
          <li>Rate of interest (percentage) to calculate Loan EMI</li>
        </ol>
        <h3>Lowest Loan EMI per lakh</h3>
        <table width="539">
          <tbody>
            <tr>
              <td width="312">
                <strong>Bank</strong>
              </td>
              <td width="131">
                <strong>Lowest EMI per lakh</strong>
              </td>
              <td width="91">
                <strong>Max Tenure</strong>
              </td>
            </tr>
            <tr>
              <td width="312">SBI Loan</td>
              <td width="131">₹ 2,658</td>
              <td width="91">48 months</td>
            </tr>
            <tr>
              <td width="312">HDFC Bank Loan</td>
              <td width="131">₹ 2,162</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">ICICI Bank Loan</td>
              <td width="131">₹ 2,187</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Bajaj Finserv</td>
              <td width="131">₹ 2,224</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Citibank</td>
              <td width="131">₹ 2,174</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">IDFC First Bank</td>
              <td width="131">₹ 2,199</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Axis Bank</td>
              <td width="131">₹ 2,187</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Tata Capital</td>
              <td width="131">₹ 1,942</td>
              <td width="91">72 months</td>
            </tr>
            <tr>
              <td width="312">Fullerton India</td>
              <td width="131">₹ 2,732</td>
              <td width="91">48 months</td>
            </tr>
            <tr>
              <td width="312">IndusInd Bank</td>
              <td width="131">₹ 2,174</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Kotak Bank</td>
              <td width="131">₹ 2,149</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">RBL Bank</td>
              <td width="131">₹ 2,326</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">IIFL</td>
              <td width="131">₹ 2,275</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">HDB Financial</td>
              <td width="131">₹ 2,326</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">PNB</td>
              <td width="131">₹ 2,224</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Andhra Bank</td>
              <td width="131">₹ 2,202</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Yes Bank</td>
              <td width="131">₹ 2,174</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Union Bank of India</td>
              <td width="131">₹ 2,260</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Bank of Baroda</td>
              <td width="131">₹ 3,302</td>
              <td width="91">36 months</td>
            </tr>
            <tr>
              <td width="312">Syndicate Bank</td>
              <td width="131">₹ 2,296</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Standard Chartered Bank</td>
              <td width="131">₹ 2,174</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Bank of Maharashtra</td>
              <td width="131">₹ 3,471</td>
              <td width="91">36 months</td>
            </tr>
            <tr>
              <td width="312">Canara Bank</td>
              <td width="131">₹ 2,683</td>
              <td width="91">48 months</td>
            </tr>
            <tr>
              <td width="312">Corporation Bank</td>
              <td width="131">₹ 3,367</td>
              <td width="91">36 months</td>
            </tr>
            <tr>
              <td width="312">Karur Vysya Bank</td>
              <td width="131">₹ 3,413</td>
              <td width="91">36 months</td>
            </tr>
            <tr>
              <td width="312">Federal Bank</td>
              <td width="131">₹ 2,608</td>
              <td width="91">48 months</td>
            </tr>
            <tr>
              <td width="312">Indian Overseas Bank</td>
              <td width="131">₹ 2,260</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">Indian Bank</td>
              <td width="131">₹ 3,276</td>
              <td width="91">36 months</td>
            </tr>
            <tr>
              <td width="312">Allahabad Bank</td>
              <td width="131">₹ 2,283</td>
              <td width="91">60 months</td>
            </tr>
            <tr>
              <td width="312">IDBI Bank</td>
              <td width="131">₹ 2,286</td>
              <td width="91">60 months</td>
            </tr>
          </tbody>
        </table>
        <h4>
          <strong>Factors affecting Loan EMI :</strong>
        </h4>
        <p>
          <strong>Loan amount &ndash; </strong>This is the amount which a borrower decides to take from the bank in the
          form of a loan.Higher the Loan amount, higher will be the EMI.<strong>Rate of interest &ndash; </strong>This
          is the interest charged on the borrowed loan amount. Lower the Loan interest rate, lower the EMI.{' '}
          <strong>Loan Tenure &ndash; </strong>This is the time period for which you take a loan. Longer the Loan
          tenure, lower will be the EMI. Longest loan tenure available across banks in India is 5 years, subject to
          borrower&rsquo;s current age and retirement age. Following table provides a comparison of EMI for a Rs. 1 lakh
          loan at different tenures:
        </p>
        <table width="538">
          <tbody>
            <tr>
              <td width="289">
                <strong>Loan Tenure</strong>
              </td>
              <td width="76">
                <strong>2 years</strong>
              </td>
              <td width="83">
                <strong>3 years</strong>
              </td>
              <td width="84">
                <strong>5 years</strong>
              </td>
            </tr>
            <tr>
              <td width="289">EMI amount for loan amount Rs. 1 lakh at 10.50%</td>
              <td width="76">₹ 4,638</td>
              <td width="83">₹ 3,250</td>
              <td width="84">₹ 2,149</td>
            </tr>
            <tr>
              <td width="289">Total amount you pay back to the bank including principal and interest</td>
              <td width="76">₹ 1.23 Lakh</td>
              <td width="83">₹ 1.36 Lakh</td>
              <td width="84">₹ 1.68 Lakh</td>
            </tr>
            <tr>
              <td width="289">Interest you have to pay over loan tenure</td>
              <td width="76">₹ 23,034</td>
              <td width="83">₹ 36,470</td>
              <td width="84">₹ 67,905</td>
            </tr>
          </tbody>
        </table>
        <p>
          At the lowest interest rate of 10.50%, the lowest EMI for tenure of 5 years is ₹ 2,149 per lakh. You need to
          pay an interest of ₹ 67,905 on your loan amount of Rs. 1 lakh over 5 years. If you take a loan for 2 years at
          the same rate of interest, you will have to pay a higher EMI of ₹ 4,638 and a total interest of ₹ 23,034 on
          your loan amount of Rs. 1 lakh for 2 years, which is much lesser than what you paid for a 5 years loan.
        </p>
        <h2>
          <strong>Loan Interest Rates of Various Banks</strong>
        </h2>
        <table width="570">
          <tbody>
            <tr>
              <td width="123">
                <strong>Bank</strong>
              </td>
              <td width="119">
                <strong>Interest Rates</strong>
              </td>
              <td width="92">
                <strong>Lowest EMI per Rs. one lakh</strong>
              </td>
              <td width="226">
                <strong>Processing Fee</strong>
              </td>
            </tr>
            <tr>
              <td width="123">HDFC Bank</td>
              <td width="119">10.75% - 22.00%</td>
              <td width="92">Rs. 2,162</td>
              <td width="226">Upto 2.50% Min Rs. 1,999</td>
            </tr>
            <tr>
              <td width="123">Citibank</td>
              <td width="119">10.99% - 18.99%</td>
              <td width="92">Rs. 2,174</td>
              <td width="226">Upto 0.5%</td>
            </tr>
            <tr>
              <td width="123">ICICI Bank</td>
              <td width="119">11.25% - 22.00%</td>
              <td width="92">Rs. 2,187</td>
              <td width="226">Starting from 0.99%, Up to 2.25%</td>
            </tr>
            <tr>
              <td width="123">Bajaj Finserv</td>
              <td width="119">11.99% - 15.50%</td>
              <td width="92">Rs. 2,224</td>
              <td width="226">Starting from 1.50%, Up to 3%</td>
            </tr>
            <tr>
              <td width="123">IDFC Bank</td>
              <td width="119">11.50% - 19.50%</td>
              <td width="92">Rs. 2,199</td>
              <td width="226">Starting from 0.75%, Up to 2%</td>
            </tr>
            <tr>
              <td width="123">Tata Capital</td>
              <td width="119">11.75% - 18.00%</td>
              <td width="92">Rs. 1,942</td>
              <td width="226">Flat fee of Rs. 1499*, Upto 2.50%</td>
            </tr>
            <tr>
              <td width="123">RBL Bank</td>
              <td width="119">13.99% - 18.00%</td>
              <td width="92">Rs. 2,326</td>
              <td width="226">Upto 2%</td>
            </tr>
            <tr>
              <td width="123">IndusInd Bank</td>
              <td width="119">11.00% - 20.00%</td>
              <td width="92">Rs. 2,174</td>
              <td width="226">Min 1% to Max 2.50%</td>
            </tr>
          </tbody>
        </table>
        <h3>
          <strong>Will Banks EMI Calculator?</strong>
        </h3>
        <p>
          Yes. These days most, if not all, banks have EMI calculator, specific to various loans, available on their
          websites.
        </p>
        <h3>
          <strong>How is EMI calculated?</strong>
        </h3>
        <p>
          Loan EMI Calculator uses the combination of loan amount, loan tenure and interest rate to calculate EMI
          online. Besides this, it also tells you how much rate of interest you would pay over your loan period. Longer
          the loan tenure, more the amount of interest for same loan amount and interest rate.
        </p>
        <h3>
          <strong>How much should I pay as monthly EMI for Loan?</strong>
        </h3>
        <p>
          Monthly EMI depends upon your income and expenses. Generally, banks advise you to limit your EMI to 35% to 45%
          of your net income so that you can pay your EMI without any burden or difficulty. You can calculate your EMI
          online which will help you to know your repayment capacity.
        </p>
        <h3>
          <strong>What if I miss EMI payment or there is an ECS bounce?</strong>
        </h3>
        <p>
          If you miss your EMI payment or if there is an ECS bounce then bank may charge a penalty. In addition, it will
          also be reflected in your CIBIL report and your CIBIL score may get impacted.
        </p>
        <h3>
          <strong>What if I get delay in paying the Loan EMI?</strong>
        </h3>
        <p>Banks charges penalty for delaying EMI payment. The amount of penalty varies from bank to bank.</p>
        <h3>
          <strong>Why it is necessary to calculate EMI beforehand?</strong>
        </h3>
        <p>
          It is important to calculate your EMI in advance to maintain stability in future payments. When you avail
          loan, you promise the bank to pay a fixed amount at fixed date every month. So, before availing the loan you
          should consider the stability of your income, monthly expenses and the existing loan obligations to avoid any
          discrepancies in future payments.
        </p>
        <h3>
          <strong>Does the loan tenure affect my EMI for Loan?</strong>
        </h3>
        <p>
          Loan can be availed for maximum tenure of 25 years. Tenure affects your monthly EMI. Longer the tenure of
          Loan, lower will be your EMI.
        </p>
      </Grid>
    </>
  )
}

export default HomePageContent
