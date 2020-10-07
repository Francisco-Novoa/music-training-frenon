
## API-TASK

API que permite gestionar tareas utilizando mongoose, expressjs y MongoDbx.

**

## NOTA:

Las tareas deben pertenecer a un usuario.  Si al crearse no se asigna el usuario, se debe permitir realizar después la asignación

**
![api-task](trabajo.png)

## RUTAS A CREAR

TASK:  http://localhost:5000/api/task

- GET: 
    `/task`
    `/task/id`

- POST:
    `/task`

- PUT:
    `/task/id`

- DELETE:
    `/task/id`



USER:  http://localhost:5000/api/user

- GET: 
    `/user`
    `/user/id`

- POST:
    `/user`

- PUT:
    `/user/id`

- DELETE:
    `/user/id`


## INSTALACION MONGOdb

- Puedes utilizar la receta (docker-compose) para utilizar mongoDb en tu equipo ingresando a [recetas-docker](https://github.com/mortegac/recetas-docker/tree/master/Docker-Compose/MongoDb)



- Si no tienes instalado docker, mira este articulo: 
(Instalando Docker)[https://medium.com/javascript-nicaragua/instalando-docker-d736fe0822a8]

- Quieres profundizar un poco más usando docker para aplicaciones nodejs y Mongodb visita 
(Dockerizando NodeJS y MongoDB)[https://medium.com/devschile/dockerizando-nodejs-y-mongodb-ad24fedab8f2]




## create a new repository on the command line
echo "# frenon-api-task" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mortegac/frenon-api-task.git
git push -u origin main
                
…or push an existing repository from the command line
git remote add origin https://github.com/mortegac/frenon-api-task.git
git branch -M main
git push -u origin main