Both the Node.JS app and MongoDB are containerized so running the following will setup the backend
Run `docker-compose up --build`

A seed script has also been created to get some enties in initially. Adding it to package.json gives a little more flexibility for updating or adding additional scripts instead of on startup.