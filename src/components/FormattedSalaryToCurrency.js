import { formatCurrency } from "../helper/formatCurrency"
import styled from "styled-components"

export const FormattedSalaryToCurrency = ({ children }) => {
  return <Salary>{formatCurrency(children)}</Salary>
}

const Salary = styled.h3`
  font-size: 48px;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 12px;
`
