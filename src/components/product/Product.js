import React, {Component} from 'react';

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {qty: 0};
    }

    buyClicked = (e) => {
        this.setState({qty: this.state.qty + 1});
        this.props.onShowSumClicked(this.props.price);
    }

    render() {
        return (
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                <button onClick={this.buyClicked}>Buy</button>
                {/*<button onClick={this.showSum}>Update Sum</button>*/}
                <h4>Quantity : {this.state.qty} items </h4>
            <hr/>
            </div>
        );
    }
}

export default Product;