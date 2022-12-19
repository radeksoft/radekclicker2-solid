import { Component, createSignal } from 'solid-js';
import { radekCount, setRadekCount } from '../game';
import radekuvYen from "./../public/media/Radekuv_yen.png";

export const RadekButton: Component = () => {
    const [anim, setAnim] = createSignal(false);

    return (
        <div class='w-full'>
            <button class={`w-full ${anim() && 'animate-button'}`} onClick={() => {
                    setRadekCount(radekCount() + 1);
                    setAnim(true);
                }} onAnimationEnd={() => setAnim(false)}>

                <img src={radekuvYen} alt="RADEK" width={300} class='mx-auto pointer-events-none selection:bg-transparent'/>
            </button>
        </div>
    );
};
