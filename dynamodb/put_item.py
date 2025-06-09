import boto3

dynamodb = boto3.resource('dynamodb')
tabla = dynamodb.Table('pruebas')

def lambda_handler(event, context):
    tabla.put_item(
        Item={
            'usuarioID': 'user123',
            'itemID': 'item456',
            'descripcion': 'Descripción de ejemplo'
        }
    )
    return {
        'statusCode': 200,
        'body': 'Ítem insertado correctamente'
    }
