import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import './Products.css'
import { ProductItems } from "./ProductItems"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBInputGroup, 
    MDBInput,

  } from 'mdb-react-ui-kit';



const Products = () => {
   const [products, setProducts] = useState([])

      

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3002/products")
                setProducts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchAllProducts()
    }, [])

    const onSearchChange = (value) => {
        const newData=ProductItems.filter(products=>
            products.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            );
            setProducts(newData)
    }

    return (
        
        <div>
            <div className="search-bar">
            <MDBInputGroup>
      <MDBInput label='Search' onChange={e => onSearchChange(e.target.value)} />
    </MDBInputGroup >
            </div>

            <div className="products">
        
                {products.map((products,index) => (
    
                <MDBCard className="product-card">
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage src={products.image} alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle key={index}>{products.title}</MDBCardTitle>
                        <p>${products.price}</p>
                        <MDBCardText>
                        {products.des}
                        </MDBCardText>
                        <MDBBtn class="btn btn-dark" href='#'>Add to order</MDBBtn>
                    </MDBCardBody>
                    </MDBCol>
                </MDBRow>
                </MDBCard>
                ))}
            </div> 
        </div>   
    )
}

export default Products;