import styled from "styled-components"
import { useState } from "react"
export const AlternativePayCheckDistribution = ({
  alternativeAccount,
  totalAllocation,
  setTotalAllocation,
}) => {
  const [accountDistribution, setAccountDistribution] = useState(0)

  const {
    name: accountType,
    institution,
    maskedAccountNumber,
  } = alternativeAccount

  const handleInputChange = (event) => {
    const { value } = event.target
    if (value > totalAllocation) {
      alert("You can't allocate more than your monthly salary")
    } else {
      setAccountDistribution(value)
    }
  }
  return (
    <PaycheckDistribution>
      <AccountsDetails>
        <AccountsType>{accountType}</AccountsType>
        <InstitutionDetails>{`${maskedAccountNumber} · ${institution}`}</InstitutionDetails>
      </AccountsDetails>
      <DepositDetails>
        <DepositDescription>Allocation</DepositDescription>
        <DepositInputContainer>
          <DepositAmount
            value={accountDistribution}
            onChange={handleInputChange}
          />
          <Button
            onClick={() =>
              setTotalAllocation(totalAllocation - accountDistribution)
            }
          >
            🗸
          </Button>
        </DepositInputContainer>
      </DepositDetails>
    </PaycheckDistribution>
  )
}

const PaycheckDistribution = styled.div`
  border: 1px solid #dbdbdb;
  display: flex;
  border-radius: 6px;
`
const AccountsDetails = styled.div`
  margin-left: 25px;
  width: 85%;
  font-weight: 400;
`
const AccountsType = styled.h5`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 2px;
`

const InstitutionDetails = styled.h5`
  font-size: 16px;
  margin-top: 2px;
`
const DepositDetails = styled.div`
  width: 9%;
`

const DepositDescription = styled.h5`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 2px;
`
const DepositInputContainer = styled.div`
  display: flex;
`
const DepositAmount = styled.input.attrs({
  type: "number",
})`
  font-size: 16px;
  margin-top: 2px;
`
const Button = styled.button``
