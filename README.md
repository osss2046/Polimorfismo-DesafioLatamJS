# Desafío - Sugerencia de videos

## Descripción:
  Un nuevo cliente necesita un sitio web que muestre sugerencias de vídeos, por el momento,
  requiere que se muestre una sola sugerencia por categoría, siendo las categorías: Música,
  Película y Serie. Estas categorías estarán ubicadas en un menú colapsable, permitiendo
  mostrar una categoría a la vez con un solo clic o también ocultar todas las categorías. Por
  ende, lo que debe aparecer en cada categoría es un vídeo, puede ser desde cualquier
  repositorio en la nube o incrustado de forma local. Pero cada vídeo debe hacer referencia a
  la categoría a la cual se hace un click.

## Requerimientos:
  1. Implementar el Patrón Módulo mediante IIFE
  2. Establecer una clase padre denominada Multimedia
  3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia
  4. Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta iframe, por lo que se deben crear tres instancias, una para música, otra para película
     y otra para serie, con sus respectivas URL.
  5. Invocar al método “playMultimedia” para cada instancia creada, mostrando así los
videos en el documento HTML.
  6. Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las
instancias creadas.

## Observación:
  1. Se busco cumplir con todos los objetivos guiandome por los detalles dichos en las clases grabadas
  2. Se desplego el proyecto en gh-pages
