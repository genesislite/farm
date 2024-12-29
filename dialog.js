// Dialog system functions
function showDialog() {
    const dialogBox = document.getElementById('dialogBox');
    dialogBox.style.display = 'block';
    
    // Disable character movement while dialog is open
    window.movementKeys = { w: false, a: false, s: false, d: false };
}

function closeDialog() {
    const dialogBox = document.getElementById('dialogBox');
    dialogBox.style.display = 'none';
}

// Close dialog when pressing ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDialog();
    }
});