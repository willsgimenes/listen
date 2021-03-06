(function () {
    'use strict';

    var musics = [
    	{
    		name: "isn't she lovely",
    		link: "RfHQOlHJczU"
    	},
    	{
    		name: "MINMI - スマホ feat. SHINGO★西成",
    		link: "dmni9zPUVNU"
    	},
    	{
    		name: "friday I'm love",
    		link: "mGgMZpGYiy8"
    	},
    	{
    		name: "ryuusei",
    		link: "Y_pyeUgqs68"
    	},
    	{
    		name: "That's what I like",
    		link: "PMivT7MJ41M"
    	},
    	{
    		name: "That's life",
    		link: "TnlPtaPxXfc"
    	},
    	{
    		name: "Anri - Good Bye Boogie Dance",
    		source: "sc",
    		trackId: "258801448",
    		link: "dick-richardson-671540421/anri-good-bye-boogie-dance",
    		link_author: "dick-richardson-671540421",
    		author: "Internet Aristocrat"
    	},
    	{
    		name: "Anri - I Can't Stop The Loneliness (悲しみがとまらない )",
    		source: "sc",
    		trackId: "278895430",
    		link: "floyd-rieger/i-cant-stop-the-loneliness",
    		link_author: "floyd-rieger",
    		author: "Osaka Flocka Flame"
    	},
    	{
    		name: "TANUKI - BABYBABYの夢 - Sample from Mariya Takeuchi Yume no Tsuzuki",
    		source: "sc",
    		trackId: "172682287",
    		link: "tanukimusic/tanuki-babybaby-fc-ep-free",
    		link_author: "tanukimusic",
    		author: "TANUKI"
    	},
    	{
    		name: "超時空要塞マクロス　リン・ミンメイ　天使の絵の具～ランナー",
    		link: "K8dcS3vKWRA"
    	},
    	{
    		name: "HIM - Killing Loneliness [OFFICIAL VIDEO]",
    		link: "CQ9JdDAbKH0"
    	},
    	{
    		name: "Eir Aoi『Iris』",
    		link: "3RSZGS3IItg"
    	},
    	{
    		name: "LiSA - Catch the Moment",
    		link: "wW80mkZaYxY"
    	},
    	{
    		name: "𝙹 𝙰 𝙿 𝙰 𝙽 𝙴 𝚂 𝙴 シティーポップ City Pop/Funk 𝙰 𝙾 𝚁 Compilation パート #2",
    		link: "nlEPCDxXf78"
    	}
    ];

    const createCookie = (name, value) => {
        let currentDate = new Date();
        let expirationDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 0, 0, 0);
        let expires = "; expires=" + expirationDate.toGMTString();
        document.cookie = name + "=" + value + expires + "; path=/";
    };

    const getCookie = (cname) => {
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
    };

    const buildPlayer = (song) => {
        if (song.hasOwnProperty('source')) {
            const sc_el =
                `<iframe width="640" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/${song.link_author}" title="${song.author}" target="_blank" style="color: #cccccc; text-decoration: none;">${song.author}</a> · <a href="https://soundcloud.com/${song.link}" title="${song.name}" target="_blank" style="color: #cccccc; text-decoration: none;">${song.name}</a></div>`;

            return sc_el;
        }

        const el =
            `<iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/${song.link}?autoplay=0"
        frameborder="0"></iframe>`;

        return el;
    };

    const randomizer = (min = 0, max) => {
        const _min = Math.ceil(min);
        const _max = Math.floor(max.length);

        return Math.floor(Math.random() * (_max - _min)) + min;
    };

    const checkSong = (songs) => {
        const songIndex = getCookie('index');

        if (songIndex === '') createCookie('index', randomizer(0, songs));
    };

    /**
     * Do not edit directly
     * Generated on Sun, 28 Feb 2021 02:16:42 GMT
     */
    const TOKEN_ALIAS_COLOR_BRAND_SECONDARY = "#ff4365"; // secondary color
    const TOKEN_ALIAS_COLOR_BRAND_TERTIARY = "#f6019d"; // tertiary color

    checkSong(musics);

    const root_el = document.getElementById('main');
    const song_el = musics[getCookie('index')];
    const title_el = document.createElement('h1');
    const name_el = document.createElement('h1');

    title_el.style.color = TOKEN_ALIAS_COLOR_BRAND_SECONDARY;
    title_el.innerHTML = 'Take a break listen';
    root_el.appendChild(title_el);

    // yes I can use a simple template string, but you know, let's remember the old days
    root_el.innerHTML += buildPlayer(song_el);
    name_el.innerText = `${ musics[getCookie('index')].name }`;

    // see! back to 2020 ;-)
    root_el.innerHTML += `<p style="color: ${TOKEN_ALIAS_COLOR_BRAND_SECONDARY}">${musics[getCookie('index')].name}</p>`;

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
    </small>`;
    }

    root_el.innerHTML +=
        `<p id="notice" style="color: ${TOKEN_ALIAS_COLOR_BRAND_SECONDARY}">
        <i>Yes, this page intend to not have any style :-)</i>
    </p>`;

}());
//# sourceMappingURL=bundle.js.map
