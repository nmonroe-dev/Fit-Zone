const apiKey = "EHBubyEaAdoN2xtLixo62g==uG1c3k6WA7qKr3Tg"; 
fetch(`https://api.api-ninjas.com/v1/exercises?muscle=chest`, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey
    }
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Fetch error:', error);
});
