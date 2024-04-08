document.addEventListener('DOMContentLoaded', () =>{
    fetch('https://miggy.pythonanywhere.com/api/increment-view', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then(response => response.json())
    .then(data => {
        //Update view count on frontend
        document.getElementById('view-count').innerText = data.viewCount;
        console.log(data);
    })
    .catch(error => console.error('Error', error));
});