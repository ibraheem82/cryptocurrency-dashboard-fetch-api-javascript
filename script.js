
var baseUrl = "https://api.coinranking.com/v2/coins"

// ! this [proxyUrl] will help us avoid the [CORS] errors by the api.
// var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey = "coinranking2ba9081822786472c5a6293613a245802107281ebc1d75fe"





fetch(`${baseUrl}`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${apiKey}`,
        // ! [Access-Control-Allow-Origin] also prevents the cors errors
        'Access-Control-Allow-Origin': '*'
     }
    //  * it is going to return a promise
}).then((response) => {
    // console.log(respone);
    if(response.ok){
        response.json().then((json) => {
            console.log(json.data.coins);
            let coinsData = json.data.coins;
            if(coinsData.lenght > 0) {
                var cryptoCoins = "";
            }
            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>";
                cryptoCoins += `<td><img src="${coin.iconUrl}" style="width:40px;"></td>`;
                cryptoCoins += `<td>${coin.uuid}</td>`;
                cryptoCoins += `<td>${coin.btcPrice}</td>`;
                cryptoCoins += `<td>${coin.rank}</td>`;
                cryptoCoins += `<td>${coin.tier}</td>`;
                cryptoCoins += `<td>${coin.name}</td>`;
                cryptoCoins += `<td>${Math.round(coin.price)} Billions</td>`;
                cryptoCoins += `<td>${coin.symbol}</td>`; 
                "</tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins;
        })
    }
}).catch((error) => {
    console.log(error);
})