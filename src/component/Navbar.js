import React, { Component } from 'react'
import Navitems from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive':''
        }
    }
    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/"></Navitems>
                    <Navitems item="About" tolink="/about"></Navitems>
                    <Navitems item="Hardware" tolink="/hardware"></Navitems>
                    <Navitems item="Dashboard" tolink="/dashboard"></Navitems>
                    <Navitems item="Login" tolink="/login"></Navitems>
                </ul>
                
                     
                    
            
            </nav>
        )
    }

}

export default Navbar;