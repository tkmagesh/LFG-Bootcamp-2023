from sqlalchemy import create_engine, MetaData, Table, select

# create an instane of sqlalchemy engine
engine = create_engine("sqlite:///./books.sqlite")

# establish a connection to the database
conn = engine.connect()

# metadata information for sqlalchemy about the table
metadata = MetaData()
author_table = Table("author", metadata, autoload_with=engine)

# retrieving data from the database
select_stmt = select(author_table)
result = conn.execute(select_stmt)
print(result.all())
