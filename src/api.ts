export type LeaderboardPlayer = {
    id: number,
    displayName: string,
    radeks: number,
};

export type LeaderboardData = LeaderboardPlayer[];

/** doesn't end with /, add your own */
const ENDPOINT = '/server';

/** can fail! use try-catch (Rust does everything better omg) */
export const submitRadekCount = async (playerCode: string, radekCount: number) => {
    const res = await fetch(`${ENDPOINT}/updateradeks/${playerCode}/${radekCount}`, {
        method: 'PUT',
    });

    if (res.status !== 200)
        throw false;

    const resData = await res.json() as LeaderboardData;
    return resData;
}

export const exportToWindow = (obj: {[key: string]: any}) => {
    for (const key in obj) {
        window[key] = obj[key];
    }
}

if (import.meta.env.DEV) {
    exportToWindow({
        submitRadekCount,
    });
}
