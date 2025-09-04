import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='form-container'>
      <form action=" ">
        <div>
          <label htmlFor="html">
            What is your pledge for the country? *
          </label>
          <textarea placeholder='For Example :- When i become a doctor , i will provide free medical care to those , who need it , the most so that our country can be the healthiest in the world.' name="name" id="textarea"></textarea>
          <p>Character remaining : 100</p>
        </div>
        <div>
          <label htmlFor="html">
            Contact information *
          </label>
          <input type="number" id='phone' placeholder='Phone Number' />
          <p>Required to contact you in case you win</p>
        </div>
        <div>
          <input type="radio" />
          <p>I agree to the <a href="">terms and conditions</a></p>
        </div>
        <button className='btn' id='btn' type='submit'>Submit Your Pledge</button>
      </form>
    </div>
  );
}

export default Form;
