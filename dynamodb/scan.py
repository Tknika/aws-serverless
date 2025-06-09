import json
import boto3

dynamodb = boto3.resource('dynamodb')
tabla = dynamodb.Table('pruebas')

def lambda_handler(event, context):
    respuesta = tabla.scan()
    items = respuesta.get("Items", [])

    return {
        "statusCode": 200,
        "body": json.dumps(items)
    }