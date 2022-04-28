import styled from "styled-components"

import {
  SkeletonDefaultPaycheckDistribution,
  SkeletonAlternativePayCheckDistributionList,
} from "../Skeleton"

export const Skeleton = () => {
  return (
    <Container>
      <Header>Monthly salary</Header>
      <MonthlySalary>This is a Grey Background Text is Invisible</MonthlySalary>
      <SubHeader>Paycheck distribution </SubHeader>
      <SkeletonDefaultPaycheckDistribution />
      <SkeletonAlternativePayCheckDistributionList />
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

const MonthlySalary = styled.h3`
  background-color: #cccccc;
  color: #cccccc;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0px;
`
