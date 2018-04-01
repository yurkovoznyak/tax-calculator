import { actionTypes } from './actionTypes'

export function onSettingsSave(newSettings) {
  return {
    type: actionTypes.SAVE_SETTINGS,
    settings: newSettings
  };
}
