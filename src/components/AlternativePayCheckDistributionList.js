import styled from "styled-components"

import { AlternativePayCheckDistribution } from "../components/AlternativePayCheckDistribution"

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
          refetch={refetch}
          totalAllocation={totalAllocation}
        />
      ))}
    </PaycheckDistributionContainer>
  )
}

const PaycheckDistributionContainer = styled.div`
  border: 2px solid #dbdbdb;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`
