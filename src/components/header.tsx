import { Component } from "solid-js";

import { Screens, setCurrentScreen } from '../game';

export type HeaderProps = {
    title: string;
};

export const Header: Component<HeaderProps> = props => {
    const {
        title,
    } = props

    return (
        <div className="flex flex-row justify-center items-center border-b border-b-slate-300 w-full py-3">
            <p>{title}</p>
            <button onClick={() => setCurrentScreen(Screens.Home)}>back</button>
        </div>
    );
};
