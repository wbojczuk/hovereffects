"use strict";

if(document.querySelector(".linkcrosshover")){
    const elems = document.querySelectorAll(".linkcrosshover");
    const elemLength = elems.length;
    for(let i = 0; i < elemLength; i++){
        const elem = elems[i];
        // CREATE ELEMS
        const divElem = document.createElement("div");
        const contentElem = divElem.cloneNode(false);
        contentElem.className = "content";
        const titleElem = divElem.cloneNode(false);
        titleElem.className = "title";
        const leg1Elem = divElem.cloneNode(false); 
        leg1Elem.className = "leg1";
        const leg2Elem = divElem.cloneNode(false);
        leg2Elem.className = "leg2";
        const subtitleElem = divElem.cloneNode(false);   
        subtitleElem.className = "subtitle";
        const imgElem = document.createElement("img");
        imgElem.className = "image";

        // ASSEMBLE ELEMS
        if(elem.hasAttribute("data-title")){
            titleElem.textContent = elem.dataset.title;
        }
        if(elem.hasAttribute("data-subtitle")){
            subtitleElem.textContent = elem.dataset.subtitle;
        }
        if(elem.hasAttribute("data-img")){
            imgElem.src = elem.dataset.img;
        }

        contentElem.appendChild(titleElem);
        contentElem.appendChild(leg1Elem);
        contentElem.appendChild(leg2Elem);
        contentElem.appendChild(subtitleElem);
        elem.append(contentElem);
        elem.append(imgElem);



    }
}

// ONLOAD FADE
window.onload = ()=>{
    
    if(document.querySelector(".load-fade-up")){
        setTimeout(()=>{
            const elems = document.querySelectorAll(".load-fade-up");
            const elemLength = elems.length;
            for(let i = 0; i < elemLength; i++){
                const elem = elems[i];
                elem.style.transform = "translateY(0)";
                elem.style.opacity = "1";
            }
        },100);
        
    }
    if(document.querySelector(".load-fade-down")){
        setTimeout(()=>{
            const elems = document.querySelectorAll(".load-fade-down");
            const elemLength = elems.length;
            for(let i = 0; i < elemLength; i++){
                const elem = elems[i];
                elem.style.transform = "translateY(0)";
                elem.style.opacity = "1";
            }
        },100);
        
    }
    if(document.querySelector(".load-fade-left")){
        setTimeout(()=>{
            const elems = document.querySelectorAll(".load-fade-left");
            const elemLength = elems.length;
            for(let i = 0; i < elemLength; i++){
                const elem = elems[i];
                elem.style.transform = "translateX(0)";
                elem.style.opacity = "1";
            }
        },100);
        
    }
    if(document.querySelector(".load-fade-right")){
        setTimeout(()=>{
            const elems = document.querySelectorAll(".load-fade-right");
            const elemLength = elems.length;
            for(let i = 0; i < elemLength; i++){
                const elem = elems[i];
                elem.style.transform = "translateX(0)";
                elem.style.opacity = "1";
            }
        },100);
        
    }
};