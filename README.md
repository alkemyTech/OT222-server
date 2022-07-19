# Server Base - Proyecto ONG

## Envinroment setup

1. Create database
2. Copy .env.example to .env and fill with database credentials.

To install dependencies, run

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Start local server

```bash
npm start
```

## Users created

1. RoleId 1

```
firstName: "Usuario",
lastName: "Demo",
email: "test@test.com",
password: "123456"
```

```
firstName: "Usuario",
lastName: "Demo",
email: "test1@test.com",
password: "123456"
```

```
firstName: "Usuario",
lastName: "Demo",
email: "test2@test.com",
password: "123456"
```

```
firstName: "Usuario",
lastName: "Demo",
email: "test3@test.com",
password: "123456"
```

```
firstName: "Usuario",
lastName: "Demo",
email: "test4@test.com",
password: "123456"
```

2. RoleId null

```
firstName: "Usuario",
lastName: "Demo",
email: "test5@test.com",
password: "123456"
```

```
firstName: "Usuario",
lastName: "Demo",
email: "test6@test.com",
password: "123456"
```

```
firstName: "Usuario",
lastName: "Demo",
email: "test7@test.com",
password: "123456"
```

```
firstName: "Usuario",
lastName: "Demo",
email: "test8@test.com",
password: "123456"
```

```
firstName: "Usuario",
lastName: "Demo",
email: "test9@test.com",
password: "123456"
```
