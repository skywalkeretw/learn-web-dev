function hello() {
    alert("hello world")
}

function text() {
    value = document.getElementById("text-in").value    
    msg = "Odin: \"" + value.toUpperCase() + "\""
    document.getElementById("text-out").innerHTML = msg
}