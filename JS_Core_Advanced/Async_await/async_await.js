async function fetchDataFromServers(serverUrls) {
    try {

        let promises = serverUrls.map(async (url) => {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Ошибка при запросе ${url}: ${response.status}`);
            }
            return response.json();
        });

        let results = await Promise.all(promises);
        return results;
    } catch (error) {
        throw new Error(`Ошибка загрузки данных: ${error.message}`);
    }
}

const serverUrls = ['https://cat-fact.herokuapp.com', 'https://cat-fact.herokuapp.com'];

fetchDataFromServers(serverUrls)
    .then(results => {
        console.log("Результаты загрузки данных с нескольких серверов:", results);
    })
    .catch(error => {
        console.error("Ошибка загрузки данных:", error);
    });