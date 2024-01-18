document.addEventListener("DOMContentLoaded", function(){
    let memeForm = document.getElementById("meme-form");
    let divElement = document.getElementById("meme-div");
    
    memeForm.addEventListener("submit", function(event){
        event.preventDefault();
        
        let imgDiv = document.createElement("div");
        let divTopElement = document.createElement("div");
        let divBottomElement = document.createElement("div");

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        
        imgDiv.className = "img-container";

        const imageUrl = document.getElementById("img-link").value;
        const imageUrlWithQuotes = imageUrl.replace(/&quot;/g, '"');
        imgDiv.style.backgroundImage = `url(${imageUrlWithQuotes})`;

        divTopElement.className = "top-element";
        divTopElement.innerText = document.getElementById("top-text").value;
        divBottomElement.className = "bottom-element";
        divBottomElement.innerText = document.getElementById("bottom-text").value;
        memeForm.reset();
        divElement.appendChild(imgDiv);
        imgDiv.appendChild(removeButton);
        imgDiv.appendChild(divTopElement);
        imgDiv.appendChild(divBottomElement);
       
    } );

 //add event listener for elements created at runtime
 divElement.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.tagName.toLowerCase() === "button") {
      event.target.parentNode.remove();
    }
});
   

});