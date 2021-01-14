 /*
  * Adicionar a extensão:
  * Moesif Orign & CORS Changer
URL: https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc/related
  * 
  * Front:
  * Bootstrap CDN
  * URL: https://www.bootstrapcdn.com/
*/

// My API Key
var apikey = {
    key: '3b570e19-5495-485c-8429-34e9ccf9b114'
}

// GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + 
        apikey.key) // URI que faz a requisição.
        .then((response) => { // Tratamento de erro.
            if(!response.ok) 
            throw new Error('Erro ao executar a requisição, status ' + response.status);
            return response.json();
})
.then((api) => {    
    var texto = "";

    // Get 10 coins and symbols
  for (let i = 0; i < 10; i++) {
    // Show API information
    texto += `                
        <div class="media">                    
            <img src="img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">                   
                <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].first_historical_data}</p>
                </div>
            </div>
        `;                
        document.getElementById("coins").innerHTML = texto;
        }
    })
    .catch((error) => {
      console.error(error.message);
});