import musics from './songs.json';

import { getCookie } from './utils/cookies';
import buildPlayer from './components/player';
import checkSong from './utils/song';

checkSong(musics);

const song_el = musics[getCookie('index')];
const target = document.getElementById('main');

// yes I can use a simple template string, but you know, let's remember the old days
target.innerHTML += buildPlayer(song_el);
const nameEl = document.createElement('h1');
nameEl.innerText = `${musics[getCookie('index')].name}`;

// see! back to 2020 ;-)
target.innerHTML += `<p>${musics[getCookie('index')].name}</p>`;

if (!song_el.hasOwnProperty('source')) {
    target.innerHTML +=
        `<small>
        <a href="https://www.youtube.com/watch?v=${musics[getCookie('index')].link}" target="_blank">
            Are you getting <strong>video unavailable</strong>? Use this link instead
        </a>
    </small>`;
}

target.innerHTML +=
    `<p id="notice"><i>Yes, this page intend to not have any style :-)</i></p>`