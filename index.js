// sound play

const music = new Audio("../sounds/1.mp3");
// console.log(music.volume)

// music.play();

const songs = [
    {
        id: 1,
        songName: `ON MY WAY <br>
        <div class="subTitle">
            Alen Walker
        </div>`,
        poster: "../posters/1.jpg"
    },
    {
        id: 2,
        songName: `25-25 <br>
        <div class="subTitle">
            Arjan- Dhillon
        </div>`,
        poster: "../posters/2.jpg"
    },
    {
        id: 3,
        songName: `Agar -tum -Sath-Ho <br>
        <div class="subTitle">
            Arijit-Singh
        </div>`,
        poster: "../posters/3.jpg"
    },
    {
        id: 4,
        songName: `Mashup-2023 <br>
        <div class="subTitle">
            Arijit Singh
        </div>`,
        poster: "../posters/4.jpg"
    },
    {
        id: 5,
        songName: `Bambhea -Bole <br>
        <div class="subTitle">
            Siddu -Moosewala
        </div>`,
        poster: "../posters/5.jpg"
    },
    {
        id: 6,
        songName: `Barsaat-Ki -Dhun <br>
        <div class="subTitle">
            Jubin Natuiyal
        </div>`,
        poster: "../posters/1.jpg"
    },
    {
        id: 7,
        songName: `Blessing-Of-Bappu <br>
        <div class="subTitle">
            Satbir Ahuja
        </div>`,
        poster: "../posters/7.jpg"
    },
    {
        id: 8,
        songName: `Calabose <br>
        <div class="subTitle">
             Siddu-Moosewala
        </div>`,
        poster: "../posters/8.jpg"
    },
    {
        id: 9,
        songName: `DIL-IBBADAT-TUM-MILE <br>
        <div class="subTitle">
            KK-SINGER
        </div>`,
        poster: "../posters/9.jpg"
    },
    {
        id: 10,
        songName: `FADED<br>
        <div class="subTitle">
            Alen Walker
        </div>`,
        poster: "../posters/10.jpg"
    },
    {
        id: 11,
        songName: `HUMNAVA-MERE <br>
        <div class="subTitle">
            Jubin Natiyal
        </div>`,
        poster: "../posters/11.jpg"
    },
    {
        id: 12,
        songName: `KEJO-KESRI-KE LAL <br>
        <div class="subTitle">
            Mikka-Singh
        </div>`,
        poster: "../posters/12.jpg"
    },
    {
        id: 13,
        songName: `KUCH-TOH-BATA-ZINDAGI <br>
        <div class="subTitle">
            Jubin-Nautiyal
        </div>`,
        poster: "../posters/13.jpg"
    },
    {
        id: 14,
        songName: `MAAN-MERI-JAAN <br>
        <div class="subTitle">
            SHAIENDER-BHATI
        </div>`,
        poster: "../posters/14.jpg"
    },
    {
        id: 15,
        songName: `O-MERE DIL-KE TUKDE <br>
        <div class="subTitle">
            SHAILENDER-BHATI
        </div>`,
        poster: "../posters/15.jpg"
    },
    {
        id: 16,
        songName: `OUTLAW <br>
        <div class="subTitle">
            SIDDU-MOOSEWALA
        </div>`,
        poster: "../posters/16.jpg"
    },
    {
        id: 17,
        songName: `SUNO-NA-SANGMARMAR <br>
        <div class="subTitle">
            ARIJIT-SINGH
        </div>`,
        poster: "../posters/17.jpg"
    },
    {
        id: 18,
        songName: `TERE-HAWALE <br>
        <div class="subTitle">
            Arijit-Singh
        </div>`,
        poster: "../posters/18.jpg"
    },
    {
        id: 19,
        songName: `Yaariyan <br>
        <div class="subTitle">
            Unknown
        </div>`,
        poster: "../posters/19.jpg"
    },
    {
        id: 20,
        songName: `ZARA-SA <br>
        <div class="subTitle">
            KK
        </div>`,
        poster: "../posters/20.jpg"
    },
    {
        id: 21,
        songName: `UNEDUCATED <br>
        <div class="subTitle">
            Succha-yaar
        </div>`,
        poster: "../posters/21.jpg"
    },
]

// scrol the popular song scroll buttons

let pop_songs = document.getElementsByClassName("pop_songs")[0];
let left_scroll = document.getElementById("pop-left-scroll");
let right_scroll = document.getElementById("pop-right-scroll");

left_scroll.addEventListener("click", () => {
    pop_songs.scrollLeft -= 200;

});
right_scroll.addEventListener("click", () => {
    pop_songs.scrollLeft += 200;

});

// scroll the artist items


let artist_left = document.getElementById("artist_left_scroll");

let artist_right = document.getElementById("artist_right_scroll");

let item = document.getElementsByClassName("item")[0];

artist_left.addEventListener("click", () => {
    item.scrollLeft -= 200;

});
artist_right.addEventListener("click", () => {
    item.scrollLeft += 200;

});

// change the poster and title

Array.from(document.getElementsByClassName("songItem")).forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;


});

// master play
let masterPlay = document.getElementById("masterplay");
let wave = document.getElementById("wave");
let postermasterplay = document.getElementById("poster-masterplay");
let downloadsong = document.getElementById("downloadsong");
let title = document.getElementById("title");

masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime == 0) {
        music.play();
        wave.classList.add("active1");
        masterPlay.classList.add("bi-pause-fill");
        masterPlay.classList.remove("bi-play-fill");
    }
    else {
        music.pause();
        wave.classList.remove("active1");
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");
    }
});

// play desired music on click
let index = 0;

let makeallBackgrounds = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
        element.style.background = "rgb(105,105, 105,.0)";

    })
}

let makeallPlays = () => {
    Array.from(document.getElementsByClassName("playbutton")).forEach((element) => {
        element.classList.add("bi-play-circle-fill");
        element.classList.remove("bi-pause-circle-fill");
    });
}


let playlistitem = Array.from(document.getElementsByClassName("playbutton"));

playlistitem.forEach((element) => {
    element.addEventListener("click", (e) => {
        index = e.target.id;
        music.src = `../sounds/${index}.mp3`;
        music.play();
        postermasterplay.src = `../posters/${index}.jpg`;
        downloadsong.href = `../sounds/${index}.mp3`;
        masterPlay.classList.add("bi-pause-fill");
        masterPlay.classList.remove("bi-play-fill");
        wave.classList.add("active1");

        let songtitles = songs.filter((element) => {
            return element.id == index;
        });

        songtitles.forEach((e) => {
            let { songName } = e;
            title.innerHTML = songName;
            downloadsong.setAttribute("download", songName);
        });
        makeallBackgrounds();
        Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105,105, 105,.1)";
        makeallPlays();
        e.target.classList.add("bi-pause-circle-fill");
        e.target.classList.remove("bi-play-circle-fill");




    });
});

// update the music time

let starttime = document.getElementById("currentStart");
let endtime = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementsByClassName("bar2")[0];
let dot = document.getElementsByClassName("dot")[0];





music.addEventListener("timeupdate", () => {
    let curr_time = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    endtime.innerHTML = `${min1}:${sec1}`;

    let min2 = Math.floor(curr_time / 60);
    let sec2 = Math.floor(curr_time % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }

    starttime.innerHTML = `${min2}:${sec2}`;

    // update the bar

    let progressbar = Math.floor(curr_time / music_dur * 100);
    seek.value = progressbar;

    bar2.style.width = `${seek.value}%`;
    dot.style.left = `${seek.value}%`;

    seek.addEventListener("change", () => {
        music.currentTime = (seek.value * music.duration) / 100;
    });




});
// volume 
let volume = document.getElementById("volume");
console.log(volume.value)
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_icon = document.getElementById("vol_icon");
let vol_dot = document.getElementById("vol_dot");

volume.addEventListener("click", () => {
    if (volume.value == 0) {
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (volume.value > 0) {
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (volume.value > 50) {
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }
    let volbar = volume.value;
    vol_bar.style.width = `${volbar}%`;
    vol_dot.style.left = `${volbar}%`;
    music.volume = `${volbar / 100}`;

});

// backward and forward the songs
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let lastIndex = Array.from(document.getElementsByClassName("songItem")).length;
let playbutton = Array.from(document.getElementsByClassName("playbutton"));



backward.addEventListener("click", () => {

    if (index <= 1) {
        index = lastIndex;
    } else {
        index -= 1;
    }
    music.src = `../sounds/${index}.mp3`;
    music.play();
    postermasterplay.src = `../posters/${index}.jpg`;
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
    wave.classList.add("active1");
    makeallBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105,105, 105,.1)";
    makeallPlays();
    playbutton[index - 1].classList.add("bi-pause-circle-fill");
    playbutton[index - 1].classList.remove("bi-play-circle-fill");




    let songtitles = songs.filter((element) => {
        return element.id == index;
    });
    songtitles.forEach((e) => {
        let { songName } = e;
        title.innerHTML = songName;
    });
});

forward.addEventListener("click", () => {

    if (index >= lastIndex) {
        index = 1;
    } else {
        index += 1;

    }

    music.src = `../sounds/${index}.mp3`;
    music.play();
    postermasterplay.src = `../posters/${index}.jpg`;
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
    wave.classList.add("active1");
    makeallBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105,105, 105,.1)";
    makeallPlays();
    playbutton[index - 1].classList.add("bi-pause-circle-fill");
    playbutton[index - 1].classList.remove("bi-play-circle-fill");



    let songtitles = songs.filter((element) => {
        return element.id == index;
    });
    songtitles.forEach((e) => {
        let { songName } = e;
        title.innerHTML = songName;
    });

});

// suffel repeat and next song

let songCycle = document.getElementsByClassName("suffel")[0];
songCycle.addEventListener("click", () => {

    let a = songCycle.innerHTML;
    switch (a) {
        case "next":
            songCycle.classList.remove("bi-music-note-beamed");
            songCycle.classList.add("bi-arrow-repeat");
            songCycle.classList.remove("bi-shuffle");
            songCycle.innerHTML = "repeat";
            break;
        case "repeat":
            songCycle.classList.remove("bi-music-note-beamed");
            songCycle.classList.remove("bi-arrow-repeat");
            songCycle.classList.add("bi-shuffle");
            songCycle.innerHTML = "shuffle";
            break;
        case "shuffle":
            songCycle.classList.add("bi-music-note-beamed");
            songCycle.classList.remove("bi-arrow-repeat");
            songCycle.classList.remove("bi-shuffle");
            songCycle.innerHTML = "next";
            break;
    }

    



    // default:
    //     break;
});
music.addEventListener("ended", () => {
    let b = songCycle.innerHTML;
    switch (b) {
        case "next":
            next_song();
            break;
        case "repeat":
            repeat_song();
            break;
        case "shuffle":
            random_song();
            break;


    }
});

// next song
const next_song = () => {
    if (index > songs.length) {
        index = 1;
    }
    else {
        index++;
    }
    music.src = `../sounds/${index}.mp3`;
    music.play();
    postermasterplay.src = `../posters/${index}.jpg`;
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
    wave.classList.add("active1");
    makeallBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105,105, 105,.1)";
    makeallPlays();
    // playbutton[index - 1].classList.add("bi-pause-circle-fill");
    // playbutton[index - 1].classList.remove("bi-play-circle-fill");



    let songtitles = songs.filter((element) => {
        return element.id == index;
    });
    songtitles.forEach((e) => {
        let { songName } = e;
        title.innerHTML = songName;
    });
}

// repeat song
const repeat_song = () => {
    index;
    music.src = `../sounds/${index}.mp3`;
    music.play();
    postermasterplay.src = `../posters/${index}.jpg`;
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
    wave.classList.add("active1");
    makeallBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105,105, 105,.1)";
    makeallPlays();
    // playbutton[index - 1].classList.add("bi-pause-circle-fill");
    // playbutton[index - 1].classList.remove("bi-play-circle-fill");



    let songtitles = songs.filter((element) => {
        return element.id == index;
    });
    songtitles.forEach((e) => {
        let { songName } = e;
        title.innerHTML = songName;
    });
}

// random song
const suffel_song = () => {
    index = Math.floor(Math.random() * songs.length);
    music.src = `../sounds/${index}.mp3`;
    music.play();
    postermasterplay.src = `../posters/${index}.jpg`;
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
    wave.classList.add("active1");
    makeallBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105,105, 105,.1)";
    makeallPlays();
    // playbutton[index - 1].classList.add("bi-pause-circle-fill");
    // playbutton[index - 1].classList.remove("bi-play-circle-fill");



    let songtitles = songs.filter((element) => {
        return element.id == index;
    });
    songtitles.forEach((e) => {
        let { songName } = e;
        title.innerHTML = songName;
    });
}

// search result
let search_results = document.getElementsByClassName("search_results")[0];
let input = document.getElementsByTagName("input")[0];

songs.forEach((element)=>{
    const{id,songName,poster}=element;
    let card=document.createElement("a");
    card.classList.add("card");
    card.href="#"+id;
    card.innerHTML=` <img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>`
    search_results.appendChild(card);
});
input.addEventListener("keyup",()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName("a");
    for (let index = 0; index < items.length; index++) {
        let as=items[index].getElementsByClassName("content")[0];
        let text_value=as.textContent || as.innerHTML;
        if(text_value.toUpperCase().indexOf(input_value)>-1){
            items[index].style.display="flex"
        }else{
            items[index].style.display="none"
        }
        if (input.value==0) {
            search_results.style.display="none"
            
        } else {
            search_results.style.display="";
            
        }
        
        
    }
})
















