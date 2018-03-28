// import actionTypes from 'MainScreenActions'
import objectAssign from 'object-assign';

const initial = {
    settings: {
      minimalSalary: 3723,
      costOfLiving: 1762,
      SSCP: 22,
      firstGroupSTP: 10,
      secondGroupSTP: 20,
      thirdGroupSTPWithTax: 5,
      thirdGroupSTPWithoutTax: 3,
    }
};

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case "INCOME_CHANGED":
      newState = objectAssign({}, state);
      newState.totalIncome = action.newValue;
      return newState;
    default:
      return state
  }
};
