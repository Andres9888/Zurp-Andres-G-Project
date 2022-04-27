import { AlternativePayCheckDistribution } from "../components/AlternativePayCheckDistribution"
import styled from "styled-components"
export const AlternativePayCheckDistributionList = ({
  userAccounts,
  totalAllocation,
  refetch,
}) => {
  const alternativeAccounts = userAccounts.filter(
    (account) => !account.isDefault
  )

  return (
    <PaycheckDistributionContainer>
      {alternativeAccounts.map((account) => (
        <AlternativePayCheckDistribution
          key={account.id}
          alternativeAccount={account}
          totalAllocation={totalAllocation}
          refetch={refetch}
        />
      ))}
    </PaycheckDistributionContainer>
  )
}

const PaycheckDistributionContainer = styled.div`
  border: 2px solid #dbdbdb;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
`
