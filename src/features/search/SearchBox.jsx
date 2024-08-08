import React, { useContext, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from '../../ui/TimePicker';
import SearchListItem from '../../ui/SearchListItem';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { getLocations } from '../../data/search/locations';

export default function SearchBox() {
    const navigate = useNavigate();

    const {
        selectedPickUp,
        selectedDrop,
        handleSelectedPickUp,
        handleSelectedDrop,
        startDate,
        setStartDate,
        startTime,
        changeStartTime,
        endDate,
        endTime,
        changeEndTime,
        setEndDate,
        pickUpLocationFull,
        dropOffLocationFull,
        locationsFull,
    } = useContext(SearchContext);


    const [startDateSb, setStartDateSb] = useState(startDate);
    const [endDateSb, setEndDateSb] = useState(endDate);
    const [startTimeSb, setStartTimeSb] = useState(startTime);
    const [endTimeSb, setEndTimeSb] = useState(endTime);
    const [pickUpEnterSb, setPickUpEnterSb] = useState(false);
    const [dropOffEnterSb, setDropOffEnterSb] = useState(false);
    const [locationresultSb, setlocationresultSb] = useState(locationsFull);
    const [selectedPickUpSb, setSelectedPickUpSb] = useState(selectedPickUp);
    const [locationresultDropSb, setlocationresultDropSb] = useState(locationsFull);
    const [selectedDropSb, setSelectedDropSb] = useState(selectedDrop);
    const [pickUpLocationFullSb, setPickUpLocationFullSb] = useState(pickUpLocationFull);
    const [dropOffLocationFullSb, setDropOffLocationFullSb] = useState(dropOffLocationFull);
    const [pickUpInput, setPickUpInput] = useState('');
    const [dropOffInput, setDropOffInput] = useState('');

    useEffect(() => {
        if (pickUpLocationFullSb) {
            setPickUpInput(pickUpLocationFullSb);
        }
    }, [pickUpLocationFullSb]);

    useEffect(() => {
        if (dropOffLocationFullSb) {
            setDropOffInput(dropOffLocationFullSb);
        }
    }, [dropOffLocationFullSb]);

    const locations = getLocations();

    function changeStartTimeSb(val) {
        setStartTimeSb(val);
    }

    function changeEndTimeSb(val) {
        setEndTimeSb(val);
    }

    function getLocationDetailsSb(e) {
        setPickUpEnterSb(true);

        const resultLoc = locations.filter((item) => {
            if (e.target.value === '') return '';
            return item.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setlocationresultSb(resultLoc);
    }

    function getLocationDetailsDropSb(e) {
        setDropOffEnterSb(true);

        const resultLocDrop = locations.filter((item) => {
            if (e.target.value === '') return '';
            return item.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setlocationresultDropSb(resultLocDrop);
    }

    function handleSelectedPickUpSb(pickUp) {
        setSelectedPickUpSb(pickUp[1]);
        setPickUpLocationFullSb(pickUp[0]);
    }

    function handleSelectedDropSb(drop) {
        setSelectedDropSb(drop[1]);
        setDropOffLocationFullSb(drop[0]);
    }

    function validateForm() {
        if (
            !startDateSb ||
            !endDateSb ||
            !startTimeSb ||
            !endTimeSb ||
            !selectedPickUpSb ||
            !selectedDropSb
        ) {
            toast.error("Invalid Search Information");
        } else {
            setStartDate(startDateSb);
            setEndDate(endDateSb);
            changeStartTime(startTimeSb);
            changeEndTime(endTimeSb);
            handleSelectedPickUp([pickUpLocationFullSb, selectedPickUpSb]);
            handleSelectedDrop([dropOffLocationFullSb, selectedDropSb]);

            navigate('/bookingsearchresult');
        }
    }

    return (
        <div>
            <div className="border-8 border-yellow-400 rounded-md grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[3fr,3fr,1fr,1fr,1fr]">
                <div className="relative lg:border-r-8 lg:border-b-0 md:border-b-8 sm:border-b-8 border-b-8 border-yellow-400 bg-slate-50">
                    <input
                        type="text"
                        className="rounded-md p-5 w-full h-full focus:outline-none"
                        placeholder="Pick-Up Location"
                        value={pickUpInput}
                        onBlur={() => setPickUpEnterSb(false)}
                        onChange={(e) => {
                            setPickUpInput(e.target.value);
                            getLocationDetailsSb(e);
                        }}
                    />
                    {pickUpEnterSb && (
                        <div className="bg-slate-50 border absolute w-[500px] z-[1000] rounded-md">
                            {locationresultSb.length === 0 ? (
                                <p className="p-4">No Result Found!</p>
                            ) : (
                                <ul className="flex flex-col">
                                    {locationresultSb.map((loc) => (
                                        <SearchListItem
                                            key={loc.id}
                                            type={loc.type}
                                            name={loc.name}
                                            code={loc.code}
                                            selectLoc={handleSelectedPickUpSb}
                                        />
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
                <div className="relative lg:border-r-8 lg:border-b-0 md:border-b-8 sm:border-b-8 border-b-8 border-yellow-400 bg-slate-50">
                    <input
                        type="text"
                        className="rounded-md p-5 w-full h-full focus:outline-none"
                        placeholder="Drop-Off Location"
                        value={dropOffInput}
                        onBlur={() => setDropOffEnterSb(false)}
                        onChange={(e) => {
                            setDropOffInput(e.target.value);
                            getLocationDetailsDropSb(e);
                        }}
                    />
                    {dropOffEnterSb && (
                        <div className="bg-slate-50 border absolute w-[500px] z-[1000] rounded-md">
                            {locationresultDropSb.length === 0 ? (
                                <p className="p-4">No Result Found!</p>
                            ) : (
                                <ul className="flex flex-col">
                                    {locationresultDropSb.map((loc) => (
                                        <SearchListItem
                                            key={loc.id}
                                            type={loc.type}
                                            name={loc.name}
                                            code={loc.code}
                                            selectLoc={handleSelectedDropSb}
                                        />
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr,1fr] border-yellow-400 bg-slate-50">
                    <div className="lg:border-r-8 lg:border-b-0 md:border-b-8 md:border-r-8 sm:border-b-8 border-b-8 border-yellow-400 bg-slate-50">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="lg:w-[120px] p-5 focus:outline-none"
                            selected={startDateSb}
                            minDate={new Date()}
                            onChange={(date) => setStartDateSb(date)}
                        />
                    </div>
                    <div className="p-5 lg:border-r-8 lg:border-b-0 md:border-b-8 sm:border-b-8 border-b-8 border-yellow-400 bg-slate-50">
                        <TimePicker
                            className="w-100p"
                            value={startTimeSb}
                            onchange={changeStartTimeSb}
                            placeholder="Start Time"
                            name="starttime"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] md:grid-cols-2 sm:grid-cols-1 border-yellow-400 bg-slate-50">
                    <div className="lg:border-r-8 lg:border-b-0 md:border-b-8 md:border-r-8 sm:border-b-8 border-b-8 border-yellow-400 bg-slate-50">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="lg:w-[120px] p-5 focus:outline-none"
                            selected={endDateSb}
                            minDate={new Date()}
                            onChange={(date) => setEndDateSb(date)}
                        />
                    </div>
                    <div className="p-5 lg:border-b-0 lg:border-r-8 md:border-b-8 sm:border-b-8 border-b-8 border-yellow-400 bg-slate-50">
                        <TimePicker
                            placeholder="End Time"
                            name="endtime"
                            value={endTimeSb}
                            onchange={changeEndTimeSb}
                        />
                    </div>
                </div>
                <div className="border-yellow-400 bg-slate-50">
                    <button
                        className="bg-green-600 p-5 w-100p text-white hover:bg-green-700 font-bold text-xl"
                        onClick={() => validateForm()}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
