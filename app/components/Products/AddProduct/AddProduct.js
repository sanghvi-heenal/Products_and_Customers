

import React from 'react';

const AddProduct = (props) => {
    return (
        <div className="AddProduct">
        <h3>Add New Product</h3>
        <form className="AddProductForm" id="add-product-form">
            <div>
                <label htmlFor="name">Name:</label>
                <span>
                    <input
                        type="text"
                        name="name"
                        defaultValue={props.newProduct.name}
                        onChange={props.onNameInputChange} />
                </span>
                </div>
            <div>
                <label htmlFor="price">Price:</label>
                <span>
                    <input
                        type="text"
                        name="price"
                        defaultValue={props.newProduct.price}
                        onChange={props.onPriceInputChange} />
                </span>
            </div>
            <div>
                
                <label htmlFor="category-select">Category:</label>
                <span>
                    <select
                        onChange={props.onCategorySelectChange} >
                        {props.categories.map((category, key) => (
                            <option key={key} value={key} >{category}</option>
                        ))}
                    </select>
                </span>
            </div>
            <div>
                <label htmlFor="stocked">Is Stocked:</label>
                <span>
                <input
                    type="checkbox"
                    defaultChecked={props.newProduct.stocked}
                    onChange={props.onIsStockedCheckedChange} />
                </span>
            </div>

        </form>
        <button
            className="AddProductBtn"
            onClick={props.onSubmit}>Add Product</button>
        </div>
    );
};

export default AddProduct;
