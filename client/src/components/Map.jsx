import React, { useRef, useEffect, useState } from 'react'
import GoogleMapReact from "google-map-react"
import GoogleMap from "google-map-react"
import { LocationOn } from '@mui/icons-material'

const LocationPin = ({ text }) => {
    return (
        <div className='flex justify-center items-center text-xl'>
            {text}
            <LocationOn sx={{ fontSize: 50 }} className='text-red-600' />
        </div>
    )
}

const Map = () => {
    const [zoom, setZoom] = useState(17)
    // const mapRef = useRef(null);

    const handleZoomChange = (newZoom) => {
        console.log('Zoom level:', newZoom);
        setZoom(newZoom);
    }

    const location = {
        address: '180 Lees Avenue, Ottawa, Ontario',
        lat: 45.41544174585456,
        lng: -75.67076871531937
    }

    // useEffect(() => {
    //     const map = mapRef.current;
    //     if (map) {
    //         console.log(map);
    //     }
    // }, [])
     
    return (
        <div className='flex justify-between items-center w-full h-full p-5 rounded-md'>
            <GoogleMapReact 
                bootstrapURLKeys={{key: import.meta.env.VITE_GOOGLE_MAP_APIKEY}}
                defaultCenter={{lat: location.lat, lng: location.lng}}
                defaultZoom={17}
                zoom={zoom}
                onChange={({zoom}) => handleZoomChange(zoom)}
            >
                <LocationPin lat={location.lat} lng={location.lng} text="Home" />
            </GoogleMapReact>
        </div>
    )
}

export default Map