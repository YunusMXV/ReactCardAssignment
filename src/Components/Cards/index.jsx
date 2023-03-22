import { Button } from 'react-bootstrap' //Button import
import { Card } from 'react-bootstrap'; //Card import
import { Row, Col } from 'react-bootstrap'; //columns and rows for placement
import React from 'react';

export const PizzaCard = function CardExample() {
    return (
      <Card style={{ width: '70rem' }}>
        <Row>
            <Col className='Fajita'>
                <Card.Img variant="top" src="https://dominoscdn.s3.ap-southeast-1.amazonaws.com/ProductImages/b43def39f0c048f58fc4ca5a6ef2505e.jpg" />
                <Card.Body>
                <Card.Title>Fajita</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary" href='https://dominos.com.pk/Frontend/OnlineOrderMenu/ProductViewLt?oid=131&pid=45723&otype=delivery' target='_blank'>Add to Cart?</Button>
                </Card.Body>
            </Col>
            <Col className='Legend Ranch'>
                <Card.Img variant="top" src="https://dominoscdn.s3.ap-southeast-1.amazonaws.com/ProductImages/d552c4805c134bf4b27a91151e313ce3.jpg" />
                <Card.Body>
                <Card.Title>Legend Ranch</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary" href='https://dominos.com.pk/Frontend/OnlineOrderMenu/ProductViewLt?oid=131&pid=45713&otype=delivery' target='_blank'>Add to Cart?</Button>
                </Card.Body>
            </Col>
            <Col className='Hawaiian Chicken'>
                <Card.Img variant="top" src="https://dominoscdn.s3.ap-southeast-1.amazonaws.com/ProductImages/05d405d7acba45e8b8bf63b00230bd78.jpg" />
                <Card.Body>
                <Card.Title>Hawaiian Chicken</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary" href='https://dominos.com.pk/Frontend/OnlineOrderMenu/ProductViewLt?oid=131&pid=48105&otype=delivery' target='_blank'>Add to Cart?</Button>
                </Card.Body>
            </Col>
            <Col className='Legend BBQ'>
                <Card.Img variant="top" src="https://dominoscdn.s3.ap-southeast-1.amazonaws.com/ProductImages/28e35ff61c0e453e8aba2a6c053ec287.jpg" />
                <Card.Body>
                <Card.Title>Legend BBQ</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary" href='https://dominos.com.pk/Frontend/OnlineOrderMenu/ProductViewLt?oid=131&pid=45702&otype=delivery' target='_blank'>Add to Cart?</Button>
                </Card.Body>
            </Col>
        </Row>
      </Card>
    );
}