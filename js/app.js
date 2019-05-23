(function() {
    document.getElementById("copyright-year").textContent = (new Date()).getFullYear();
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        alert("Thank you for your submission, you will be contacted shortly");
    });
    
    let happinessMeter = document.getElementById("form-happiness");
    happinessMeter.addEventListener("input", function(event) {
        document.getElementById("form-happiness-output").textContent = this.value;
        if (this.value < 14) {
            document.getElementById("form-happiness-output").style.color = "red";
        } else if (this.value < 28) {
            document.getElementById("form-happiness-output").style.color = "orange";
        } else if (this.value < 42) {
            document.getElementById("form-happiness-output").style.color = "yellow";
        } else if (this.value < 56) {
            document.getElementById("form-happiness-output").style.color = "green";
        } else if (this.value < 70) {
            document.getElementById("form-happiness-output").style.color = "blue";
        } else if (this.value < 84) {
            document.getElementById("form-happiness-output").style.color = "indigo";
        } else if (this.value >= 84) {
            document.getElementById("form-happiness-output").style.color = "violet";
        }
    });
    
    let colourMeter = document.getElementById("form-colour");
    colourMeter.addEventListener("input", function(event) {
        document.getElementById("form-colour-output").textContent = this.value;
        document.getElementById("form-colour-output").style.color = this.value;
    });
}());