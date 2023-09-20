import simplejson as json
import boto3
import os
from boto3.dynamodb.conditions import Key

# import requests
dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('BUGS_TABLE')

def lambda_handler(event, context):
    table = dynamodb.Table(table_name)
    # get the requested bug id from the route parameter (id)
    bug_id = int(event['pathParameters']['id'])

    # query the table for the bug with the requested id
    response = table.query(KeyConditionExpression=Key('id').eq(bug_id))
    print(response)
    return {
        "statusCode": 200,
        "body": json.dumps(response['Items']),
    }
