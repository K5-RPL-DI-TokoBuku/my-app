import React from 'react';
import {Container, Nav} from 'react-bootstrap';
import ProductsList from './ProductsList';

const HomeProducts = () => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <Container>
                {/* <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                    <Nav.Link eventKey="link-1">NEW</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2">BEST SELLER</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-3">HARD TO FIND</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-4">DEALS OF THE WEEK</Nav.Link>
                    </Nav.Item>
                </Nav> */}
                <br></br>
                <ProductsList/>
            </Container>
        </div>
    )
}

export default HomeProducts;