document.getElementById('logoutBtn').addEventListener('click', function() {
    
    localStorage.removeItem('userSession');  
    sessionStorage.removeItem('userSession');  


    window.location.href = 'Index.html';  
});
