var intervalID = setInterval(t, [1000]);

function t(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
