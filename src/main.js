import musics from './songs.json';

import { getCookie } from './utils/cookies';
import buildPlayer from './components/player';
import checkSong from './utils/song';

import { TOKEN_ALIAS_COLOR_BRAND_SECONDARY } from '@willsgimenes/neon-city-light-tokens/dist/web/brand#1/tokens.es6'

checkSong(musics);

const song_el = musics[getCookie('index')];
const target = document.getElementById('main');
const title_el = document.createElement('h1')

title_el.style.color = TOKEN_ALIAS_COLOR_BRAND_SECONDARY
title_el.innerHTML = 'Take a break listen'
target.appendChild(title_el)

// yes I can use a simple template string, but you know, let's remember the old days
target.innerHTML += buildPlayer(song_el);
const nameEl = document.createElement('h1');
nameEl.innerText = `${musics[getCookie('index')].name}`;

// see! back to 2020 ;-)
target.innerHTML += `<p style="color: ${TOKEN_ALIAS_COLOR_BRAND_SECONDARY}">${musics[getCookie('index')].name}</p>`;

if (!song_el.hasOwnProperty('source')) {
    target.innerHTML +=
        `<small>
        <a style="color: ${TOKEN_ALIAS_COLOR_BRAND_SECONDARY}" href="https://www.youtube.com/watch?v=${musics[getCookie('index')].link}" target="_blank">
            Are you getting <strong>video unavailable</strong>? Use this link instead
        </a>
    </small>`;
}

target.innerHTML +=
    `<p id="notice" style="color: ${TOKEN_ALIAS_COLOR_BRAND_SECONDARY}"><i>Yes, this page intend to not have any style :-)</i></p>`