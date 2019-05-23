(function() {
    document.getElementById("copyright-year").textContent = (new Date()).getFullYear();
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        alert("Thank you for your submission, you will be contacted shortly");
    });
}());