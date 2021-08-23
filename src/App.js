import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './mystyle.css'

const App = () => {

  const [number, setNumber] = useState(0)

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/product/all').then(res => {
      console.log(res)
      setData(res.data.products)
    }).catch(err => {
      console.error(err)
    })
  }, [])

  const handleClick = () => {
    setNumber(number + 1)
  }
 
  return (
    <div>
      <h3 className='primary'>Hello Ichlas</h3>
      <p>S1 Infromatika</p>
      <p>Telkom University</p>
      <br></br>
      <p>{number}</p>
      <div style={{display: 'flex'}}>
        <button onClick={handleClick}>Add Number</button>
        <button onClick={() => setNumber(0)}>Reset Number</button>
      </div>
      <br></br>
      {data ? (
        <div>
          <h4>Data Buku</h4>
          {data.map((p, idx) => {
            return <p>{idx + 1}. {p.name}</p>
          })}
          </div>
      ) : 'Loading . . .'} 

      

      
    </div>
  );
}

export default App
