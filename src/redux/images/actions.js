import c from './constants';

import api from 'app/redux/api';

/**
 * req
 * @param {Object} req
 * @param {String} req.q
 * @param {Number} req.page
 */
export function searchImages(req) {
    return dispatch => {
        dispatch({
            type: c.SEARCH_IMAGES_LOADING,
            payload: {
                isLoading: true
            }
        });

        api
            .search(req)
            .then(payload => {
                const { data = {} } = payload;
                const { status } = data;

                if (status !== 200) {
                    dispatch({
                        type: c.SEARCH_IMAGES_ERROR,
                        payload: data.data
                    });

                    return;
                }

                dispatch({
                    type: c.SEARCH_IMAGES_SUCCESS,
                    payload: {
                        data: data.data,
                        isLoading: false
                    }
                });
            });
    };
}