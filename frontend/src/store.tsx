import { combineReducers } from '@reduxjs/toolkit';
import { legacy_createStore as createStore, legacy_createStore } from 'redux';

const modalReducer = (modal = false, action: any) => {
  if (action.type === 'modalTrue') {
    return true;
  } else if (action.type === 'modalFalse') {
    return false;
  } else if (action.type === 'changeModalState') {
    return !modal;
  } else return modal;
};
const alarmReducer = (alarm = false, action: any) => {
  if (action.type === 'alarmTrue') {
    return true;
  } else if (action.type === 'changeAlarmState') {
    return !alarm;
  } else if (action.type === 'alarmFalse') {
    return false;
  } else return alarm;
};
const profileReducer = (profile = false, action: any) => {
  if (action.type === 'profileTrue') {
    return true;
  } else if (action.type === 'changeProfileState') {
    return !profile;
  } else if (action.type === 'profileFalse') {
    return false;
  } else return profile;
};


export const store = legacy_createStore(
  combineReducers({ modalReducer, alarmReducer, profileReducer }),
);
