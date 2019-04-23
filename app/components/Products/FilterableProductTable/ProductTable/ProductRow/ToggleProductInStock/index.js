import { connect } from 'react-redux';
import actionType from '../../../../../../containers/ProductsPage/action-types';
import ToggleProductInStock from './ToggleProductInStock';

function mapDispatchToProps(dispatch) {
    return {
        onIsStockedCheckedChange: (product) => {
            const action = {
                type: actionType.UPDATE_PRODUCT_IN_STOCK,
                payload: product
            };
            dispatch(action);
        }
    };
}

export default connect(undefined, mapDispatchToProps)(ToggleProductInStock);
