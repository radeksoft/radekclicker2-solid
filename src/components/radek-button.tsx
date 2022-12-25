import { Component, createSignal } from 'solid-js';
import { radekCount, radeksPerClick, radeksPerSecond, setRadekCount, setRadeksPerClick, textOverflow, wordForm } from '../game';
import radekuvYen from "./../public/media/Radekuv_yen.png";

export const RadekButton: Component = () => {
    const [anim, setAnim] = createSignal(false);

    return (
        <div class='w-full'>
            <button class={`w-full ${anim() && 'animate-button'}`} onClick={() => {
                    setRadekCount(radekCount() + radeksPerClick());
                    setAnim(true);
                }} onAnimationEnd={() => setAnim(false)}>

                <img src={radekuvYen} alt="RADEK" class='mx-auto pointer-events-none selection:bg-transparent w-[100%] px-7'/>
            </button>
        </div>
    );
};
