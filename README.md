# CatedraDos

Este pryecto es un Cliente Web creado en Visual Studio Code, usando Angular18, FrowBite y Tailwind CSS

## Requisitos

Instalar Node.js (versión 18 o superior).
Instalar Angular CLI (versión 18 o superior):
Instálalo ejecutando:

npm install -g @angular/cli

Instalar las dependencias con el comando:
npm install


## Instalación

Clonar repositorio en maquina local
git clone https://github.com/Damatu0348/CatedraDosFrontEnd.git
cd CatedraDosFrontEnd

Instalar dependencias de proyecto
npm install

Ejecutar el servidor en el desarrollo
ng serve

Hacer ctrl+clic en el enlace  http://localhost:4200/

# Caracterisiticas principales
Listado de Usuarios: Visualiza todos los usuarios con su nombre, correo, fecha de nacimiento y género.
Creación de Usuarios: Crear un nuevo usuario con las siguientes validaciones:
    Nombre: requerido, entre 3 y 20 caracteres.
    Correo: requerido, formato válido.
    Fecha de nacimiento: requerida, formato DD-MM-YYYY, anterior a hoy.
    Género: requerido, con opciones específicas.
Estilos modernos: Usando Tailwind CSS y Flowbite.
Consumo de API REST: Con HttpClient para realizar peticiones HTTP.