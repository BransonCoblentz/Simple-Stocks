const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4e9ba4863mshe9332e8afdf8ecdp1ce4bajsnf317b29795ea',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};

fetch('https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=SPY&datatype=json', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        document.getElementById('price').innerText = '$' + response['Global Quote']['05. price']
        document.getElementById('percent-change').innerText = '%' + response['Global Quote']['10. change percent']
    })
	.catch(err => console.error(err));


    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd4e9ba4863mshe9332e8afdf8ecdp1ce4bajsnf317b29795ea',
            'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        }
    };
    
    fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news/SPY', options2)
        .then(response => response.json())
        .then(response => {
            document.getElementById('title').innerText = response.item[0].title;
            document.getElementById('link').href = response.item[0].link;
            document.getElementById('link').innerText = response.item[0].link;
            document.getElementById('title2').innerText = response.item[1].title;
            document.getElementById('link2').href = response.item[1].link;
            document.getElementById('link2').innerText = response.item[1].link;
            document.getElementById('title3').innerText = response.item[2].title;
            document.getElementById('link3').href = response.item[2].link;
            document.getElementById('link3').innerText = response.item[2].link;
        })
        .catch(err => console.error(err));