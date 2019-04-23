import { connect } from 'react-redux';
import actionType from '../../../../containers/ProductsPage/action-types';
import SearchBar from './SearchBar';


function mapStateToProps(state) {
    return {
        filterText: state.get('productsTable').filterText,
        showInStockOnly: state.get('productsTable').showInStockOnly
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onTextChange: (event) => {
            const action = {
                type: actionType.UPDATE_ON_TEXT_CHANGE,
                payload: event.target.value
            };
            dispatch(action);
        },

        onInStockCheckedChange: () => {
            const action = {
                type: actionType.SET_IN_STOCK_ONLY_CHECKED,
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
