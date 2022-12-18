import type { Component } from 'solid-js';
import { radekCount, radeksPerSecond, setRadeksPerSecond } from '../game';
import { WORKERS } from '../workers';

export type WorkerProps = {
    worker: typeof WORKERS[0],
};

export const Worker: Component<WorkerProps> = props => {
    const {
        name,
        text,
        rps,
    } = props.worker;

    const buyMe = () => {
        setRadeksPerSecond(radeksPerSecond() + rps);
    };

    return (
        <div class="flex flex-col items-center rounded-md border-4 border-pink-400 bg-pink-100 p-1">
            <p>{name}</p>
            <p>{text}</p>
            <button onClick={() => buyMe()}>BUY</button>
        </div>
    );
};