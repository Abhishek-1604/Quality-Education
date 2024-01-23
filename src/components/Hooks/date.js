import React, { useState } from 'react';

const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const calculateCompletionDate = () => {
    if (startDate) {
      const start = new Date(startDate);
      const completion = new Date(start);
      completion.setDate(start.getDate() + 90);

      setCompletionDate(completion.toDateString());
    } else {
      alert('Please select a start date.');
    }
  };

  return (
    <div class='container-fluid row ' style={{justifyContent:"center",}}>
        <div class='col-5 m-5 bg-warning p-5 text-center' style={{borderRadius:200}}>
            <h2 style={{color:"white"}}>Enter Course Start Date:</h2>
      <label htmlFor="startDate"></label><br></br>
      <br></br>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      /><br></br><br></br>
      <button onClick={calculateCompletionDate} style={{backgroundColor:'lightblue',borderRadius:200}}>Calculate Completion Date</button><br></br>
      {completionDate && (
        <p>
          Course completion date: {completionDate}
        </p>
      )}
      </div>
    </div>
  );
};

export default DateCalculator;