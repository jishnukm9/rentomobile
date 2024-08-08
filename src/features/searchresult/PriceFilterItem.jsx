import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../../context/filterContext';

export default function PriceFilterItem({ text, val }) {
    const { priceFilter, setPriceFilter } = useContext(FilterContext);
    const [isChecked, setIsChecked] = useState(false); 


    

    function changeCheckBox() {
        setIsChecked(prevVal => !prevVal); 
        if (!isChecked) { 
            setPriceFilter(prevFilter => ([...prevFilter, val]));
        } else { 
            setPriceFilter(prevFilter => prevFilter.filter(item => item !== val));
        }
    }
   
    useEffect(() => {
        setIsChecked(priceFilter.includes(val));
    }, [priceFilter, val]);
     



    return (
        <div className='py-1'>
            <div className='flex gap-4'>
                <input 
                    type="checkbox"
                    checked={isChecked} // Control the checkbox with isChecked state
                    onChange={changeCheckBox} // Toggle state on change
                />
                <p>{text}</p>
            </div>
        </div>
    );
}
