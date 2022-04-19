import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './ActivitiesForm.css';
import Button from '../Button/Button';


const ActivitiesForm = () => {
    const [value, setValue] = useState('Walking');
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
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:4000/records', {
            activityName: value,
            name: name,
            date: date,
            duration: duration,
            location: location,
            description: description,
        });
        <Link to="/" />
        return;
    }
    

    return (
        <div className="body-form">
            <form className="form" onSubmit={handleSubmit}>
                <div className="ch-activity">
                    <label>Choose activity</label>
                    <select name="activity" id="activity" value={value} onChange={chooseActivity}>
                        <option value="Walking">Walking</option>
                        <option value="Running">Running</option>
                        <option value="Biking">Biking</option>
                        <option value="Hiking">Hiking</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Badminton">Badminton</option>
                    </select>
                </div>
                <div className="form-label">
                    <div>
                        <label>Name </label>
                    </div>
                    <div className="form-input">
                        <input name="name" type="text" placeholder='Name' value={name} onChange={inputName} />
                    </div>
                </div>
                <div className="form-label">
                    <div>
                        <label> Date </label>
                    </div>
                    <div className="form-input">
                        <input name="date" type="date" value={date} onChange={inputDate} />
                    </div>
                </div>
                <div className="form-label">
                    <div>
                        <label> Duration </label>
                    </div>
                    <div className="form-input">
                        <input name="duration" type="text" placeholder='Please put the duration (ex. 30 mins)' value={duration} onChange={inputDuration} />
                    </div>
                </div>
                <div className="form-label">
                    <div>
                        <label> Location </label>
                    </div>
                    <div className="form-input">
                        <input name="location" type="location" placeholder='Please put the location (ex. Lake Tahoe)' value={location} onChange={inputLocation} />
                    </div>
                </div>
                <div className="form-label">
                    <div>
                        <label> Description </label>
                    </div>
                    <div className="form-input">
                        <textarea name="description" type="text" className="description" placeholder='Please put the description (like this is your diary ☻)' value={description} onChange={inputDescription} />
                </div>
            </div>
            <Button>Submit</Button>
            </form>
        </div>
    )

}

export default ActivitiesForm;