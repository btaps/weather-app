# Weather App ⛅️

### Technologies used:

- react
- react hooks
- django

## Requirements:

- npm
- pip/pipenv

## Installation (React)

- cd into the react repository
- run "npm install" to install node packages used

## Installation (Django)

- cd django
- run "pipenv shell" to launch a virtual enviornment
- run "pip install -r requirements.txt" to install python packages used
- cd into "server"
- run "python manage.py migrate" to set up database migrations

## Start The App

- In one terminal window cd into "react" and run "npm start"
- In a separate terminal window, cd into "django", cd into "server", and run "python manage.py runserver"
- You can now access the app's gui at http://localhost:3000/

## Run Tests (React)

- cd into "react"
- run "npm test"
- if met with this message "No tests found related to files changed since last commit.", press "a" to run all tests.

## Run Tests (Django)

- cd into "django"
- if not in virtual enviornment, run "pipenv shell"
- cd into "server"
- run "python manage.py test"

## Core Structure

    root
      │
      ├── django (http://localhost:8000/)
      │   ├── server
      |   |   ├── forecasts
      |   |   |   ├── serializers.py
      |   |   |   ├── api.py
      |   |   |   ├── urls.py
      |   |   |   ├── views.py
      |   |   |   ├── models.py
      |   |   |   └── tests.py
      |   |   |
      |   |   ├── server
      |   |   |   ├── settings.py
      |   |   |   └── urls.py
      |   |   |
      |   |   └── manage.py
      |   |
      │   ├── Pipfile
      │   └── Pipfile.lock
      │
      ├── react (http://localhost:3000/)
      │   |
      │   ├── src
      │   │   |── index.js
      │   │   ├── App.js
      │   │   ├── Header.js
      │   │   ├── SearchOrLocate.js
      │   │   └── Forecast.js
      |   |
      |   ├── .eslintrc.json
      |   ├── .gitignore
      │   ├── package.json
      |   └── README.md
      |
      ├── .gitignore
      ├── package.json
      └── README.md
