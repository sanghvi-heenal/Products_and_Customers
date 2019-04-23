import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductTable from './ProductTable';


function mapStateToProps(state) {
    return {
        filterText: state.get('productsTable').filterText,
        showInStockOnly: state.get('productsTable').showInStockOnly,
        products: state.get('productsTable').products,
        categories: state.get('productsTable').categories,
    };
}

export default connect(mapStateToProps, undefined)(ProductTable);
