import { connect } from 'react-redux';
import actionType from '../../../containers/ProductsPage/action-types';
import AddCategory from './AddCategory';


function mapStateToProps(state) {
    return {
        newCategory: state.get('productsTable').newCategory
    };
}


function mapDispatchToProps(dispatch) {
    return {
        onCategoryInputChange: (event) => {
            //console.log(event.target.value);
            const action = {
                type: actionType.UPDATE_NEW_CATEGORY,
                payload: event.target.value
            };
            dispatch(action);
        },

        onSubmit: () => {
            //console.log("AddCategory dispatched.");
            const action = {
                type: actionType.ADD_NEW_CATEGORY
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
