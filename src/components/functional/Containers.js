import React, { useState } from "react";
import { DrugTimers, ShockTimers } from "./Timers";
import {PanelEntry} from "./InfoPanels"

export function DrugTimerContainer(props) {

    return (
        <div className="card w-[390px] h-[403px] GlassMorphic">
            <div className="card-body align-center">
                <h2 className="Timer-Title-Text text-primary">DRUG TIMERS</h2>
                <div class='flex-1 flex flex-col align-middle justify-center gap-10'>
                    <DrugTimers timercolor = 'Timer-Purple' timer_counter_color ='text-[#981834]' name='Adrenaline'></DrugTimers>
                    <DrugTimers timercolor = 'Timer-Green'  timer_counter_color = 'text-[#135A76]'  name='Amiodraone'></DrugTimers>
                </div>
            </div>
        </div>
    )
}

export function ShockTimerContainer(props) {
    return (
        <div className="card w-[390px] h-[403px] GlassMorphic">
            <div className="card-body align-center">
                <h2 className="Timer-Title-Text text-primary">SHOCK TIMER</h2>
                <div class='flex-1 flex flex-col align-middle justify-center gap-10'>
                    <ShockTimers timercolor = 'Timer-Yellow' timer_counter_color ='text-primary' name='Adrenaline'></ShockTimers>
                </div>
            </div>
        </div>
    )
}

export function InfoPanelContainer(props) {
    return (
        <div className="card w-[390px] h-[403px] GlassMorphic">
            <div className="card-body align-center">
                <h2 className="Timer-Title-Text text-primary">Patient Details</h2>
                <div class='flex-1 mt-5 flex flex-col justify-start gap-1'>
                    <PanelEntry entryKey='symptoms' entryValue="chest pain"></PanelEntry>
                    <span class = "my-3"></span>
                    <PanelEntry entryKey='height' entryValue="175 cm"></PanelEntry>
                    <PanelEntry entryKey='weight' entryValue="70 kg"></PanelEntry>
                    <PanelEntry entryKey='age' entryValue="65 Y/O"></PanelEntry>
                    <span class = "my-3"></span>
                    <PanelEntry entryKey='name' entryValue="Jane doe"></PanelEntry>
                    <PanelEntry entryKey='identification' entryValue="S000000A"></PanelEntry>
                </div>
            </div>
        </div>
    )
}
