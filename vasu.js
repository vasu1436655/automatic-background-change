// console.log('hello')
// let c = document.getElementById("color")
// .addEventListener("input",function(){
//     document.body.style.background=this.value
    // console.log(this.value)
// })

// 2 nd method


function bgchange(){
    let s = "012345678abcdef"
    let color = "#"

    for(i=0;i<6;i++){

        let index = Math.floor(Math.random()*16)

        color=color+s[index]
    }
    document.body.style.background=color
}
setInterval(bgchange,1000)
