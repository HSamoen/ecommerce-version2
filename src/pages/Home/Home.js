import React from 'react'
import './Home.css'
import Slideshow from '../../Components/Slider/SlideShow'
import Cards from '../../Components/Cards/Cards'
import { NavLink } from 'react-router-dom'



const Home = () => {
    return (
        <div>
            <Slideshow />
            <div className='featuredProducts' >
                <h1>SHOP OUR FEATURED PRODUCTS</h1>
            <Cards />
            <NavLink className="view-all" to="/products" exact>
                       <h2>View All</h2>
                    </NavLink>
            </div>
        </div>
    )
}

export default Home;