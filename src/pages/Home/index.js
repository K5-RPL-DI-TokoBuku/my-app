import React, {useEffect} from "react";
import {ProductsComponent} from '../../Component'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/action/index";

const Home = () => {
	const products = useSelector((state) => state.productReducer.products);
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch]);


	return (
		<div>
			{products ? (
				<ProductsComponent data={products} type="card"/>
			) : <p>Loading . . .</p>}
		</div>
	)
};

export default Home;
