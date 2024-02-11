import React from 'react';
import { nanoid } from 'nanoid';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardItem = ({title, img, price, category}) => {
    return (
        <Col key={nanoid()}>
          <Card className="h-100 shadow mb-5 bg-body-tertiary rounded-3 border-0 overflow-hidden">
            <div className="ratio ratio-1x1">
            <Card.Img variant="top" src={img} />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{price} €</Card.Text>
              <Card.Text className="fst-italic text-secondary">{category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default CardItem;