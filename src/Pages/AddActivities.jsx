import Navbar from "../Components/Navbar/Navbar";
import ActivitiesList from '../Components/ActivitiesList/ActivitiesList';
import ActivitiesForm from '../Components/ActivitiesForm/ActivitiesForm';

const AddActivities = () => {

return ( <div>
        <Navbar />
        <div className="body">
        <ActivitiesList />
        <ActivitiesForm />
        </div>
        </div>
)
}
export default AddActivities;