import { FIELD_RULES, FIELDS } from './types.js';

export const FIELD_RULE_OPTIONS = {
  [FIELD_RULES.REQUIRED]: (value) => {
    return !value ? FIELD_RULES.REQUIRED : '';
  },
  [FIELD_RULES.NUMERIC]: (value) => {
    const REGEX = /[a-zA-Z]/;

    return REGEX.test(value) ? FIELD_RULES.NUMERIC : '';
  }
};

export const FIELD_PLACEHOLDERS = {
  [FIELDS.FIRST_NAME]: 'Name',
  [FIELDS.LAST_NAME]: 'Surname',
  [FIELDS.AGE]: 'Age',
  [FIELDS.CITY]: 'City',
};
