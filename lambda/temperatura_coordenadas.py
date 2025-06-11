import requests

def lambda_handler(event, context):
    response = requests.get("https://api.open-meteo.com/v1/forecast", params={
        "latitude": 43.3128,
        "longitude": -1.975,
        "current": "temperature_2m"
    })

    data = response.json()
    temperatura = data.get("current", {}).get("temperature_2m")

    mensaje = f"Temperatura actual: {temperatura}°C"

    return {
        "statusCode": 200,
        "body": mensaje
    }
