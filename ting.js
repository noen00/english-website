
const klikk= document.getElementById("klikk")
const tall= document.getElementById("tall")
const menu= document.getElementById("menu")
const dark=document.getElementById("dark")





menu.addEventListener("change",function(){
    var value= menu.value
    var text = menu.options[menu.selectedIndex].text;
    if (menu.value==3){
        window.location.href="text.html"
    }
    if (menu.value==2){
        window.location.href="podcast.html"
    }
    if (menu.value==1){
        window.location.href="index.html"
    }
})

dark.addEventListener("click",function(){


    var element=document.body
    element.classList.toggle("dark-mode");

})


