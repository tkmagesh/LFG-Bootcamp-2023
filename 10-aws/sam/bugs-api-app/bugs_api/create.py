import json
import boto3
import os

# import requests
# get the reference of dynamodb api (boto3)
dynamodb = boto3.resource('dynamodb')

# get the table name dynamically created from the environment variable
table_name = os.environ.get('BUGS_TABLE')

def lambda_handler(event, context):

    #get the table referece
    table = dynamodb.Table(table_name)

    #get the data from the request body
    bug = json.loads(event['body'])

    #save the data in the dynamodb table
    response = table.put_item(Item=bug)

    print(response)

    #return the response
    return {
        "statusCode": 201,
        "body": json.dumps({
            "message": "bug created",
            # "location": ip.text.replace("\n", "")
        }),
    }
