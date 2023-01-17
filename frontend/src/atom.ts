import { atom } from 'recoil';

export const buttonHome = atom({
  key: 'btnHome', // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export const buttonAlarm = atom({
  key: 'btnAlarm', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const buttonMake = atom({
  key: 'btnMake', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const buttonProfile = atom({
  key: 'btnProfile', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
