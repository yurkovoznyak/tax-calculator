export const actionTypes = {
  INCOME_CHANGED: "INCOME_CHANGED"
}

export function onIncomeValueChanged(newValue) {
  return {
    type: actionTypes.INCOME_CHANGED,
    newValue: newValue
  };
}
