import requests

def lambda_handler(event, context):
    ciudad = "donostia"

    openstreetmap_response = requests.get("https://nominatim.openstreetmap.org/search", params={
        "q": ciudad,
        "format": "json",
    }, headers = {
        "User-Agent": "mi-lambda/1.0 contacto@ejemplo.com"
    })

    data = openstreetmap_response.json()
    latitud = data[0].get("lat")
    longitud = data[0].get("lon")

    open_meteo_response = requests.get("https://api.open-meteo.com/v1/forecast", params={
        "latitude": latitud,
        "longitude": longitud,
        "current": "temperature_2m"
    })

    data = open_meteo_response.json()
    temperatura = data.get("current", {}).get("temperature_2m")

    mensaje = f"Temperatura actual en {ciudad}: {temperatura}°C"

    return {
        "statusCode": 200,
        "body": mensaje
    }