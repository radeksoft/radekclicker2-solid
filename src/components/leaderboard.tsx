import { Component, createSignal } from 'solid-js';
import { leaderboardData, playerCode, radekCount, setLeaderboardData, setPlayerCode, textOverflow } from '../game';
import "../api";
import { LeaderboardData, submitRadekCount } from '../api';

export const Leaderboard: Component = () => {
    let codeInput: HTMLInputElement;
    const [error, setError] = createSignal(false);

    const submitCode = async () => {
        console.log({codeInputValue: codeInput.value});

        try {
            const res = await submitRadekCount(codeInput.value, radekCount());
            setPlayerCode(codeInput.value);
            setLeaderboardData(res);
        } catch {
            setError(true);
        }
    };

    return (
        <div class="w-full px-8">
            <div class="flex flex-col items-center border-4 border-slate-300 rounded-2xl bg-slate-200 shadow-md py-2 px-3 w-full">
                <p>Radekboard</p>
                {playerCode() ? (
                    <div class="flex flex-col w-full">
                        {leaderboardData().map(player => (
                            <div class="flex flex-row justify-between">
                                <p>{player.displayName}</p>
                                <p>{textOverflow(player.radeks)}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <input ref={codeInput} type="text" placeholder="Tvůj kódík" class="uppercase" />
                        <button onClick={() => submitCode()}>RADEK!</button>
                    </div>
                )}
            </div>
        </div>
    );
};
