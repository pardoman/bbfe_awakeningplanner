import React, { Component } from 'react';

import './table.css';

class MyStashHeader extends Component {

    render() {
        return (
            <tr className="MyStashHeader">
                <td></td>
                <td colSpan="6">Materials in your inventory</td>
                <td></td>
            </tr>
        );
    };

}

export default MyStashHeader;
