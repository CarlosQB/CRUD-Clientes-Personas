# CRUD de Clientes con Vue.js, Express, Sequelize y JWT

## Descripción

Aplicación web Full Stack para la gestión de clientes, desarrollada con Vue.js en el frontend y Express.js en el backend. El sistema implementa operaciones CRUD, autenticación mediante JWT, cifrado de contraseñas con bcrypt y persistencia de datos utilizando MySQL.

Este proyecto fue desarrollado con fines de aprendizaje para fortalecer conocimientos en desarrollo Full Stack utilizando tecnologías modernas del ecosistema JavaScript.

---

## Tecnologías utilizadas

### Frontend

* Vue.js 3
* Axios
* Heroicons
* CSS3

### Backend

* Node.js
* Express.js
* Sequelize ORM
* JWT (JSON Web Token)
* bcrypt

### Base de datos

* MySQL

---

## Funcionalidades

* Registro de usuarios
* Inicio y cierre de sesión
* Autenticación mediante JWT
* Contraseñas cifradas con bcrypt
* Crear clientes
* Consultar clientes
* Editar clientes
* Eliminar clientes
* Búsqueda por nombre
* Contador de clientes registrados
* Notificaciones tipo Toast
* Interfaz moderna y responsive

---

## Estructura del proyecto

```
crud-clientes/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── services/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   └── package.json
│
└── README.md
```

---

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/crud-clientes.git
```

---

### Backend

Entrar a la carpeta:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm run dev
```

---

### Frontend

Entrar a la carpeta:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

---

## Base de datos

Crear una base de datos en MySQL.

Ejecutar las migraciones o sincronizar los modelos mediante Sequelize.

Configurar la conexión en el archivo correspondiente del backend.

---

## Próximas mejoras

* Protección de rutas mediante middleware JWT
* Variables de entorno (.env)
* Vue Router
* Validaciones más robustas
* Panel de administración
* Despliegue en la nube (Render y Vercel)

---

## Autor

**Jose Carlos Quezada Benavides**

Ingeniero en Ciencias Computacionales

GitHub:
https://github.com/CarlosQB
