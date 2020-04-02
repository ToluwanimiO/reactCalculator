import React, { Component } from 'react';
class Sign extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {console.log(this.props.signs[this.props.index].value)}
                <button style={this.props.style} className="btn-sm">{this.props.signs[this.props.index].value}</button>        
            </React.Fragment>
         );
    }
}
 
export default Sign;