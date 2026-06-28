# CRUD de Clientes con Vue.js, Express, Sequelize y JWT

## Descripción

Aplicación web Full Stack para la gestión de clientes, desarrollada con **Vue.js** en el frontend y **Express.js** en el backend. El sistema implementa operaciones **CRUD**, autenticación mediante **JWT**, cifrado de contraseñas con **bcrypt** y persistencia de datos utilizando **MySQL**.

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
* Gestión completa de clientes (CRUD)
* Crear clientes
* Consultar clientes
* Editar clientes
* Eliminar clientes
* Búsqueda de clientes por nombre
* Contador de clientes registrados
* Notificaciones tipo Toast
* Diseño moderno y responsive
* Arquitectura basada en componentes

---

# Capturas del proyecto

## Inicio de sesión

<img width="562" height="571" alt="image" src="https://github.com/user-attachments/assets/c3e409f7-e168-44e3-9978-852e83768dac" />


---

## Registro de usuarios

<img width="540" height="598" alt="image" src="https://github.com/user-attachments/assets/38199bc4-243a-48bb-99a3-6381cc70d4e0" />


---

## Gestión de clientes

<img width="1168" height="949" alt="image" src="https://github.com/user-attachments/assets/31701998-0d2a-4b37-adf3-053491005c87" />


---

## Cliente agregado

<img width="316" height="80" alt="image" src="https://github.com/user-attachments/assets/3b1b9516-7147-431a-a5c0-2a535887beab" />


---

## Cliente actualizado

<img width="328" height="68" alt="image" src="https://github.com/user-attachments/assets/38d44c83-df24-4eb6-ac40-97e93ef8a7ae" />


---

## Cliente eliminado

<img width="325" height="91" alt="image" src="https://github.com/user-attachments/assets/9849c49b-30d5-4848-b04b-36d0864c0f98" />


---

## Estructura del proyecto

```text
crud-clientes/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── db/
│   │   └── app.js
│   │
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
│   │
│   └── package.json
│
└── README.md
```

---

# Instalación

## Clonar el repositorio

```bash
git clone https://github.com/CarlosQB/CRUD-Clientes-Personas.git
```

---

## Backend

Entrar a la carpeta:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor:

```bash
npm run dev
```

---

## Frontend

Entrar a la carpeta:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm run dev
```

---

## Base de datos

1. Crear una base de datos en MySQL.
2. Configurar la conexión en el backend.
3. Sincronizar los modelos mediante Sequelize.
4. Ejecutar el servidor para crear las tablas automáticamente.

---

## Próximas mejoras

* Protección completa de rutas mediante middleware JWT.
* Variables de entorno (.env).
* Despliegue del proyecto en Render y Vercel.
* Recuperación de contraseña.
* Roles de usuario (Administrador / Usuario).
* Dashboard con estadísticas.
* Validaciones avanzadas en frontend y backend.

---

## Autor

**Jose Carlos Quezada Benavides**

Ingeniero en Ciencias Computacionales

GitHub:
https://github.com/CarlosQB
