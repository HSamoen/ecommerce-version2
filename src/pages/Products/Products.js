import React from "react"
import { useState } from "react"
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
  
  const[searchItem, setSearchItem] = useState("")
  const [ price, setPrice ] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState("");
  




function handleCategoryChange(event) {
  setSelectedCategory(event.target.value);
}

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e)=>{
    setPrice( e.target.value );
  } 

  return(

<div>

<div className="product-filters">
<div className="search-bar">
            <MDBInputGroup >
      <MDBInput label='Search' onChange={(event)=> setSearchItem(event.target.value)} />
    </MDBInputGroup >
            </div>


            <div className="category-filter">
        <div>Select Category:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
            className="category-input"
          >
            <option value="">All</option>
            <option value="Loose Leaf">Loose Leaf</option>
            <option value="Powder">Powder</option>
            <option value="Floral">Floral</option>
          </select>
        </div>
      </div>



      <div className="price-filter">
      <input type="range" onInput={ handleInput } />
      <h1>Price: { price }</h1>
      </div>
</div>


      <div className="products">
      { ProductItems.filter((item) => { 
  if (searchItem === "") {
    return item;
  } else if (item.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
    return item;
  } else if (!selectedCategory) {
    return item;
  } else if (item.category === selectedCategory && !isNaN(price) && item.price >= parseInt(price, 10)) {
    return item;
  }
  return false;
}).map(item => (
  <MDBCard key={item.id}>
    <MDBRow className="g-0">
      <MDBCol md="4">
        <MDBCardImage src={item.image} alt="product-images" fluid />
      </MDBCol>
      <MDBCol md="8">
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <p>${item.price}</p>
          <MDBCardText>{item.des}</MDBCardText>
          <MDBBtn class="btn btn-dark" href="#">
            Add to order
          </MDBBtn>
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
