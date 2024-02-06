
let box = document.querySelector("box");
let leftpart = document.querySelector("left-part");
let rightpart = document.querySelector("right-part");
let input = document.querySelector("input");
let button = document.querySelector("button");
let bracket = document.querySelector("bracket");
let img = document.querySelector("img");

const qrData = async() =>{
    let data = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250*250&data=${input.value}`);
    let convertData = data.url;
    // console.log(convertData);

    img.setAttribute("src",convertData);
    
}
button.addEventListener("click",qrData);

const myTime = () =>{
    setTimeout(()=>{
        window.location.reload()
    },12000)
};
myTime();


// const fname = () =>{

//     setTimeout(() => {
//         console.log(name);
//     }, 1000);
// };
// // fname();