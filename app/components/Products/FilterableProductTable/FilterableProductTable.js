import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
    return (
        <div>
            <SearchBar />
            <ProductTable />
        </div>
    );
};

export default FilterableProductTable;
