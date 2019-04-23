import React from 'react';

const AddCategory = (props) => {
    return (
        <div className="AddCategory">
        <h3>Add New Category</h3>
        <form className="AddCategoryForm">
            <div>
                <label htmlFor="category">Category:</label>
                <span>
                    <input
                        type="text"
                        name="category"
                        value={props.newCategory}
                        onChange={props.onCategoryInputChange} />
                </span>
            </div>
        </form>
        <button
            className="AddCategoryBtn"
            onClick={props.onSubmit}> Add </button>
        </div>
    );
};


/*
AddCategory.PropTypes = {
    newCategory: PropTypes.string.isRequired,
    onCategoryInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};
*/

export default AddCategory;
