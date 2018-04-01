import { actionTypes } from './actionTypes'

const initial = {
    minimalSalary: 3723,
    costOfLiving: 1762,
    SSCP: 22,
    firstGroupSTP: 10,
    secondGroupSTP: 20,
    thirdGroupSTPWithTax: 3,
    thirdGroupSTPWithoutTax: 5,
};

export const reducer = (state = initial, action) => {
  console.log(action)
  console.log(state)
  switch (action.type) {
    case actionTypes.SAVE_SETTINGS:
      newState = action.settings;
      return newState;
    default:
      return state
  }
};
