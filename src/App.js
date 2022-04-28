import { useState } from "react"

import styled from "styled-components"
import useSWR from "swr"

import { getUserDetails, listUserAccounts } from "./api"
import {
  AlternativePayCheckDistributionList,
  FormattedSalaryToCurrency as MonthlySalary,
  DefaultPaycheckDistribution,
} from "./components"
import { formatCurrencyToPlaceValue } from "./helper/formatCurrency"

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
  const {
    data,
    error,
    mutate: refetch,
  } = useSWR(["batchedQuery"], multiFetcher)

  if (!data) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const { monthlySalary } = userDetails

  return (
    <Container>
      <Header>Monthly salary</Header>
      <MonthlySalary>{monthlySalary}</MonthlySalary>
      <SubHeader>Paycheck distribution </SubHeader>
      <DefaultPaycheckDistribution
        defaultAccount={defaultAccount}
        totalAllocation={totalAllocation}
      />
      <AlternativePayCheckDistributionList
        refetch={refetch}
        totalAllocation={totalAllocation}
        userAccounts={userAccounts}
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1228px;
  padding-top: 284px;
`
const Header = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 0px;
  margin-top: 0px;
`
const SubHeader = styled.h4`
  font-size: 18px;
  font-weight: 400;
  margin-top: 0px;
`
