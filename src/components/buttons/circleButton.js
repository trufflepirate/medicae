import React from "react";
import {icon_add,icon_time,icon_weight} from '../icons';


export default function CircleButtonBase(props) {
    return (
    <button className="btn w-[65px] h-[65px] my-4 border-0 SidebarButtonCircle flex justify-center items-center">
        {props.icon}
        </button>);
}

export function CircleButtonSideBarWeight(props) {
    return (
        <CircleButtonBase icon = {icon_weight()} >
        </CircleButtonBase>
    )
}

export function CircleButtonSideBarTime(props) {
    return (
        <CircleButtonBase icon = {icon_time()}>
        </CircleButtonBase>
    )
}
export function CircleButtonSideBarAdd(props) {
    return (
        <CircleButtonBase icon = {icon_add()}>
        </CircleButtonBase>
    )
}