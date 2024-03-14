import React, { useState } from 'react';

const Table = ({ data, handleEdit, handleDelete, handleUpdate }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    age: "",
    physics: "",
    chemistry: "",
    maths: ""
  });

  const handleEditClick = (index, rowData) => {
    setEditIndex(index);
    setEditData(rowData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdateClick = () => {
    handleUpdate(editIndex, editData);
    setEditIndex(null);
    setEditData({
      name: "",
      age: "",
      physics: "",
      chemistry: "",
      maths: ""
    });
  };

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Maths</th>
            <th>Cutoff</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <td colSpan="7">
                 <div className="addContainer2">
                  <form>
                  
                    <div>
                      <label htmlFor="name">Name: </label>
                      <input type="text" id="name" name="name" value={editData.name} onChange={handleInputChange} />
                    </div>
                    <div>
                      <label htmlFor="age">Age: </label>
                      <input type="text" id="age" name="age" value={editData.age} onChange={handleInputChange} />
                    </div>
                    <div>
                      <label htmlFor="physics">Physics: </label>
                      <input type="text" id="physics" name="physics" value={editData.physics} onChange={handleInputChange} />
                    </div>
                    <div>
                      <label htmlFor="chemistry">Chemistry: </label>
                      <input type="text" id="chemistry" name="chemistry" value={editData.chemistry} onChange={handleInputChange} />
                    </div>
                    <div>
                      <label htmlFor="maths">Maths: </label>
                      <input type="text" id="maths" name="maths" value={editData.maths} onChange={handleInputChange} />
                    </div>
                    <div>
                      <button type="button" onClick={handleUpdateClick}>Submit</button>
                    </div>
                    
                   </form>
                   </div>
                </td>
              ) : (
                <>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.physics}</td>
                  <td>{item.chemistry}</td>
                  <td>{item.maths}</td>
                  <td>{item.cutoff}</td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEditClick(index, item)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
