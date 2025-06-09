import json

def lambda_handler(event, context):
    data = event["queryStringParameters"]
    tipo = data["tipo"]
    print("Tipo de parametro recibido:", tipo)

    return {
        "statusCode": 200,
        "body": json.dumps({"mensaje": f"Tipo de parametro recibido: {tipo}"})
    }
