const SPANISH_TITLES = {
  1: "Introduccion a Next.js con App Router",
  2: "Como crear rutas dinamicas estaticas",
  3: "Guia rapida de generateStaticParams",
  4: "Consumir APIs externas en Next.js",
  5: "Mejores practicas para paginas de blog",
  6: "Cuando usar SSG y cuando usar SSR",
  7: "Optimizacion de rendimiento en contenido estatico",
  8: "Navegacion entre rutas en App Router",
  9: "SEO basico para un blog en Next.js",
  10: "Preparar tu proyecto para produccion",
};

const SPANISH_BODIES = {
  1: "En este articulo veremos los fundamentos de Next.js y su App Router para construir aplicaciones modernas con rutas claras y renderizado eficiente.",
  2: "Las rutas dinamicas te permiten mostrar contenido por identificador. En este ejemplo, cada post usa un id para crear una pagina individual.",
  3: "generateStaticParams define que rutas se prerenderizan durante el build. Esto mejora velocidad y experiencia de usuario.",
  4: "Podemos obtener datos desde una API publica y renderizarlos en el servidor. Esto facilita mostrar contenido actualizado sin complicar el frontend.",
  5: "Una buena estructura de componentes, enlaces claros y estilos consistentes hacen que tu blog sea mas facil de mantener y presentar.",
  6: "SSG es ideal para contenido que cambia poco; SSR funciona mejor cuando necesitas datos en tiempo real en cada solicitud.",
  7: "El contenido estatico reduce tiempo de respuesta y carga del servidor. Es una estrategia clave para proyectos con mucho trafico.",
  8: "Con Link de Next.js, la navegacion entre paginas es rapida y fluida, manteniendo una excelente experiencia para el usuario.",
  9: "Definir titulos claros, estructura semantica y tiempos de carga bajos ayuda a posicionar mejor tu blog en buscadores.",
  10: "Antes de publicar, valida el build, revisa rutas estaticas y confirma que todas las paginas cargan correctamente en produccion.",
};

export function mapPostToSpanish(post) {
  return {
    ...post,
    title: SPANISH_TITLES[post.id] || `Articulo ${post.id}`,
    body:
      SPANISH_BODIES[post.id] ||
      "Contenido disponible en espanol para este articulo.",
  };
}
