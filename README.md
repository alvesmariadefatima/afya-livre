# Desafios de Desenvolvimento Web

Bem-vindo ao repositório de desafios de lógica de programação! Este repositório contém uma série de 10 desafios projetados para testar suas habilidades em JavaScript. 

## Instruções para Realização dos Desafios

1. **Clonar o repositório:**
   Para começar, você deve clonar este repositório em sua máquina local. Abra o terminal e execute o seguinte comando:

   ```bash
   git clone [URL do repositório]
   cd [nome do repositório clonado]
   ```

2. **Criar uma branch:**
   Crie uma branch seguindo a convenção: `desafio-logica-afya-[nome-do-grupo]`. Substitua `[nome-do-grupo]` pelo nome do seu grupo.

   ```bash
   git checkout -b desafio-logica-afya-[nome-do-grupo]
   ```

3. **Resolver os desafios:**
   Complete os desafios na sua branch. Você tem 1 hora e meia para resolver todos os desafios.

4. **Push das mudanças:**
   Após concluir os desafios, faça o push das suas mudanças para o repositório.

   ```bash
   git add .
   git commit -m "Resolução dos desafios de lógica de programação"
   git push origin desafio-logica-afya-[nome-do-grupo]
   ```

   sob hipótese alguma os alunos deverão fazer merge dos seus pushs, sob pena de 
   inviabilizar o presente repositório para os demais.

5. **Restrições:**
   - Os alunos não devem utilizar ChatGPT ou quaisquer outras IAs para resolver os problemas.
   - O uso de código externo que não seja desenvolvido pelo grupo é proibido.


## DESAFIO

  O desafio será criar um site de uma loja de vendas. Para tanto, o aluno deverá utilizar a API do 
  Mercado Livre

  Sua página web irá consumir os dados da API do Mercado Livre para realizar a busca de itens da sua loja online. Para realizar essas buscas, vocês precisarão consultar os seguintes endpoints:

```
  Para listar as categorias disponíveis:
  Tipo da requisição: GET
    Endpoint: https://api.mercadolibre.com/sites/MLB/categories
```
```

  Para buscar por itens por termo:
  Tipo da requisição: GET
  Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
    Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
```
```

  Para buscar itens por categoria:
  Tipo da requisição: GET
  Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
    Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
```
```

  Para buscar itens de uma categoria por termo (vale ressaltar, que este endpoint não necessariamente precisa receber ambos os parâmetros para funcionar):
  Tipo da requisição: GET
  Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
    Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
```
```

  Para buscar detalhes de um item especifico:
  Tipo de requisição: GET
  Parâmetro de busca $PRODUCT_ID (este parâmetro deve ser substituído pelo valor do campo de busca)
    Endpoint: https://api.mercadolibre.com/items/$PRODUCT_ID

    
```

