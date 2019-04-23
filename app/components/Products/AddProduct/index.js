import { connect } from 'react-redux';
import actionType from '../../../containers/ProductsPage/action-types';
import AddProduct from './AddProduct';


function mapStateToProps(state) {
    return {
        categories: state.get('productsTable').categories,
        filterText: state.get('productsTable').filterText,
        showInStockOnly: state.get('productsTable').showInStockOnly,
        newProduct: state.get('productsTable').newProduct
    };
}


function mapDispatchToProps(dispatch) {
    return {
        onNameInputChange: (event) => {
            //console.log(event.target.value);
            const action = {
                type: actionType.UPDATE_NEW_PRODUCT_NAME,
                payload: event.target.value
            };
            dispatch(action);
        },

        onPriceInputChange: (event) => {
            //console.log(event.target.value);
            const action = {
                type: actionType.UPDATE_NEW_PRODUCT_PRICE,
                payload: event.target.value
            };
            dispatch(action);
        },

        onCategorySelectChange: (event) => {
            //console.log(event.target.value);
            const action = {
                type: actionType.UPDATE_NEW_PRODUCT_CATEGORY,
                payload: event.target.value
            };
            dispatch(action);
        },

        onIsStockedCheckedChange: () => {
            //console.log(event.target.checked);
            const action = {
                type: actionType.UPDATE_NEW_PRODUCT_IS_STOCKED
            };
            dispatch(action);
        },

        onSubmit: () => {
            document.getElementById("add-product-form").reset();
            const action = {
                type: actionType.ADD_NEW_PRODUCT
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
