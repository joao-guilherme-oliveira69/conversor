const button = document.getElementById("convert_btn")

button.addEventListener("click",function(){
  const real = document.getElementById("real").value
  const convert_coin = document.getElementById("convert_coin")

  switch(document.getElementById("coin_selector").value){
    case "dolar" : 
      convert_coin.value = (real / 5.51).toFixed(2)+" $";
      break

    case "EUR" :
      convert_coin.value = (real / 6.13).toFixed(2)+" €"   
      break 

    case "GBP" :
      convert_coin.value =  (real / 7.27).toFixed(2)+" £"
      break 

    case "JPY" :
      convert_coin.value = (real / 0.039).toFixed(2)+" ¥"
      break 
  }
})