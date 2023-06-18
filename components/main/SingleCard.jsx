import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';

class SingleCard extends Component {
   constructor(props){
    super(props);
    //this.state = {};
   }
   
   
    render() {
        return (
            
            <Card className="bgColor" style={{ width: '13rem' }}>
                <Card.Img variant="top mt-2" src= {this.props.img} />
                <Card.Body>
                    <Card.Title className="titleEllips">{this.props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Text className="priceStyle">€ {this.props.price}</Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default SingleCard;