const key = '61504d81ab2a112eb61d1bce61953cd8';
// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=rasht&appid=61504d81ab2a112eb61d1bce61953cd8';
// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async(city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;
    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data;
}