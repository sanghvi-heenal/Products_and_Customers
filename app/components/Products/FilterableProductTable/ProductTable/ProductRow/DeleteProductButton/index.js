import { connect } from 'react-redux';
import actionType from '../../../../../../containers/ProductsPage/action-types';
import DeleteProductButton from './DeleteProductButton';

function mapDispatchToProps(dispatch) {
    return {
        onDeleteBtnClick: (product) => {
            //console.log('Product to delete:  '', product);
            const action = {
                type: actionType.DELETE_PRODUCT,
                payload: product
            };
            dispatch(action);
        }
    };
}

export default connect(undefined, mapDispatchToProps)(DeleteProductButton);
