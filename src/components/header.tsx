import { Component } from "solid-js";
import radekuvYen from "./../public/media/Radekclicker_logo.png";

export type HeaderProps = {
    title: string;
};

export const Header: Component = () => {
    return (
        <header class="w-full">
            <img class="w-full p-4" src={radekuvYen} alt="Radekclicker logo" />
        </header>
    );
};
