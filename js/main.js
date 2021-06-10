const URL = 'https://api.giphy.com/v1/gifs/'

const button = document.getElementById("sendButton")
const main = document.getElementById("main")
const inputElement = document.getElementById("search")

button.addEventListener('click', () => {
	searchGif(inputElement.value);
})

function searchGif(wordToSearch) {

	console.log('Palabra', wordToSearch);
	const fecthPromise = fetch(`${URL}search?api_key=${API_KEY}&q=${wordToSearch}&limit=50&offset=0&rating=g&lang=es`);

	fecthPromise.then(response => {
		console.log('result', response);
		return response.json();
	}).then(result => {
		madeGrid(result.data)
		console.log(result.data)
	}).catch(err => {
		console.log('Buu, falló: ', err)
	});

	function madeGrid(data) {
		//const images = data.map(anchor => `<li><a href="${anchor.bitly_url}" target="_blank">${anchor.title}</a></li>`).join("\n");
		//const ejMap = data.map(valor=>{console.log('Valor es: ', valor)})
		//const images = data.map(img => `<li><img src="${img.images.downsized.url}" /></li>`).join("\n");
		const images = data.map(img => `<img src="${img.images.downsized.url}" />`);
		console.log('images html', images)
		main.innerHTML = `${images}`
	}
}