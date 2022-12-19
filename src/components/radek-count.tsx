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

export const RadekCount: Component = () => {
    return (
        <div class="flex flex-col items-center">
            <p>Máš</p>
            <p class="font-bold text-2xl">{textOverflow(radekCount()).replace('.', ',')}</p>
            <p>{wordForm(Math.floor(radekCount()), ['Radeka', 'Radeky', 'Radeků'])}</p>
            <p>Generuješ {textOverflow(radeksPerSecond()).replace('.', ',')} Radeků za sekundu.</p>
        </div>
    );
};
