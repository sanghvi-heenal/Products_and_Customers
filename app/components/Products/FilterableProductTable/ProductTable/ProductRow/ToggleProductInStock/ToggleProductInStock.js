import React from 'react';

const ToggleProductInStock = (props) => {

    const handleCheckedChange = () => {
        props.onIsStockedCheckedChange(props.product);
    }

    return (
        <form className="ToggleProductInStock">
            <input
                type="checkbox"
                defaultChecked={props.product.stocked}
                onChange={handleCheckedChange} />
        </form>
    );
};

export default ToggleProductInStock;
