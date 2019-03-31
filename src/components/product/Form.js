import React, {Component} from 'react';

class ProductForm extends Component {

    constructor(props) {
        super(props);

    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.handleAddProduct({
            name: this.refs.name.value,
            price: parseFloat(this.refs.price.value)
        });
        this.refs.name.value = "";
        this.refs.price.value = 0;
    };


    render() {

        return (
            <form onSubmit={this.submitForm}>
                <input type="text" placeholder="Product Name" ref="name"/> -
                <input type="text" placeholder="Product Price" ref="price"/>

                <button>Create Product</button>
            </form>
        );
    }
}

export default ProductForm;