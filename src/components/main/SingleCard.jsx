import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SingleCard extends Component {
   constructor(props){
    super(props);
    this.state = {};
   }
   
   
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Text>€ {this.props.price}</Card.Text>
                    <Button variant="primary">Compra subito</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default SingleCard;