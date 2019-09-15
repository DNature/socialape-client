import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export default ({
  children,
  onClick,
  tip,
  place,
  btnClassName,
  tipClassName
}) => (
  <Tooltip title={tip} className={tipClassName} placement={place}>
    <IconButton onClick={onClick} className={btnClassName}>
      {children}
    </IconButton>
  </Tooltip>
);
