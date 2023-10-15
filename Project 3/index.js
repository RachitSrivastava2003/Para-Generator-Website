// -------------------------- Word Generate Function -----------------------------------------------

let word = (n)=>{
    let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let words=" ";
    for(let i=0;i<n;i++){
        words+=alphabet[(Math.random()*10).toFixed(0)];
    }
    return words;
}

// ----------------------------------------------------------------------------------
// ----------------------------------- Paragraph Generate Function ----------------------------------------
let para = (input)=>{
    let paragraph="";
    for(let i=0;i<input;i++){
        let temp= word((Math.random()*10).toFixed(0));
        paragraph+=temp;
        paragraph+=" ";
    }
    return paragraph;
}
// ---------------------------------------------------------------------------------
// -------------------- Take User Data Function -----------------------------------
let input = document.getElementById("num");

let getdata=()=>{
    let store=para(Number(input.value));
    createp(String(store));
}
// --------------------------------------------------------------------------------
// ------------------------------ Create Function -------------------------------------------
let createp=(data)=>{

    let b =document.querySelector(".container");
    let c = document.createElement("p");
    c.innerText= data;
    b.append(c);
}
// --------------------------------------------------------------------------------
// --------------------------------- Remove Function -------------------------------------------
let del=()=>{
    let d = document.querySelector("p");
    d.remove();
}
// --------------------------------------------------------------------------------
