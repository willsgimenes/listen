import { getCookie, createCookie } from './cookies';
import randomizer from './randomizer';

const checkSong = (songs) => {
    const songIndex = getCookie('index');

    if (songIndex === '') createCookie('index', randomizer(0, songs));
}

export default checkSong;