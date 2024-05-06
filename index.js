
// const videoElement = document.getElementById('video');
// const button = document.getElementById('button');


// async function selectMediaStream (){

//     try {
//         const mediaStream =await navigator.mediaDevices.getDisplayMedia();
//         videoElement.srcobject = mediaStream;
//         videoElement.onloadeddata = () =>{
//             videoElement.play();
//         }
//     } catch (error) {
//         console.log("hello error", error)
//     }
// }
// selectMediaStream ();

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

 async function selectMediaStream (){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play()
        } 
    } catch (error) {
        console.log("hello error");
    }
}

button.addEventListener('click', async () =>{
    button.disabled = true;
    await videoElement.requestpictureInpicture();
    button.disabled = false;
})

selectMediaStream ();