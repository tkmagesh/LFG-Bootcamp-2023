from sqlalchemy import create_engine, MetaData, Table, select, insert, update, delete

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
    print(result.all())

def insert_new_author(f_name, l_name):
# inserting new data
    insert_stmt = insert(author_table).values(first_name=f_name, last_name=l_name)
    result = conn.execute(insert_stmt)
    print(result.inserted_primary_key) # primary key value of the newly created row
    conn.commit()

    # retrieve the newly created author row
    select_newly_created_stmt = select(author_table).where(author_table.c.author_id == result.inserted_primary_key[0])
    new_author_result = conn.execute(select_newly_created_stmt)
    return new_author_result.all()[0]


# updated the data
def update_author(id, f_name, l_name):
    update_stmt = (
        update(author_table)
            .where(author_table.c.author_id == id)
            .values(first_name = f_name, last_name = l_name)
    )
    conn.execute(update_stmt)
    conn.commit()


# delete the data
def delete_author(id):
    delete_stmt = delete(author_table).where(author_table.c.author_id == id)
    conn.execute(delete_stmt)
    conn.commit()