# Exercise

1) Server must be in Node.js, using express and placed within the backend folder of this repository.
2) Data must be persisted within a locally installed database; ideally MongoDB.
3) The frontend is expecting the following:\
   i) localhost:3001/api (GET) - return all saved items\
  ii) localhost:3001/api (POST) - create a new item\
  iii) localhost:3001/api/:id (PUT) - update an existing item\
   iv) localhost:3001/api/:id (DELETE) - remove an existing item\
4) For details on the format of each payload, please take a look within frontend/src/functions
5) The resulting server code should demonstrate an understanding of clean code and microservice best-practices.
6) Create a Dockerfile to containerize your service.
7) Please provide a README.md in the backend folder with instructions for how to start your service.
