import type { Component } from 'solid-js';
import { radekCount, setRadekCount, radeksPerSecond, setRadeksPerSecond } from '../game';
import { WORKERS } from '../workers';
import radek from "./../public/media/placeholder_radek.png"

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
        <div class='flex flex-row border border-black items-center rounded'>
            <img src={radek} alt="RADEK" class='relative m-3 rounded-lg overflow-hidden w-32' />
            <div class='flex flex-col w-full pr-3'>
                <div class='pr-3'>
                    <h3 class='mt-3'>{name}</h3>
                    <p class='text-sm'>{text}</p>
                </div>
                
                <button class={`border shadow my-3 p-1 rounded mx-auto w-full bg-green-400 opacity-40 ${!buyable() && 'cursor-default'} ${buyable() && 'opacity-100 hover:bg-green-500 '}`} onClick={() => buyMe()}>
                    <span class='font-extrabold'>{cost} R</span>
                </button>
            </div>
        </div>
    )
};
