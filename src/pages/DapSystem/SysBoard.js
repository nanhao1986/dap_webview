import React, {Component} from 'react';


class SysBoard extends Component{
  render(){
    return(
      <div>
        {this.props.info.name}
      </div>
    );
  }
}

export default SysBoard;
