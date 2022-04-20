import { useState } from 'react';
import "./RecordDetail.css";
import moment from "moment-timezone"
import UpdateDetail from "../UpdateRecord/UpdateRecord";

const  RecordDetail = ({ recordData, setOpenDetail, reFetch, handleRemoveRecord,}) => {
  
  const [updateDetail, setUpdateDetail] = useState(false);
  
  return (
    <div className="recordDetailBackground">
      {updateDetail &&
                <UpdateDetail setUpdateDetail={setUpdateDetail} 
                recordData={recordData} reFetch={reFetch}/>}
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
        <div className="body-modal">
         <p>Activity: {recordData.activityName}</p>
         <p>Name: {recordData.name}</p>
         <p>Date: {moment(recordData.date).tz('Asia/Bangkok').format("DD MMM YYYY")}</p>
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
            onClick={() => {
              setUpdateDetail(true);
            }}
            id="updateBtn">
            Update
          </button>
          <button
            onClick={() => handleRemoveRecord(recordData._id)}
            id="deleteBtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecordDetail;