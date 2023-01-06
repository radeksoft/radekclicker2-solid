import { Component } from "solid-js";
import { ACHIEVEMENTS } from "../achievements";
import { Achievement, AchievementProps } from "./achievement";


export const AchievementGrid: Component = () => {
    const chunky = (arr, size) => {
        const res = [];
        for (let i = 0; i < arr.length; i += size) {
            const chunk = arr.slice(i, i + size);
            res.push(chunk);
        }
        return res;
    }

    return (
        <div class="flex flex-col gap-4 px-4">
            <p class='-mb-3 mx-auto text-2xl font-bold pb-1'>Radek pexeso</p>
            <div class="flex flex-col border-4 border-slate-300 items-center rounded-2xl bg-slate-200 shadow-md p-3">
                {chunky(ACHIEVEMENTS, 5).map((achievements) => (
                    <div class="flex flex-row"> 
                        {achievements.map((achievement) => (
                            <Achievement achievement={achievement} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}