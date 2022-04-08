import './ActivitiesList.css';
import Logo from '../Logo/Logo';


const ActivitiesList = () => {

    return ( 
    <div className="body-activities">
        <h2>Activities List</h2>
        <a className="body-info" href="#">
            <Logo imgSrc="./images/walking-svgrepo-com.svg" alt="logo" height="36" activityType='Walking'/>
        </a>
        <a className="body-info" href="#">
            <Logo imgSrc="./images/running-stick-figure-svgrepo-com.svg" alt="logo" height="36" activityType='Running'/>
        </a>
        <a className="body-info" href="#">
            <Logo imgSrc="./images/biking-svgrepo-com.svg" alt="logo" height="36" activityType='Biking'/>
        </a>
        <a className="body-info" href="#">
            <Logo imgSrc="./images/hiking-svgrepo-com.svg" alt="logo" height="36" activityType='Hiking'/>
        </a>
        <a className="body-info" href="#">
            <Logo imgSrc="./images/swimming-svgrepo-com.svg" alt="logo" height="36" activityType='Swimming'/>
        </a>
        <a className="body-info" href="#">
            <Logo imgSrc="./images/yoga-svgrepo-com.svg" alt="logo" height="36" activityType='Yoga'/>
        </a>
        <a className="body-info" href="#">
            <Logo imgSrc="./images/man-playing-badminton-svgrepo-com.svg" alt="logo" height="36" activityType='Badminton'/>
        </a>
    </div>
    
    );
}
export default ActivitiesList;