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

<br />

### O projeto utiliza:

 <p> <strong>Router:</strong> Para criar as rotas de navegação. </p>
 
 <p> <strong>Store:</strong> Gerenciamento de Estado Centralizado. </p>

<br />

### Objetivo:

### organização e padronização:

- Lint
- Prettier
- Editorconfig

<br />

### Usuário:

 <p> O usuário pode escolher apenas um plano por categoria. <p>

 <p> Deve escolher primeiro o plano de internet, para então escolher o plano de TV e telefonia fixa <p>

 <p> O valor total do plano pode ser encontrado no final da página. </p>
 
 <p> No final da página existe um botão "REMOVE" que irá retirar os itens do carrinho e zerar o valor total do plano. </p>

