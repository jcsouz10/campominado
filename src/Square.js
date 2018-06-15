import React from 'react';
import './Square.css';

class Square extends React.Component {
  constructor(){
    super();

    this.state = {
      status: ''
    }
  }

  clicked = () =>{
    const { index, status} = this.props;

    this.setState({
      status: status[index]
  })

  console.log( status[index])
  }

  render () {
   const activeElements = this.props.objects
      .filter(obj => obj.status)
    return (<div className="square" onClick={this.clicked}>{this.props.children("field")}</div>);
  }
}

export default Square;

