import { createContext, useEffect, useState } from 'react';
import { getLocations } from '../data/search/locations';

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [selectedPickUp, setSelectedPickUp] = useState(() => {
        return localStorage.getItem("pickup") || '';
    });

    const [selectedDrop, setSelectedDrop] = useState(() => {
        return localStorage.getItem("dropoff") || '';
    });

    const [pickUpLocationFull, setPickUpLocationFull] = useState(() => {
        return localStorage.getItem("pickUpLocationFull") || '';
    });

    const [dropOffLocationFull, setDropOffLocationFull] = useState(() => {
        return localStorage.getItem("dropOffLocationFull") || '';
    });

    const [startDate, setStartDate] = useState(() => {
        const savedStartDate = localStorage.getItem("startDate");
        return savedStartDate ? new Date(savedStartDate) : new Date(new Date().setDate(new Date().getDate() + 1));
    });

    const [endDate, setEndDate] = useState(() => {
        const savedEndDate = localStorage.getItem("endDate");
        return savedEndDate ? new Date(savedEndDate) : new Date(new Date().setDate(new Date().getDate() + 2));
    });

    const [startTime, setStartTime] = useState(() => {
        return localStorage.getItem("startTime") || '12:00';
    });

    const [endTime, setEndTime] = useState(() => {
        return localStorage.getItem("endTime") || '12:00';
    });

    // Effects to update localStorage when state changes
    useEffect(() => {
        localStorage.setItem('pickup', selectedPickUp);
    }, [selectedPickUp]);

    useEffect(() => {
        localStorage.setItem('dropoff', selectedDrop);
    }, [selectedDrop]);

    useEffect(() => {
        localStorage.setItem('pickUpLocationFull', pickUpLocationFull);
    }, [pickUpLocationFull]);

    useEffect(() => {
        localStorage.setItem('dropOffLocationFull', dropOffLocationFull);
    }, [dropOffLocationFull]);

    useEffect(() => {
        localStorage.setItem('startDate', startDate.toISOString());
    }, [startDate]);

    useEffect(() => {
        localStorage.setItem('endDate', endDate.toISOString());
    }, [endDate]);

    useEffect(() => {
        localStorage.setItem('startTime', startTime);
    }, [startTime]);

    useEffect(() => {
        localStorage.setItem('endTime', endTime);
    }, [endTime]);

    function changeStartTime(val) {
        setStartTime(val);
    }

    function changeEndTime(val) {
        setEndTime(val);
    }

    const locationsFull = getLocations();

    function handleSelectedPickUp(pickUp) {
        setSelectedPickUp(pickUp[1]);
        setPickUpLocationFull(pickUp[0]);
    }

    function handleSelectedDrop(drop) {
        setSelectedDrop(drop[1]);
        setDropOffLocationFull(drop[0]);
    }

    return (
        <SearchContext.Provider
            value={{
                selectedPickUp,
                locationsFull,
                selectedDrop,
                startDate,
                setStartDate,
                startTime,
                changeStartTime,
                endDate,
                setEndDate,
                endTime,
                changeEndTime,
                handleSelectedPickUp,
                handleSelectedDrop,
                pickUpLocationFull,
                dropOffLocationFull,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
