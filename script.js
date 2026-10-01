const weatherData = {
    Dhaka: {
        temp: 32,
        feels: 34,
        humidity: 65,
        wind: 12,
        pressure: 1012,
        visibility: 10,
        icon: "☀️",
        description: "Sunny"
    },

    Sylhet: {
        temp: 29,
        feels: 31,
        humidity: 78,
        wind: 8,
        pressure: 1010,
        visibility: 8,
        icon: "🌧️",
        description: "Light Rain"
    },

    Chittagong: {
        temp: 30,
        feels: 32,
        humidity: 72,
        wind: 15,
        pressure: 1011,
        visibility: 9,
        icon: "⛅",
        description: "Partly Cloudy"
    },

    Rajshahi: {
        temp: 34,
        feels: 36,
        humidity: 55,
        wind: 10,
        pressure: 1013,
        visibility: 11,
        icon: "☀️",
        description: "Sunny"
    },

    Khulna: {
        temp: 33,
        feels: 35,
        humidity: 60,
        wind: 11,
        pressure: 1012,
        visibility: 10,
        icon: "🌤️",
        description: "Mostly Sunny"
    },

    London: {
        temp: 18,
        feels: 17,
        humidity: 70,
        wind: 14,
        pressure: 1015,
        visibility: 12,
        icon: "☁️",
        description: "Cloudy"
    },

    Delhi: {
        temp: 35,
        feels: 38,
        humidity: 45,
        wind: 9,
        pressure: 1008,
        visibility: 7,
        icon: "☀️",
        description: "Sunny"
    },

    Islamabad: {
        temp: 28,
        feels: 29,
        humidity: 52,
        wind: 12,
        pressure: 1014,
        visibility: 10,
        icon: "🌤️",
        description: "Clear"
    },

    Karachi: {
        temp: 31,
        feels: 34,
        humidity: 68,
        wind: 18,
        pressure: 1009,
        visibility: 9,
        icon: "🌤️",
        description: "Partly Cloudy"
    },

    "New York": {
        temp: 22,
        feels: 21,
        humidity: 58,
        wind: 16,
        pressure: 1016,
        visibility: 13,
        icon: "☀️",
        description: "Clear"
    },

    "Los Angeles": {
        temp: 25,
        feels: 25,
        humidity: 50,
        wind: 11,
        pressure: 1018,
        visibility: 15,
        icon: "☀️",
        description: "Sunny"
    },

    Toronto: {
        temp: 17,
        feels: 16,
        humidity: 65,
        wind: 13,
        pressure: 1017,
        visibility: 12,
        icon: "🌥️",
        description: "Cloudy"
    },

    Dubai: {
        temp: 38,
        feels: 41,
        humidity: 40,
        wind: 14,
        pressure: 1007,
        visibility: 12,
        icon: "☀️",
        description: "Hot & Sunny"
    },

    "Abu Dhabi": {
        temp: 37,
        feels: 40,
        humidity: 42,
        wind: 13,
        pressure: 1008,
        visibility: 12,
        icon: "☀️",
        description: "Sunny"
    },

    Riyadh: {
        temp: 40,
        feels: 42,
        humidity: 25,
        wind: 10,
        pressure: 1005,
        visibility: 14,
        icon: "☀️",
        description: "Very Hot"
    },

    Doha: {
        temp: 39,
        feels: 43,
        humidity: 45,
        wind: 17,
        pressure: 1006,
        visibility: 11,
        icon: "☀️",
        description: "Sunny"
    },

    Singapore: {
        temp: 30,
        feels: 35,
        humidity: 82,
        wind: 9,
        pressure: 1009,
        visibility: 8,
        icon: "🌧️",
        description: "Rainy"
    },

    Tokyo: {
        temp: 24,
        feels: 25,
        humidity: 62,
        wind: 12,
        pressure: 1014,
        visibility: 13,
        icon: "🌤️",
        description: "Partly Cloudy"
    },

    Seoul: {
        temp: 21,
        feels: 21,
        humidity: 55,
        wind: 10,
        pressure: 1015,
        visibility: 12,
        icon: "☀️",
        description: "Clear"
    },

    Bangkok: {
        temp: 33,
        feels: 37,
        humidity: 76,
        wind: 8,
        pressure: 1008,
        visibility: 9,
        icon: "⛅",
        description: "Cloudy"
    },

    "Kuala Lumpur": {
        temp: 31,
        feels: 35,
        humidity: 80,
        wind: 7,
        pressure: 1009,
        visibility: 8,
        icon: "🌧️",
        description: "Rainy"
    },

    Paris: {
        temp: 19,
        feels: 18,
        humidity: 60,
        wind: 12,
        pressure: 1016,
        visibility: 14,
        icon: "🌤️",
        description: "Partly Cloudy"
    },

    Sydney: {
        temp: 20,
        feels: 19,
        humidity: 58,
        wind: 15,
        pressure: 1018,
        visibility: 15,
        icon: "☀️",
        description: "Sunny"
    },

    Istanbul: {
        temp: 23,
        feels: 23,
        humidity: 61,
        wind: 14,
        pressure: 1013,
        visibility: 11,
        icon: "🌤️",
        description: "Mostly Clear"
    },

    Mumbai: {
        temp: 30,
        feels: 34,
        humidity: 79,
        wind: 13,
        pressure: 1008,
        visibility: 8,
        icon: "🌧️",
        description: "Rainy"
    }
};

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");
const weatherIcon = document.getElementById("weatherIcon");
const weatherDescription = document.getElementById("weatherDescription");
const currentDate = document.getElementById("currentDate");
const cityList = document.getElementById("cityList");
const forecastContainer = document.getElementById("forecastContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const errorMessage = document.getElementById("errorMessage");

function updateDate() {
    const now = new Date();

    currentDate.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

function loadCity(city) {
    const data = weatherData[city];

    if (!data) {
        showError("City not found. Please select a city from the list.");
        return;
    }

    hideError();

    cityName.textContent = city;
    temperature.textContent = data.temp;
    feelsLike.textContent = data.feels;
    humidity.textContent = data.humidity + "%";
    wind.textContent = data.wind + " km/h";
    pressure.textContent = data.pressure + " hPa";
    visibility.textContent = data.visibility + " km";
    weatherIcon.textContent = data.icon;
    weatherDescription.textContent = data.description;

    createForecast(data.temp);

    document.querySelectorAll(".city-button").forEach(button => {
        button.classList.remove("bg-blue-600", "border-blue-500");

        if (button.dataset.city === city) {
            button.classList.add("bg-blue-600", "border-blue-500");
        }
    });
}

function createCityList() {
    cityList.innerHTML = "";

    Object.keys(weatherData).forEach(city => {
        const data = weatherData[city];

        const button = document.createElement("button");

        button.className =
            "city-button w-full flex items-center justify-between p-3 rounded-xl border border-slate-800 hover:bg-slate-800 transition text-left";

        button.dataset.city = city;

        button.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-2xl">${data.icon}</span>
                <div>
                    <p class="font-medium">${city}</p>
                    <p class="text-xs text-slate-500">${data.description}</p>
                </div>
            </div>

            <span class="font-bold">${data.temp}°</span>
        `;

        button.addEventListener("click", () => {
            loadCity(city);
        });

        cityList.appendChild(button);
    });
}

function createForecast(baseTemperature) {
    forecastContainer.innerHTML = "";

    const days = [
        "Tomorrow",
        "Day 2",
        "Day 3",
        "Day 4",
        "Day 5"
    ];

    const icons = [
        "☀️",
        "🌤️",
        "⛅",
        "🌧️",
        "☀️"
    ];

    const descriptions = [
        "Sunny",
        "Mostly Sunny",
        "Partly Cloudy",
        "Light Rain",
        "Clear"
    ];

    days.forEach((day, index) => {

        const change = [-2, 1, -1, 2, 0][index];

        const temp = baseTemperature + change;

        const card = document.createElement("div");

        card.className =
            "bg-slate-800/60 border border-slate-700 rounded-2xl p-5 text-center hover:bg-slate-800 transition";

        card.innerHTML = `
            <p class="text-slate-400 text-sm">${day}</p>

            <div class="text-4xl my-4">
                ${icons[index]}
            </div>

            <p class="font-semibold">
                ${descriptions[index]}
            </p>

            <p class="text-2xl font-bold mt-2">
                ${temp}°C
            </p>

            <p class="text-slate-500 text-sm mt-1">
                ${temp - 4}° / ${temp + 3}°
            </p>
        `;

        forecastContainer.appendChild(card);
    });
}

function searchCity() {
    const value = searchInput.value.trim().toLowerCase();

    if (!value) {
        showError("Please enter a city name.");
        return;
    }

    const city = Object.keys(weatherData).find(
        name => name.toLowerCase() === value
    );

    if (city) {
        loadCity(city);
        searchInput.value = "";
    } else {
        showError("City not found. Try one of the popular cities.");
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

function hideError() {
    errorMessage.classList.add("hidden");
}

searchBtn.addEventListener("click", searchCity);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchCity();
    }
});

updateDate();
createCityList();
loadCity("Dhaka");