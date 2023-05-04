import React, {useEffect, useState} from 'react'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import TreeItem from '@mui/lab/TreeItem'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {personalLoansJson, LoanTypesData} from 'data/india/personal-loan'
import {useRouter} from 'next/router'

export default function Sidebar(props: {loantype: any; sidebarData: any}) {
  // const baseURL = 'http://localhost:3000'
  const router = useRouter()
  //
  const [baseURL, setHost] = useState('')
  const {sidebarData, loantype} = props
  const banks: any = personalLoansJson
  const loanTypes: any = LoanTypesData
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
      // setPath(router.query.bank)
    }
  }, [router.isReady])
  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevation={0}>
          {banks.map((item: {id: any; bankName: any}) => (
            <TreeView
              expanded={['1']}
              key={item.bankName}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" key={item.bankName} label={item.bankName}>
                <Link
                  lineHeight={2}
                  display="block"
                  variant="body1"
                  href={baseURL + '/india/loans/' + loantype + '/' + item.id + '/apply-online/'}
                  // key={item.bankName}
                >
                  {item.bankName} Apply Online
                </Link>
                <Link
                  lineHeight={2}
                  display="block"
                  variant="body1"
                  href={baseURL + '/india/loans/' + loantype + '/' + item.id + '/documents-required/'}
                  // key={item.bankName}
                >
                  {item.bankName} Documents Required
                </Link>
                <Link
                  lineHeight={2}
                  display="block"
                  variant="body1"
                  href={baseURL + '/india/loans/' + loantype + '/' + item.id + '/eligibility-criteria/'}
                  // key={item.bankName}
                >
                  {item.bankName} Eligibility Criteria
                </Link>
                <Link
                  lineHeight={2}
                  display="block"
                  variant="body1"
                  href={baseURL + '/india/loans/' + loantype + '/' + item.id + '/factors-impacting-EMI/'}
                  // key={item.bankName}
                >
                  {item.bankName} Factors Impacting EMI
                </Link>
                <Link
                  lineHeight={2}
                  display="block"
                  variant="body1"
                  href={baseURL + '/india/loans/' + loantype + '/' + item.id + '/interest-rate/'}
                  // key={item.bankName}
                >
                  {item.bankName} Interest Rate
                </Link>
                <Link
                  lineHeight={2}
                  display="block"
                  variant="body1"
                  href={baseURL + '/india/loans/' + loantype + '/' + item.id + '/emi-calculator/'}
                  key={item.bankName}
                >
                  {item.bankName} EMI Calculator
                </Link>
              </TreeItem>
            </TreeView>
          ))}
        </Paper>
        <Paper elevation={0}>
          {loanTypes.map((item: {loanId: any; loanName: any}) => (
            <TreeView
              expanded={['1']}
              key={item.loanName}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId="1" key={item.loanName} label={item.loanName}>
                <Link
                  lineHeight={2}
                  display="block"
                  variant="body1"
                  href={baseURL + '/india/loans/' + item.loanId + '/'}
                  key={item.loanName}
                >
                  {item.loanName}
                </Link>
              </TreeItem>
            </TreeView>
          ))}
        </Paper>
        {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Top banks in Personal Loan
        </Typography>
        {sidebarData.topBanks.map((item: {url: any; name: any}) => (
          <Link
            display="block"
            variant="body1"
            href={baseURL + '/india/loans/' + loantype + '/' + item.url}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Top NBFC in Personal Loan
        </Typography>
        {sidebarData.topNBFCs.map((item: {url: any; name: any}) => (
          <Link display="block" variant="body1" href={item.url} key={item.name}>
            {item.name}
          </Link>
        ))}
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Interest Rates by Bank
        </Typography>
        {sidebarData.interestRatesBank.map((item: {url: any; name: any}) => (
          <Link display="block" variant="body1" href={item.url} key={item.name}>
            {item.name}
          </Link>
        ))}
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Bank wise Eligibility
        </Typography>
        {sidebarData.eligibilityBank.map((item: {url: any; name: any}) => (
          <Link display="block" variant="body1" href={item.url} key={item.name}>
            {item.name}
          </Link>
        ))}
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Personal Loan by State
        </Typography>
        {sidebarData.states.map((item: {url: any; name: any}) => (
          <Link display="block" variant="body1" href={item.url} key={item.name}>
            {item.name}
          </Link>
        ))}
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Personal Loan by City
        </Typography>
        {sidebarData.cities.map((item: {url: any; name: any}) => (
          <Link display="block" variant="body1" href={item.url} key={item.name}>
            {item.name}
          </Link>
        ))} */}
        {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          Interest rates by Bank
        </Typography>
        {social.map((network: {icon: any; name: any}) => (
          <Link display="block" variant="body1" href="#">
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))} */}
      </Grid>
    </>
  )
}
