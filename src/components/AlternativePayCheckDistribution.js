import styled from "styled-components"
import { useState } from "react"
import { updateUserAccount } from "../api"

export const AlternativePayCheckDistribution = ({
  alternativeAccount,
  totalAllocation,
  refetch,
}) => {
  const {
    name: accountType,
    institution,
    maskedAccountNumber,
    splitAllocationAmount,
  } = alternativeAccount

  const [accountDistribution, setAccountDistribution] = useState(
    splitAllocationAmount || 0
  )

  const handleInputChange = (event) => {
    const { value } = event.target
    if (value < 0) return alert("Please enter a positive number")
    if (value > totalAllocation) {
      alert("You can't allocate more than your monthly salary")
    } else {
      setAccountDistribution(parseInt(value, 10))
    }
  }
  const handleSubmit = async () => {
    if (accountDistribution > 0 && accountDistribution <= totalAllocation) {
      try {
        await updateUserAccount(alternativeAccount.id, {
          splitAllocationAmount: accountDistribution,
        })
        refetch()
      } catch (error) {
        console.log(error)
      }
    }
  }
  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()

  return (
    <>
      <PaycheckDistribution>
        <AccountsDetails>
          <AccountsType>{accountType}</AccountsType>
          <InstitutionDetails>{`${maskedAccountNumber} · ${institution}`}</InstitutionDetails>
        </AccountsDetails>
        <DepositDetails>
          <DepositDescription>Allocation</DepositDescription>
          <DepositInputContainer>
            <DepositAmountInput
              value={accountDistribution}
              onChange={handleInputChange}
              onKeyDown={blockInvalidChar}
            />
            <Button onClick={handleSubmit}>🗸</Button>
          </DepositInputContainer>
        </DepositDetails>
      </PaycheckDistribution>
      <Divider />
    </>
  )
}

const PaycheckDistribution = styled.div`
  display: flex;
  width: 100%;
`
const Divider = styled.div`
  border: 1px solid #dbdbdb;
  width: 95%;
  margin-left: 25px;
  :last-child {
    display: none;
  }
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

const InstitutionDetails = styled.h5`
  font-size: 18px;
  margin-top: 2px;
  font-weight: 400;
`
const DepositDetails = styled.div`
  width: 12%;
`

const DepositDescription = styled.h5`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 0px;
  font-weight: 400;
`
const DepositInputContainer = styled.div`
  display: flex;
`
const DepositAmountInput = styled.input.attrs({
  type: "number",
  min: "0",
})`
  appearance: textfield;
  &:focus {
    outline: none;
    border: 2px solid #0049ac;
    appearance: initial;
  }
  width: 60%;
  font-size: 18px;
  margin-top: 2px;
  border-radius: 4px;
  border: 1px solid black;
`
const Button = styled.button`
  margin-left: 7px;
  font-size: 18px;
`
