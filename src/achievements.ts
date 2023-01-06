import a1 from './public/achievements/1.png';
import a2 from './public/achievements/2.png';
import a3 from './public/achievements/3.png';
import a4 from './public/achievements/4.png';
import a5 from './public/achievements/5.png';
import a6 from './public/achievements/6.png';
import a7 from './public/achievements/7.png';
import a8 from './public/achievements/8.png';
import a9 from './public/achievements/9.png';
import a10 from './public/achievements/10.png';
import a11 from './public/achievements/11.png';
import a12 from './public/achievements/12.png';
import a13 from './public/achievements/13.png';
import a14 from './public/achievements/14.png';
import a15 from './public/achievements/15.png';
import a16 from './public/achievements/16.png';
import a17 from './public/achievements/17.png';
import a18 from './public/achievements/18.png';
import a19 from './public/achievements/19.png';
import a20 from './public/achievements/20.png';
import a21 from './public/achievements/21.png';
import a22 from './public/achievements/22.png';
import a23 from './public/achievements/23.png';
import a24 from './public/achievements/24.png';
import a25 from './public/achievements/25.png';

export const ACHIEVEMENTS = [
    {
        name: "Radekův yen na blockchainu!!",
        text: "Otevři poslední generátor",
        img: a1,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => generators[10] >= 1,
    },
    {
        name: "Gang",
        text: "Vlastni 50 Negrů",
        img: a2,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => generators[0] >= 50,
    },
    {
        name: "Hood",
        text: "Vlastni 100 Negrů",
        img: a3,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => generators[0] >= 100,
    },
    {
        name: "Ghetto",
        text: "Vlastni 200 Negrů",
        img: a4,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => generators[0] >= 200,
    },
    {
        name: "0,0001% Výkonu",
        text: "Vlastni 100 Vladimírovejch mám",
        img: a5,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => generators[2] >= 100,
    },
    {
        name: "Štětský Humr",
        text: "Vlastni 50 Mondi",
        img: a6,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => generators[6] >= 50,
    },
    {
        name: "Big ass korporátník",
        text: "Vlastni 25 Radeksoftů",
        img: a7,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => generators[7] >= 25,
    },
    {
        name: "Hustler",
        text: "Vydělávej 420 r/s",
        img: a8,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => persec >= 420,
    },
    {
        name: "Mzda pleba",
        text: "Vydělávej 1000 r/s",
        img: a9,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => persec >= 1000,
    },
    {
        name: "Mzda Mc radek zaměstnance",
        text: "Vydělávej 10 tisíc r/s",
        img: a10,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => persec >= 10_000,
    },
    {
        name: "Mzda ne úplně pleba",
        text: "Vydělávej 200 tisíc r/s",
        img: a11,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => persec >= 200_000,
    },
    {
        name: "Mzda Štamgasta",
        text: "Vydělávej 1 milion r/s",
        img: a12,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => persec >= 1_000_000,
    },
    {
        name: "Mzda Radka",
        text: "Vydělávej 4,2 milionů r/s",
        img: a13,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => persec >= 4_200_000,
    },
    {
        name: "Bendovy finance",
        text: "Vlastni 5 Radekových yenů",
        img: a14,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => radeks >= 5,
    },
    {
        name: "Zájemce o kýbl",
        text: "Vlastni 10 tisíc Radekových yenů",
        img: a15,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => radeks >= 10_000,
    },
    {
        name: "Bílej kůň",
        text: "Vlastni 1 milion Radekových yenů",
        img: a16,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => radeks >= 1_000_000,
    },
    {
        name: "Vlastník financí",
        text: "Vlastni 100 milionů Radekových yenů",
        img: a17,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => radeks >= 100_000_000,
    },
    {
        name: "Discord owner",
        text: "Vlastni 1 miliardu Radekových yenů",
        img: a18,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => radeks >= 1_000_000_000,
    },
    {
        name: "Pimp Radek",
        text: "Vlastni 100 miliard Radekových yenů",
        img: a19,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => radeks >= 100_000_000_000,
    },
    {
        name: "Kompetitivní hráč",
        text: "Připoj se do Radekboardu",
        img: a20,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => kodik != "",
    },
    {
        name: "Počátek zkázy",
        text: "10krát klikni na Radka",
        img: a21,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => clicks >= 10,
    },
    {
        name: "Uklikám toho parchanta k smrti",
        text: "Deset tisíckrát klikni na Radka",
        img: a22,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => clicks >= 10_000,
    },
    {
        name: "On furt žije",
        text: "Stotisíckrát klikni na Radka",
        img: a23,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => clicks >= 100_000,
    },
    {
        name: "Se divim, že po tom všem Radkovy ty brejle nepraskly",
        text: "Třistatisíckrát klikni na Radka",
        img: a24,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => clicks >= 300_000,
    },
    {
        name: "Nevíme",
        text: "Dej nám návrh na achievement <3",
        img: a25,
        f: (radeks: number, persec: number, clicks: number, generators: number[], kodik: string) => false,
    },
]