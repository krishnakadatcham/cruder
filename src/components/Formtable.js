import React from 'react';
import "../App.css"; // Importing App.css for styles

function Formtable({ handleSubmit, handleOnChange, rest }) {
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" name="age" onChange={handleOnChange} value={rest.age} />
        </div>
        <div className="form-group">
          <label htmlFor="physics">Physics: </label>
          <input type="number" id="physics" name="physics" onChange={handleOnChange} value={rest.physics} />
        </div>
        <div className="form-group">
          <label htmlFor="chemistry">Chemistry: </label>
          <input type="number" id="chemistry" name="chemistry" onChange={handleOnChange} value={rest.chemistry} />
        </div>
        <div className="form-group">
          <label htmlFor="maths">Maths: </label>
          <input type="number" id="maths" name="maths" onChange={handleOnChange} value={rest.maths} />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formtable;
