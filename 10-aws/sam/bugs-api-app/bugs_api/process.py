import simplejson as json
import boto3
import os
import logging

logger = logging.getLogger('processbug')
logger.setLevel(logging.INFO)

# get the reference of dynamodb api (boto3)
dynamodb = boto3.resource('dynamodb')

# get the table name dynamically created from the environment variable
table_name = os.environ.get('BUGS_TABLE')
table = dynamodb.Table(table_name)

# function to execute whenever a data file (json) is dropped in the S3 bucket
def lambda_handler(event, context):
    bug_str = event['Records'][0]['Sns']['Message']
    logger.info('Bug : ' + bug_str)
    # Update this function to write the bug to the dynamodb table
    
    #get the data from the request body
    bug = json.loads(bug_str)

    #save the data in the dynamodb table
    response = table.put_item(Item=bug)
