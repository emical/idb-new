import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function EducationloanDocumentsRequired(props: {bankname: string | string[] | undefined}) {
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
        <h1>
          <strong>What are the documents required to avail an {bankName} Education Loan?</strong>
        </h1>
        <h2>
          <strong>Documents required to apply {bankName} Education Loan</strong>
        </h2>
        <p>
          There are various list of documents required for {bankName} Education Loan by various banks. You should submit
          the required education document details along with a scanned copies of the relevant documents for processing
          of your {bankName} Education Loan application. You can also submit your {bankName} Education Loan application
          form and the required documents at the bank branch. Within 3 working days after you do so, the lender or bank
          will start investigating the submitted details and check your eligibility for a {bankName} Education Loan. If
          everything goes and authorized, you would be sanctioned with a hassle-free loan disbursal to buy your dream.
        </p>
        <p>The following need to be submitted along with the {bankName} Education Loan application form:</p>
        <ul>
          <li>
            Income Tax statements (Salary slip, Form 16, Income-Tax Returns of the last 2 years, and Computation of
            income of last 2 years certified by a Chartered Accountant)
          </li>
          <li>Bank Statement/Pass Book of the last 6 months along with PAN</li>
          <li>Copy of the admission letter of the Institute along with the &lsquo;fee schedule&rsquo;</li>
          <li>Mark sheets and/or pass certificates of SSC, HSC, Degree Courses, National level entrance test</li>
          <li>Age proof (Aadhaar, Passport / Driving License / Voter ID / PAN, driving license)</li>
          <li>
            Address proof (Aadhaar, Passport / Driving License / Voter ID / PAN, latest electricity bill, latest
            telephone bill, ration educationd, existing house lease agreement, bank account statement)
          </li>
          <li>Photo identification proofs (Aadhaar, Passport / Driving License / Voter ID / PAN)</li>
          <li>Passport size photos of the applicant and co-applicants</li>
          <li>Guarantor form (optional) for {bankName} Education Loan</li>
        </ul>
        <h2>What are the documents required at the time of disbursement of {bankName} Education Loan?</h2>
        <p>The documents required for the first disbursement are:</p>
        <ul>
          <li>Demand Letter from college or university for {bankName} Education Loan</li>
          <li>Disbursement Request Form (DRF) signed by the applicant, co-applicants</li>
          <li>
            A signed copy of Loan Agreement (which includes Demand Promissory Note, DP Note Delivery-cum-Waiver Letter,
            Standing Instruction Request, PDC (Post-dated Cheque)
          </li>
          <li>Sanction Letter signed by the applicant, co-applicants for loan of education</li>
          <li>
            Form A2 signed (for the purchase of foreign exchange) by applicant or co-applicants in case abroad Institute
            cases
          </li>
          <li>
            Receipts of Margin Money paid to the college/university along with bank statement reflecting the transaction
          </li>
          <li>Documents for collateral security ( if applicable) for {bankName} Education Loan</li>
          <li>Form A2 signed by the applicant or co-applicants in case of overseas institute</li>
          <li>
            For subsequent disbursements as well, many of the aforementioned documents will be needed, particularly the
            demand letter from the college or university, DRF, receipt of margin money paid, and one any from the exam
            progress report, mark sheet, bonafide certificate.
          </li>
        </ul>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
