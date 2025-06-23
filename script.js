let currentSong = new Audio();
let allSongsData = {};
let songs = [];
let currFolder = "";

// Helper to format time
function secondstominutes(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingseconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingseconds.toString().padStart(2, "0")}`;
}

// Fetch the songs.json file once at startup
async function loadSongsData() {
  const res = await fetch('/songs.json');
  allSongsData = await res.json();
}

// Get list of songs for a specific folder (artist)
function getSongs(folderName) {
  currFolder = folderName;
  songs = allSongsData[folderName]; // list of mp3 file names (with .mp3)

  let songUL = document.querySelector(".songList ul");
  songUL.innerHTML = ""; // clear the list

  for (let song of songs) {
    songUL.innerHTML += `
      <li>
        <img style="filter: invert(1);" src="svg/music.svg" alt="music">
        <div class="songinfo">${song.replace(".mp3", "")}</div>
        <div class="playbtn">Play</div>
      </li>
    `;
  }

  Array.from(songUL.getElementsByTagName('li')).forEach((e) => {
    e.addEventListener('click', () => {
      let songName = e.querySelector('.songinfo').innerText.trim() + ".mp3";
      playMusic(songName); // songName already contains ".mp3"
    });
  });

  return songs;
}

// Play a given song
function playMusic(track, pause = false) {
  currentSong.src = `/songs/${currFolder}/` + track; // FIXED path
  if (!pause) {
    currentSong.play();
    play.src = "svg/pause.svg";
  }
  document.getElementById('songname').innerText = decodeURIComponent(track.replace(".mp3", ""));
}

// Attach event listeners
function eventListner() {
  // volume control
  document.querySelector(".volume input").addEventListener("change", (e) => {
    currentSong.volume = e.target.value / 100;
  });

  // Hamburger menu
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0%";
    document.querySelector(".left").style.opacity = "1";
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120vw";
    document.querySelector(".left").style.opacity = "0";
  });

  // Play/pause
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "svg/pause.svg";
    } else {
      currentSong.pause();
      play.src = "svg/play.svg";
    }
  });

  // Time update
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songduration").innerText = `
      ${secondstominutes(currentSong.currentTime)} / ${secondstominutes(currentSong.duration)}
    `;
    document.getElementById('round').style.left = `${
      (currentSong.currentTime / currentSong.duration) * 100
    }%`;
  });

  // Seekbar click
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.getElementById('round').style.left = percent + "%";
    currentSong.currentTime = (percent * currentSong.duration) / 100;
  });

  // Previous song
  previous.addEventListener("click", () => {
    let currentTrack = decodeURIComponent(currentSong.src.split("/").pop());
    let index = songs.indexOf(currentTrack);
    if (index > 0) playMusic(songs[index - 1]);
  });

  // Next song
  next.addEventListener("click", () => {
    let currentTrack = decodeURIComponent(currentSong.src.split("/").pop());
    let index = songs.indexOf(currentTrack);
    if (index < songs.length - 1) playMusic(songs[index + 1]);
  });

  // Mute/unmute
  document.querySelector(".volume>img").addEventListener("click", (e) => {
    if (e.target.src.includes("volume.svg")) {
      e.target.src = "/svg/mute.svg";
      currentSong.volume = 0;
      document.getElementById("vol").value = 0;
    } else {
      e.target.src = "/svg/volume.svg";
      currentSong.volume = 0.1;
      document.getElementById("vol").value = 10;
    }
  });

  // Card click to switch artist
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    e.addEventListener('click', async (item) => {
      let folder = item.currentTarget.dataset.folder;
      let newSongs = getSongs(folder); // Get new list
      playMusic(newSongs[0], true);    // Prepare first song
      currentSong.play();
      play.src = "svg/pause.svg";
    });
  });
}

// Main init
async function main() {
  await loadSongsData();
  eventListner();
  getSongs('Anjum'); // Load Anjum's list initially
  playMusic(songs[0], true); // Load first song paused
}

main();
