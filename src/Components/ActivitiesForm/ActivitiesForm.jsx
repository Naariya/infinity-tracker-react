import { useState } from 'react';
import './ActivitiesForm.css';
import Button from '../Button/Button';

const ActivitiesForm = () => {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const chooseActivity = (e) => {
    setValue(e.target.value);
  };
  const inputName = (e) => {
      const newName = e.target.value;
      if (newName.length > 40) return;
      else {
    setName(e.target.value);}
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
    setDescription(e.target.value);}
  };

    return (
        <div className="body-form">
         <form className="form">
            <div className="ch-activity">
                <label>Choose activity</label>
                <select name="activity" id="activity" value={value} onChange={chooseActivity}>
                    <option value="walking">Walking</option>
                    <option value="running">Running</option>
                    <option value="biking">Biking</option>
                    <option value="hiking">Hiking</option>
                    <option value="swimming">Swimming</option>
                    <option value="yoga">Yoga</option>
                    <option value="badminton">Badminton</option>
                </select>
            </div>
            <div className="form-label">
                <div>
                    <label>Name </label>
                </div>
                <div>
                    <input name="name" type="text" placeholder='Name' value={name} onChange={inputName}/>
                </div>
            </div>
            <div className="form-label">
                <div>
                    <label> Date </label>
                </div>
                <div>
                    <input name="date" type="date" value={date} onChange={inputDate}/>
                </div>
            </div>
            <div className="form-label">
                <div>
                    <label> Duration </label>
                </div>
                <div>
                    <input name="duration" type="text" placeholder='Please put the duration (HH:MM:SS)' value={duration} onChange={inputDuration}/>
                </div>
            </div>
            <div className="form-label">
                <div>
                    <label> Location </label>
                </div>
                <div>
                    <input name="location" type="location" value={location} onChange={inputLocation}/>
                </div>
            </div>
            <div className="form-label">
                <div>
                    <label> Description </label>
                </div>
                <div>
                    <textarea name="description" type="text" className="description" value={description} onChange={inputDescription} />
                </div>
            </div>
            <Button>Submit</Button>
            </form>
        </div>
    )

}

export default ActivitiesForm;