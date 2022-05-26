# brasileirao

#### Estrutura do banco de dados 
<img src='./images/databaseDiagram.png'/>

## Rotas
- [Login](#Login)


# Login
- /login
- O endpoint deverá ser do tipo `POST`
- deve receber como payload:
    `{	"email": "yuri@user.com", "password": "yurigarrido"}`
- em caso de sucesso retornará:
    `{
	"sucess": true,
	"data": {
		"id": 7,
		"username": "yuri",
		"role": "user",
		"email": "yuri@user.com",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiJ5dXJpIiwicm9sZSI6InVzZXIiLCJlbWFpbCI6Inl1cmlAdXNlci5jb20iLCJpYXQiOjE2NTM1MzEyMDgsImV4cCI6MTY1NDEzNjAwOH0.B2UHXKmrDtuWwD5-xpLiqb7d5DBC7X3bj2td9dbVym8"
	},
	"message": "user found"
}`

<img src='./images/postLoginSigin.png'/>

- em caso de erro retornará: 
    `{
	"sucess": false,
	"data": {},
	"token": null,
	"message": "password is required"
}`
    -pode variar conforme o erro
