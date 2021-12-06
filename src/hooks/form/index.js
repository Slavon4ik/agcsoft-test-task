import { useState } from 'react';
import { getFormConfig, getFormModel, getFormRules, getFormViolations, getViolations } from './helpers.js';

export const useForm = (fields) => {
  const [model, setModel] = useState(getFormModel(fields));
  const [violations, setViolations] = useState(getFormViolations(fields));
  const config = getFormConfig(fields);
  const rules = getFormRules(fields);

  const updateModel = (name, value) => {
    setModel({...model, [name]: value});
  };

  const resetModel = () => {
    setModel(getFormModel(fields, true));
  };

  const validate = (name) => {
    setViolations({
      ...violations,
      [name]: getViolations(rules[name], model[name])
    });
  };

  const validateAll = () => {
    setViolations(Object.entries(rules).reduce((_violations, [_name, _rules]) => {
      _violations[_name] = getViolations(_rules, model[_name]);

      return _violations;
    }, {}));
  };

  const invalidate = (name) => {
    setViolations({ ...violations, [name]: [] });
  }

  const resetViolations = () => {
    setViolations(getFormViolations(fields, true));
  };

  const getIsFormValid = () => {
    return Object.values(violations).every(violation => !violation.length);
  }

  return {
    model,
    updateModel,
    resetModel,
    violations,
    validate,
    validateAll,
    invalidate,
    resetViolations,
    getIsFormValid,
    config
  };
}