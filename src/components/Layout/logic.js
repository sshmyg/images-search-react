import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import * as imagesActions from 'app/redux/images/actions';

function mapStateToProps(state) {
    const { images } = state;

    return { images };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(imagesActions, dispatch)
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
);