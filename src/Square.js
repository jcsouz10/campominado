import React from 'react';
import './Square.css';

class Square extends React.Component {
    constructor(){
        super();

        this.state = {
            itemsSquare: [],
        }
    }

    clicked = () => {
        const { index, itemSquare, item } = this.props;

        this.setState({
            itemSquare: this.props.itemSquare[index].status = true
          });


        console.log(this.props.itemSquare)
        


    }

    render() {
        return (
            <div>
                <div className="square" onClick={this.clicked}> Oi </div>
            </div>
        )
    }
}

export default Square;
