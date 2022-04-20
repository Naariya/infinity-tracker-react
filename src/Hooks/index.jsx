import { useState, useEffect } from 'react';
import { getRecords } from '../Api';

export const useAllRecords = () => {
    const [records, setRecord] = useState([]);
    const fetch = async () => {
        const response = await getRecords();
        console.log(response.status);
        console.log(response.data);
        
        if (response.status === 200) {
            setRecord(response.data)
        } else {
         alert('Sorry, Could not connect to server');
        }
    }
    useEffect(() => {
        fetch();
    },[]);
    return [records, setRecord, fetch];
}
