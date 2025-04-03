# OPTIMA

OPTIMA es una aplicación web diseñada para la gestión eficiente de finanzas personales y empresariales. Permite a los usuarios registrar ingresos y gastos, generar reportes detallados y visualizar su estado financiero en tiempo real.

## Tecnologías utilizadas

- **Frontend:** React.js
- **Backend:** Flask con SQLAlchemy
- **Base de datos:** PostgreSQL
- **Autenticación:** Flask-JWT-Extended
- **Estilos:** CSS

## Características principales

- Registro y categorización de ingresos y gastos.
- Visualización de datos financieros mediante gráficos interactivos.
- Autenticación y gestión de usuarios.
- Generación de reportes detallados.

## Instalación y configuración

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/PabloQuerales/OPTIMA
   cd optima
   ```
2. Instalar dependencias del frontend y backend:
   ```sh
   cd frontend
   npm install
   cd ../backend
   pip install -r requirements.txt
   ```
3. Configurar las variables de entorno y la base de datos.
4. Ejecutar el backend:
   ```sh
   pipenv run start
   ```
5. Ejecutar el frontend:
   ```sh
   npm run dev
   ```

## Estado del proyecto

Actualmente, OPTIMA se encuentra en desarrollo activo, mejorando la experiencia de usuario e integrando nuevas funcionalidades.
