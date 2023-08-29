## getting started
1. build the docker containers:

    ```sh
    docker compose build
    ```

2. run the containers in detached mode:

    ```sh
    docker compose up -d
    ```

3. recreate the database:

    ```sh
    docker compose exec api python manage.py recreate_db
    ```

4. visit `http://localhost:5000/api/v1/docs` to create, read, update and delete movies

5. stop the containers:

    ```sh
    docker compose down
    ```
