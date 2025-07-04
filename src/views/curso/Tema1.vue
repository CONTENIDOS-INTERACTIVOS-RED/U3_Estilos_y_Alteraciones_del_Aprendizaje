<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Orientaciones pedagógicas y metodológicas a través de los estilos de aprendizaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg_img
      p.mb-4 En esta tercera y última unidad, se abordarán los estilos de aprendizaje y diferentes modelos, entre ellos:

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-3.mb-3.mb-lg-0.text-center
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Modelo de Inteligencias Múltiples
        .col-lg-3.mb-3.mb-lg-0.text-center
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Modelo de Kolb
        .col-lg-3.mb-3.mb-lg-0.text-center
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Modelo de Honey
        .col-lg-3.mb-3.mb-lg-0.text-center
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Modelo de los Cuadrantes Cerebrales
    
      .row.justify-content-center.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Definición de aprendizaje.
                    p.mb-0 Para iniciar, es fundamental recordar qué es el aprendizaje. Para ello, se recomienda revisar el siguiente video: 
                  .col-sm-auto
                     a.boton.color-primario(href="https://www.youtube.com/watch?v=f7i_2TDGOv8&t=18s" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Según Ormrod et al. (2005), el aprendizaje es un proceso fundamental a través del cual no solo se adquieren habilidades y conocimientos, sino también valores, actitudes y reacciones emocionales. Existen diversas definiciones, que reflejan perspectivas distintas:
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-9
              p.mb-0 Se define como un cambio relativamente permanente en la conducta debido a la experiencia.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-9
              p.mb-0 Se concibe como un cambio en las asociaciones o representaciones mentales, también resultado de la experiencia.
        p Ambas definiciones coinciden en que el aprendizaje implica un cambio duradero que se produce tras experiencias significativas. Sin embargo, no todos los cambios en la conducta pueden considerarse aprendizaje; aquellos derivados de la maduración, daños orgánicos o estados temporales como la fatiga no cumplen con este criterio.
    
    h2(data-aos="fade-left") Enfoques del aprendizaje
    p.mb-5 Ormrod et al. (2005) explican que estas definiciones se alinean con dos grandes enfoques:

    .bg_img-2
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6.mb-4(data-aos="zoom-in-up")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Conductismo
              p.mb-0 Se enfoca en los cambios observables en la conducta. Ejemplos: atarse los zapatos, resolver un problema matemático o simular una enfermedad.
        .col-lg-6.mb-4(data-aos="zoom-in-down")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Cognitivismo
              p.mb-0 Se centra en los cambios internos en las representaciones y asociaciones mentales. Ejemplos: identificar relaciones entre adición y sustracción o utilizar técnicas para recordar vocabulario.
      .row.justify-content-center.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/link.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Teorías del aprendizaje y práctica docente
                    p.mb-0 Para profundizar en este tema, se sugiere la siguiente lectura:
                  .col-sm-auto
                    a.boton.color-primario(href="https://elibro.net/es/ereader/tecnologicadeloriente/33745?page=11" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right

    h2(data-aos="fade-left") Estilos de aprendizaje
    p.mb-5 Con una noción más clara sobre el aprendizaje, es pertinente abordar los estilos de aprendizaje. Mosquera (2012) plantea varias interrogantes:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué es lo que hace que unos niños aprendan más y otros menos, si los factores intervinientes, tales como características personales y experiencias de aprendizaje, parecen estar ‘bajo control’? ¿Por qué unos niños se sienten más motivados que otros para el aprendizaje? ¿Será una cuestión de intereses o gustos? (p. 2).
        p(data-aos="fade-left") En términos generales, los estilos de aprendizaje hacen referencia a las diferencias individuales en la manera en que cada persona absorbe, procesa, retiene y aplica la información. Estas diferencias influyen en la forma en que los estudiantes se preparan para aprender, manejan la información y se desempeñan en distintos contextos educativos. El concepto de estilos de aprendizaje tiene sus raíces en la psicología cognitiva de los años 50. Witkin (1954), citado por Lourdes (2009), identificó dos tipos principales:
    

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Campo dependiente	" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Campo dependiente	
            p Se basa en un enfoque global de la información, donde el aprendizaje se apoya en el contexto y las interacciones con otros.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Campo independiente	" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Campo independiente	
            p Se orienta hacia el análisis y la estructuración de la información sin depender del contexto social.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white A lo largo del tiempo, los psicólogos educativos han utilizado el término estilos de aprendizaje para describir estas diferencias individuales en la percepción y el procesamiento de la información. En las siguientes secciones, se profundizará en los distintos modelos que explican estos estilos.

    


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/33745?page=11" target="_blank" rel="noopener noreferrer") Gallardo Vázquez, P. & Camacho Herrera, J. M. (2016). Teorías del aprendizaje y práctica docente: ( ed.). Wanceulen Editorial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.upb.edu.co/bitstream/handle/20.500.11912/11596/El%20aprendizaje%20experiencial%20como%20estrategia%20para%20la%20educaci%C3%B3n%20ambiental%20infantil.pdf?sequence=1" target="_blank" rel="noopener noreferrer") Monterrosa Trujillo, J. N., Zarate Zuluaga, V., & Gómez Fuentes, V. (2022). El aprendizaje experiencial como estrategia para la educación ambiental infantil (Bachelor's thesis, Escuela de Arquitectura y Diseños). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://mi-aprendizaje.com/aprendizaje-kolb/" target="_blank" rel="noopener noreferrer") Guerrero, R. (2023, octubre 5). El modelo de aprendizaje Kolb: Una metodología efectiva para potenciar el desarrollo educativo
            
            
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=f7i_2TDGOv8&t=18s" target="_blank" rel="noopener noreferrer") Space Diseño. [SpaceDiseño]. (2019, 23 de julio). Definición de aprendizaje. [Vídeo] Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
