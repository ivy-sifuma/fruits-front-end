import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='home'>
      <div className='home-banner'>
        <div className='home-banner-text'>
       
          <h1>We Help keep that inventory </h1>
          <br />
          <p>
            We help businesses have all sales record.
          </p>
          <br />
          <Link to='/signup'>
            <button type='button'>Register User</button>
          </Link>
        </div>
      </div>
      <div className='home-cont-2'>
        <div className='home-cont-2-img'>
          <img src="https://static.vecteezy.com/system/resources/previews/005/607/208/original/meat-and-meat-products-color-set-simple-design-on-brown-background-flat-style-cartoon-illustration-free-vector.jpg" alt='Products'/>
        </div>
        <div className='home-cont-2-text'>
          <h1>
            Let's keep our records
          </h1>
          <p>
            <br />
            To serve you with fresh and fleshy meat products as you desire
            
          </p>
          <br />
          
        </div>
      </div>
      <div className='home-cont-3'>
        <img
          src=" https://media.istockphoto.com/id/515815838/photo/middle-aged-butcher-serving-customer.jpg?s=612x612&w=0&k=20&c=bW2I3TrAp8nNE8Y2kGkHNS9Yzrk3uDNvSY-4fd7cyHw="
          className='Meaty.jpeg'
          alt='Meaty'
        />
        <h1>
          Danny-Kam web App is here to help keep all sales records in the easiest, fastest and safest way allowing you keep track of records. 
        </h1>
        <br />
        <p>
          
        </p>
       
      </div>
      <div className='home-cont-4'>
        <img src="https://img.freepik.com/premium-vector/vector-illustration-logo-butcher-shop-with-bearded-butchers-work_132292-17.jpg?w=2000" alt='chicken breast' />
        <div className='home-cont-4-text'>
          <h1>What are the benefits of inventory system?</h1>
          <br />
          <p className='home-cont-4-text-p'>
          This helps a company manage it's stock, fill orders and track the overall production or sales {' '}
          </p>
          <p className='home-cont-4-text-p'>
          The practice identifies and responds to trends to ensure there's always enough stock to fulfill customer orders and proper warning of a shortage.
          </p>
        </div>

        <div className='home-cont-4-text'></div>
      </div>
    </div>
  );
}

export default Home;
