# React-TS

Estudio y aprendizaje bajo la supervisión de SancochoDev, en este caso es un proyecto usando React-TS.

## Repositorio usado para extraer la plantilla.

[https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

## Comandos utilizados

### En caso de que se quiera crear una plantilla desde cero:

`npm create vite@latest `

Seleccionamos lo siguiente:

* Framework: React
* Variante: Typescript

### Buscamos la carpeta y hacemos lo siguiente:

`cd vite-project`

### Creamos el archivo .nvmrc

`echo "20" > .nvmrc`

En mi caso usaré la 20.9.0

`echo "20.9.0" > .nvmrc`

### Con el archivo creado, hacemos lo siguiente:

`nvm use`

Con eso NVM buscará el archivo .nvmrc y usará la versión indicada allí.

### En caso de que no esté instalada, escribe:

`nvm install 20.9.0`

### Ya con eso nos vamos a la carpeta raiz y buscamos en el src el archivo App.tsx

```
cd vite-project
src/App.tsx
```

### De momento es solo cambiar el contenido para hacer que muestre un "Hola Mundo!". Una vez realizado los cambios usamos lo siguiente:

`npm run dev `

Eso generará este link, con el cual podremos ver los cambios: `http://localhost:5173`
