import json
import boto3

dynamodb = boto3.resource('dynamodb')
tabla = dynamodb.Table('pruebas')

def lambda_handler(event, context):
    respuesta = tabla.get_item(Key={'usuarioID': '1', 'itemID': '456'})
    item = respuesta.get("Item")

    return {
        "statusCode": 200,
        "body": json.dumps(item)
    }