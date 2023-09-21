import simplejson as json
import boto3
import os
import logging

s3 = boto3.client('s3')
sns_client = boto3.client('sns')
logger = logging.getLogger('bugsbatchprocessing')
logger.setLevel(logging.INFO)


# function to execute whenever a data file (json) is dropped in the S3 bucket
def lambda_handler(event, context):
    topic = os.environ.get('BUG_CREATE_TOPIC')
    bucket = event['Records'][0]['s3']['bucket']['name']
    file_name = event['Records'][0]['s3']['object']['key']
    logger.info('Bucket: ' + bucket)
    logger.info('File: ' + file_name)
    # download the file from S3
    obj = s3.get_object(Bucket=bucket, Key=file_name)
    # convert the json file to a python dictionary
    file_content = obj['Body'].read().decode('utf-8')
    bugsToBeProcessed = json.loads(file_content)
    for bug in bugsToBeProcessed:
        # save the bug in the db
        # ...logger.info(bug)
        # send a message to the SNS topic
        sns_client.publish(
            TopicArn=topic,
            Message=json.dumps({'default' : json.dumps(bug)}),
            MessageStructure='json'
        )