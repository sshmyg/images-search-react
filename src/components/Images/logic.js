import React from 'react';
import PropTypes from 'prop-types';
import {
    compose,
    setDisplayName,
    setPropTypes,
    branch,
    renderComponent
} from 'recompose';

import Info from 'app/components/Info';

const InfoLoading = () => <Info>Loading...</Info>;
const InfoNoResult = () => <Info>No search result</Info>;

export default compose(
    setDisplayName('images-logic'),

    setPropTypes({
        isLoading: PropTypes.bool
    }),

    branch(
        ({ isLoading }) => isLoading,
        renderComponent(InfoLoading)
    ),

    branch(
        ({ isLoading, list }) => !isLoading && !list.length,
        renderComponent(InfoNoResult)
    )
);