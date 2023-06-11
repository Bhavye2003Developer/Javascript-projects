import math
import requests
from datetime import datetime


def getWeatherForecast(place="London"):
    api_key = "9ca7c6ad5789ec7f36eeded55c884d4c"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={place}&appid={api_key}&units=imperial"
    result = {}
    response = requests.get(url)

    result["lat"] = response.json()["coord"]["lat"]
    result["lon"] = response.json()["coord"]["lon"]
    result["weather"] = response.json()["weather"][0]["main"]
    result["description"] = response.json()["weather"][0]["description"]
    result["temp"] = response.json()["main"]["temp"]
    result["feels_like"] = response.json()["main"]["feels_like"]
    result[
        "temp_min"
    ] = f"Minimum temprature in celcius: {format((response.json()['main']['temp_min'] - 32) * (5/9), '.2f')} degree celcius"
    result[
        "temp_max"
    ] = f"Maximum temprature in celcius: {format((response.json()['main']['temp_max'] - 32) * (5/9), '.2f')} degree celcius"
    result["pressure"] = response.json()["main"]["pressure"]
    result["humidity"] = response.json()["main"]["humidity"]
    result["visibility"] = response.json()["visibility"]
    result["wind_speed"] = response.json()["wind"]["speed"]
    result["wind_deg"] = response.json()["wind"]["deg"]
    result["clouds"] = response.json()["clouds"]["all"]
    result["dt"] = datetime.fromtimestamp(response.json()["dt"])
    result["sys_country"] = response.json()["sys"]["country"]
    result["sys_sunrise"] = response.json()["sys"]["sunrise"]
    result["sys_sunset"] = response.json()["sys"]["sunset"]
    result["timezone"] = int(response.json()["timezone"])

    return result


place = input("Enter the place : ")

try:
    for key, value in getWeatherForecast(place).items():
        print(f"{key} : {value}")
except:
    print("Error occured")
