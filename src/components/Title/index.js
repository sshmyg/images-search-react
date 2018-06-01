import React from 'react';
import PropTypes from 'prop-types';

import './_c-title.css';

export default function Title({
    children
}) {
    return <h1 className="c-title">{ children }</h1>;
}

Title.propTypes = {
    children: PropTypes.node
};