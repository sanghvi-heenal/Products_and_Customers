import React from 'react';
import DeleteProductButton from './DeleteProductButton';
import ToggleProductInStock from './ToggleProductInStock';

const ProductRow = (props) => {
    const name = props.product.stocked ?
    props.product.name :
    <span style={{color: 'red'}}>
        {props.product.name}
    </span>;

    return (
        <tr className="dataRow">
            <td>{name}</td>
            <td>{props.product.price}</td>
            <td><ToggleProductInStock product={props.product} /></td>
            <td><DeleteProductButton product={props.product} /></td>
        </tr>
    );
};

export default ProductRow;
