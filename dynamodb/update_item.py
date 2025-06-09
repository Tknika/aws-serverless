import boto3

dynamodb = boto3.resource('dynamodb')
tabla = dynamodb.Table('pruebas')

def lambda_handler(event, context):
    tabla.update_item(
        Key={
            'usuarioID': 'user123',
            'itemID': 'item456'
        },
        UpdateExpression='SET descripcion = :d',
        ExpressionAttributeValues={
            ':d': 'Descripción actualizada'
        }
    )
    return {
        'statusCode': 200,
        'body': 'Ítem actualizado correctamente'
    }
