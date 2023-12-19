console.log("page loading...");

// index     0  1   2
 var mohamed= [9, 12, 9];
var ahmed = [
    document.querySelector("#food-1"),
    document.querySelector("#food-2"),
    document.querySelector("#food-3"),
];

function like(id) {
    mohamed[id]++;
   ahmed[id].innerHTML = mohamed[id] + "like(s)";
   
}


