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
        <div class="flex flex-col items-center w-96 sm:w-[500px] bg-black/[.15] rounded-lg overflow-clip">
            <p class="font-bold text-5xl sm:text-7xl pt-4">{textOverflow(radekCount()).replace('.', ',')}</p>
            <p class='mt-1 text-xs font-bold'>{wordForm(Math.floor(radekCount()), ['Radekův Yen', 'Radekovy Yeny', 'Radekových Yenů'])}</p>
            <p class='my-1 pb-3 font-bold'>{textOverflow(radeksPerSecond()).replace('.', ',')} R/s</p>
        </div>
    );
};
