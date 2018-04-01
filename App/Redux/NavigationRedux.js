import AppNavigation from '../Navigation/AppNavigation'

export const reducer = (state, action) => {
  console.log(state)
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
