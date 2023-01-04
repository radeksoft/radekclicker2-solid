import { Component, createSignal } from "solid-js";
import { music, toggleMusic } from "../game";
import radekimg from '../public/media/placeholder_radek.png';

export const Music: Component = () => {
    const [anim, setAnim] = createSignal(false);
    
    return (
        <div class="flex flex-col gap-4 w-full px-4">
            <p class='-mb-14 mx-auto text-2xl font-bold pb-1'>Radek music</p>
            <div class='flex flex-row justify-around border-4 border-slate-300 items-center rounded-2xl bg-slate-200 shadow-md mt-10'>
                <div>
                    <img src={radekimg} alt="" class={`w-40 rounded-full p-4 ${music() == 1 && 'animate-spin'}`}/>
                </div>
                <div class="w-2/3 text-center">
                    <p class="text-xs mb-1 mt-3">Hudební doprovod poskytuje</p>
                    <a href="https://radioheaven.pl/" class="underline" target="_blank">Radio Heaven</a>

                    <button class={`border shadow my-3 p-1 rounded-xl mx-auto w-2/3 bg-gradient-to-br from-[#79c4ee]/[.8] to-[#6a81b5]/[.8] ${anim() && 'animate-button'}`} onClick={() => {
                        setAnim(true);
                        toggleMusic();
                    }} onAnimationEnd={() => setAnim(false)}>

                    <span class='font-extrabold'>{music() == 1 ? 'vypnout' : 'zapnout'}</span>
                </button>
                </div>
            </div>
        </div>
    );
};