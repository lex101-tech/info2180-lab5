window.addEventListener("load", function() {
    const button = document.querySelector("#lookup");
    const input = document.querySelector("#country");
    const result = document.querySelector("#result");
    

    button.addEventListener("click", function() {
        const country = input.value.trim();
        const xhr = new XMLHttpRequest();
        xhr.open("GET","world.php?country=" + encodeURIComponent(country), true);

        xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                result.innerHTML = xhr.responseText;
            } else {
                result.textContent = "Error: " + xhr.status;
            }
        }
        };
        xhr.send();
    });

});
    
