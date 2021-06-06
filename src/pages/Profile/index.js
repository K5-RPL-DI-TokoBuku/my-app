import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getUserData} from '../../store/action'
import { Container, Row, Col, Breadcrumb, Card, Button } from 'react-bootstrap';
import { UserComponent } from '../../Component';

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer.userData);

    useEffect(() => {
		dispatch(getUserData())
    // eslint-disable-next-line
	},[dispatch]);

    return (
        <Container>
            <Row style={{marginBottom: '40px'}}>
                <Col>
                    <Card style={{ marginBottom: '20px' , cursor: 'pointer', paddingTop: '20px'}}>
                        <div style={{height: '160px', overflow: 'hidden'}}>
                            <Card.Img style={{ height:'inherit', padding: '0 20px'}} variant="top" src="https://images.unsplash.com/photo-1554513480-4ef4b8c3ea27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=382&q=80" />
                        </div>
                        <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button variant='outline-primary' onClick={() => console.log('Change Password, show pop up')}>Change Password</Button>
                            <Button variant='outline-primary' onClick={() => console.log('Update profile, show pop up')}>Update Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            User Profile
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    {user['name'] ?  <UserComponent user={user} /> : <p>Loading</p>}
                </Col>
                
            </Row>
        </Container>
    )
}

export default Profile
