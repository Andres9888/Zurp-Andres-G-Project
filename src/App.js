import { AlternativePayCheckDistribution } from "./components/PayCheckDistribution"
import { useEffect, useState } from "react"
import { getUserDetails, listUserAccounts, updateUserAccount } from "./api"
import { FormattedSalary as MonthlySalary } from "./components/MonthlySalary"

import styled from "styled-components"
// function updateUserAccount(
//   id: string,
//   account: { splitAllocationAmount: number }
// ): Promise<Account>;
// ```

export default function App() {
  const [userDetails, setUserDetails] = useState()
  const [totalAllocation, setTotalAllocation] = useState()
  const [userAccounts, setUserAccounts] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const [userDetailsData, userAccountsData] = await Promise.all([
          getUserDetails(),
          listUserAccounts(),
        ])

        setUserDetails(userDetailsData)
        setUserAccounts(userAccountsData)
        setTotalAllocation(userDetailsData.monthlySalary)

        setDataLoaded(true)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  if (!dataLoaded) {
    return <div>Loading...</div>
  }

  //if (error) return <p>Error :(</p>

  const defaultAccount = userAccounts.find((account) => account.isDefault)
  const alternativeAccounts = userAccounts.filter(
    (account) => !account.isDefault
  )
  const { monthlySalary } = userDetails
  const { name: accountType, institution, maskedAccountNumber } = defaultAccount

  return (
    <Container>
      <Header>Monthly salary</Header>
      <MonthlySalary>{monthlySalary}</MonthlySalary>
      <SubHeader>Paycheck distribution </SubHeader>
      <PaycheckDistribution>
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
      </PaycheckDistribution>
      {alternativeAccounts.map((alternativeAccount) => {
        return (
          <AlternativePayCheckDistribution
            alternativeAccount={alternativeAccount}
            totalAllocation={totalAllocation}
            setTotalAllocation={setTotalAllocation}
          />
        )
      })}
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

const PaycheckDistribution = styled.div`
  border: 2px solid #dbdbdb;
  display: flex;
  border-radius: 6px;
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
  font-size: 16px;
  margin-top: 2px;
`
const DepositDetails = styled.div`
  width: 12.5%;
`

const DepositDescription = styled.h5`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 2px;
  font-weight: 400;
`

const DepositAmount = styled.h5`
  font-size: 16px;
  margin-top: 2px;
  background-color: #f9f9f9;
  font-weight: 400;
`
