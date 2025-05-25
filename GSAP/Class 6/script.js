// function breakText(){
//     var h1 = document.querySelector("h1")
//     var h1Text = h1.textContent

//     var splittedText = h1Text.split("")


//     var clutter = ""

//     splittedText.forEach(function(e){
//         clutter += `<span>${e}</span>`
//     })

//     h1.innerHTML = clutter
// }


// breakText()


// gsap.from("h1 span", {
//     y: 100,
//     duration: 0.5,
//     stagger: -0.1,
//     delay: 0.5,
//     opacity: 0,
// })



function breakText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")


    var clutter = ""

    var halfValue = Math.floor(splittedText.length / 2)
    console.log(halfValue)
    splittedText.forEach(function(e, idx){
        if(idx < halfValue){
            clutter += `<span class="a">${e}</span>`
        }else{  
            clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter
}


breakText()


gsap.from("h1 span.a", {
    y: 100,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.5,
    opacity: 0,
})

gsap.from("h1 span.b", {
    y: 100,
    duration: 0.5,
    stagger: -0.1,
    delay: 0.5,
    opacity: 0,
})