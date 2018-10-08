import PropTypes from 'prop-types';

const ConfirmText = ({ text }) => text || 'Save';

ConfirmText.propTypes = {
  text: PropTypes.string,
};

export default ConfirmText;
