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
        <div class="w-full px-8 flex flex-col">
            <p class='mx-auto text-2xl font-bold pb-1'>Radekboard</p>
            <div class="flex flex-col items-center border-4 border-slate-300 rounded-2xl bg-slate-200 shadow-md py-2 px-3 w-full">
                
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
                    <div class='flex flex-col'>
                        <div class='flex flex-row'>
                            <input ref={codeInput} type="text" placeholder="Tvůj kódík" class="uppercase p-2 my-1 rounded-md w-2/3"/>
                            <button class='px-2 my-1 mr-0 border shadow rounded-xl mx-auto bg-gradient-to-br from-[#79c4ee]/[.8] to-[#6a81b5]/[.8]' onClick={() => submitCode()}>RADEK!</button>
                        </div>
                        <div>
                            <p class='text-xs pt-1 text-center'>Pokud nemáš kódík na připojení, zeptej se Kubíka.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
