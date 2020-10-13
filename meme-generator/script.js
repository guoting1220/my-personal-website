const url = document.querySelector('#url');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const form = document.querySelector('#form');
const memesArea = document.querySelector('#memesArea');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    //create image element
    let img = document.createElement('img');
    img.src = url.value;
    img.classList.add("img");
    url.value = "";

    //create top text element
    let newTopText = document.createElement('p');
    newTopText.classList.add('topText');
    newTopText.classList.add('text');
    newTopText.innerText = topText.value;
    topText.value = "";

    // create bottom text element
    let newBottomText = document.createElement('p');
    newBottomText.classList.add('bottomText');
    newBottomText.classList.add('text');
    newBottomText.innerText = bottomText.value;
    bottomText.value = "";

    //create a containner for the image with texts, append the image and texts elements
    let imgTextDiv = document.createElement('div');
    imgTextDiv.classList.add('imgTextDiv');
    imgTextDiv.append(img);
    imgTextDiv.append(newTopText);
    imgTextDiv.append(newBottomText);

    //create delete button for the meme
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");

    //create a container for the delete button, append the delete button element
    let deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.classList.add("deleteBtnDiv");
    deleteBtnDiv.append(deleteBtn);

    //create the container for the completed meme, append the image&texts container and delete button container
    let memeBlock = document.createElement('div');
    memeBlock.classList.add("memeBlock");
    memeBlock.append(imgTextDiv);
    memeBlock.append(deleteBtnDiv);

    //append the meme container to the memes area.
    memesArea.append(memeBlock);
})


memesArea.addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.parentElement.remove();
    }
})