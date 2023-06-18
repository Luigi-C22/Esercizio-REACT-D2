import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleCard from "./SingleCard";
import ScifiBook from '../../data/scifi.json'

class LatestRelease extends Component {
    render() {
        return (
            <Container>
                <Row className="d-flex flex-wrap gap-3">
                    {
                        ScifiBook.map((book) => {
                            return (
                                <SingleCard
                                key = {book.asin}
                                img = {book.img}
                                title = {book.title}
                                price = {book.price}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        );
    }
}
export default LatestRelease;