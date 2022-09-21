window.addEventListener('keypress',(event)=>{

    let btn = event.key.charCodeAt(0);
    let audio = document.querySelectorAll('audio');
 
    audio.forEach(function(key) {
        if (btn == parseInt(key.attributes[0].value))
            key.play();
    })
    
})