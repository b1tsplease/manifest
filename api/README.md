# Strapi API

## Variáveis de Ambiente

Você só vai precisar setar elas caso não esteja rodando em produção

- `JWT_SECRET`: Segredo usado para a geração dos tokens JWT. O padrão é um UUIDv4 randômico.
- `ADMIN_JWT_SECRET`: Segredo usado para a geração dos tokens JWT de **Administradores**. O padrão são 64 bytes randômicos em `base64`.
- `NODE_ENV=production`: Usado para configurar o banco como Postgres ao invés de SQLite.
- `DATABASE_HOST`: Host do Instância do Postgres
- `DATABASE_PORT`: Porta do Instância do Postgres
- `DATABASE_NAME`: Nome do Instância do Postgres
- `DATABASE_USERNAME`: Nome de usuário do Instância do Postgres
- `DATABASE_PASSWORD`: Senha do Instância do Postgres
- `HOST`: Host em que o projeto vai ser _deployado_.
- `PORT`: Porta em que o projeto vai rodar.
