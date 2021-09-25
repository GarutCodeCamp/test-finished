const apiKey = '5mioeMFTkhOA8A2JSAbf6RmYwPHN9eME';

const searchGIF = (search) => fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`).then(res => res.json())
const fakeStore = () => fetch('https://fakestoreapi.com/products', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
export { searchGIF, fakeStore }