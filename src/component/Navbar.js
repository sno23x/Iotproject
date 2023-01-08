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
                    <Navitems item="Education" tolink="/education"></Navitems>
                    <Navitems item="Contact" tolink="/contact"></Navitems>
                    {/* <ItemScreen item="Login" tolink="/Login"></ItemScreen>
                    <ItemScreen item="Register" tolink="/Register"></ItemScreen> */}
                </ul>
            </nav>
        )
    }

}

export default Navbar;