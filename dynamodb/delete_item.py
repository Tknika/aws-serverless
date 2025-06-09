import boto3

dynamodb = boto3.resource('dynamodb')
tabla = dynamodb.Table('pruebas')

def lambda_handler(event, context):
    tabla.delete_item(
        Key={
            'usuarioID': 'user123',
            'itemID': 'item456'
        }
    )
    return {
        'statusCode': 200,
        'body': 'Ítem borrado correctamente'
    }
