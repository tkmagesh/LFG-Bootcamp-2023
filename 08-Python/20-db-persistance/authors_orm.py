from sqlalchemy import create_engine, select, Column, Integer, String
from sqlalchemy.orm import Session, declarative_base

Base = declarative_base()

# Domain Models
class Author(Base):
    __tablename__ = "author"
    
    id = Column("author_id", Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
         
    def __repr__(self):
        return f"Author({self.id},'{self.first_name}','{self.last_name}')"

    def __str__(self):
        return f"Author({self.id},'{self.first_name}','{self.last_name}')"

engine = create_engine("sqlite:///./books.sqlite", echo=True)

# tracks the domain objects created from the db data for changes
session = Session(engine)

def get_all_authors():
    select_stmt = select(Author)
    return list(session.scalars(select_stmt))

def insert_new_author(author):
    session.add(author)
    
    
def insert_multiple_authors():
    author_1 = Author(first_name="f_name_1", last_name="l_name_1")
    author_2 = Author(first_name="f_name_2", last_name="l_name_2")
    session.add_all([author_1, author_2])
    
    
def get_author_by_id(id):
    stmt = select(Author).filter_by(id = id)
    result = session.execute(stmt).scalars().all()
    return result[0]

def delete_author(author):
    session.delete(author)
    
    
def commit_changes():
    session.commit()
    
