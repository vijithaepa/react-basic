import React, {Component} from 'react';
import Product from "./Product";
import Total from "./Total";
import ProductForm from "./Form";

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productList: [
                {name: "Android", price: 153},
                {name: "IOS", price: 72},
                {name: "Window", price: 112},
            ],
            total: 0
        }
    }

    calculateSum = (price) => {
        this.setState({total: this.state.total + price});
    };

    addProduct = (product) => {
        this.setState({productList: this.state.productList.concat(product)});
    };

    render() {
        const products = this.state.productList.map(product => {
            return (
                <Product name={product.name} price={product.price} onShowSumClicked={this.calculateSum}/>
            );
        });

        return (
            <div>
                <br/>
                <ProductForm handleAddProduct={this.addProduct}/>
                <h3>Products :</h3>
                {products}
                <Total total={this.state.total}/>
            </div>
        );
    }
}

export default ProductList;