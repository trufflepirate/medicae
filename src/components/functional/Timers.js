import React, { useState,useEffect } from "react";

function ActualTimer(props) {

    const t_hour = props.timer_time.hour
    const t_minute = props.timer_time.min
    const t_second = props.timer_time.sec

    return (
            <div className={`Timer-Counter-Text ${props.timer_counter_color} countdown flex justify-center`}>
            <span style={{"--value":t_hour}}></span>:
            <span style={{"--value":t_minute}}></span>:
            <span style={{"--value":t_second}}></span>

            </div>
            // {/* <h1 class={`Timer-Counter-Text  my-2 ${props.timer_counter_color}`}>{`${t_hour}:${t_minute}:${t_second}`}</h1> */}
    )
}


function TimerIndicator(props) {
    return (
        <div class={`Timer-Indicator ${props.timercolor} flex justify-center`}>
            <h1 class='inline-block Timer-Indicator-Text align-middle text-center text-black' >{props.count}</h1>
        </div>
    )
}


function TimerName(props) {
    return <h1 class={`text-center Timer-Drugname-Text ${props.timer_counter_color}`}>{props.name}</h1>
}

function ShockTimerAdditions(props) {
    return (
        <div class='Timer-Shock-Extra mx-auto flex flex-row align-middle justify-between'>
                <a class='my-auto mx-2 Timer-Shock-Gibbet rotate-90'></a>
                <div class='my-auto Timer-Shock-Text'>{props.text}</div>
                <a class='my-auto mx-2 Timer-Shock-Gibbet -rotate-90'></a>
        </div>
    )
}

function millisToHMS(milliseconds){
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor(((milliseconds % 360000) % 60000) / 1000);
    const hms = {
        hour: hours,
        min: minutes,
        sec: seconds
    }
    return hms
}

export function DrugTimers(props) {


    const [count, setCount] = useState(0);
    const [last, setLast] = useState(0);
    const [dummy, setDummy] = useState(0)
    
    const onclick = () => {
        const timeNow = Date.now();
        setLast(timeNow)
        setCount(count+1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDummy(1-dummy);
          }, 1000);
        return ()=>clearInterval(interval)
      },[dummy]);

    var hms = {
        hour: 0,
        min: 0,
        sec: 0
    }
    if (last!=0){
        hms = millisToHMS(Date.now() - last)
    }

    return (
        <div class="flex justify-center">
            <div class={`btn Timer-Drug ${props.timercolor} flex flex-col align-middle justify-center`}  onClick={onclick}>
                <ActualTimer timer_time={hms} timer_counter_color={props.timer_counter_color} />
                <TimerName name={props.name} timer_counter_color = {props.timer_counter_color}></TimerName>
                <TimerIndicator timercolor={props.timercolor} count = {count}></TimerIndicator>
            </div>
        </div>

    )
}

export function ShockTimers(props) {

    const [count, setCount] = useState(0);
    const [last, setLast] = useState(0);
    const [dummy, setDummy] = useState(0)
    
    const onclick = () => {
        const timeNow = Date.now();
        setLast(timeNow)
        setCount(count+1)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setDummy(1-dummy);
          }, 1000);
        return ()=>clearInterval(interval)
      },[dummy]);

    var hms = {
        hour: 0,
        min: 0,
        sec: 0
    }
    if (last!=0){
        hms = millisToHMS(Date.now() - last)
    }


    return (
        <div class="flex justify-center">
            <div class={`btn Timer-Shock ${props.timercolor} flex flex-col align-middle justify-center`} onClick={onclick}>
                <div class='mt-[39px] mb-[33px]'>
                    <ActualTimer timer_time={hms} timer_counter_color={props.timer_counter_color}   />
                </div>
                <div class='flex-1 flex flex-col gap-4'>
                    <ShockTimerAdditions text='200J' ></ShockTimerAdditions>
                    <ShockTimerAdditions text='Pulseless VT' ></ShockTimerAdditions>
                </div>
                <TimerIndicator timercolor={props.timercolor} count = {count}></TimerIndicator>
            </div>
        </div>

    )
}