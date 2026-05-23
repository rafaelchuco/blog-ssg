# Blog SSG con rutas dinamicas y estaticas en Next.js

Este proyecto muestra como construir un blog con App Router usando:

- Rutas estaticas
- Rutas dinamicas
- SSG (Static Site Generation)
- `generateStaticParams()`
- Fetch de API

## Estructura de rutas

```txt
/posts
/posts/[id]
```

1. `/posts`:
Muestra una lista de articulos obtenidos desde una API.

2. `/posts/[id]`:
Muestra el detalle de un post segun el `id` en la URL.

## Que es una ruta estatica

Una ruta estatica es una pagina que Next.js genera durante el build y luego sirve como HTML ya listo.

En este proyecto, `/posts` queda prerenderizada como estatica.

## Que es una ruta dinamica

Una ruta dinamica usa un segmento variable, por ejemplo `[id]`, para crear muchas paginas a partir de una sola plantilla.

Ejemplos:

- `/posts/1`
- `/posts/2`
- `/posts/3`

## Como se vuelve estatica una ruta dinamica

En `app/posts/[id]/page.js` se usa `generateStaticParams()` para decirle a Next.js que ids debe generar en build.

```js
export async function generateStaticParams() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();

	return posts.slice(0, 10).map((post) => ({
		id: post.id.toString(),
	}));
}
```

Con esto, Next.js prerenderiza `/posts/1` a `/posts/10` de forma estatica.

## Flujo de datos

1. `app/posts/page.js` hace fetch de posts para el listado.
2. `app/posts/[id]/page.js` hace fetch de un post individual por `id`.
3. Ambos se renderizan en servidor, y el detalle usa parametros estaticos durante build.

## Ejecutar en local

```bash
npm run dev
```

Abrir:

```txt
http://localhost:3000/posts
```

## Verificar generacion estatica

```bash
npm run build
```

En la salida deberias ver algo como:

```txt
○ /posts
● /posts/[id]
```

- `○` indica contenido estatico prerenderizado.
- `●` indica ruta SSG con `generateStaticParams`.

## Diferencia rapida: SSR vs SSG

1. SSR:
Renderiza en cada request.

2. SSG:
Genera HTML antes de recibir visitas.

## Ventajas de usar SSG en este caso

- Carga mas rapida
- Mejor SEO
- Menor carga del servidor
- Ideal para contenido que cambia poco
