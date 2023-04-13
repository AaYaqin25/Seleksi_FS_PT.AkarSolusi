// implementasi Singleton di javascript :

const Singleton = (function () {
    let instance;

    function createInstance() {
        const object = new Object("Ini contoh objek Singleton");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);


// implementasi pola desain Observer di javascript

// Subject 
class WeatherStation {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }

    // method untuk update data cuaca
    updateWeather(data) {
        console.log(`Cuaca di ${data.city} saat ini: ${data.temperature} derajat Celsius`);
        this.notifyObservers(data);
    }
}

// Observer
class PhoneDisplay {
    constructor(weatherStation) {
        this.weatherStation = weatherStation;
        this.weatherStation.addObserver(this);
    }

    update(data) {
        console.log(`Ponsel: Cuaca di ${data.city} saat ini: ${data.temperature} derajat Celsius`);
    }

    unsubscribe() {
        this.weatherStation.removeObserver(this);
    }
}

// Observer
class TVDisplay {
    constructor(weatherStation) {
        this.weatherStation = weatherStation;
        this.weatherStation.addObserver(this);
    }

    update(data) {
        console.log(`TV: Cuaca di ${data.city} saat ini: ${data.temperature} derajat Celsius`);
    }

    unsubscribe() {
        this.weatherStation.removeObserver(this);
    }
}

// Implementasi
const weatherStation = new WeatherStation();
const phoneDisplay = new PhoneDisplay(weatherStation);
const tvDisplay = new TVDisplay(weatherStation);

weatherStation.updateWeather({ city: 'Jakarta', temperature: 30 });
phoneDisplay.unsubscribe();

weatherStation.updateWeather({ city: 'Surabaya', temperature: 32 });