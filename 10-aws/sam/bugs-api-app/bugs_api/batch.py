import simplejson as json
import boto3
import os
import logging

s3 = boto3.client('s3')
logger = logging.getLogger('bugsbatchprocessing')
logger.setLevel(logging.INFO)


# function to execute whenever a data file (json) is dropped in the S3 bucket
def lambda_handler(event, context):
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
        # process the bug
        logger.info(bug)