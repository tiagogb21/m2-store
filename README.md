# m2-store

## Setup do Projeto:
```
npm install
```

### Compila e recerrega para desenvolvimento
```
npm run serve
```

### Compila e minifica para produção
```
npm run build
```

### Para compilar a imagem Docker da aplicação Vue:
```
docker build -t vue/m2-store .
```

### Para executar a aplicação Vue em um contêiner Docker:
```
docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 vue/m2-store
```

### Para executar a aplicação Vue utilizando docker-compose:
```
docker-compose build --no-cache
```

### Para encerrar o processo: CTRL + C
