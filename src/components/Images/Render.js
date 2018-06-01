import React from 'react';
import PropTypes from 'prop-types';

import './_c-images.css';

export default function ImagesRender({
    list
}) {
    return (
        <div className="c-images">
            {
                list.map(item => {
                    const {
                        id,
                        link
                    } = item;

                    return (
                        <div key={id} className="c-images__item">
                            <img className="c-images__img" src={link} alt="" />
                        </div>
                    );
                })
            }
        </div>
    );
}

ImagesRender.propTypes = {
    list: PropTypes.array
};