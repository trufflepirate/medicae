import React from "react";
import CircleButton, { CircleButtonSideBarAdd, CircleButtonSideBarTime, CircleButtonSideBarWeight } from "./buttons/circleButton";
import CircleButtonBase from "./buttons/circleButton";
export default function SideBar(props) {
    return (
        <div class="flex flex-col justify-end h-screen w-24 p-3 GlassMorphic">
            <CircleButtonSideBarAdd class="flex-0" ></CircleButtonSideBarAdd>
            <CircleButtonSideBarWeight class="flex-0" ></CircleButtonSideBarWeight>
            <CircleButtonSideBarTime class="flex-0" ></CircleButtonSideBarTime>
        </div>
    );
}
