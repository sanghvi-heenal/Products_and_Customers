import React from 'react';

const SearchBar = (props) => {
    return (
        <form className="FilterProductsForm">
            <input
              type="text"
              placeholder="Search..."
              value={props.filterText}
              onChange={props.onTextChange}
            />
            <p>
                <input
                className="checkbox"
                type="checkbox"
                checked={props.inStockOnly}
                onChange={props.onInStockCheckedChange}
                />
                <span>
                    {' '}
                    Only show products in stock
                </span>
            </p>
        </form>
    );
};

export default SearchBar;
