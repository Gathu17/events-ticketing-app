import {fetchData} from "../Tools/fetchData"

export const getRatings = async () => {
    return await fetchData('/api/ratings')
}

export const getEventRatings = async (id) => {
    return await fetchData(`/api/ratings/show/${id}`)
}

export const createRating = async () => {
    return await fetchData('/api/ratings')
}