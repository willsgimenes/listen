import musics from './songs.json';

const randomizer = (min = 0, max = musics.length - 1) => {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);

    return Math.floor(Math.random() * (_max - _min + 1)) + min;
}

function createCookie(name, value) {
    let currentDate = new Date();
    let expirationDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 0, 0, 0);
    let expires = "; expires=" + expirationDate.toGMTString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkSong() {
    const songIndex = getCookie('index');

    if (songIndex === '') createCookie('index', randomizer());
}

checkSong();

const song_el = musics[getCookie('index')];

const buildPlayer = (song) => {
    if (song.hasOwnProperty('source')) {
        const sc_el =
            `<iframe width="640" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/${song.link_author}" title="${song.author}" target="_blank" style="color: #cccccc; text-decoration: none;">${song.author}</a> · <a href="https://soundcloud.com/${song.link}" title="${song.name}" target="_blank" style="color: #cccccc; text-decoration: none;">${song.name}</a></div>`;

        return sc_el;
    }

    const el =
        `<iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/${song_el.link}?autoplay=0"
        frameborder="0"></iframe>`;

    return el;
}


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