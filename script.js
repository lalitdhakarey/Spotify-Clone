//variable initialize
let index=1;
let song =new Audio("songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let range=document.getElementById("range");
let masterSongName=document.getElementById("masterSongName");
let gif=document.getElementById("gif");
let songitemPlay=document.querySelectorAll(".songitemPlay");
let volumebtn=document.getElementById("volumebtn");
let mute=document.getElementById("mute");

let songs = [
    {songName: "Heyy!- Fais", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Heroism- Niviro", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Building Dreams- Ripple", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "On & On- Daniel Levi", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Royalty- Maestro Chives", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Bane- Emin Nilsen", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Mortals- Warriyo", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"}
];

volumebtn.addEventListener("input", (e)=>{
    song.volume=e.target.value/100;
    if(song.volume==0){
        mute.classList.remove("fa-volume-high");
        mute.classList.add("fa-volume-xmark");
    }
    else{
        mute.classList.remove("fa-volume-xmark");
        mute.classList.add("fa-volume-high");
    }
})

//play pause
masterPlay.addEventListener("click", ()=>{


    if(song.paused || song.currentTime<=0){
        song.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause"); 
        gif.style.opacity=1; 

        makeAllPlays();
        document.getElementById(index).classList.remove("fa-circle-play");
        document.getElementById(index).classList.add("fa-circle-pause");
       
    }
    
    else{
        song.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play"); 
        gif.style.opacity=0;
        
        document.getElementById(index).classList.remove("fa-circle-pause");
        document.getElementById(index).classList.add("fa-circle-play");
        
    }
})

setInterval(()=>{
    let percentage=(song.currentTime/song.duration)*100
    range.value=percentage;
})

range.addEventListener("click", ()=>{
 song.currentTime=(range.value*song.duration)/100;
})


//event listener

const makeAllPlays=()=>{
    songitemPlay.forEach(element =>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play")
    })

}



songitemPlay.forEach(element => {
    element.addEventListener("click", (e)=>{
        makeAllPlays();

        if(element.classList[1]=="fa-circle-play"){
        element.classList.remove("fa-circle-play");
        element.classList.add("fa-circle-pause"); 

        index=parseInt(e.target.id, 10);
        song.src=`songs/${index}.mp3`;
        song.play();
        song.currentTime=0;

        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");  
      
        gif.style.opacity=1; 
        masterSongName.innerText = songs[index-1].songName;
        }

        else{
            song.pause();
            gif.style.opacity=0;

            element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play"); 

        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");  

        }
    })

})



document.getElementById("next").addEventListener("click", ()=>{
if(index>=songs.length){
    index=1;
}
else{
    index+=1;
}
song.src=`songs/${index}.mp3`;
masterSongName.innerText=songs[index-1].songName;
song.currentTime=0;
     song.play();
     gif.style.opacity=1; 
     masterPlay.classList.remove("fa-circle-play");
     masterPlay.classList.add("fa-circle-pause");

     makeAllPlays();
    document.getElementById(index).classList.remove("fa-circle-play");
    document.getElementById(index).classList.add("fa-circle-pause");
     
})

document.getElementById("previous").addEventListener("click", ()=>{
    if(index<=1){
        index=songs.length;
    }
    else{
        index-=1;
    }
    song.src=`songs/${index}.mp3`;
    masterSongName.innerText=songs[index-1].songName;
    song.currentTime=0;
         song.play();
         gif.style.opacity=1; 
         masterPlay.classList.remove("fa-circle-play");
         masterPlay.classList.add("fa-circle-pause");

         makeAllPlays();
    document.getElementById(index).classList.remove("fa-circle-play");
    document.getElementById(index).classList.add("fa-circle-pause");
    })


