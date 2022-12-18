import type { Component } from 'solid-js';
import { Leaderboard } from './components/leaderboard';

import { RadekButton } from './components/radek-button';
import { RadekCount } from './components/radek-count';
import { Shop } from './components/shop';

const App: Component = () => {
    return (
        <div class="flex flex-col flex-nowrap items-center justify-start gap-[20vh] py-[10vh] min-h-screen">
            <RadekCount />
            <RadekButton />
            <Leaderboard />
            <Shop />
        </div>
    );
};

export default App;
