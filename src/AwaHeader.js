import React, { Component } from 'react';

import AweConst from './Const';

class AweHeader extends Component {
  render() {
    return (
      <div>
        {AweConst.materials.map(function(mat) {
            return <img src={mat.src} title={mat.name} key={mat.id} />;
        })}
      </div>
    );
  }
}

export default AweHeader;
