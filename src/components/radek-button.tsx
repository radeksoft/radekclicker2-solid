import type { Component } from 'solid-js';
import { radekCount, setRadekCount } from '../game';

export const RadekButton: Component = () => {
    return (
        <div>
            <button onClick={() => setRadekCount(radekCount() + 1)}>RADEK</button>
        </div>
    );
};
