import { Component, createSignal } from 'solid-js';
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

    const [anim, setAnim] = createSignal(false);

    const textOverflow = (n: number) => {
        if (n < 100)
            return n.toFixed(1);
        
        n = Math.floor(n);
    
        if (n < 9_000)
            return n.toString();
        else if (n < 999_000)
            return `${(n / 1_000).toFixed(1)} tisíc`;
        else if (n < 999_000_000)
            return `${(n / 1_000_000).toFixed(2)} milionů`;
        else if (n < 999_000_000_000)
            return `${(n / 1_000_000_000).toFixed(2)} miliard`;
        else if (n < 999_000_000_000_000)
            return `${(n / 1_000_000_000_000).toFixed(2)} bilionů`;
        else if (n < 999_000_000_000_000_000)
            return `${(n / 1_000_000_000_000_000).toFixed(2)} kvadrilionů`;
        else
            return 'kurva hodně';
    }

    return (
        <div class='flex flex-row border-4 border-slate-300 items-center rounded bg-slate-200'>
            <img src={radek} alt="RADEK" class='relative m-3 rounded-lg overflow-hidden w-40' />
            <div class='flex flex-col w-full pr-3'>
                <div class='pr-3'>
                    <div class='flex flex-col'>
                        <h3 class='mt-3 font-bold'>{name}</h3>
                        <p class='text-gray-800 text-xs font-extrabold -mt-1 pb-1'>{rps} R/s</p>
                    </div>
                    <p class='text-sm'>{text}</p>
                </div>
                
                <button class={`border shadow my-3 p-1 rounded mx-auto w-full bg-blue-300 opacity-40 ${!buyable() && 'cursor-default'} ${buyable() && 'opacity-100 hover:bg-blue-400 '} ${anim() && 'animate-button'}`} onClick={() => {
                        buyMe();
                        setAnim(true);
                    }} onAnimationEnd={() => setAnim(false)}>

                    <span class='font-extrabold'>{textOverflow(cost)} R</span>
                </button>
            </div>
        </div>
    )
};
