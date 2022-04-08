import { useState } from 'react';
import "./RecordDetail.css";


const  RecordDetail = ({ recordData, setOpenDetail, setOpenRecordId, handleRemoveRecord}) => {
  
  
  return (
    <div className="recordDetailBackground">
      <div className="recordDetailContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenDetail(false);
            }}>
            X
          </button>
        </div>
        <div className="title"> 
          <h1>Activity Details</h1>
        </div>
        <div className="body">
         <p>Activity: {recordData.activity}</p>
         <p>Name: {recordData.name}</p>
         <p>Date: {recordData.date}</p>
         <p>Duration: {recordData.duration}</p>
         <p>Location: {recordData.location}</p>
         <p>Description: {recordData.description}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenDetail(false);
            }}
            id="closeBtn">
            Close
          </button>
          <button
            onClick={() => handleRemoveRecord(recordData.id)}
            id="deleteBtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecordDetail;