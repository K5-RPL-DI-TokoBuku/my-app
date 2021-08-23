import React, {useState} from 'react'
import {  Row, Col, Card, Badge,  Button } from 'react-bootstrap';


const Courses = () => {

    // Add Course

    // Lihat Course Berdasarkan Yang dia buat atau seluruh nya

    const [modal, setModal] = useState(false)

    let myCourse = [
        {
            image: 'https://img-c.udemycdn.com/course/240x135/2240870_c05f_4.jpg',
            title: '3 dalam 1, CCNA, Python, dan Network Automation',
            author: 'Ahmad Rosyid komarudin, Aguna Course',
            rating: '4.5',
            jumlah_user_rating: '289 rating',
            harga: 'Rp 799.000',
            tags: ['Terlaris']
        },
        {
            image: 'https://img-c.udemycdn.com/course/240x135/2240870_c05f_4.jpg',
            title: '3 dalam 1, CCNA, Python, dan Network Automation',
            author: 'Ahmad Rosyid komarudin, Aguna Course',
            rating: '4.5',
            jumlah_user_rating: '289 rating',
            harga: 'Rp 799.000',
            tags: ['Terlaris']
        },
        {
            image: 'https://img-c.udemycdn.com/course/240x135/2240870_c05f_4.jpg',
            title: '3 dalam 1, CCNA, Python, dan Network Automation',
            author: 'Ahmad Rosyid komarudin, Aguna Course',
            rating: '4.5',
            jumlah_user_rating: '289 rating',
            harga: 'Rp 799.000',
            tags: ['Terlaris']
        }
    ]

    return (
        <div>
            <div style={{display: 'flex', justifyContent:'space-between', marginBottom: '20px'}}>
                <h3>Coursees</h3>
                <Button onClick={()=>setModal(!modal)}>{modal ? 'Close' : 'Add Course'}</Button>

            </div>
            {modal ? <p>Modal true</p> : <p>modal false</p>}
            <Row>

                {myCourse.map((course)=>{
                    let {title, image, author, rating, jumlah_user_rating, harga, tags} = course

                    if (title.length > 30){
                        title = title.slice(0,30) + "..."
                    }

                    return(
                        <Col xs={6} sm={6} md={4} lg={3}>
                            <Card style={{ marginBottom: '20px' , cursor: 'pointer'}}>
                                <div style={{height: '160px', overflow: 'hidden'}}>
                                    <Card.Img variant="top" src={image} />
                                </div>
                                <Card.Body>
                                    <Badge>{tags[0]}</Badge>
                                    <div style={{height: '60px'}}>
                                        <Card.Title>{title}</Card.Title>
                                    </div>
                                    <Card.Text>
                                        <b>{harga}</b>
                                        <p>{author}</p>
                                        <p>{rating} ({jumlah_user_rating})</p>
                                    </Card.Text>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <Button variant='outline-primary' >
                                            EDIT
                                        </Button>
                                        <Button variant='outline-primary' >
                                            DETAIL
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Courses
