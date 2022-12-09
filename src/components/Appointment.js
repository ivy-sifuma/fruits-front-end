import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

// DELETE NOT WORKING CORRECTLY

function Appointment({ user }) {
  const [allPractitioners, setAllPractitioners] = useState([]);
  const [duration, setDuration] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [errors, setErrors] = useState([]);
  const [practitioner, setPractitioner] = useState('');
  const [date, setDate] = useState('');
  // const [record, setRecord] = useState([]);
  // const deletedId = [record][0].id;
  const allAppointments = user.appointments;
  // const selected = allAppointments.find((x) => x.id === deletedId);
  // const del = [selected][0].id;
  // const delid = (JSON.stringify(del))
  // console.log(delid);

  useEffect(() => {
    fetch('/practitioners')
      .then((response) => response.json())
      .then((data) => setAllPractitioners(data));
  }, []);

  function handleDelete() {
    // fetch(`/appointments/${delid}`, {
    //   method: 'DELETE',
    // });
  }

  function handleBookingSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch('/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        patient_id: user.id,
        duration,
        appointment_type: appointmentType,
        practitioner_id: practitioner,
        date,
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
    <div className='patient-me'>
      <div className='patient-me-table'>
        <h1>Hi {user.name},</h1>
        <p>
          See your booked appointments below. Refresh page if no records appear
          or if frozen.
        </p>
        <br />
        <br />
        <table>
          <tbody>
            <tr>
              <th>App ID</th>
              <th>Practioner ID</th>
              <th>Practitioner Name</th>
              <th>App Type</th>
              <th>Date</th>
              <th>Duartion</th>
              <th></th>
            </tr>
            {/* {allAppointmentsLength < 1 ? (
              <tr>
                <td colSpan='7'>No Booked Sessions</td>
              </tr>
            ) : (  */}

            {allAppointments?.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.practitioner_id}</td>
                <td>{app.practitioner_name}</td>
                <td>{app.appointment_type}</td>
                <td>{app.date}</td>
                <td>{app.duration}</td>
                <td>
                  <Tooltip title='Delete' placement='right'>
                    <i
                      data-tip
                      data-for='del'
                      id='ficon'
                      onClick={() => {
                        // setRecord(app);
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

      <div className='patient-me-form'>
        <h1>Book an Appointment</h1>
        <form id='appointment-form' onSubmit={handleBookingSubmit}>
          <label htmlFor='practitioner'>Select Practitioner</label>
          <select
            name='practitioner'
            onChange={(e) => setPractitioner(e.target.value)}
          >
            <option className='option' hidden>
              Select Practitioner
            </option>
            {allPractitioners.map((prac) => {
              return (
                <option value={prac.id} key={prac.id} className='option'>
                  {prac.name}
                </option>
              );
            })}
          </select>
          <label htmlFor='duration'>Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor='duration'>Duration</label>
          <input
            type='text'
            placeholder='e.g 1 hour'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <label htmlFor='appointmentType'>Type of Appointment</label>
          <input
            type='text'
            placeholder='e.g Consultation'
            value={appointmentType}
            onChange={(e) => setAppointmentType(e.target.value)}
          />
          <button type='submit'>BOOK</button>
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

export default Appointment;

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
