import React, { Component } from 'react';
class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment> 
                <nav className="navbar bg-dark navbar-expand-sm navbar-dark fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src="" />
                            Navbar                        
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsedItems" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="collapsedItems">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="" className="nav-link">Item 1</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Item 2</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Item 3</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default Nav;