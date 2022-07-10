import PropTypes from 'prop-types';
import styles from './Button.module.css';

import React from 'react';

const Button = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
