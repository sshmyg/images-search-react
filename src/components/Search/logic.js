import PropTypes from 'prop-types';
import {
    compose,
    setDisplayName,
    setPropTypes,
    defaultProps,
    withProps,
    withHandlers,
    withState,
    lifecycle,
} from 'recompose';

export default compose(
    setDisplayName('search-logic'),

    setPropTypes({
        search: PropTypes.func.isRequired
    }),

    withState(
        'searchValue',
        'setSearchValue',
        ''
    ),

    withHandlers({
        handleInputChange: ({ setSearchValue }) => e => {
            setSearchValue(e.target.value);
        },

        handleSubmit: props => e => {
            const {
                search,
                searchValue
            } = props;

            e && e.preventDefault();

            search({
                q: searchValue
            });
        }
    })
);