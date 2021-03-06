import React from 'react';

import MaterialCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const Checkbox = props => {
  const { label = 'Is Active', ...resprops } = props;
  return (
    <FormControlLabel
      control={
        <MaterialCheckbox type="checkbox" color="primary" {...resprops} />
      }
      label={label}
    />
  );
};
