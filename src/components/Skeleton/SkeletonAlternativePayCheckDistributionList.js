import styled from "styled-components"

import { SkeletonAlternativePayCheckDistribution } from "../Skeleton"

export const SkeletonAlternativePayCheckDistributionList = () => {
  const alternativeAccounts = Array.from({ length: 4 }).fill("")

  return (
    <PaycheckDistributionContainer>
      {alternativeAccounts.map((_emptyItem, index) => (
        <SkeletonAlternativePayCheckDistribution key={index} />
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
