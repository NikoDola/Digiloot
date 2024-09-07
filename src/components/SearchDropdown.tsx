"use client"
import { Triangle } from "./Toggles";

import { useState, useEffect } from "react"

export default function SearchableDropDown(){
    const [valueData, setValueData] = useState('');

    const handleValueData = (value) => {
        setValueData(value);
    };

    return(
        <div>
            <div className="relative">
                <Triangle/>
                <input type="text" placeholder="Select Language" readOnly value={valueData} />
            </div>
            <div className="content">
                <div className="search">
                    <input type="text" className="optionSearch" placeholder="Search" />
                </div>
                <ul>
                    <li onClick={() => handleValueData('HTML')} className="cursor-pointer">HTML</li>
                    <li onClick={() => handleValueData('CSS')}>CSS</li>
                    <li onClick={() => handleValueData('JavaScript')}>JavaScript</li>
                    <li onClick={() => handleValueData('Python')}>Python</li>
                    <li onClick={() => handleValueData('PHP')}>PHP</li>
                    <li onClick={() => handleValueData('PowerShell')}>PowerShell</li>
                    <li onClick={() => handleValueData('Command Prompt')}>Command Prompt</li>
                    <li onClick={() => handleValueData('Linux bash')}>Linux bash</li>
                </ul>
            </div>
            <p>{valueData}</p>
        </div>
    );
}
