import React, { Component, Fragment } from 'react';
import Header from './Header';
import VendorList from "../Components/vendor";

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <Fragment>
                <Header/>
            <VendorList />
           </Fragment>
         );
    }
}
 
export default DefaultLayout;