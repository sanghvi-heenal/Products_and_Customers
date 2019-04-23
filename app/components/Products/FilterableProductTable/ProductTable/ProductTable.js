import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
    const {filterText, showInStockOnly: inStockOnly} = props;
    const rows = [];

    props.categories.forEach((category) => {
        rows.push(
            <ProductCategoryRow
              category={category}
              key={category} />
        );
        let counter = 0;
        props.products.forEach((product) => {
            if (product.category === category) {
                if (inStockOnly && !product.stocked) {
                  return;
                }
                if (product.name.indexOf(filterText) === -1) {
                  return;
                }
                rows.push(
                    <ProductRow
                      product={product}
                      key={product.name}
                    />
                );
                counter++;
            }
        });
        if (counter === 0) rows.pop();
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>In Stock</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
      </table>
    );
};

export default ProductTable;
