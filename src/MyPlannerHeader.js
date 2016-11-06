import React, { Component } from 'react';

import './table.css';

class MyPlannerHeader extends Component {

    render() {
        return (
            <tr className="MyPlannerHeader">
                <td></td>
                <td colSpan="6">Materials you need</td>
                <td></td>
            </tr>
        );
    };

}

export default MyPlannerHeader;
