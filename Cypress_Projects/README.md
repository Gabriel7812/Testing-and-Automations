# Swag Labs (E-commerce)
  
- 🇧🇷 Sobre esse projeto (foi usada a versão do cypress 8.7.0, pois tive alguns problemas para rodar esse site de teste na ultima versão 12.10.0, problemas relacionados a segurança e maneira como o site foi construído pois é um site para testes)
  - Comandos:
  - iniciar projeto: npm init -y
  - Executar o cypress: npx cypress open (após abrir o cypress só escolha qual spec rodar, neste caso como eram poucos teste e na mesma ferramenta com a mesma finalidade foi criada somente uma spec)

# Caso o projeto não execute em sua máquina favor executar no terminal do VScode ou qualquer IDE que esteja utilizando:
# Você deverá estar dentro da pasta do projeto antes de executar estes comandos
  - npm install cypress@8.7.0
  - npx cypress open
# Particularidades do projeto em especifico
  - no arquivo de configuração do cypress presente na pasta (cypress.json), foi adicionado um código para ignorar a segurança, sem esse código não é possivel rodar o projeto pois entra em um loop de carregamento infinito que não libera a página para a execução dos próximos comandos(como explicado anteriormente ocorre pela maneira como o site foi desenvolvido por ser um site de testes, está é uma particularidade do cypress este tipo de erro que com algum tempo de pesquisa é possível corrigir afinal nenhuma ferramenta é perfeita, mesmo assim continua sendo uma ótima ferramenta que eu particularmente gosto bastante):
 # Código adicionado no cypress.json:
{
    "chromeWebSecurity": false
}

# Foi também adicionado um wait de 21 segundos no final do ultimo teste para verificação visual, não é obrigatório porem foi adicionado.
