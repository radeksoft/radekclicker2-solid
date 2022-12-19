import type { Component } from 'solid-js';

import { Worker } from '../components/worker';

import { WORKERS } from '../workers';

export const Shop: Component = () => {
    return (
        <div class="flex flex-col gap-4 w-full px-4">
            {WORKERS.map((worker, i) => (
                <Worker worker={worker} index={i} />
            ))}
        </div>
    );
};
