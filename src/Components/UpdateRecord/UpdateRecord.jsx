import { useState } from 'react';
import "./UpdateRecord.css";
import axios from 'axios';
import moment from "moment-timezone";
import Swal from 'sweetalert2'

const UpdateDetail = ({ recordData, setUpdateDetail, reFetch }) => {

  const [value, setValue] = useState(recordData.activityName);
  const [name, setName] = useState(recordData.name);
  const [date, setDate] = useState(moment(recordData.date).tz('Asia/Bangkok').format("YYYY-MM-DD"));
  const [duration, setDuration] = useState(recordData.duration);
  const [location, setLocation] = useState(recordData.location);
  const [description, setDescription] = useState(recordData.description);

  const chooseActivity = (e) => {
    setValue(e.target.value);
  };
  const inputName = (e) => {
    const newName = e.target.value;
    if (newName.length > 40) return;
    else {
      setName(e.target.value);
    }
  };
  const inputDate = (e) => {
    setDate(e.target.value);
  };
  const inputDuration = (e) => {
    setDuration(e.target.value);
  };
  const inputLocation = (e) => {
    setLocation(e.target.value);
  };
  const inputDescription = (e) => {
    const newDescription = e.target.value;
    if (newDescription.length > 200) return;
    else {
      setDescription(e.target.value);
    }
  };

  const handleUpdateRecord = async (e) => {
    e.preventDefault();
    await axios.put(`https://infinity-tracker-backend.vercel.app/records/${recordData._id}`, {
      activityName: value,
      name: name,
      date: date,
      duration: duration,
      location: location,
      description: description,
    });
    Swal.fire({
      icon: 'success',
      title: 'Updated.',
      text: 'Congrats! your record has been successfully updated',
    }).then((result) => {
      if (result.isConfirmed) {
        reFetch();
        setUpdateDetail(false)
      }
    })
  };

  return (
    <div className="updateDetailBackground">
      <div className="updateDetailContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setUpdateDetail(false);
            }}>
            X
          </button>
        </div>
        <div className="title">
          <h1>Update Activity Details</h1>
        </div>
        <div className="body-update">
          <form className="formUpdate" onSubmit={handleUpdateRecord}>
            <div className="ch-activity-1">
              <label>Choose activity</label>
              <select name="activity" id="updateActivity" value={value} onChange={chooseActivity}>
                <option value="Walking">Walking</option>
                <option value="Running">Running</option>
                <option value="Biking">Biking</option>
                <option value="Hiking">Hiking</option>
                <option value="Swimming">Swimming</option>
                <option value="Yoga">Yoga</option>
                <option value="Badminton">Badminton</option>
              </select>
            </div>
            <div className="update-form-label">
              <div>
                <label>Name </label>
              </div>
              <div className="update-form-input">
                <input name="name" type="text" value={name} onChange={inputName} />
              </div>
            </div>
            <div className="update-form-label">
              <div>
                <label> Date </label>
              </div>
              <div className="update-form-input">
                <input name="date" type="date" value={date} onChange={inputDate} />
              </div>
            </div>
            <div className="update-form-label">
              <div>
                <label> Duration </label>
              </div>
              <div className="update-form-input">
                <input name="duration" type="text" value={duration} onChange={inputDuration} />
              </div>
            </div>
            <div className="update-form-label">
              <div>
                <label> Location </label>
              </div>
              <div className="update-form-input">
                <input name="location" type="location" value={location} onChange={inputLocation} />
              </div>
            </div>
            <div className="update-form-label">
              <div>
                <label> Description </label>
              </div>
              <div className="update-form-input">
                <textarea name="description" type="text" className="description" value={description} onChange={inputDescription} />
              </div>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setUpdateDetail(false);
                }}
                id="closeButton">
                Close
              </button>
              <button
                id="saveBtn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateDetail;