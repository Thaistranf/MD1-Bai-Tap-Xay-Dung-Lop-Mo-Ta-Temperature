class Temperature {
    celsius;
    constructor(celsius) {
        this.celsius = celsius;
    }
    getFahrenheit(){
        return this.celsius / 5 * 9 + 32;
    }
    getKelvin() {
        return this.celsius + 273.15;
    }
}
let temperature = new Temperature(25);
alert(`25 độ C = ${temperature.getFahrenheit()} độ F`);
alert(`25 độ C = ${temperature.getKelvin()} độ Kelvin`);
