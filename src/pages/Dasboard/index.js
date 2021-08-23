import React, {useEffect, useState} from 'react';
import {ProductsComponent, Courses} from '../../Component';
import { Card, Button, Table } from 'react-bootstrap';
import { convertToRupiah } from '../../utils/functions';
import { productService, userService } from '../../services';
import { FaUserCircle, FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { isAdmin } from '../../utils/cookie';

const ComponentDasboard = ({page}) => {

    const [products, setProducts] = useState(false)
    const [users, setUsers] = useState(false)
    const [transactions, setTransactions] = useState(false)

    const [update, setUpdate] = useState(false)
    

    useEffect(() => {
        if(page === 'Users'){
            userService.getAllUser().then(res=>{
                setUsers(res.data)
            })
        } else if (page === 'Products'){
            productService.getProducts().then(res=>{
                setProducts(res.products)
            })
        } else if (page === 'Transactions'){
            userService.getAllTransaksi().then(res=>{
                setTransactions(res.response)
            })
        }
        console.log('Heloo Use Effect berksi')
    }, [page, update])

    

    const handleUpdate = () => {
        setUpdate(!update)
        console.log('Update')
    }



    return (
        <div style={{padding: '20px'}}>
                
            {page === 'Products' && products && (
                <div>
                    <h3>Table Products</h3>
                    <br></br>
                    <ProductsComponent data={products} type={"table"} handleUpdate={handleUpdate} />
                </div>
            )}

            {page === 'Users' && users && (
                <div>
                    <h3>Table User</h3>
                    <br></br>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Nik</th>
                                <th>Cart</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((res,index)=>{
                                const {name, email, nik, cart} = res

                                const total_cart = cart.length

                                const new_index = index + 1

                                return (
                                    <tr>
                                        <td>{new_index}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{nik}</td>
                                        <td>{total_cart} pcs</td>
                                        <td>
                                            <Button variant="outline-danger" onClick={(e) => console.log('Delete user')}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            )}

            {page === 'Transactions' && transactions && (
                <div>
                    <h3>Table Transactions</h3>
                    <br></br>
                    {transactions.map((res,index)=> {
                        const {_id, kurir, berat, createdAt, detail_transaksi, detail_status_pembayaran, total_pembayaran } = res
                        const {va_number, bank} = detail_status_pembayaran &&  detail_status_pembayaran['va_numbers'][0]
                        return(
                            <Card>
                                <Card.Header>
                                    <h5>OrderID : {_id}</h5>
                                </Card.Header>
                                <Card.Body>
                                    <div style={{display: 'flex'}}>
                                        <p style={{padding: '20px', fontWeight: 'bold'}}>Kurir : {`${kurir.toUpperCase()}`}</p>
                                        <p style={{padding: '20px', fontWeight: 'bold'}}>Berat : {berat} Kg</p>
                                        <p style={{padding: '20px', fontWeight: 'bold'}}>Created : {`${createdAt.slice(0,10)}`}</p>
                                        <p style={{padding: '20px', fontWeight: 'bold'}}>Total Product : {detail_transaksi.length}</p>
                                    </div>
                                    <p>Total Pembayaran : {`${convertToRupiah(total_pembayaran)}`}</p>
                                    <p>Bank  : {bank}</p>
                                    <p>VA Number  : {va_number}</p>
                                    <Button variant={'warning'}>{`${detail_status_pembayaran['transaction_status'].toUpperCase()}`}</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            )}

            {page === 'Courses' ? (
                <div>
                    <h3>All Courses</h3>
                    <br></br>
                    <Courses />
                </div>
            ) : <p>You dont have course</p>}

        </div>
        
    )
}

const Dasboard = () => {
    const [active, setActive] = useState(false)
    const itemSidebar = [
        {
            title: 'Users',
            icon: <FaUserCircle style={{margin: '10px'}}/>
        },
        {
            title: 'Products',
            icon: <FaShoppingCart style={{margin: '10px'}}/>
        },
        {
            title: 'Transactions',
            icon: <FaShippingFast style={{margin: '10px'}}/>
        },
        {
            title: 'Courses',
            icon: <FaShoppingCart style={{margin: '10px'}}/>
        },
    ]

    const [admin, setAdmin] = useState(false)

    useEffect(() => {

        const ad = isAdmin()
        console.log('hello ', ad)
        if (ad){
            console.log(ad)
            setAdmin(ad)
        }
    },[admin])
    
    return (
        <div >
            {admin ? (
                <div style={{display:'flex', width: '100%'}}>
                    <div style={{backgroundColor: '#242582',width: '20%', color: 'white', padding: '20px 0'}}>
                        <div style={{textAlign: 'center', marginBottom: '30px'}}>
                            <h3>ADMIN PAGE</h3>
                        </div>
                        {itemSidebar.map((res, index) => {
                            return (
                                <div onClick={()=> setActive(res.title)} style={{backgroundColor: `${active === res.title ? '#f64c72' : '#2f2fa2' }`, marginBottom: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignContent:'center', padding: '10px 0'}}>
                                    {res.icon}
                                    <p style={{margin: '0', padding: 0, paddingTop: '5px', fontWeight: 'bold'}}>{res.title}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div style={{width: '80%'}}>
                        {active ? <ComponentDasboard page={active} /> : (
                            <div style={{padding:'20px'}}>
                                <h3>Selamat Datang Admin</h3>
                                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_Y8UeVt.json"  speed="1" style={{ width: "200px", height: "200px" }} loop autoplay></lottie-player>
                            </div>
                        )}
                    </div>
                </div>

            ) : (
                <div>
                    <p>404 Just For Admin</p>
                    <Button>Back To Home</Button>
                </div>
            )}
            
        </div>
    )
}

export default Dasboard
