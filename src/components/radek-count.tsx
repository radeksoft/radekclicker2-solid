import type { Component } from 'solid-js';
import { radekCount, radeksPerSecond, textOverflow, wordForm } from '../game';

// https://jecas.cz/sklonovani

export const RadekCount: Component = () => {
    return (
        <div class="flex flex-col items-center w-[22rem] sm:w-[500px] bg-black/[.15] rounded-lg overflow-clip shadow-md">
            <p class="font-bold text-5xl sm:text-7xl pt-4 text-clip text-center">{textOverflow(radekCount()).replace('.', ',')}</p>
            <p class='mt-1 text-xs font-bold'>{wordForm(Math.floor(radekCount()), ['Radekův Yen', 'Radekovy Yeny', 'Radekových Yenů'])}</p>
            <p class='my-1 pb-3 font-bold'>{textOverflow(radeksPerSecond()).replace('.', ',')} R/s</p>
        </div>
    );
};
