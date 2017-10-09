import React, {Component} from 'react';
import Avatar from './avatar';

class MainPanel extends Component
{

  constructor (props)
  {
    super(props);
  }

  render()
  {
    //info = this.props.info

    if (!this.props.info)
      return null;
    return (
      <div>
        <div className="top">
          <Avatar image={this.props.info.photo}
                  width={100}
                  length={100}/>
          <h2>{this.props.info.name}</h2>
          <h3>{this.props.info.location}</h3>
        </div>

        <div className="bottom">
          <h4> Biography </h4>
          <p> {this.props.info.bio} </p>
        </div>
      </div>
    );
  }
}

export default MainPanel;
