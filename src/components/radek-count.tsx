import type { Component } from 'solid-js';
import { radekCount, radeksPerSecond } from '../game';

// https://jecas.cz/sklonovani
const wordForm = (pocet: number, slova: [string, string, string]) => {
    pocet = Math.abs(pocet);

    if (pocet == 1)
        return slova[0];

    if (pocet < 5 && pocet > 0)
        return slova[1];

    return slova[2];
};


export const RadekCount: Component = () => {
    return (
        <div class="flex flex-col items-center">
            <p>Máš</p>
            <p class="font-bold text-2xl">{Math.floor(radekCount())}</p>
            <p>{wordForm(Math.floor(radekCount()), ['Radka', 'Radky', 'Radků'])}</p>
            <p>Generuješ {radeksPerSecond()} Radků za sekundu.</p>
        </div>
    );
};
