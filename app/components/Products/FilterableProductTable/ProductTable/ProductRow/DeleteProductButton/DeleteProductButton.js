import React from 'react';
import deleteBtn from './ic_delete.png';

const DeleteProductButton = (props) => {
    const handleClick = () => {
        props.onDeleteBtnClick(props.product);
    }

    return (
        <img
            src={deleteBtn}
            alt="Delete Product"
            className="DeleteProductBtn"
            onClick={handleClick} />
    );
};

export default DeleteProductButton;
