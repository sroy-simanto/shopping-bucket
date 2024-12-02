import React from 'react';
import PropTypes from 'prop-types';

const TextCell = ({ text, className='', as='td' }) => {
	const As = as;
	return <As className={className}>{text}</As>;
};

TextCell.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
	as: PropTypes.string,
};

export default TextCell;
