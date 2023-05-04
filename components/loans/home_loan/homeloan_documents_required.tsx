import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function HomeloanDocumentsRequired(props: {bankname: string | string[] | undefined}) {
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
          <strong>Documents required to apply {bankName} home loan</strong>
        </h1>
        <p>
          There are various list of documents required by various banks. You should submit the required document details
          along with a scanned copies of the relevant documents for processing of your {bankName} home loan application.
          You can also submit your {bankName} home loan application form and the required documents at the bank branch
          as well. Within 3 working days after you do so, {bankName} home loan lender or bank will start investigating
          the submitted details and check your eligibility for a {bankName} home loan. If everything goes and authorized
          for your {bankName} home loan, you would be sanctioned with a {bankName} home loan disbursal to buy your dream
          home.
        </p>
        <p>&nbsp;</p>
        <h2>Documents required for {bankName} home loan for Salaried Employees:</h2>
        <ul>
          <li>&nbsp; &nbsp; &nbsp; Filled up loan application form</li>
          <li>&nbsp; &nbsp; &nbsp; 2 Passport Size Photo</li>
          <li>
            &nbsp; &nbsp; &nbsp; Copy of<a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a> PAN
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; Identity Proof &ndash;<a href="https://eaadhaar.uidai.gov.in/#/"> Aadhaar</a>,
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"> Passport</a> /
            <a href="https://parivahan.gov.in/"> Driving License</a> /<a href="https://www.nvsp.in/"> Voter ID</a> /
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"> PAN</a>
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill
            (upto 3 months old), Passport
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement
            showing salary credit and any EMI debit
          </li>
        </ul>
        <h2>Documents required for {bankName} home loan for Self-Employed:</h2>
        <ul>
          <li>&nbsp; &nbsp; &nbsp; Filled up {bankName} home loan application form</li>
          <li>&nbsp; &nbsp; &nbsp; 2 Passport Size Photo</li>
          <li>
            &nbsp; &nbsp; &nbsp; Copy of<a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a> PAN
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; Identity Proof &ndash;<a href="https://eaadhaar.uidai.gov.in/#/"> Aadhaar</a>,
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"> Passport</a> /
            <a href="https://parivahan.gov.in/"> Driving License</a> /<a href="https://www.nvsp.in/"> Voter ID</a> /
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"> PAN</a>
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill
            (upto 3 months old), Passport
          </li>
          <li>
            &nbsp; &nbsp; &nbsp; Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement
            showing salary credit and any EMI debit
          </li>
        </ul>
        <h2>KYC Documents list for {bankName} home loan Application</h2>
        <p>
          Some of the <strong>KYC </strong>documents admitted as KYC are mentioned below:
        </p>
        <p>&nbsp;</p>
        <h2>Photo Id Proof for {bankName} home loan (Any One Required):</h2>
        <ul>
          <li>Passport</li>
          <li>PAN Card</li>
          <li>Driving License</li>
          <li>Voters ID Card</li>
        </ul>
        <h2>Residence Proof for {bankName} home loan (Any One Required):</h2>
        <ul>
          <li>Electricity Bill</li>
          <li>Telephone Bill</li>
          <li>Employment Letter</li>
          <li>Ration Card</li>
          <li>Passbook or Bank Statement with address</li>
        </ul>
        <h2>Proof of Age for {bankName} home loan:</h2>
        <ul>
          <li>PAN card</li>
          <li>Birth certificate</li>
          <li>Driving license</li>
          <li>Bank passbook</li>
          <li>Marksheet from 10th class</li>
          <li>Passport</li>
        </ul>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
