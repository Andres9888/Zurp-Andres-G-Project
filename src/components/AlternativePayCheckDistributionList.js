import { AlternativePayCheckDistribution } from "../components/PayCheckDistribution"

export const AlternativePayCheckDistributionList = ({
  userAccounts,
  totalAllocation,
  setTotalAllocation,
}) => {
  const alternativeAccounts = userAccounts.filter(
    (account) => !account.isDefault
  )
  return alternativeAccounts.map((account) => (
    <AlternativePayCheckDistribution
      key={account.id}
      alternativeAccount={account}
      totalAllocation={totalAllocation}
      setTotalAllocation={setTotalAllocation}
    />
  ))
}
