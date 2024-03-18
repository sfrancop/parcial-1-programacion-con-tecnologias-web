# Parcial 1

## Instrucciones de ejecución

### Prerequisitos

- Tener instalado Git.
- Tener instalado Node.Js

## Pasos

1. Abra su terminal en la ubicación de su preferencia
2. Ejecute `git clone https://github.com/sfrancop/parcial-1-programacion-con-tecnologias-web.git`
3. Ejecute `cd parcial-1-programacion-con-tecnologias-web`
4. Ejecute `npm install`
5. Ejecute `npm run start` y espera a que la aplicación abra en su navegador

Para probar la internacionalización debe cambiar el lenguaje de su navegador, los idiomas soportados son español e inglés.

## Proceso de desarrollo

### Componetización

El primer paso para empezar a desarrollar la aplicación fue definir visualmente los componentes visuales que tendrá la aplicación. Se definieron los siguientes componentes:
   - Para el layout
     En el layout solo se encuentra el navbar ya que es el elemento que siempre estará visible en la interfáz de la aplicación.
     ![image](https://github.com/sfrancop/parcial-1-programacion-con-tecnologias-web/assets/88736607/70ad0d65-f134-4f9a-9e52-c205cb29d664)
   - Para la pagina principal
     En la pagina principal se tienen dos componentes, el header del perfil que es donde se muestra su información y las cards para cada publicación del usario, cada publicación usa el mismo componente de card para renderizarse.
     ![image](https://github.com/sfrancop/parcial-1-programacion-con-tecnologias-web/assets/88736607/7f904d33-51c8-4fd3-ac25-7701998bc743)
   - Para la pagina del detalle
     Esta pagina es un componente y en si misma que no está dividida en ningunos otros componentes
     ![image](https://github.com/sfrancop/parcial-1-programacion-con-tecnologias-web/assets/88736607/706f2cf7-091a-4044-889e-4c1c4d6cc09e)
   - El componente card a la vez está compuesto por otro componente para la modal de su imagen, sin embargo, este en principio no es visible ya que solo se habilita en el momento en el que se hace click sobre la imagen.
     ![image](https://github.com/sfrancop/parcial-1-programacion-con-tecnologias-web/assets/88736607/889760db-3a9b-4b3f-b55b-d5a48bbbc119)

En conclusión, tendriamos el siguiente arbol de componentes:
![Captura de pantalla 2024-03-17 200735](https://github.com/sfrancop/parcial-1-programacion-con-tecnologias-web/assets/88736607/d80674a6-3b46-45e3-9405-1ef92c46214b)

### Routing

Para saber los enlaces entre paginas primero se debe definir el flujo de la aplicación según lo que se especifica en el enunciado. El flujo de la apliación se muestra en el siguiente diagrama y las redirecciones:
![Captura de pantalla 2024-03-17 200735](https://github.com/sfrancop/parcial-1-programacion-con-tecnologias-web/assets/88736607/7bc77411-6416-4b0c-9af7-60541bff4698)

Es importante recalcar que aunque existen elementos clicables como lo son las imagenes, estas no redirigen a otra ruta sino que solo muestran el modal.

### Props

Las interacciones del usuario definen el paso de propiedades entre componentes, se dan los siguientes:
- De la pagina principal al componente de las imagenes
- Del componente de las imagenes a su modal
![Captura de pantalla 2024-03-17 200735](https://github.com/sfrancop/parcial-1-programacion-con-tecnologias-web/assets/88736607/f07c3783-6cc6-4eff-a171-8e3317a9e4c4)

 

En conclusión, tenemos dos rutas para la aplicación, una de la pagina principal `/` al detalle del perfil `/perfil` por medio del componente de la imagen y vicebersa por medio del header.

### Internacionalización (i18n)

Se pensó en los elementos que hay que tener en cuenta al cambiar de idioma, en este caso tenemos español e inglés, y se concluyó que para el alcance del MVP lo único a tener en cuenta para esta internacionalización es la traducción.

### Herramientas y librerias

- Bootstrap y CSS nativo para los estilos
- i18next para la internacionalización






     

