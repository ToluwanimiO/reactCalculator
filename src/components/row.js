import React, { Component } from 'react';
import Button from './button';
class Row extends Component {
    state = {    }
    
    arrange(){
        // let i =1;
        
        // let d ="newArray"+i
        // console.log(d);
        // let newArray1 = this.props.numbers.filter(objects => objects.row==1);
        // let newArray2 = this.props.numbers.filter(objects => objects.row==2);
        // let newArray3 = this.props.numbers.filter(objects => objects.row==3);
        // let newArray4 = this.props.numbers.filter(objects => objects.row==4);
        let d= this.props.numbers;
        return ( 
            <React.Fragment>
                {d.map((val,index) =>(
                    <React.Fragment key={index}>
                        <Button myNumber={val.value} style={this.props.style}/>
                    </React.Fragment>
                ))}                           
                
            </React.Fragment>
         );
    }
    render() { 
        return ( 
            <React.Fragment>
                {this.arrange()}
            </React.Fragment>
         );
    }
}
 
export default Row;