import React from 'react';
import FilterableProductTable from '../../components/Products/FilterableProductTable';
import AddProduct from '../../components/Products/AddProduct';
import AddCategory from '../../components/Products/AddCategory';
import './style.scss';


const ProductsPage = () => (
    <div className="products-page">
        <div className="products-page-body">
        <AddProduct />
         <AddCategory />
            <FilterableProductTable />
           
        </div>
    </div>
);

export default ProductsPage;
