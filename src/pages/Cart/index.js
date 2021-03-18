import React, {useState} from 'react'
import Header from '../../Component/Header'
import { Container} from 'react-bootstrap'
import ComponentCart1 from '../../Component/ComponentCart1'
import ComponentCart2 from "../../Component/ComponentCart2";
const Cart = () => {
  // Semua data tentang transaksi disimpan disini.
  // Hati hati ketika ngebind data, nanti bisa di add redux klo udah komplek, untuk semntara pake yang bisa jalan dulu
  const data_cart = [
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1523742534376-dc6574ed1bd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1518226203301-8e7f833c6a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1601814923439-619b33ffa31d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const [pembayaran, setPembayaran] = useState(false)
  const [next, setNext] = useState(false);
  const [costShiping, setCostShiping] = useState(false);

  const handleNext = (e) => {

    if (!costShiping) {
      alert("Pilih kota dulu");
      setNext(false)
    } else {
      setNext(e);
    }
    
  };

  const handleNextToFormCheckout = (kondisi) => {
    setPembayaran(kondisi)
  }

  const handleCostShipping = (e) => {
    setCostShiping(e)
  }

  return (
    <div>
      <Header />
      <div style={{ padding: "20px 0" }}>
        <Container>
          {pembayaran ? (
            <ComponentCart2
              data_cart={data_cart}
              handleNextToFormCheckout={handleNextToFormCheckout}
              next={next}
              costShiping={costShiping}
              handleNext={handleNext}
              handleCostShipping={handleCostShipping}
            />
          ) : (
            <ComponentCart1
              data_cart={data_cart}
              handleNextToFormCheckout={handleNextToFormCheckout}
              next={next}
              costShiping={costShiping}
              handleNext={handleNext}
              handleCostShipping={handleCostShipping}
            />
          )}
        </Container>
      </div>
    </div>
  );
}

export default Cart
