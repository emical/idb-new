import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function StudentloanDocumentsRequired(props: {bankname: string | string[] | undefined}) {
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
          <strong>What are the documents required to avail an {bankName} Student Loan?</strong>
        </h1>
        <p>The following need to be submitted along with the {bankName} Student Loan application form:</p>
        <ul>
          <li>
            <a href="https://www.incometaxindiaefiling.gov.in/home">Income Tax</a> statements (Salary slip, Form 16,
            Income-Tax Returns of the last 2 years, and Computation of income of last 2 years certified by a Chartered
            Accountant)
          </li>
          <li>
            Bank Statement/Pass Book of the last 6 months along with{' '}
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>
          </li>
          <li>Copy of the admission letter of the Institute along with the &lsquo;fee schedule&rsquo;</li>
          <li>Mark sheets and/or pass certificates of SSC, HSC, Degree Courses, National level entrance test</li>
          <li>
            Age proof (<a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,{' '}
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a> /{' '}
            <a href="https://parivahan.gov.in/">Driving License</a> / <a href="https://www.nvsp.in/">Voter ID</a> /{' '}
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>, driving license)
          </li>
          <li>
            Address proof (<a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,{' '}
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a> /{' '}
            <a href="https://parivahan.gov.in/">Driving License</a> / <a href="https://www.nvsp.in/">Voter ID</a> /{' '}
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>, latest electricity
            bill, latest telephone bill, ration card, existing house lease agreement, bank account statement)
          </li>
          <li>
            Photo identification proofs (<a href="https://eaadhaar.uidai.gov.in/#/">Aadhaar</a>,{' '}
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl">Passport</a> /{' '}
            <a href="https://parivahan.gov.in/">Driving License</a> / <a href="https://www.nvsp.in/">Voter ID</a> /{' '}
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html">PAN</a>)
          </li>
          <li>Passport size photos of the applicant and co-applicants</li>
          <li>Guarantor form (optional) for {bankName} Student Loan</li>
        </ul>
        <h2>What are the documents required at the time of disbursement of {bankName} Student Loan?</h2>
        <p>The documents required for the first disbursement are:</p>
        <ul>
          <li>Demand Letter from college or university for {bankName} Student Loan</li>
          <li>Disbursement Request Form (DRF) signed by the applicant, co-applicants</li>
          <li>
            A signed copy of Loan Agreement (which includes Demand Promissory Note, DP Note Delivery-cum-Waiver Letter,
            Standing Instruction Request, PDC (Post-dated Cheque)
          </li>
          <li>Sanction Letter signed by the applicant, co-applicants for loan of Student</li>
          <li>
            Form A2 signed (for the purchase of foreign exchange) by applicant or co-applicants in case abroad Institute
            cases
          </li>
          <li>
            Receipts of Margin Money paid to the college/university along with bank statement reflecting the transaction
          </li>
          <li>Documents for collateral security ( if applicable) for {bankName} Student Loan</li>
          <li>Form A2 signed by the applicant or co-applicants in case of overseas institute</li>
          <li>
            For subsequent disbursements as well, many of the aforementioned documents will be needed, particularly the
            demand letter from the college or university, DRF, receipt of margin money paid, and one any from the exam
            progress report, mark sheet, bonafide certificate
          </li>
        </ul>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
