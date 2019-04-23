import actionType from './action-types';
import isEqual from 'lodash.isequal';

// Initial list of categories
const CATEGORIES = [
    'Sporting Goods',
    'Electronics'
];

// Initial list of products
const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

// Initial new product state
const NEW_PRODUCT = {
    category: 'Sporting Goods',
    price: '',
    stocked: true,
    name: ''
};

const initialState = {
    products: PRODUCTS,
    categories: CATEGORIES,
    showInStockOnly: false,
    filterText: '',
    newProduct: NEW_PRODUCT,
    newCategory: ''

};

const productsTable = (state = initialState, action) =>{
    const { newProduct: product } = state;
    let productsList, categoriesList;

    switch (action.type) {

        case actionType.ADD_NEW_PRODUCT:
            productsList = [...state.products];
            productsList.push(state.newProduct);
            return Object.assign({}, state, { products: productsList, newProduct: NEW_PRODUCT });

        case actionType.UPDATE_NEW_PRODUCT_NAME:
            product.name = action.payload;
            return Object.assign({}, state, { newProduct: product });

        case actionType.UPDATE_NEW_PRODUCT_PRICE:
            product.price = action.payload;
            return Object.assign({}, state, { newProduct: product });

        case actionType.UPDATE_NEW_PRODUCT_CATEGORY:
            product.category = state.categories[action.payload];
            return Object.assign({}, state, { newProduct: product });

        case actionType.UPDATE_NEW_PRODUCT_IS_STOCKED:
            product.stocked = !product.stocked;
            return Object.assign({}, state, { newProduct: product });

        case actionType.ADD_NEW_CATEGORY:
            categoriesList = [...state.categories];
            categoriesList.push(state.newCategory);
            return Object.assign({}, state, { categories: categoriesList, newCategory: '' });

        case actionType.UPDATE_NEW_CATEGORY:
            return Object.assign({}, state, { newCategory: action.payload });

        case actionType.DELETE_PRODUCT:
            productsList = [...state.products];
            productsList = productsList.filter(product => product !== action.payload)
            return Object.assign({}, state, { products: productsList });

        case actionType.UPDATE_ON_TEXT_CHANGE:
            return Object.assign({}, state, { filterText: action.payload});

        case actionType.SET_IN_STOCK_ONLY_CHECKED:
            return Object.assign({}, state, { showInStockOnly: !state.showInStockOnly});

        case actionType.UPDATE_PRODUCT_IN_STOCK:
            console.log('Reducer called.  Payload:', action.payload);
            productsList = [...state.products];
            productsList.forEach((prod, index) => {
                if (isEqual(prod, action.payload)) {
                    prod.stocked = !prod.stocked;
                    console.log(prod);
                }
                else {
                    console.log("Not equal");
                }
            });
            return Object.assign({}, state, { products: productsList });

        default:
            return state;
    }
};


export default productsTable;
