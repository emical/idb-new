/* eslint-disable prettier/prettier */
import {default as personalLoanData} from './personal-loans.json'
import {default as personalLoanSidebarJson} from './personal-loan-sidebar.json'
import {default as LoanTypesSidebarJson} from './loan-types-sidebar.json'

export type PersonalLoan = {
  id: string
  bankName: string
  // interestRateMin: string
  // interestRateMax: string
  // processingFeeMin: string
  // processingFeeMax: string
  // processingFeeString: string
  // foreClosureChargesMin: string
  // foreClosureChargesMax: string
  // foreClosureChargesString: string
  // penalty: string
  // postDisbursementCharges: string
  // tenureMin: string
  // tenureMax: string
  // loanAmoutMin: string
  // loanAmoutMax: string
  // ageEligibilityMin: string
  // ageEligibilityMax: string
}
export type NameUrlMapping = {
  name: string
  url: string
}
export type PersonalLoanSideaBar = {
  topBanks: NameUrlMapping[]
  interestRatesBank: NameUrlMapping[]
  eligibilityBank: NameUrlMapping[]
  states: NameUrlMapping[]
  otherLoans: NameUrlMapping[]
  topBlogs: NameUrlMapping[]
}

const personalLoansIndia: PersonalLoan[] = [
  // {
  //   id: 'sbi',
  //   bankName: 'SBI',
  //   interestRateMin: 'string',
  //   interestRateMax: 'string',
  //   processingFeeMin: 'string',
  //   processingFeeMax: 'string',
  //   processingFeeString: 'string',
  //   foreClosureChargesMin: 'string',
  //   foreClosureChargesMax: 'string',
  //   foreClosureChargesString: 'string',
  //   penalty: 'string',
  //   postDisbursementCharges: 'string',
  //   tenureMin: 'string',
  //   tenureMax: 'string',
  //   loanAmoutMin: 'string',
  //   loanAmoutMax: 'string',
  //   ageEligibilityMin: 'string',
  //   ageEligibilityMax: 'string',
  // },
  // {
  //   id: 'icici',
  //   bankName: 'ICICI',
  //   interestRateMin: 'string',
  //   interestRateMax: 'string',
  //   processingFeeMin: 'string',
  //   processingFeeMax: 'string',
  //   processingFeeString: 'string',
  //   foreClosureChargesMin: 'string',
  //   foreClosureChargesMax: 'string',
  //   foreClosureChargesString: 'string',
  //   penalty: 'string',
  //   postDisbursementCharges: 'string',
  //   tenureMin: 'string',
  //   tenureMax: 'string',
  //   loanAmoutMin: 'string',
  //   loanAmoutMax: 'string',
  //   ageEligibilityMin: 'string',
  //   ageEligibilityMax: 'string',
  // },
]
export const personalLoansJson = personalLoanData
export const LoanTypesData = LoanTypesSidebarJson
export const personalLoansSideBardata = personalLoanSidebarJson

export default personalLoansIndia
