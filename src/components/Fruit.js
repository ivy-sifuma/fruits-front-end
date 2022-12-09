import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

// DELETE NOT WORKING CORRECTLY

function Fruit({ user }) {
  const [allusers, setAllusers] = useState([]);
  const [fruitType, setFruitType] = useState('');
  const [errors, setErrors] = useState([]);
  
  // const [record, setRecord] = useState([]);
  // const deletedId = [record][0].id;
  const allFruits = user.fruits;
  // const selected = allAppointments.find((x) => x.id === deletedId);
  // const del = [selected][0].id;
  // const delid = (JSON.stringify(del))
  // console.log(delid);

  useEffect(() => {
    fetch('/fruits')
      .then((response) => response.json())
      .then((data) => setAllusers(data));
  }, []);

  function handleDelete() {
    // fetch(`/fruits/${delid}`, {
    //   method: 'DELETE',
    // });
  }

  function handleListingSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch('/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id,
       
        fruit_type: fruitType,
        }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          'Success';
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          console.log(err);
        });
      }
    });
  }

  return (
    <div className='user-me'>
      <div className='user-me-table'>
        <h1>Hi {user.name},</h1>
        <p>
          See your listed fruits below. Refresh page if no fruits appear
          or if frozen.
        </p>
        <br />
        <br />
        <table>
          <tbody>
            <tr>
              <th>App ID</th>
              <th>App Type</th>
              <th></th>
            </tr>
            {/* {allFruitsLength < 1 ? (
              <tr>
                <td colSpan='7'>No Listed Fruits</td>
              </tr>
            ) : (  */}

            {allFruits?.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.fruit_type}</td>
                
                <td>
                  <Tooltip title='Delete' placement='right'>
                    <i
                      data-tip
                      data-for='del'
                      id='ficon'
                      onClick={() => {
                        // setList(app);
                        // handleDelete();
                      }}
                      class='fa-solid fa-trash'
                    ></i>
                  </Tooltip>
                </td>
              </tr>
            ))}

            {/* )}  */}
          </tbody>
        </table>
      </div>

      <div className='user-me-form'>
        <h1>List a fruit</h1>
        <form id='fruit-form' onSubmit={handleListingSubmit}>
          <label htmlFor='fruit'>Select fruit</label>
          <select
            name='fruit'
            onChange={(e) => setFruit(e.target.value)}
          />
            <option className='option' hidden>
              Select Fruit
            </option>
            {allFruits.map((prac) => {
              return (
                <option value={fruit.id} key={fruit.id} className='option'>
                  {fruit.name}
                </option>
              );
            })}
         
          <label htmlFor='Fruit Type'>Type of Fruit</label>
          <input
            type='text'
            placeholder='e.g Listing'
            value={fruitType}
            onChange={(e) => setFruitType(e.target.value)}
          />
          <button type='submit'>LIST</button>
          {errors.map((err) => (
            <li style={{ color: 'red' }} key={err}>
              {err}
            </li>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Fruit;

// function handleDeleteClick() {
//   fetch(`/toys/${id}`, {
//     method: 'DELETE',
//   }).then((r) => {
//     if (r.ok) {
//       onDeleteToy(toy);
//     }
//   });
// }

// function handleLikeClick() {
//   const updateObj = {
//     likes: toy.likes + 1,
//   };

//   fetch(`/toys/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updateObj),
//   })
//     .then((r) => r.json())
//     .then((updatedToy) => onUpdateToy(updatedToy));
// }
