// import actionTypes from 'MainScreenActions'
import objectAssign from 'object-assign';

const initial = {
    totalIncome: 0
}

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case "INCOME_CHANGED":
      newState = objectAssign({}, state);
      newState.totalIncome = action.newValue
      return newState
    default:
      return state
  }
}
