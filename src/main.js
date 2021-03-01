import musics from './songs.json'

import { getCookie } from './utils/cookies'
import buildPlayer from './components/player'
import checkSong from './utils/song'

import {
    TOKEN_ALIAS_COLOR_BRAND_SECONDARY,
    TOKEN_ALIAS_COLOR_BRAND_TERTIARY,
} from '@willsgimenes/neon-city-light-tokens/dist/web/brand#1/tokens.es6'

checkSong(musics)

const root_el = document.getElementById('main')
const song_el = musics[getCookie('index')]
const title_el = document.createElement('h1')
const name_el = document.createElement('h1')

title_el.style.color = TOKEN_ALIAS_COLOR_BRAND_SECONDARY
title_el.innerHTML = 'Take a break listen'
root_el.appendChild(title_el)

// yes I can use a simple template string, but you know, let's remember the old days
root_el.innerHTML += buildPlayer(song_el)
name_el.innerText = `${ musics[getCookie('index')].name }`

// see! back to 2020 ;-)
root_el.innerHTML += `<p style="color: ${TOKEN_ALIAS_COLOR_BRAND_SECONDARY}">${musics[getCookie('index')].name}</p>`

if (!song_el.hasOwnProperty('source')) {
    root_el.innerHTML +=
        `<small>
            <a
                style="color: ${TOKEN_ALIAS_COLOR_BRAND_TERTIARY}"
                href="https://www.youtube.com/watch?v=${musics[getCookie('index')].link}"
                target="_blank"
            >
            Are you getting <strong STYLE="font-weight: bold">video unavailable?</strong> Use this link instead
        </a>
    </small>`
}

root_el.innerHTML +=
    `<p id="notice" style="color: ${TOKEN_ALIAS_COLOR_BRAND_SECONDARY}">
        <i>Yes, this page intend to not have any style :-)</i>
    </p>`