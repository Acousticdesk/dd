import React from 'react';
import PropTypes from 'prop-types';

import DefaultHeaderContent from '../../../Layout/Modal/DefaultHeaderContent';

const Header = ({ close, placementId }) => (
  <div className="modal__header modal__header--bordered">
    <DefaultHeaderContent title={`Placement (${placementId})`} close={close} />
  </div>
);

Header.defaultProps = {
  close: null,
  placementId: null,
};

Header.propTypes = {
  close: PropTypes.func,
  placementId: PropTypes.number,
};

export default Header;
