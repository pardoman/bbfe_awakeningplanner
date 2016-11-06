import React, { Component } from 'react';
import AweConst from './Const';
import './table.css';

class AweHeader extends Component {
  render() {
    return (
        <tr>
            <td></td>
            {AweConst.materials.map(function(mat) {
                return <td key={mat.id} >
                  <img 
                    src={mat.src} 
                    title={mat.name} 
                    alt={mat.name}
                  />
                  </td>;
            })}
            <td></td>
        </tr>
    );
  }
}

export default AweHeader;
