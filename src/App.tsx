import type { Component } from 'solid-js';
import { Header } from './components/header';
import { Leaderboard } from './components/leaderboard';

import { RadekButton } from './components/radek-button';
import { RadekCount } from './components/radek-count';
import { Shop } from './components/shop';

const App: Component = () => {
    return (
        <div class='bg-[#98D1F2]'>
            <Header />
            <div class="flex flex-col flex-nowrap items-center justify-start gap-10 py-2 min-h-screen">
                <RadekCount />
                <RadekButton />
                <Leaderboard />
                <Shop />
            </div>
        </div>
    );
};

export default App;
