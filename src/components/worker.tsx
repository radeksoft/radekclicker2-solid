import type { Component } from 'solid-js';
import { radekCount, setRadekCount, radeksPerSecond, setRadeksPerSecond } from '../game';
import { WORKERS } from '../workers';

// BRUH
export type WorkerProps = {
    worker: typeof WORKERS[0],
};

export const Worker: Component<WorkerProps> = props => {
    const {
        name,
        text,
        rps,
        cost,
    } = props.worker;

    const buyMe = () => {
        if (!buyable())
            return;

        setRadekCount(radekCount() - cost);
        setRadeksPerSecond(radeksPerSecond() + rps);
    };

    const buyable = () => radekCount() >= cost;

    return (
        <div class={`flex flex-col items-center rounded-md border-4 border-pink-400 bg-pink-100 p-1 ${!buyable() && "opacity-40"}`}>
            <p>{name}</p>
            <p>{text}</p>
            <p>Cena: {cost}</p>
            <button onClick={() => buyMe()}>BUY</button>
        </div>
    );
};
