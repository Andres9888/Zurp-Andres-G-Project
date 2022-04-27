import {
  AlternativePayCheckDistributionList,
  FormattedSalaryToCurrency as MonthlySalary,
} from "./components"
import { useEffect, useState } from "react"
import { getUserDetails, listUserAccounts } from "./api"
import { formatCurrencyToPlaceValue } from "./helper/formatCurrency"
import styled from "styled-components"
import useSWR from "swr"

export default function App() {
  const [userDetails, setUserDetails] = useState()
  const [totalAllocation, setTotalAllocation] = useState()
  const [userAccounts, setUserAccounts] = useState()
  const [defaultAccount, setDefaultAccount] = useState()
  const multiFetcher = async () => {
    const [userDetailsData, userAccountsData] = await Promise.all([
      getUserDetails(),
      listUserAccounts(),
    ])
    const TotalSplitAllocation = userAccountsData
      .filter((account) => account.splitAllocationAmount)
      .reduce(
        (total, account) => total - account.splitAllocationAmount,
        formatCurrencyToPlaceValue(userDetailsData.monthlySalary, 100)
      )
    const defaultAccount = userAccountsData.find((account) => account.isDefault)
    setUserDetails(userDetailsData)
    setUserAccounts(userAccountsData)
    setDefaultAccount(defaultAccount)
    setTotalAllocation(TotalSplitAllocation)
    return [userDetailsData, userAccountsData]
  }
  const { data, error, mutate } = useSWR(["batchedQuery"], multiFetcher)

  if (!data) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const { monthlySalary } = userDetails
  const { name: accountType, institution, maskedAccountNumber } = defaultAccount

  return (
    <Container>
      <Header>Monthly salary</Header>
      <MonthlySalary>{monthlySalary}</MonthlySalary>
      <SubHeader>Paycheck distribution </SubHeader>
      <DefaultPaycheckDistribution>
        <AccountsDetails>
          <AccountsType>
            {accountType}
            <DefaultTag>DEFAULT</DefaultTag>
          </AccountsType>
          <InstitutionDetails>{`${maskedAccountNumber} · ${institution}`}</InstitutionDetails>
        </AccountsDetails>
        <DepositDetails>
          <DepositDescription>Allocation</DepositDescription>
          <DepositAmount>{totalAllocation}</DepositAmount>
        </DepositDetails>
      </DefaultPaycheckDistribution>
      <AlternativePayCheckDistributionList
        userAccounts={userAccounts}
        totalAllocation={totalAllocation}
        refetch={mutate}
      />
    </Container>
  )
}

const Container = styled.div`
  padding-top: 284px;
  max-width: 1228px;
  margin: 0 auto;
`
const Header = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 400;
`
const SubHeader = styled.h4`
  margin-top: 0px;
  font-size: 18px;
  font-weight: 400;
`

const DefaultPaycheckDistribution = styled.div`
  border: 2px solid #dbdbdb;
  display: flex;
  border-radius: 6px;
  margin-bottom: 20px;
`
const AccountsDetails = styled.div`
  margin-left: 25px;
  width: 85%;
  font-weight: 400;
`
const AccountsType = styled.h5`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 2px;
  font-weight: 400;
`
const DefaultTag = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-left: 12px;
  margin-top: 20px;
  margin-bottom: 2px;
  background: #dddddd;
  padding: 5px 10px;
  border-radius: 4px;
`
const InstitutionDetails = styled.h5`
  font-size: 18px;
  margin-top: 2px;
  font-weight: 400;
`
const DepositDetails = styled.div`
  width: 8%;
`

const DepositDescription = styled.h5`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 2px;
  font-weight: 400;
`

const DepositAmount = styled.h5`
  font-size: 18px;
  margin-top: 2px;
  background-color: #f9f9f9;
  font-weight: 400;
`
