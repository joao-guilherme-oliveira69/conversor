const button = document.getElementById("convert_btn")

button.addEventListener("click",function(){
  const real = document.getElementById("real").value
  const convert_coin = document.getElementById("convert_coin")
  const selectedCoin = document.getElementById("coin_selector").value;

  const apiKey = 'fe801a9bd1a9d3ad5ed42f67';
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/BRL`;

  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let rate;
      
      switch(selectedCoin) {
        case "dolar":
          rate = data.conversion_rates.USD;
          convert_coin.value = (real * rate).toFixed(2) + " $";
          break;

        case "EUR":
          rate = data.conversion_rates.EUR;
          convert_coin.value = (real * rate).toFixed(2) + " €";
          break;

        case "GBP":
          rate = data.conversion_rates.GBP;
          convert_coin.value = (real * rate).toFixed(2) + " £";
          break;

        case "JPY":
          rate = data.conversion_rates.JPY;
          convert_coin.value = (real * rate).toFixed(2) + " ¥";
          break;

        default:
          convert_coin.value = "Moeda não suportada.";
      }
    })
    .catch(error => {
      console.error('Erro ao obter as taxas de câmbio:', error);
      convert_coin.value = "Erro ao obter taxas.";
    });
});