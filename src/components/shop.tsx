import { Component, createSignal } from 'solid-js';

import { Worker } from '../components/worker';
import { radekCount, radeksPerClick, radeksPerSecond, setRadekCount, setRadeksPerClick, textOverflow, wordForm } from '../game';

import { WORKERS } from '../workers';

export const Shop: Component = () => {
    const [buyAnim, setBuyAnim] = createSignal(false);

    // TODO: make this function better
    const calculateCost = () => radeksPerClick() * Math.log2(radeksPerClick()) * 100 + 100;
    const calculateLimit = () => radeksPerClick()**1.2;
    const buyable = () => radekCount() >= calculateCost() && calculateLimit() <= radeksPerSecond();

    const buyMe = () => {
        if (!buyable())
            return;

        setRadekCount(radekCount() - calculateCost());
        setRadeksPerClick(radeksPerClick() * 2);
    };
    
    return (
        <div class="flex flex-col gap-4 w-full px-4">
            <div class='flex flex-row justify-around border-4 border-slate-300 items-center rounded-2xl bg-slate-200 shadow-md mt-10'>
                <div class='flex flex-col py-4 pl-2 text-center'>
                    <p class='font-extrabold text-3xl'>{textOverflow(radeksPerClick())}</p>
                    <p>{wordForm(Math.floor(radeksPerClick()), ['Radekův Yen', 'Radekovy Yeny', 'Radekových Yenů'])}</p>
                    <p class='text-xs'>za kliknutí</p>
                </div>
                <div class='flex flex-col py-4 pr-2 text-center w-2/5'>
                    <p class='font-bold text-xl pt-2'>x2 upgrade</p>
                    <button class={`border shadow my-1 p-1 rounded-xl mx-auto w-full bg-gradient-to-br from-[#79c4ee]/[.8] to-[#6a81b5]/[.8] opacity-40 ${buyable() && 'opacity-100 hover:bg-blue-400 '} ${buyAnim() && 'animate-button'}`} onClick={() => {
                        buyMe();
                        setBuyAnim(true);
                    }} onAnimationEnd={() => setBuyAnim(false)}>
                        <span class='font-extrabold'>{textOverflow(calculateCost())} R</span>
                    </button>
                    <p class={`text-[9px] ${calculateLimit() < radeksPerSecond() && 'hidden'}`}>Je potřeba {textOverflow(calculateLimit())} R/s</p>
                </div>
            </div>

            {WORKERS.map((worker, i) => (
                <Worker worker={worker} index={i} />
            ))}
        </div>
    );
};
