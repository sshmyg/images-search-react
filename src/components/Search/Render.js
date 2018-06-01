import React from 'react';
import PropTypes from 'prop-types';

import Button from 'app/components/Button';
import Input from 'app/components/Input';

import './_search.css';

export default function SearchRender({
    handleInputChange,
    handleSubmit,
    searchValue,
    isLoading
}) {
    return (
        <form
            action="#"
            className="c-search"
            onSubmit={handleSubmit}
        >
            <Input
                value={searchValue}
                onChange={handleInputChange}
            />
            <Button
                type="submit"
                disabled={isLoading}
            >
                Search
            </Button>
        </form>
    );
}

SearchRender.propTypes = {
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    searchValue: PropTypes.string,
    isLoading: PropTypes.bool
};