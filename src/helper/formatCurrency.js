export const formatCurrency = (salaryInCents) => {
  if (salaryInCents)
    return `${(salaryInCents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`
  return ""
}
