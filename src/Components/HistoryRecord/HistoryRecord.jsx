import { useState } from 'react';
import './HistoryRecord.css';
import Logo from '../Logo/Logo';
import RecordDetail from '../RecordDetail/RecordDetail';

const HistoryRecord = () => {

    const [openDetail, setOpenDetail] = useState(false);
    const [openRecordId, setOpenRecordId] = useState(null);
    const [records, setRecord] = useState(
        [{
            id: 1,
            activity: 'Running',
            name: 'Cake',
            date: '3 April 2022',
            duration: '30 mins',
            location: 'Cerritos, CA',
            description: 'run run run',
        }, {
            id: 2,
            activity: 'Swimming',
            name: 'Cake',
            date: '4 April 2022',
            duration: '30 mins',
            location: 'Los Angeles, CA',
            description: 'swim swim swim',
        }]);

    const handleRemoveRecord = (e) => {
        const newRecord = [...records];
        newRecord.splice(openRecordId, 1);
        setRecord(newRecord)
        setOpenDetail(false);
    };

    return (
        <div className="body-history">
            {openDetail &&
                <RecordDetail setOpenDetail={setOpenDetail}
                    recordData={records[openRecordId]}
                    handleRemoveRecord={handleRemoveRecord} />}
            <table className="history-table">
                {records.map(({ id, activity, name, date, duration, location, description }, index) => (
                    <div key={id}>
                        <tr className="history-date">
                            <th>{date}</th>
                        </tr>
                        <tr className="history-table-1">
                            <td>{activity}</td>
                            <td>{location}</td>
                            <td>{duration}</td>
                            <button className='more-info-button' onClick={() => { setOpenDetail(true); setOpenRecordId(index) }}>
                                <Logo imgSrc="./images/more-svgrepo-com.svg" />
                            </button>
                        </tr>
                    </div>
                ))}
            </table>

        </div>
    )
}

export default HistoryRecord;