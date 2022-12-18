import type { Component } from 'solid-js';
import { radekCount, setRadekCount } from '../game';
import radek from "./../public/media/placeholder_radek.png"

export const RadekButton: Component = () => {
    return (
        <div class='w-full'>
            <button class='w-full' onClick={() => setRadekCount(radekCount() + 1)}>
                <img src={radek} alt="RADEK" width={300} class='mx-auto'/>
            </button>
        </div>
    );
};
