


function addImageBub(){
    document.querySelector(".openedImage").src = 'img/lil_bub.png';
    document.querySelector(".openedImgName").innerHTML = "Lil Bub"
    document.querySelector(".closeButton").innerHTML = "X"

}

function addImageBob(){
    document.querySelector(".openedImage").src = 'img/bob.png';
    document.querySelector(".openedImgName").innerHTML = "Bob az utcamacska"
    document.querySelector(".closeButton").innerHTML = "X"

}

function addImageGrumpy(){
    document.querySelector(".openedImage").src = 'img/grumpy.png';
    document.querySelector(".openedImgName").innerHTML = "Grumpy Cat"
    document.querySelector(".closeButton").innerHTML = "X"

}

function addImageColonel(){
    document.querySelector(".openedImage").src = 'img/colonel.png';
    document.querySelector(".openedImgName").innerHTML = "Meow ezredes"
    document.querySelector(".closeButton").innerHTML = "X"

}


function closeImage(){
    document.querySelector(".openedImage").src = '';
    document.querySelector(".openedImgName").innerHTML = ""
}

