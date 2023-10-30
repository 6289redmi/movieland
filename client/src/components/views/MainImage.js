import React from 'react'
import { Carousel } from 'antd';

function MainImage(props) {

    const contentStyle = {
        margin: 0,
        height: '562.5px',
        lineHeight: '562.5px',
        textAlign: 'center',
        background: '#364d79',
      };

  return (
       <Carousel autoplay>
      <div>
            <h3 style={ contentStyle }>
                <img 
                    src={props.image1}
                    alt='사진' 
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
            </h3>
          </div>
          <div>
            <h3 style={ contentStyle }>
                <img 
                    src={props.image2}
                    alt='사진' 
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
            </h3>
          </div>
          <div>
                <h3 style={ contentStyle }>
                    <img 
                        src={props.image3}
                        alt='사진' 
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                </h3>
          </div>
          </Carousel>
  )
}

export default MainImage