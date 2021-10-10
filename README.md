## File Explorer BE

### Prerequisit
- docker
- docker-compose

### How to Setup
- copy .env.example to .env
- Run docker-compose-up to start the project in development
- The project will be run at localhost:3000

### Description
It has graphql which has two queries
  - files: get all the files in the directory
  - file: get file/folder details with size, extension, created date, permissions etc.

#### It has Frontend to leverage the APIs: https://github.com/mdrafee03/file-explorer-fe
