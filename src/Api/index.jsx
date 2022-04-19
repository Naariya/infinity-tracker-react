import Axios from 'axios';

export const client = Axios.create({
    baseURL: 'http://localhost:4000',
    validateStatus: (status) => {
        return status >= 200 && status <300;
    }
});

export const getRecords = async () => {
    const response = await client.get('/records');
    return response;
}