import { FIELD_RULES, FIELD_TYPES, FIELDS } from './types.js';
import { FIELD_PLACEHOLDERS, FIELD_RULE_OPTIONS } from './settings.js';
import { WEB_CITY_LIST } from '../../web/settings.js';

export const useFields = (options) => {
  const settings = {
    [FIELDS.FIRST_NAME]: () => ({
      type: FIELD_TYPES.INPUT,
      name: FIELDS.FIRST_NAME,
      rules: [FIELD_RULE_OPTIONS[FIELD_RULES.REQUIRED]],
      placeholder: FIELD_PLACEHOLDERS[FIELDS.FIRST_NAME],
      value: ''
    }),
    [FIELDS.LAST_NAME]: () => ({
      type: FIELD_TYPES.INPUT,
      name: FIELDS.LAST_NAME,
      rules: [FIELD_RULE_OPTIONS[FIELD_RULES.REQUIRED]],
      placeholder: FIELD_PLACEHOLDERS[FIELDS.LAST_NAME],
      value: ''
    }),
    [FIELDS.AGE]: () => ({
      type: FIELD_TYPES.INPUT,
      name: FIELDS.AGE,
      rules: [
        FIELD_RULE_OPTIONS[FIELD_RULES.REQUIRED],
        FIELD_RULE_OPTIONS[FIELD_RULES.NUMERIC]
      ],
      placeholder: FIELD_PLACEHOLDERS[FIELDS.AGE],
      value: ''
    }),
    [FIELDS.CITY]: () => ({
      type: FIELD_TYPES.DROPDOWN,
      name: FIELDS.CITY,
      rules: [FIELD_RULE_OPTIONS[FIELD_RULES.REQUIRED]],
      placeholder: FIELD_PLACEHOLDERS[FIELDS.CITY],
      options: WEB_CITY_LIST,
      value: ''
    })
  };

  return options.map(option => settings[option]());
};