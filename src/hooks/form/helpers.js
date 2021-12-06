export function getFormModel(settings, reset = false) {
  return settings.reduce((model, { name, value }) => {
    model[name] = reset ? '' : value;

    return model;
  }, {})
}

export function getFormViolations(settings, reset = false) {
  return settings.reduce((violations, { name, violationList = [] }) => {
    violations[name] = reset ? [] : violationList;

    return violations;
  }, {})
}

export function getFormConfig(settings) {
  return settings.map(({ value, rules, ...rest }) => (rest));
}

export function getFormRules(settings) {
  return settings.reduce((rulesConfig, { name, rules = [] }) => {
    rulesConfig[name] = rules;

    return rulesConfig;
  }, {});
}

export function getViolations(rules, value) {
  return rules.reduce((violations, rule) => {
    const violation = rule(value);
    violation && violations.push(violation);

    return violations;
  }, []);
}