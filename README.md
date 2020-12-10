# Booking
Prueba técnica de React (front end);

## Para visualizar el resultado del proyecto en vivo
Navegar hasta [https://apiwalletrest.herokuapp.com/](https://apiwalletrest.herokuapp.com/).

## Aplicaciones necesarias para gestionar el proyecto
* **Node.js** v12.14.0 o superior.
* **Yarn Package Manager** v1.22.0 o superior.

## Componentes creados
* **LoginForm:** Maneja el Login de usuarios
* **RegisterForm:**  Maneja el registro de usuarios
* **CheckCredit:** Muestra el Monto de la billetera, recibe un documento y phone.
* **CreatePurchase:** Crea una compra que debe verificarse, recibe un numero de documento (asociado a la cuenta) y un monto.
* **VerifyPurchase:** Recibe un token que es enviado al correo del usuario asociado.
* **AddCredit:** Permite recargar saldo de una billetera dado un numero de documento, telefono y monto.

## Interfaces creadas
* **Auth:** Vista para mostar los componentes Register y Login
* **Purchase:** Vista para mostar los componentes CreatePurchase y VerifyPurchase
* **Wallet:** Vista para mostar los componentes CheckCredit y AddCredit

## Cómo ejecutar el proyecto localmente
* Navegar a la raíz del proyecto.
* Ejecutar el comando *yarn install*. Esperar a que se instalen todas las dependencias.
* Ejecutar el comando *yarn start*.
* Navegar hasta [http://localhost:3000](http://localhost:3000) para visualizar los resultados.
