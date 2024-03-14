import React, { useState } from 'react';
import Formtable from './components/Formtable';
import Table from './components/Table'; // Make sure the import statement is correct

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    physics: "",
    chemistry: "",
    maths: ""
  });

  const [dataList, setDataList] = useState([]);
  const [submitted, setSubmitted] = useState(false); // State to track whether the form has been submitted

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { physics, chemistry, maths } = formData;
    const cutoff = ((parseFloat(physics) + parseFloat(chemistry)) / 2) + parseFloat(maths);
    const newData = {
      ...formData,
      cutoff
    };
    setDataList((prevData) => [...prevData, newData]);
    setFormData({
      name: "",
      age: "",
      physics: "",
      chemistry: "",
      maths: ""
    });
    setSubmitted(true); // Set submitted to true after form submission
  };

  const handleUpdate = (index, newData) => {
    const updatedDataList = [...dataList];
    updatedDataList[index] = newData;
    setDataList(updatedDataList);
  };

  const handleDelete = (index) => {
    const updatedDataList = [...dataList];
    updatedDataList.splice(index, 1);
    setDataList(updatedDataList);
  };

  const handleAdd = () => {
    setSubmitted(false); // Reset submitted state to show the form
  };

  return (
    <>
      <div className="container">
      {submitted && <button className="btn btn-add" onClick={handleAdd}>Add</button>}
        {!submitted ? ( // Render the form if the form has not been submitted
          <Formtable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            rest={formData}
          />
        ) : ( // Render the table if the form has been submitted
          <Table
            data={dataList}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        )}
      </div>
      
    </>
  );
}

export default App;
