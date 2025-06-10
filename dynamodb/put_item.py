import boto3

dynamodb = boto3.resource('dynamodb')
tabla = dynamodb.Table('pruebas')

def lambda_handler(event, context):
    tabla.put_item(
        Item={
            'usuarioID': '123',
            'itemID': '456',
            'categoria': 'libros',
            'descripcion': 'Descripción de ejemplo'
        }
    )
    return {
        'statusCode': 200,
        'body': 'Ítem insertado correctamente'
    }
