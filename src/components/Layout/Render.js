import React from 'react';
import PropTypes from 'prop-types';

import Title from 'app/components/Title';
import Search from 'app/components/Search';
import Images from 'app/components/Images';

import './layout.css';

export default function Layout({
    images: {
        isLoading,
        list
    },
    actions: { searchImages }
}) {
    return (
        <div className="l-wrapper">
            <Title>Image search</Title>
            <Search
                search={searchImages}
                isLoading={isLoading}
            />
            <Images
                isLoading={isLoading}
                list={list}
            />
        </div>
    );
}

Layout.propTypes = {
    actions: PropTypes.object,
    images: PropTypes.object
};