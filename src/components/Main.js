import React from 'react';
import Titles from './Titles';
import ProductItem from './ProductItem';

const products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7'}
];

const Main = () => (
  <table>
    <tbody>
    <tr>
      <td><strong>Name</strong></td>
      <td><strong>Price</strong></td>
    </tr>
  <Titles
    categoryArray={products.category} />
  {/* < ProductItem 
    priceArray={products.price} 
    stockedArray={products.stocked} 
    nameArray={products.name} 
  /> */}
  </tbody>
  </table>

)

export default Main;