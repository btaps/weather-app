# Weather App ⛅️

### Technologies used:

- react
- django

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
      │   │   ├── Forecast.js
      |   |
      |   ├── .eslintrc.json
      |   ├── .gitignore
      │   ├── package.json
      |   └── README.md
      |
      ├── .gitignore
      ├── package.json
      └── README.md
