import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './_input.css';

export default function Input(props) {
    const {
        className,
        ...othersProps
    } = props;

    const componentClassName = classnames(className, 'c-input');

    return (
        <input
            {...othersProps}
            className={componentClassName}
        />
    );
}

Input.propTypes = {
    className: PropTypes.string
};