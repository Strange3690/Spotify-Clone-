console.log("Hello friends")

let songIndex = 0;
let audioElement = new Audio('./assets/Songs/1.m4a');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'))

let songs = [
    {songName: 'Chimbh Bhijalele', filePath: "./assets/Songs/1.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'Kaalbhairav Aashtakam', filePath: "./assets/Songs/2.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'Karpura Gauram Song', filePath: "./assets/Songs/3.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'LEO - Naa Ready Song', filePath: "./assets/Songs/4.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'Lokiverse Theme Video', filePath: "./assets/Songs/5.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'Namo Namo - Lyrical _ Kedarnath', filePath: "./assets/Songs/6.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'Pirates of the Caribbean', filePath: "./assets/Songs/7.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'Shaabaashiyaan', filePath: "./assets/Songs/8.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'Velai Illa Pattadhaari', filePath: "./assets/Songs/9.m4a", coverPath : "./assets/Images/onepiece.jpg"},
    {songName: 'VIKRAM', filePath: "./assets/Songs/10.m4a", coverPath : "./assets/Images/onepiece.jpg"},
];

// Filepath changing dynamically

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// Update Seekbar

audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;

})

// ---ALl Songs play symbol----

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('fa-play')
        element.classList.remove('fa-pause');
    })
}

// ---All songs play pause -----

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();

        if(audioElement.paused || audioElement.currentTime<=0){
            songIndex = parseInt(e.target.id);
            audioElement.src=`./assets/Songs/${songIndex + 1}.m4a`;
            masterSongName.innerText = songs[songIndex].songName;
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            gif.style.opacity=1;
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
        }else{
            songIndex = parseInt(e.target.id);
            audioElement.src=`./assets/Songs/${songIndex + 1}.m4a`;
            masterSongName.innerText = songs[songIndex].songName;
            e.target.classList.add('fa-play');
            e.target.classList.remove('fa-pause');
            gif.style.opacity=0;
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
        }
    })
})

// ====PREVIOUS BUTTON====

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src=`./assets/Songs/${songIndex + 1}.m4a`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})

// ====NEXT BUTTON====

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>= 9){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src=`./assets/Songs/${songIndex + 1}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    
})


// Handle Play/Pause

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;

    }else{
        audioElement.pause();
        masterplay.classList.add('fa-play');
        masterplay.classList.remove('fa-pause');
        gif.style.opacity=0;
    }
})


// Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPlays();
//         if(masterplay.classList.contains('fa-pause')){
//             e.target.classList.remove('fa-play');
//             e.target.classList.add('fa-pause');
//         }




//     })
// })