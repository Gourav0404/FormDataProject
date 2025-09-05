import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      setMessage(' Please agree to the terms first.');
      return;
    }

    try {
      const res = await axios.post('https://xyz-lhp7.onrender.com/submit', {
        description,
        phone
      });

      setMessage(res.data.message || ' Your pledge has been submitted!');
      setDescription('');
      setPhone('');
      setAgree(false);
    } catch (err) {
      console.error(err);
      if (err.response) {
        setMessage(` ${err.response.data.message || 'Something went wrong.'}`);
      } else {
        setMessage(' Network error. Please try again.');
      }
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            What is your pledge for the country? *
          </label>
          <textarea
            placeholder='For Example :- When I become a doctor, I will provide free medical care to those who need it the most so that our country can be the healthiest in the world.'
            name="description"
            id="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={100}
          ></textarea>
          <p>Character remaining : {100 - description.length}</p>
        </div>
        <div>
          <label>
            Contact information *
          </label>
          <input
            type="text"
            id='mobile'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p>Required to contact you in case you win</p>
        </div>
        <div>
          <input
            type="checkbox"
            id='agree_terms'
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <p>I agree to the terms and conditions</p>
        </div>
        <button className='btn' id='submit_button' type='submit'>
          Submit Your Pledge
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
