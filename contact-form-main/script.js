document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted');
    alert('Thank you for your submission!');
    this.reset();
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log('Form submitted');
    
    // Show the popup
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    // Hide the popup after 3 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
    
    // Reset the form
    this.reset();
});