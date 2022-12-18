import { createEffect, createSignal } from "solid-js";

const createLocalStorageNumberSignal = (key: string, defaultValue: number) => {
    const loaded = localStorage.getItem(key);
    let first: number;
    if (!loaded) {
        first = defaultValue;
    } else {
        first = Number.parseFloat(loaded);
    }

    const theSignal = createSignal(first);

    // createEffect(() => {
    //     const [signalValue] = theSignal;
    //     localStorage.setItem(key, signalValue().toString());
    // });

    return theSignal;
};

export const [radeksPerSecond, setRadeksPerSecond] = createLocalStorageNumberSignal('radeksPerSecond', 0);
export const [radekCount, setRadekCount] = createLocalStorageNumberSignal('radekCount', 0);

const fps = 25;

setInterval(() => {
    setRadekCount(radekCount() + radeksPerSecond() / fps);
}, 1000/fps);

/*
Debug in DevTools with code below.
(absolute value of) wrongPerc should be as low as possible
about 0.004 (0.4 %) on Marian's ThiccPad
TODO: test on phone

setRadeksPerSecond(12345567)
startCount = radekCount()
setTimeout(() => {
   let newCount = radekCount()
   console.log('nC', newCount)
   let diff = newCount - startCount
   console.log('diff', diff)
   let diffPS = diff / 10
   console.log('diffPS', diffPS)
   let wrongPerc = 1 - (diff / (radeksPerSecond()*20))
   console.log('wrongPerc', wrongPerc)
}, 20000)
 */

setInterval(() => {
    console.log('storing to LS', radeksPerSecond(), radekCount());
    localStorage.setItem('radeksPerSecond', radeksPerSecond().toString());
    localStorage.setItem('radekCount', radekCount().toString());
}, 1500);

setInterval(() => {
    console.log('sending radekCount', radekCount());
}, 5000);


const exportToWindow = (obj: {[key: string]: any}) => {
    for (const key in obj) {
        window[key] = obj[key];
    }
}

exportToWindow({
    radekCount,
    setRadekCount,
    radeksPerSecond,
    setRadeksPerSecond,
    reset() {
        setRadeksPerSecond(0);
        setRadekCount(0);
    },
});
