# Blog SSG con rutas dinamicas y estaticas en Next.js

Ejemplo practico para demostrar en VS Code como funciona el renderizado estatico con rutas dinamicas usando App Router.

## Objetivo

Construir un blog con dos rutas:

- `/posts` para listar articulos
- `/posts/[id]` para mostrar un articulo individual

Las dos rutas se prerenderizan de forma estatica, y la dinamica usa `generateStaticParams()`.

## Conceptos que cubre

- Rutas estaticas
- Rutas dinamicas
- SSG (Static Site Generation)
- `generateStaticParams()`
- Fetch de API en Server Components

## Estructura del proyecto

```txt
app/
	page.js
	posts/
		page.js
		postTranslations.js
		[id]/
			page.js
```

## Como funciona cada ruta

1. `/posts`
Obtiene los posts desde JSONPlaceholder, toma los primeros 10 y muestra la lista.

2. `/posts/[id]`
Muestra el detalle de un post segun el id en la URL.

3. `generateStaticParams()`
Define que ids (1 al 10) se prerenderizan durante el build para crear HTML estatico de cada detalle.

## Ejemplo de generateStaticParams

```js
export async function generateStaticParams() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();

	return posts.slice(0, 10).map((post) => ({
		id: post.id.toString(),
	}));
}
```

## Flujo SSG en este proyecto

1. Next.js ejecuta `generateStaticParams()` en build.
2. Next.js genera paginas para `/posts/1` a `/posts/10`.
3. El usuario navega y recibe HTML ya generado.
4. Resultado: carga rapida y mejor SEO.

## Levantar el proyecto

```bash
npm install
npm run dev
```

Abrir en navegador:

```txt
http://localhost:3000/posts
```

## Verificar que realmente es estatico

Ejecuta:

```bash
npm run build
```

Debes ver una salida similar a esta:

```txt
Route (app)
┌ ○ /posts
└ ● /posts/[id]
```

- `○` significa contenido estatico prerenderizado.
- `●` significa SSG con `generateStaticParams`.

## Diferencia rapida: SSR vs SSG

1. SSR
Renderiza la pagina en cada request.

2. SSG
Renderiza durante el build y sirve HTML listo.

## Por que SSG es buena opcion aqui

- Los posts cambian poco.
- Tiempo de carga mas bajo.
- Menor costo de servidor.
- SEO mas facil de optimizar.

## Mini guion para exponer (60-90 segundos)

1. Este proyecto tiene una ruta estatica (`/posts`) y una dinamica (`/posts/[id]`).
2. En la ruta dinamica uso `generateStaticParams` para definir que ids se generan en build.
3. Durante `npm run build`, Next crea HTML estatico para cada detalle de post.
4. Esto mejora performance, SEO y reduce trabajo del servidor frente a SSR.

## Scripts utiles

```bash
npm run dev    # desarrollo local
npm run build  # build de produccion
npm run start  # ejecutar build
```
