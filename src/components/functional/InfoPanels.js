import React from "react";


export function PanelEntry(props){
    const k = props.entryKey
    const v = props.entryValue
    
    return (
        <div class='flex flex-row justify-between align-middle'>
            <h1 class = 'InfoPanel-Key-Text text-primary'>{k}</h1>
            <h1 class = 'InfoPanel-Value-Text text-primary'>{v}</h1>
        </div>
    )

}