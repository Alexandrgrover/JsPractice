function fetchDataFromApi(apiUrls){
    let promises = apiUrls.map(apiUrl => {
        return fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Request error ${apiUrl} : ${response.status}`)
                }

                return response.json()
            })
    })

    return Promise.all(promises);
}

const apiUrls = ['https://api.example.com/data1', 'https://api.example.com/data2']

fetchDataFromApi(apiUrls)
.then(results =>{
    console.log("Results fetched data from several API: ", results)
})
.catch(error => {
    console.error("Error fetch data from several API: ", error);
})