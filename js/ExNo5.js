function find(){
    let sent = document.getElementById("sent").value;
    let words = sent.split(" ");
    let max_l = words[0].length;
    let min_l = words[0].length;
    let max_w;
    let min_w;
    for (let i = 1; i<words.length; i++){
        if (words[i].length> max_l){
            max_l = words[i].length;
            max_w= words[i];
        }
        if (words[i].length< min_l){
            min_l = words[i].length;
            min_w = words[i];
        }
    }
    document.getElementById("ss").innerHTML = min_w;
    document.getElementById("ls").innerHTML = max_w;
}
function calculate () {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight/(height*height);
    console.log(weight, height, bmi);
    document.getElementById("score").innerHTML = bmi;
    if (bmi < 18){
        document.getElementById("type").innerHTML = "Underweight";
    }
    else if (bmi >= 18 && bmi < 25){
        document.getElementById("type").innerHTML = "Normal";
    }
    else if (bmi >= 25 && bmi < 30){
        document.getElementById("type").innerHTML = "Overweight";
    }
    else{
        document.getElementById("type").innerHTML = "Obese";
    }
}
function grow(){
    let fruits = ["img/apple.jpg","img/orange.jpg"];
    let r = parseInt(document.getElementById("rows").value);
    let c = parseInt(document.getElementById("columns").value); 
    for(var i=0;i<r;i++){
        for(var j=0;j<c;j++){
            let choice = Math.floor((Math.random() *fruits.length) +0);
            document.getElementById("garden").innerHTML += "<img src="+fruits[choice]+" width =100px height= 100px>";
        }
        document.getElementById("garden").innerHTML += "<br>";
    }
}
function convert(){
    let from = document.getElementById("from").selectedIndex;
    let from_value = document.getElementById("from").value;
    let to = document.getElementById("to").selectedIndex;
    let to_value = document.getElementById("to").value;
    let data = parseFloat(document.getElementById("data").value);
    if (from_value=="Indian Rupee" && to_value=="US Dollar"){
        document.getElementById("answer").innerHTML = data*0.015+" Dollars";
    }
    else{
        document.getElementById("answer").innerHTML = data*67.12+" Rupees";
    }
}
let head = 0;
let tail = 0;
function flipFunction(){
    let faces = ["img/tails.jpg","img/heads.jpg"];
    let choice = Math.floor((Math.random() *faces.length) +0);
    document.getElementById("coin").src = faces[choice];
    if (choice == 0){
        tail += 1;
        document.getElementById("num_tails").innerHTML = tail;
        
    }
    else{
        head += 1;
        document.getElementById("num_heads").innerHTML = head;
    }
}
function cost(){
    let small = parseInt(document.getElementById("small").value);
    let medium = parseInt(document.getElementById("medium").value);
    let large = parseInt(document.getElementById("large").value);
    let tip = document.querySelector('input[name="tip"]:checked').value;
    let order = small*100 + medium*200 + large*400;
    let tax = 0.09*order;
    let price = order + tax + tip/100*(tax + order);
    document.getElementById("price").innerHTML = price;
}
