import React, { Component } from 'react';
import Row from './row';
import Sign from './sign';
class Panel extends Component {
    state = { 
        numbers:[
            {value:0, id:1, row:1},
            {value:"AC", id:2, row:1},
            {value:'=', id:3, row:1},
            {value:1, id:4, row:2},
            {value:2, id:5, row:2},
            {value:3, id:6, row:2},
            {value:4, id:7, row:3},
            {value:5, id:8, row:3},
            {value:6, id:9, row:3},
            {value:7, id:10, row:4},
            {value:8, id:11, row:4},
            {value:9, id:12, row:4},
            
        ],
        sign:[
            {value:"+", id:1, row:1},
            {value:"-", id:2, row:1},
            {value:'*', id:3, row:1},
            {value:"/", id:4, row:2},
        ]   
     }
     style ={
        width:50,
        height:70,
        fontSize:20,
    }
    style2 ={
        width:50,
        height:70,
        fontSize:20,
        padding:18,
    }
    render() {
        let newArray=[];
        for(let i=4; i>0; i--) {
            let d = this.state.numbers.filter(objects => objects.row==i);
            newArray.push(d);
        }    
        console.log(newArray[0])
        console.log(newArray)
        console.log(this.state.sign)
        return ( 
            <React.Fragment>
                {newArray.map((val,index)=>(
                    // console.log(val)
                    <React.Fragment key={index}>
                    <Row numbers={val} index={index} style={this.style}/>
                    <Sign style={this.style2} signs={this.state.sign} index={index}/>
                    <br/>
                    </React.Fragment>
                   
                ))}
            </React.Fragment>
         );
    }
}
 
export default Panel;