Js Node installation list

initialise command
* npm init -y

ROOT DEPENDENCIES
* npm install -D prettier
* npm husky install && npm install && .\node_modules\.bin\husky add .husky/pre-commit "npm run pre-commit"
  (google husky dependencies)
* npm install -D @parcel/transformer-react-refresh-wrap
* npm install -D concurrently

SERVER DEPENDENCIES
* npm install -D nodemon
* npm install -p body-parser
* npm install -p cookie-parser
* npm install -p express
* npm install -p dotenv

CLIENT DEPENDENCIES
* npm install -D parcel
* npm install -p react
* npm install -p react-dom
* npm install -p react-router-dom

TEST DEPENDENCIES
* npm install -D jest