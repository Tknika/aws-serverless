import requests

def lambda_handler(event, context):
    response = requests.get("https://api.chucknorris.io/jokes/random")
    joke = response.json().get("value", "No joke found")

    return {
        "statusCode": 200,
        "body": joke
    }
