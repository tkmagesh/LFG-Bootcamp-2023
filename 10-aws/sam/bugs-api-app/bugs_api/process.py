import simplejson as json
import boto3
import os
import logging

logger = logging.getLogger('processbug')
logger.setLevel(logging.INFO)


# function to execute whenever a data file (json) is dropped in the S3 bucket
def lambda_handler(event, context):
    logger.info('Bug : ' + event['Records'][0]['Sns']['Message'])
    # Update this function to write the bug to the dynamodb table