export const formatCurrency = (salaryInCents) => {
  if (salaryInCents)
    return `${(salaryInCents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`

  return ""
}

export const formatCurrencyToPlaceValue = (salaryInCents, placeValue) => {
  const formattedCurrency = salaryInCents / placeValue

  return `${formattedCurrency}`
}
