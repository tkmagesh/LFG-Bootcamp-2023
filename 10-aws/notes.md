# AWS #

# Why Cloud? #

## Cloud Characteristics ##
- On-demand self-service
- Broad network access
- Resource Pooling
- Rapid elasticity
- Measured service

## Types of Cloud ##
- public
- private (on-prem infrastructure as cloud)
- hybrid (on-prem + public cloud)

## Cloud Service (Delivery) Models
- IaaS (Infrastructure as a Service)
- PaaS (Platform as a Service)
- SaaS (Software as a Service)

### Shared Resonsibility Model ###
![image srm](./shared-resp-model.png)

- Computation
- Storage
    - EBS (Elastic Block Storage)
    - EFS (Elastic File System)
    - S3 (Simple Storage Service)
- Networking

## Elastic Block Storage ##
- Create a secondary volume and attach it to an instance
- Create a snapshot of the volume
- Copy the snapshot to a different region
- Create a volume from the snapshot in the other region

### Mounting a volume ###
- Create an instance
- Create a secondary volume
- Attach the secondary volume to the instance
- Mount the volume in the instance (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html)
    - To list the volumes
        - > lsblk
    - To determine the filesystem in the volume
        - > sudo file -s /dev/xvdf
    - If no filesystem exists, create a filesystem in the new volume
        - > sudo mkfs -t xfs /dev/xvdf
    - Create a folder to mount the volume
        - > sudo mkdir /data
    - Mount the volume
        - > sudo mount /dev/xvdf /data
- Create a sample file in the mounted volume
- Detach the volume from the instance
- Create a new instance and attach the above create volume to the newly created instance
- Mount the volume in the new instance
- Check for the existence of the file

## IAM (Identity & Access Management) ##
- User
- Group
- Policy (JSON)
- Role (Assumed by an AWS Serviec eg EC2, S3 etc)

## S3 (Simple Storage Service) (Managed Service) ##
- Buckets (synonymous to folders)
- Objects (files)
- Versioned
- Replicated across regions
- Storage Classes (tiers)
- Host static websites
- Even though a bucket is created in a specific region, one can access it from anywhere

### AWS CLI - S3 ###
- aws s3 ls
- aws s3 ls s3://magesh-s3-website
- aws s3 cp ./index.html s3://magesh-s3-website-original
- aws s3 cp ./ s3://magesh-s3-website-original --recursive
- aws s3 sync . s3://magesh-s3-website-original
- aws s3 sync . s3://magesh-s3-website-original --delete 
- aws s3 mb s3://magesh-test-cli-bucket

## CloudFront ##

## RDS (Relational Database As a Service) ##
- Supports
    - Postgres
    - MySql
    - Oracle
    - MariaDB
    - Microsoft SQL Server
- Advantages
    - Automated Provisional (OS patching)
    - Configure backups
    - Read replicas
    - Multi AZ
    - Uses EBS
    - Scale UP storage capacity dynamically
- Disadvantage
    - NO Scale out

```
create database my_app_db

CREATE TABLE
  `users` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `firstname` varchar(255) NOT NULL,
    `lastname` varchar(255) DEFAULT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
  ) 
  
insert into users (firstname, lastname) values ('','')

```

## Cloud Formation ##
### Infrastructure as code (IaC) ###

## Serverless 
- DynamoDB
- AWS Lambda
- API Gateway
- SQS
- SNS
- CloudWatch
- S3

### Framework
- SAM

## DynamoDB
- Traditional Solution (RDBMS)
    - SQL
    - Schema First
    - Aggregate, Joins, etc
    - ONLY vertical scaling
    - Horizontal scaling is only for Read Replicas (not for transactions)
- NoSQL
    - non-relational databases
    - scale horizontally
    - ex:
        - Redis (key/value)
        - MongoDB, CouchDB, RavenDB (document)
        - Cassandra (column)
        - Neo4j (graph)
        - Hybrid
    - No aggregations, Join, transactions
- AWS DynamoDB
    - Fully managed service
    - High availability with replication across multiple AZs
    - Distributed
    - Schema-less
    - Data is organized in terms of Tables
    - Keys
        - Primary key / Partition key (mandatory)
        - Sort key (optional)
    - Rows (also Items)
    - Fields can be dynamic
    - Cost? (Usage)
        - Read Capacity Units
        - Write Capacity Units
    - Read Modes
        - Eventual Consistent Read 
        - Strongly Consistent Read (twice costly)
```
aws dynamodb scan --table-name projects_table

aws dynamodb scan --table-name projects_table --projection-expression "project_id,project_name"

aws dynamodb scan --table-name projects_table --filter-expression "project_id = :data" --expression-attribute-values '{ ":data" : { "N" : "2" }}'

aws dynamodb scan --table-name projects_table --page-size=1

aws dynamodb scan --table-name projects_table --max-items 1 --starting-token eyJFeGNsdXNpdmVTdGFydEtleSI6IG51bGwsICJib3RvX3RydW5jYXRlX2Ftb3VudCI6IDF9

aws dynamodb put-item --table-name projects_table --item '{"project_name": { "S": "AWS Migration"},"created_at": { "S": "2023-09-08T09:15:40Z"},"project_id": { "N": "4"}}

aws dynamodb update-item --table-name projects_table --key '{ "project_id" : { "N" : "2"}}' --update-expression "SET project_name = :data" --expression-attribute-values '{ ":data" : { "S" : "Server AWS Migration"}}'

aws dynamodb delete-item --table-name projects_table --key '{"project_id" : {"N" : "2"}}'
```
## Conditional Writes ##
- attribute_exists
- attribute_not_exists
- attribute_type
- contains
- begins_with
- In

