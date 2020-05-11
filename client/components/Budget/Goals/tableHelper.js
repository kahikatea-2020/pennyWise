export function getAnnualContribution (daysNumber, currentAmount, budget) {
  const yearsRemaining = daysNumber / 365
  const paymentRemaining = budget - currentAmount
  return (paymentRemaining / yearsRemaining).toFixed(2)
}

export function getMonthlyContribution (daysNumber, currentAmount, budget) {
  const yearsRemaining = daysNumber / 365
  const monthsRemaining = yearsRemaining * 12
  const paymentRemaining = budget - currentAmount
  return (paymentRemaining / monthsRemaining).toFixed(2)
}

export function getWeeklyContribution (daysNumber, currentAmount, budget) {
  const weeksRemaining = daysNumber / 7
  const paymentRemaining = budget - currentAmount
  return (paymentRemaining / weeksRemaining).toFixed(2)
}