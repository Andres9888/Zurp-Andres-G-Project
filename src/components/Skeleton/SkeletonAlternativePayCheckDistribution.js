import styled from "styled-components"

export const SkeletonAlternativePayCheckDistribution = () => {
  return (
    <>
      <PaycheckDistribution>
        <AccountsDetails>
          <AccountsType>loading</AccountsType>
          <InstitutionDetails>loading</InstitutionDetails>
        </AccountsDetails>
        <DepositDetails>
          <DepositDescription>Allocation</DepositDescription>
          <DepositInputContainer>loading</DepositInputContainer>
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
  margin-left: 25px;
  width: 95%;
  :last-child {
    display: none;
  }
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
  width: 12%;
  @media (max-width: 900px) {
    width: 30%;
  }
`

const DepositDescription = styled.h5`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 0px;
  margin-top: 20px;
`
const DepositInputContainer = styled.div`
  background-color: #cccccc;
  color: #cccccc;
  display: flex;
  width: 80%;
`
