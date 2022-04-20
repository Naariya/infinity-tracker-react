import { useState } from 'react';
import './HistoryRecord.css';
import Logo from '../Logo/Logo';
import RecordDetail from '../RecordDetail/RecordDetail';
import {useAllRecords} from '../../Hooks/index';
import moment from "moment-timezone";
import axios from 'axios';

const HistoryRecord = () => {

    const [openDetail, setOpenDetail] = useState(false);
    const [openRecordId, setOpenRecordId] = useState(null);
    const [records, setRecord, reFetch] = useAllRecords();
    
    const handleRemoveRecord = (id) => {
        const newRecord = [...records];
        newRecord.splice(openRecordId, 1);
        axios.delete(`http://localhost:4000/records/${id}`);
        setRecord(newRecord)
        setOpenDetail(false);
    };

    return (
        <div className="body-history">
            {openDetail &&
                <RecordDetail setOpenDetail={setOpenDetail}
                    recordData={records[openRecordId]}
                    handleRemoveRecord={handleRemoveRecord} reFetch={reFetch}/>}
            <table className="history-table">
                {records.map(({ id, activityName, name, date, duration, location, description }, index) => (
                    <div key={id}>
                        <tr className="history-date">
                            <th>{moment(date).tz('Asia/Bangkok').format("DD MMM YYYY")}</th>
                        </tr>
                        <tr className="history-table-1">
                            <td>{name}</td>
                            <td>{activityName}</td>
                            <td>{location}</td>
                            <button className='more-info-button' onClick={() => { setOpenDetail(true); setOpenRecordId(index) }}>
                                <Logo imgSrc="./images/more-svgrepo-com.svg"/>
                            </button>
                        </tr>
                    </div>
                ))}
            </table>

        </div>
    )
}

export default HistoryRecord;