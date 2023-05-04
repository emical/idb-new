import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import personalLoansIndia, {personalLoansJson, personalLoansSideBardata, PersonalLoan} from 'data/india/personal-loan'
import Icon from '@mui/material/Icon'

import Grid from '@mui/material/Grid'

export default function PersonalloanDocumentsRequired(props: {bankname: string | string[] | undefined}) {
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
        <h1>Documents required to apply {bankName} personal loan</h1>
        <h2>{bankName} personal loan documents for Salaried Employees:</h2>
        <ul>
          <li>Filled up {bankName} personal loan application form</li>
          <li>2 Passport Size Photo for {bankName} personal loan</li>
          <li>
            Copy of<a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a> PAN
          </li>
          <li>
            Identity Proof &ndash;<a href="https://eaadhaar.uidai.gov.in/#/"> Aadhaar</a>,
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"> Passport</a> /
            <a href="https://parivahan.gov.in/"> Driving License</a> /<a href="https://www.nvsp.in/"> Voter ID</a> /
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"> PAN</a>
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
        <h2>{bankName} personal loan documents for&nbsp; Self-Employed:</h2>
        <ul>
          <li>Filled up personal&nbsp; loan application form</li>
          <li>2 Passport Size Photo</li>
          <li>
            Copy of<a href="https://www.incometaxindiaefiling.gov.in/home"> Income Tax</a> PAN for {bankName} personal
            loan
          </li>
          <li>
            Identity Proof &ndash;<a href="https://eaadhaar.uidai.gov.in/#/"> Aadhaar</a>,
            <a href="https://portal2.passportindia.gov.in/AppOnlineProject/online/procFormSubOnl"> Passport</a> /
            <a href="https://parivahan.gov.in/"> Driving License</a> /<a href="https://www.nvsp.in/"> Voter ID</a> /
            <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html"> PAN</a>
          </li>
          <li>
            Residential Address Proof - Leave and License/ Registered Rent Agreement/ Utility Bill (upto 3 months old),
            Passport for {bankName} personal loan
          </li>
          <li>
            Income Documents &ndash; 3 months pay slip, 2 years Form 16, 3 months bank statement showing salary credit
            and any EMI debit for {bankName} personal loan
          </li>
        </ul>
        <p>&nbsp;</p>
      </div>
    </Grid>
  )
}
