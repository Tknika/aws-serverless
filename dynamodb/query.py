import json
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
tabla = dynamodb.Table('pruebas')

def lambda_handler(event, context):
    respuesta = tabla.query(
        KeyConditionExpression=Key('usuarioID').eq('123') & Key('itemID').eq('456')
    )
    items = respuesta.get("Items", [])

    return {
        "statusCode": 200,
        "body": json.dumps(items)
    }