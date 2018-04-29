import React, { Component } from 'react';
import { Content } from '../../components';
const style = {
  "content": {
    "display": "grid",
    "gridTemplateAreas": "\"intro1\"\n        \"intro2\"",
    "gridTemplateRows": "auto 1fr",
    "gridGap": "20px"
  },
  "intro1": {
    "gridArea": "intro1"
  },
  "intro2": {
    "gridArea": "intro2",
    "gridColumnEnd": "3",
    "display": "grid",
    "gridGap": "20px",
    "gridTemplateColumns": "repeat(auto-fit, minmax(300px, 1fr))"
  },
  "i2_item": {
    "display": "block"
  }
}
class Home extends Component{
  render(){
    return (
      <Content>
        <h1 className="intro1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue risus. Pellentesque laoreet fringilla elementum.</h1>
        <div className = "intro2">
            <p className="i2-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sagittis felis, eu scelerisque elit. Sed justo dolor, vestibulum quis enim sit amet, facilisis accumsan massa. Nulla venenatis, lacus vel lacinia consectetur, neque purus ullamcorper lacus, id elementum est diam sed quam. </p>
            <p className="i2-item">Phasellus mattis lorem non dui euismod feugiat. Nunc vulputate ex nisl, at hendrerit ante consectetur sit amet. Sed non fringilla ante. In pellentesque enim vel mollis faucibus. Morbi quis tortor sollicitudin, dapibus quam ac, ornare est. Phasellus eget magna in mauris suscipit aliquam eu id elit. Fusce ornare, dui vitae fringilla vestibulum, dui arcu volutpat sapien, non vehicula quam enim at leo. Donec sed diam vel odio placerat elementum. Proin scelerisque posuere ligula sed aliquam. Donec nec congue risus. Pellentesque laoreet fringilla elementum.</p>
        </div>
      </Content>
    );
  }
}

export default Home;