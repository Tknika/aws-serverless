import boto3
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('pruebas')

usuario_id = '123'

respuesta = table.query(
    KeyConditionExpression=Key('usuarioID').eq(usuario_id),
    FilterExpression=Attr('categoria').eq('libros')
)

    items = respuesta.get("Items", [])

    return {
        "statusCode": 200,
        "body": json.dumps(items)
    }
