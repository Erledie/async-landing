const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9k0tTsh_qStx0HPuPftSsg&part=snippet%2Cid&order=date&maxResults=9'
const content = document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1217142b89msh622a1c219452de5p147872jsn9ace495b674e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(API, options)
    const data = await response.json()
    return data
}

(async () =>{
    try{
        const videos = await fetchData(API)
        let view = `${videos.items.map(video => `<div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span class="absolute inset-0" aria-hidden="true">${video.snippet.title}</span>
                </h3>
            </div>
        </div>`).slice(0,4).join('')}`
        content.innerHTML = view
    }catch(error){
        console.log(error)
    }
})();