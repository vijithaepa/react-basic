import React, {Component} from 'react';

class Total extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>Total cost : ${this.props.total}</h3>
            </div>
        );
    }
}

export default Total;
