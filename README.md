# App

Gympass style app.

## RFs (Requisitos Funcionais)

- [ ] Deve ser possível se cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível  o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível  o usuário buscar a academias mais próximas;
- [ ] Deve ser possível  o usuário buscar academias pelo nome;
- [ ] Deve ser possível  o usuário realizar check-in em uma academia;
- [ ] Deve ser possível se validar o check-in de um usuário;

## RNs (Regras de negócio)
[ ] O usuário não poder se cadastrar com um email duplicado;
[ ] O usuário não pode fazer 2 check-ins no mesmo dia;
[ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
[ ] O usuário não pode ser validado até 20 minutos após criado;
[ ] O usuário não pode ser validado por administradores;
[ ] A Academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)
[ ] A senha do usuário precisa estar criptografada;
[ ] Os dados da aplicação precisam estar persistidos em um banco PostgresSQL;
[ ] Todas listas de dados precisam estar paginados com 20 itens por páginas;
[ ] O usuário deve ser identificado por um JWT (Json Wen Token);