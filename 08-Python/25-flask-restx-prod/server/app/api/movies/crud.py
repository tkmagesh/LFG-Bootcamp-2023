from typing import List, Union

from structlog import get_logger

from app import db
from app.api.movies.models import Movie

logger = get_logger(__name__)


def get_all_movies() -> List[Movie]:
    """returns all movies"""

    logger.debug("get_all_movies")
    return Movie.query.all()


def get_movie_by_id(id: int) -> Movie:
    """returns a single movie"""

    logger.debug("get_movie_by_id")
    return Movie.query.filter_by(id=id).first()


def create_movie(title: str, description: str) -> Movie:
    """creates a single movie"""

    logger.debug("create_movie")
    movie = Movie(title=title, description=description)
    db.session.add(movie)
    db.session.commit()
    return movie


def update_movie(movie: Movie, title: str, description: str) -> Movie:
    """updates a single movie"""

    logger.debug("update_movie")
    movie.title = title
    movie.description = description
    db.session.commit()
    return movie


def delete_movie(movie: Movie) -> Union[Movie, None]:
    """deletes a single movie"""

    logger.debug("delete_movie")
    db.session.delete(movie)
    db.session.commit()
    return movie
