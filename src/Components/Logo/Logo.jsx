import './Logo.css';

const Logo = ({imgSrc, activityType}) => {
    return (
    <div className='logo-img'>
        <a>
            <img src={imgSrc} height="32px"/>
        </a>
        <p className='body-info'>{activityType}</p>
    </div>
    );
}

export default Logo;
