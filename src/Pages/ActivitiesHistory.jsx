import Navbar from '../Components/Navbar/Navbar';
import HistoryList from '../Components/HistoryList/HistoryList';
import HistoryRecord from '../Components/HistoryRecord/HistoryRecord'

const ActivitiesHistory = () => {

    return ( 
    <div>
        <Navbar />
        <div className="body">
        <HistoryList />
        <HistoryRecord />
        </div>
    </div>

    )
}

export default ActivitiesHistory;