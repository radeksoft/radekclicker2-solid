import { Component } from "solid-js";
import { ACHIEVEMENTS } from "../achievements"
import { clickCount, playerCode, radekCount, radeksPerSecond, workerCount } from "../game";
import unknownIcon from '../public/worker_icons/Zamek_icon.png';

export type AchievementProps = {
    achievement: typeof ACHIEVEMENTS[0],
};

export const Achievement: Component<AchievementProps> = props => {
    const {
        name,
        text,
        img,
        f,
    } = props.achievement;

    const open = () => f(radekCount(), radeksPerSecond(), clickCount(), workerCount(), playerCode());

    return (
        <div onClick={() => {
            alert(name + "\n" + text)
        }}>
            <img src={open() ? img : unknownIcon} alt={name}/>
        </div>
    );
}