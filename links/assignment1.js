function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Celcius").innerHTML=(valNum-32)/1.8;