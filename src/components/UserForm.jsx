import React, { useEffect, useState } from 'react';
import AppCard from './AppCard.jsx';
import AppInput from './AppInput.jsx';
import AppButton from './AppButton.jsx';
import '../styles/UserForm.scss';
import { USER_FIELD_LIST } from './settings.js';
import AppDropdown from './AppDropdown.jsx';
import { FIELD_TYPES } from '../hooks/fields/types.js';
import { useForm } from '../hooks/form';
import { useFields } from '../hooks/fields';

const COMPONENTS = {
  [FIELD_TYPES.INPUT]: AppInput,
  [FIELD_TYPES.DROPDOWN]: AppDropdown,
}

const UserForm = ({ submit }) => {
  const fields = useFields(USER_FIELD_LIST);
  const {
    model,
    updateModel,
    config,
    violations,
    invalidate,
    validate,
    validateAll,
    resetModel,
    resetViolations,
    getIsFormValid
  } = useForm(fields);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(Object.values(model).some(value => !value));
  }, [model]);

  const submitUser = () => {
    validateAll();

    if (!getIsFormValid()) {
      return;
    }

    submit({ id: new Date().getTime(), ...model });
    resetModel();
    resetViolations();
  };

  return (
    <AppCard>
      <div className="user-form">
        {config.map(({ name, type, ...rest }) =>
          React.createElement(COMPONENTS[type], {
            ...rest,
            key: name,
            value: model[name],
            error: violations[name].length,
            input: value => updateModel(name, value),
            focus: () => invalidate(name),
            blur: () => validate(name),
          })
        )}
        <div className="user-form__action">
          <AppButton
            disabled={buttonDisabled}
            onClick={() => submitUser()}
          >
            <b>ADD</b>
          </AppButton>
        </div>
      </div>
    </AppCard>
  );
};

export default UserForm;