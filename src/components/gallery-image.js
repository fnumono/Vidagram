import React, {Component} from 'react';

class GalleryImage extends Component
{

    render()
    {
      return (
          <div>
            <img  className={this.props.className}
                  src={this.props.src}
                  alt={this.props.alt}/>
          </div>
      );
    }
}

export default GalleryImage;
