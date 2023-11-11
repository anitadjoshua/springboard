document.addEventListener("DOMContentLoaded", function(){
    let memeForm = document.getElementById("meme-form");
    let divElement = document.getElementById("meme-div");
    
    memeForm.addEventListener("submit", function(event){
        event.preventDefault();
        
        let imgDiv = document.createElement("div");
        let imgElement = document.createElement("img");
        let divTopElement = document.createElement("div");
        let divBottomElement = document.createElement("div");

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        
        imgDiv.className = "img-container";
       
       /* imgElement.src = document.getElementById("img-link").value;
        imgElement.alt ="Meme picture";
        imgElement.width = "300";
        imgElement.height = "300";
*/

        const imageUrl = document.getElementById("img-link").value;
        imgDiv.style.backgroundImage = `url(${imageUrl})`;
        imgDiv.width = "300";
        imgDiv.height = "1000";
        imgDiv.style.backgroundSize = 'cover'; 
        imgDiv.style.backgroundRepeat = 'no-repeat'; 
        imgDiv.style.backgroundPosition = 'center center'; 

        divTopElement.className = "top-element";
        divTopElement.innerText = document.getElementById("top-text").value;
        divBottomElement.className = "bottom-element";
        divBottomElement.innerText = document.getElementById("bottom-text").value;
        memeForm.reset();
        memeForm.appendChild(imgDiv);
       // divElement.appendChild(imgDiv);
       // imgDiv.appendChild(imgElement);
        imgDiv.appendChild(removeButton);
        imgDiv.appendChild(divTopElement);
        imgDiv.appendChild(divBottomElement);
 
     //   console.log("img="+document.getElementById("img-link").value);
    //   console.log("top text="+document.getElementById("top-text").value);
    //    console.log("bottom text="+document.getElementById("bottom-text").value);
       
    } );

 //add event listener for elements created at runtime
 divElement.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.tagName.toLowerCase() === "button") {
      event.target.parentNode.remove();
    }
});
   

});