console.log("This is our first big project");
let currentSong = new Audio();
let songs;
let currFolder;

function secondstominutes(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingseconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingseconds.toString().padStart(2, "0")}`;
}

async function getSongs(folder) {
  currFolder = folder;
  let a = await fetch(`/${folder}/`);
  let response = await a.text();
  //   console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  //   console.log(as);

  songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }

  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
  // console.log(songUL);

  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `
     <li>
                                <img style="filter: invert(1);" src="svg/music.svg" alt="music">
                                <div class="songinfo">
                                    <div> ${song.replaceAll("%20", " ")}</div>
                                    
                                </div>
                                <div class="playbtn">
                                    <div>
                                        Play Now
                                    </div>    
                                        <span class="playsvg">

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" width="39"
                                            height="30" stroke-width="2.5" stroke="#ffffff" version="1.1" id="Capa_1"
                                            viewBox="0 0 60 60" xml:space="preserve">
                                            <g>
                                                <path
                                                    d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30   c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15   C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" />
                                                <path
                                                    d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
                                            </g>
                                        </svg>


                                        </span>
                                       
                                </div>

                            </li> `;
  }

  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      // console.log(e.querySelector(".songinfo").firstElementChild.innerHTML);
      playMusic(
        e.querySelector(".songinfo").firstElementChild.innerHTML.trim()
      );
    });
  });

  return songs;
}

const playMusic = (track, pause = false) => {
  currentSong.src = `/${currFolder}/` + track;
  // currentSong.play();
  // console.log(track);

  if (!pause) {
    currentSong.play();
    play.src = "svg/pause.svg";
  }

  document.getElementById("songname").innerHTML = decodeURI(track);
  // console.log(currentSong.duration);
  // document.querySelector(".songduration").innerHTML = "00:00 / 00:00";
};



function eventListner(){



  cardib.addEventListener("mouseover", () => {
    document.querySelector(
      ".travclass"
    ).innerHTML = `<img id="gif" src="assets/feinnn.gif" width="200px" alt="igf">`;
  });
  cardib.addEventListener("mouseout", () => {
    document.querySelector(
      ".travclass"
    ).innerHTML = `<img id="gif" src="assets/travis.jpg" width="200px" alt="igf">`;
  });

  kanyeb.addEventListener("mouseover", () => {
    document.querySelector(
      ".kanyeclass"
    ).innerHTML = `<img id="gif" src="assets/kanyee.gif" width="200px" alt="igf">`;
  });
  kanyeb.addEventListener("mouseout", () => {
    document.querySelector(
      ".kanyeclass"
    ).innerHTML = `<img id="gif" src="assets/kanye01.jpg" width="200px" alt="igf">`;
  });

  anjumb.addEventListener("mouseover", () => {
    document.querySelector(
      ".anjumclass"
    ).innerHTML = `<img id="gif" src="assets/talha-anjum.gif" width="200px" alt="igf">`;
  });
  anjumb.addEventListener("mouseout", () => {
    document.querySelector(
      ".anjumclass"
    ).innerHTML = `<img  src="assets/talha.webp" width="200px" alt="igf">`;
  });

  yunusb.addEventListener("mouseover", () => {
    document.querySelector(
      ".yunusclass"
    ).innerHTML = `<img id="gif" src="assets/yunuss.gif" width="200px" alt="igf">`;
  });
  yunusb.addEventListener("mouseout", () => {
    document.querySelector(
      ".yunusclass"
    ).innerHTML = `<img  src="assets/yunus.jpg" width="200px" alt="igf">`;
  });

  juiceb.addEventListener("mouseover", () => {
    document.querySelector(
      ".juiceclass"
    ).innerHTML = `<img id="gif" src="assets/juicewrld.gif" width="200px" alt="igf">`;
  });
  juiceb.addEventListener("mouseout", () => {
    document.querySelector(
      ".juiceclass"
    ).innerHTML = `<img  src="assets/juice.jpeg" width="200px" alt="igf">`;
  });

  kendrickb.addEventListener("mouseover", () => {
    document.querySelector(
      ".kendrickclass"
    ).innerHTML = `<img id="gif" src="assets/kendrickk.gif" width="200px" alt="igf">`;
  });

  kendrickb.addEventListener("mouseout", () => {
    document.querySelector(
      ".kendrickclass"
    ).innerHTML = `<img  src="assets/kendrick.jpeg" width="200px" alt="igf">`;
  });


  frank.addEventListener("mouseover", () => {
    document.querySelector(
      ".frankclass"
    ).innerHTML = `<img id="gif" src="assets/frankk.gif" width="200px" alt="igf">`;
  });

  frank.addEventListener("mouseout", () => {
    document.querySelector(
      ".frankclass"
    ).innerHTML = `<img  src="assets/frank.webp" width="200px" alt="igf">`;
  });


  
  document
    .querySelector(".volume")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      currentSong.volume = parseInt(e.target.value) / 100;
    });

  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0%";
    document.querySelector(".left").style.opacity = "1";
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120vw";
    document.querySelector(".left").style.opacity = "0";
  });


 

  
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "svg/pause.svg";
    } else {
      currentSong.pause();
      play.src = "svg/play.svg";
    }
  });

  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songduration").innerHTML = ` ${secondstominutes(
      currentSong.currentTime
    )} / ${secondstominutes(currentSong.duration)}`;
    document.getElementById("round").style.left = `${
      (currentSong.currentTime / currentSong.duration) * 100 + "%"
    }`;
  });




document.querySelector(".seekbar").addEventListener("click", (e) => {
  let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  console.log(percent);
  document.getElementById("round").style.left = percent + "%";
  currentSong.currentTime = (percent * currentSong.duration) / 100;
});

previous.addEventListener("click", () => {
  currentSong.pause();
  let change = currentSong.src.split("/").slice(-1)[0].replaceAll("%20", " ");
  console.log(change);
  let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
  // change.replaceAll("%20" , " ");
  songname.innerHTML = change;
  if (index - 1 >= 0) {
    playMusic(songs[index - 1]);
  }
});

next.addEventListener("click", () => {
  currentSong.pause();
  let change = currentSong.src.split("/").slice(-1)[0].replaceAll("%20", " ");
  console.log(change);
  let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
  // change.replaceAll("%20" , " ");
  songname.innerHTML = change;
  if (index + 1 < songs.length) {
    playMusic(songs[index + 1]);
  }
});

//event listener to mute the track

document.querySelector(".volume>img").addEventListener("click" , e =>{
  // console.log(e);

  if(e.target.src.includes("volume.svg")){
  e.target.src = "/svg/mute.svg"
  currentSong.volume = 0;
  document.getElementById("vol").value = 0;
  }

  else
  {
    e.target.src = e.target.src.replaceAll("mute.svg" , "volume.svg")
    currentSong.volume = .10;
    document.getElementById("vol").value = 10;



  }



});

Array.from(document.getElementsByClassName("card")).forEach(e=>{
  e.addEventListener("click" , async item => {
    // console.log(e);
    let songs = await getSongs (`songs/${item.currentTarget.dataset.folder}`);
    playMusic(songs[0] , true);
    currentSong.play();
    play.src = "svg/pause.svg";





  } ) 
  
})










}


async function main() {
  eventListner();
 
  await getSongs("songs/");
  //   console.log(songs)
  playMusic(songs[0], true);



}




  main(); 

console.log("Completed our First big Project")  