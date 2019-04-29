import React, {Component} from 'react';

class DevBoard extends Component{
  render(){
    return(
      <div>
        {this.props.info.name}
      </div>
    );
  }
}

export default DevBoard;
