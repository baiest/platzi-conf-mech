import { useState, useEffect } from "react";

export const useGoogleAddress = address => {
    const [map, setMap] = useState({})
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}=YOUR_API_KEY`

    useEffect(() => {
        //FETCH - DATA
        // const response = {}
        // setMap(response.data.results[0].geometry.location)
    }, [])
    return map
}