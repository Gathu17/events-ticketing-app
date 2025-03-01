import {fetchData} from "../Tools/fetchData"

export const getEvents = async () => {
    const data = await fetchData('/api/events')
    console.log(data);
    return data
}

