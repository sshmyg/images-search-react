import c from './constants';

const defaultState = {
    isLoading: false,
    list: []
};

export default function users(state = defaultState, { type, payload }) {
    switch (type) {
        case c.SEARCH_IMAGES_LOADING:
            return {
                ...state,
                ...payload
            };

        case c.SEARCH_IMAGES_SUCCESS:
            return actualizeImages(state, payload);

        default:
            return state;
    }
}

function actualizeImages(state, payload) {
    const {
        data,
        ...othersPayload
    } = payload;

    const list = data.reduce((acc, item) => {
        if (!item.images) {
            return acc;
        }

        acc = [
            ...acc,
            ...item.images
        ];

        return acc;
    }, []);

    return {
        ...state,
        ...othersPayload,
        list: list.slice(1, 10)
    };
}