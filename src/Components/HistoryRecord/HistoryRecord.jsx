import { useState } from 'react';
import './HistoryRecord.css';
import Logo from '../Logo/Logo';
import RecordDetail from '../RecordDetail/RecordDetail';
import { useAllRecords } from '../../Hooks/index';
import moment from "moment-timezone";
import axios from 'axios';
import Swal from 'sweetalert2'

const HistoryRecord = () => {

    const [openDetail, setOpenDetail] = useState(false);
    const [openRecordId, setOpenRecordId] = useState(null);
    const [records, setRecord, reFetch] = useAllRecords();

    const handleRemoveRecord = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(252, 110, 110)',
            cancelButtonColor: 'rgb(63 208 157)',
            confirmButtonText: 'Yes, delete it!',
            color: 'rgb(102, 85, 85)',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your Record has been deleted.',
                    'success'
                );
                const newRecord = [...records];
                newRecord.splice(openRecordId, 1);
                axios.delete(`http://localhost:4000/records/${id}`);
                setRecord(newRecord)
                setOpenDetail(false);
            }
            if (!result.isConfirmed) {
            setOpenDetail(true);
        }
    })};   



return (
    <div className="body-history">
        {openDetail &&
            <RecordDetail setOpenDetail={setOpenDetail}
                recordData={records[openRecordId]}
                handleRemoveRecord={handleRemoveRecord} reFetch={reFetch} />}
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