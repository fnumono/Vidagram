import React, {Component} from 'react';
import MainPanel from './main-panel';

class UserProfile extends Component
{
  render()
  {



    return (
       <div id="user-profile">
          <MainPanel info={this.props.user.basicInfo}/>
       </div>
    );
  }
}

export default UserProfile;
