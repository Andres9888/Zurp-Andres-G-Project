import styled from "styled-components"

export const SkeletonDefaultPaycheckDistribution = () => {
  return (
    <DefaultPaycheckDistributionContainer>
      <AccountsDetails>
        <AccountsType>loading</AccountsType>
        <InstitutionDetails>loading</InstitutionDetails>
      </AccountsDetails>
      <DepositDetails>
        <DepositDescription>Allocation</DepositDescription>
        <DepositAmount>loading</DepositAmount>
      </DepositDetails>
    </DefaultPaycheckDistributionContainer>
  )
}
const DefaultPaycheckDistributionContainer = styled.div`
  border: 2px solid #dbdbdb;
  border-radius: 6px;
  display: flex;
  margin-bottom: 20px;
`
const AccountsDetails = styled.div`
  font-weight: 400;
  margin-left: 25px;
  width: 85%;
  @media (max-width: 900px) {
    width: 70%;
  }
`
const AccountsType = styled.h5`
  background-color: #cccccc;
  color: #cccccc;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 2px;
  margin-top: 20px;
  width: 6%;
`

const InstitutionDetails = styled.h5`
  background-color: #cccccc;
  color: #cccccc;
  font-size: 18px;
  font-weight: 400;
  margin-top: 2px;
  width: 7%;
`
const DepositDetails = styled.div`
  width: 8%;
`

const DepositDescription = styled.h5`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 2px;
  margin-top: 20px;
`

const DepositAmount = styled.h5`
  background-color: #cccccc;
  color: #cccccc;
  font-size: 18px;
  font-weight: 400;
  margin-top: 2px;
`
