import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='home'>
      <div className='home-banner'>
        <div className='home-banner-text'>
          <h1>We Help Smoothie Lovers Keep The List </h1>
          <br />
          <p>
            We help smothie lovers keep track of types of fruits they have used in previous smoothies or upcoming smothies and also be able to note down fruits of smothie recipes tasted in events/partys .
          </p>
          <br />
          <Link to='/signup'>
            <button type='button'>Register User</button>
          </Link>
        </div>
      </div>
      <div className='home-cont-2'>
        <div className='home-cont-2-img'>
          <img src="https://cdn.lifehack.org/wp-content/uploads/2014/06/Fruits-and-vegetables.jpg" alt='Fruits'/>
        </div>
        <div className='home-cont-2-text'>
          <h1>
            Do not loose that smothie recipe
          </h1>
          <p>
            <br />
            I believe the best smothie is delivered when it is made with
            love. Who knows more about smothies than smothie lovers or business owners.
          </p>
          <br />
          
        </div>
      </div>
      <div className='home-cont-3'>
        <img
          src=" https://shwetainthekitchen.com/wp-content/uploads/2021/08/Fruit-Salad-with-Condensed-Milk.jpg"
          className='smoothie.jpeg'
          alt='Smoothie'
        />
        <h1>
          Fruits App helps you not miss on your fav smothie just because you lost that note pad, oopsy! 
        </h1>
        <br />
        <p>
          We provide the best of user experience in keeping smothie memories.
        </p>
       
      </div>
      <div className='home-cont-4'>
        <img src="https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg" alt='fruit in basket' />
        <div className='home-cont-4-text'>
          <h1>What are the benefits of drinking smothies?</h1>
          <br />
          <p className='home-cont-4-text-p'>
          Smoothies are thick, creamy beverages usually blended from puréed fruits, vegetables, juices, yogurt, nuts, seeds, and/or dairy or nondairy milk. The most basic smoothie starts with two essential ingredients — a base and a liquid. From there, you can combine ingredients to your liking. {' '}
          </p>
          <p className='home-cont-4-text-p'>
            Smothies increases consumption of fruits and vegetables, Increases fiber intake, Can provide a nutritional balance of fats, protein, carbohydrates, vitamins, and minerals and lastly Helps manage food cravings.
          </p>
        </div>

        <div className='home-cont-4-text'></div>
      </div>
    </div>
  );
}

export default Home;
