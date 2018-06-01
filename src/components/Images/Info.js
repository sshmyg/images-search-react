import React from 'react';
import PropTypes from 'prop-types';

export default function Info({ children }) {
    return (
        <div className="c-info">{ children }</div>
    );
}

Info.propTypes = {
    children: PropTypes.node
};