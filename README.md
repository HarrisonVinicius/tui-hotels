# tui-hotels
This is a simple travel information guide


this application is configured to make use of the api: https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-search/api-reference
to access the api it is necessary to generate an access token: https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262 

you can use postman to generate a token and create a .env file at the root of the application folder. 

due to instabilities with the endpoints of this api, some data is fixed in the application store so as not to crash the demo flow
but in a real scenario the data that is in the store would be returned through requests made by actions

>>>> this project is not 100% ready <<<<

# Running the app 
# Docker
run 

```bash
docker-compose up --build -d
```
than access:
http://localhost:3000/

# Yarn
To run the app, please make sure you can install Yarn package 
than run


```bash
$ yarn install 
```

than make sure you are running node 12 
note.: errors may occur during the process if you are not using version 12

```bash
$ nvm use 12
```

start Localhost with hot reload 

```bash
$ yarn dev
```

build for production and launch server


```bash
$ yarn build
$ yarn start
```

generate static project

```bash
$ yarn generate
```

to run a few unit tests please enter 


```bash
$ yarn test
```
