import React, { useEffect, useState } from 'react';
import AppCard from './AppCard.jsx';
import AppInput from './AppInput.jsx';
import AppButton from './AppButton.jsx';
import '../styles/UserForm.scss';
import { USER_FIELD_CONFIGS, USER_FIELD_LIST } from './settings.js';
import AppDropdown from './AppDropdown.jsx';
import { USER_FIELDS } from './types.js';

const COMPONENTS = {
  [USER_FIELDS.FIRST_NAME]: AppInput,
  [USER_FIELDS.LAST_NAME]: AppInput,
  [USER_FIELDS.AGE]: AppInput,
  [USER_FIELDS.CITY]: AppDropdown,
}

const UserForm = ({ user, update, submit }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(USER_FIELD_LIST.some(field => !user[field]));
  }, [user]);

  return (
    <AppCard>
      <div className="user-form">
        {USER_FIELD_LIST.map(field =>
          React.createElement(COMPONENTS[field], {
            ...USER_FIELD_CONFIGS[field],
            key: field,
            value: user[field],
            input: value => update({ ...user, [field]: value })
          })
        )}
        <div className="user-form__action">
          <AppButton disabled={buttonDisabled} onClick={() => submit()}>
            <b>ADD</b>
          </AppButton>
        </div>
      </div>
    </AppCard>
  );
};

export default UserForm;