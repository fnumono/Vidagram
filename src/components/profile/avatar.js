import React, {Component} from 'react';

class Avatar extends Component
{
  render()
  {
    if (!this.props.image)
      return null;

    return(
      <div className="avatar">
        <img src={this.props.image} />
      </div>
    );
  }
}

export default Avatar;
