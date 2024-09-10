## Prueba tÃ©cnica: AplicaciÃ³n de gestiÃ³n de contratos
### Objetivo
Crear una aplicaciÃ³n web que permita al equipo de negocio la gestiÃ³n de contratos para las distintas commodities 
existentes en la plataforma. El equipo de negocio debe poder realizar las siguientes acciones dentro de la aplicaciÃ³n web.
- Autenticarse
- Cambiar contraseÃ±a
- Visualizar los contratos del sistema
- Filtrar los contratos del sistema
- Visualizar los detalles de un contrato seleccionado
- Visualizar los counterparties del sistema

AdemÃ¡s de los usuarios de negocio, existe un segundo tipo de usuario denominado, *administrador*, que debe poder acceder a una ruta/s protegida/s Ãºnica/s para este rol y que le proporcione las siguientes funciones:
- Visualizar todos los usuarios del sistema
- Visualizar todos los principals del sistema

La aplicaciÃ³n web esta orientada a ser usada Ãºnicamente en dispositivos de equipos personales, no es necesario 
implementar la plataforma para dispositivos de mÃ³viles o tablets.


### Requisitos
Las especificaciones del desarrollo de esta aplicaciÃ³n web para el frontend debe estar desarrollado mediante Next.JS
y su ecosistema de paquetes. La API REST es proporcionada por el equipo y se facilitarÃ¡ informaciÃ³n acerca de la misma para explicar como acceder a sus datos y las opciones que proporciona.

Las especificaciones tÃ©cnicas que deben ser tenidas en cuenta para su desarrollo son las siguientes:
- ConfiguraciÃ³n y estructura del proyecto, es necesario el uso del *app router*.
- Typescript + SASS, se puede integrar *tailwind* o librerÃ­as de componentes (Shacdn, Radix, MUI, Mantine, etc.).
- Sistema de autenticaciÃ³n basado por *Token*, esta capa debe ser integrada mediante *NextAuth*
- Existen tres tipos de roles en la aplicaciÃ³n web
	- *Admin*: Solamente puede acceder a las pantallas y funciones indicadas previamente
	- *User*: Solamente puede acceder a las pantallas y funciones indicadas previamente
	- *No autenticado*: Debe ser redirigido a la pantalla de login cuando intenta acceder a una ruta protegida

Otros aspectos que serÃ¡n valorados de manera positiva son:
- Arquitectura de estilos utilizada
- Arquitectura del proyecto
- Multilenguaje usando i18n
- Legibilidad y uso de variables
- Uso de componentes
- Alguna animaciÃ³n simple


### API
Esta API de prueba ha sido montada sobre *Python* usando *DRF 3.15.2* y dispone de documentaciÃ³n relacionada a cada acciÃ³n 
tanto en formato [*swagger*](http://178.33.249.178:8002/api/schema/swagger-ui/) como [*redoc*](http://178.33.249.178:8002/api/schema/redoc/). 

En la carpeta `api_collection` puede encontrar todos los endpoints de la API en formato JSON para importar en 
Postman, Bruno u otra herramienta que acepte este estÃ¡ndar.

A continuaciÃ³n se detallan un diagrama del modelo E/R
![ER](resources/ER.png)

### Auth
Para poder realizar la autenticaciÃ³n en la API, se debe realizar una peticiÃ³n POST a la ruta `/api/login/` con los 
siguientes datos:
```json
{
	"username": "admin",
	"password": "admin"
}
```

Los usuarios definidos son los siguientes:
```json
{
	"username": "kelsier_admin",
	"password": "nrg"
}
```
```json
{
	"username": "elend_standard",
	"password": "user"
}
```
```json
{
	"username": "vin_secret_key",
	"password": "user"
}
```

Si no dispone de tiempo para implementar la autenticaciÃ³n, puede usar el siguiente token para realizar las peticiones:
```json
{
	"SECRET-KEY": "35952d18-bd45-4099-8a76-d987315b094e"
}
```