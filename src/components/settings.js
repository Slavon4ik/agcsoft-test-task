import { USER_FIELDS } from './types.js';
import { WEB_CITY_LIST } from '../web/settings.js';

export const USER_FIELD_LIST = Object.values(USER_FIELDS);

export const USER_DEFAULT = USER_FIELD_LIST.reduce((user, userField) => {
  user[userField] = '';
  return user;
}, { id: '' });

export const USER_PLACEHOLDERS = {
  [USER_FIELDS.FIRST_NAME]: 'Name',
  [USER_FIELDS.LAST_NAME]: 'Surname',
  [USER_FIELDS.AGE]: 'Age',
  [USER_FIELDS.CITY]: 'City',
};

export const USER_FIELD_CONFIGS = {
  [USER_FIELDS.FIRST_NAME]: {
    placeholder: USER_PLACEHOLDERS[USER_FIELDS.FIRST_NAME],
  },
  [USER_FIELDS.LAST_NAME]: {
    placeholder: USER_PLACEHOLDERS[USER_FIELDS.LAST_NAME],
  },
  [USER_FIELDS.AGE]: {
    placeholder: USER_PLACEHOLDERS[USER_FIELDS.AGE],
  },
  [USER_FIELDS.CITY]: {
    placeholder: USER_PLACEHOLDERS[USER_FIELDS.CITY],
    options: WEB_CITY_LIST,
  },
}