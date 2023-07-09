function convertTemperature() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");

  // Check if input is empty
  if (celsiusInput.value === "") {
    fahrenheitInput.value = "";
    return;
  }

  // Convert Celsius to Fahrenheit
  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = celsius * 9 / 5 + 32;

  // Display the result
  fahrenheitInput.value = fahrenheit.toFixed(2);
}
