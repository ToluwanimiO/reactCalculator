import React, { Component } from 'react';
import { getAllByDisplayValue } from '@testing-library/react';
class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                    <button style={this.props.style} className="btn-sm">{this.props.myNumber}</button>        
            </React.Fragment>
         );
    }
}
 
export default Button;