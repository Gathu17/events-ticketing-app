import React,{useState, useEffect} from 'react'
import {getEventRatings} from '../../Api/rating'

const Rating = ({eventId,eventName}) => {
    const [eventRatings, setEventRatings] = useState([])

    useEffect(() => {
        const fetchEventRatings = async () => {
            try {
              const data = await getEventRatings(eventId); 
              setEventRatings(data.response);
            } catch (error) {
              console.error('Error fetching ratings:', error);
            }
          };
      
          fetchEventRatings();
    },[])
  return (
    <div>
      {
      eventRatings.map((rating) => {
          return(
            <RatingsCard rating={rating}/>
          )
      })
      }
    </div>
  )
}

export default Rating