const clickMehtod = () => {
    window.preventDefault();
    window.onload = (event) => {
    event.preventDefault();
    const ip = document.getElementById('realIP');
    console.log(ip);
    fetch(`http://ip-api.com/json/${ip}`, {
        method: 'GET',
    })
    .then(res => {
            console.log(res.json())
            return res.json();
        })
        // .then(data => {
        //     // document.getElementById('imageOfDay').src= data.hdurl
        //     console.log(data)
        // })
            .catch(error => console.log('ERROR', error))
    }}