from sqlalchemy import create_engine, MetaData, Table, select, insert, update, delete

class Author:
    def __init__(self, id, first_name, last_name):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        
    def __repr__(self):
        return f"Author({self.id},'{self.first_name}','{self.last_name})"
    
    def __str__(self):
        return f"Author({self.id},'{self.first_name}','{self.last_name})"


# create an instane of sqlalchemy engine
engine = create_engine("sqlite:///./books.sqlite")

# establish a connection to the database
conn = engine.connect()

# metadata information for sqlalchemy about the table
metadata = MetaData()
author_table = Table("author", metadata, autoload_with=engine)

def get_all_authors():
    # retrieving data from the database
    select_stmt = select(author_table)
    result = conn.execute(select_stmt)
    author_rows = result.all()
    authors = []
    for author_row in author_rows:
        author = Author(author_row[0], author_row[1], author_row[2]) # convert the row into a domain object (Author)
        authors.append(author)
    return authors # list of domain objects

def insert_new_author(author):
# inserting new data
    insert_stmt = insert(author_table).values(first_name=author.first_name, last_name=author.last_name)
    result = conn.execute(insert_stmt)
    new_author_id = result.inserted_primary_key[0] # primary key value of the newly created row
    conn.commit()

    # retrieve the newly created author row
    select_newly_created_stmt = select(author_table).where(author_table.c.author_id == new_author_id)
    new_author_result = conn.execute(select_newly_created_stmt)
    new_author_row = new_author_result.all()[0]
    new_author = Author(new_author_row[0], new_author_row[1], new_author_row[2])
    return new_author


# updated the data
def update_author(author):
    update_stmt = (
        update(author_table)
            .where(author_table.c.author_id == author.id)
            .values(first_name = author.first_name, last_name = author.last_name)
    )
    conn.execute(update_stmt)
    conn.commit()


# delete the data
def delete_author(author):
    delete_stmt = delete(author_table).where(author_table.c.author_id == author.id)
    conn.execute(delete_stmt)
    conn.commit()