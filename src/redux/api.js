import axios from 'axios';

const getMethod = ({
    method
}) => {
    return (url, data, headers) => {
        return axios({
            url,
            //rename data params for get
            ...(method === 'get' ? { params: data } : { data }),
            method,
            timeout: 10000,
            headers
        });
    };
};

const clientId = 'cae26bafc5fd0dc';

export default {
    _get: getMethod({ method: 'get' }),

    /**
     * Search images
     * @param {Object} req
     * @param {Number} req.page
     * @param {String} req.q
     */
    search(req = {}) {
        const {
            page = 0,
            q
        } = req;
        const url = `https://api.imgur.com/3/gallery/search/top/${page}/?q=${q}`;

        return this
            ._get(
                url,
                req,
                { Authorization: `Client-ID ${clientId}` }
            );
    },
};
