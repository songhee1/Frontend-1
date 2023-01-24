import { atom } from 'recoil';
import { v1 } from 'uuid';

export const buttonHome = atom({
  key: `btnHome/${v1()}`, // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export const buttonAlarm = atom({
  key: `btnAlarm/${v1()}`, // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const buttonMake = atom({
  key: `btnMake/${v1()}`, // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const buttonProfile = atom({
  key: `btnProfile/${v1()}`, // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
