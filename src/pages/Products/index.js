import React, { useEffect, useState } from "react";
import {  Button, Container } from 'react-bootstrap';
import { Link} from "react-router-dom";
import {ProductsComponent} from '../../Component'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/action/index";

const Products = () =>{
	let dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    const [type, setType] = useState(false)

	useEffect(() => {
        dispatch(getProducts())
	}, [dispatch]);
  
    return(
        <div>
            <Container>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px'}}>
                    <h4>Table Data Buku</h4>
                    <Button variant="primary">
                        <Link to="/add-book" style={{color: 'white'}}>
                            + ADD BOOK 
                        </Link>
                    </Button>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', marginBottom: '10px'}}>
                    <nav aria-label="Page navigation example" >
                        <ul style={{margin: 0, padding: 0}} class="pagination">
                            <li class="page-item">
                            <a  class="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="/">1</a></li>
                            <li class="page-item"><a class="page-link" href="/">2</a></li>
                            <li class="page-item"><a class="page-link" href="/">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                    <Button variant="primary" onClick={() => {
                        setType(!type)
                    }}>
                        {!type ? 'Table' : 'Card'}
                    </Button>
                </div>
            </Container>
            {products ? (
                    <ProductsComponent data={products} type={type ? 'table' : 'card'} />
                ) : <p>Loading . . .</p>}
        </div>
    )
} 

export default Products;
