import React, { Component } from 'react';
import AweConst from './Const';
import './table.css';
import './MaterialReference.css';

class MaterialReference extends Component {
  render() {
    return (
      <div>
        <span className="MaterialReferenceTitle" >Material Reference</span>
        <table className="centerTable MaterialReferenceTable">
          <tbody>
                {AweConst.materials.map(function(mat) {
                    return <tr>
                              <td key={mat.id} >
                                <img 
                                  src={mat.src} 
                                  title={mat.name} 
                                  alt={mat.name}
                                />
                              </td>
                              <td>
                                <a href={mat.url}>
                                  {mat.name}
                                </a>
                              </td>
                          </tr>;
                })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MaterialReference;
