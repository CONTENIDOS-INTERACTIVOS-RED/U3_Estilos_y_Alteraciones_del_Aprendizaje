<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Modelo de Honey'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0  
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El modelo de Honey y Mumford, desarrollado en la década de los 80, se basa en la teoría del aprendizaje experiencial de Kolb (1974). Según Rodríguez (2018), este modelo describe las actitudes y comportamientos que determinan las formas preferidas de aprendizaje de los individuos mediante el Cuestionario CHAEA (Cuestionario de Hábitos y Estilos de Aprendizaje). Esta herramienta permite identificar los estilos de aprendizaje individuales y ha sido ampliamente adoptada en entornos educativos y laborales para mejorar la enseñanza y el desarrollo profesional.
        p(data-aos="fade-left")  El modelo fue presentado por primera vez en el libro The Manual of Learning Styles (1982) y sostiene que el aprendizaje es un proceso continuo compuesto por cuatro etapas interrelacionadas:
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 01
              p.mb-0 Experiencia
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 02
              p.mb-0 Revisión de la experiencia
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 03
              p.mb-0 Conclusión a partir de la experiencia
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 04
              p.mb-0 Planificación del siguiente paso
    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Cuestionario CHAEA

    p.mb-5 El Cuestionario de Estilos de Aprendizaje de <em>Honey y Mumford</em> (CHAEA) es una herramienta basada en el modelo de aprendizaje experiencial de Kolb. Su objetivo es diagnosticar los estilos de aprendizaje predominantes y desarrollar aquellos menos sobresalientes.

    .row.justify-content-center.align-items-center.bg_img-3.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-1.order-lg-2
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 Contiene <b>80 afirmaciones</b> que los participantes deben calificar en función de su nivel de acuerdo o desacuerdo.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 Se emplea en contextos educativos y laborales para mejorar la enseñanza y personalizar estrategias de aprendizaje.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 Facilita la adaptación de métodos de enseñanza según las preferencias individuales.
          .col-lg-4(data-aos="zoom-in").order-2.order-lg-1
            img.img-fluid(src='@/assets/curso/tema3/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width-2.bg-fondo-1.mb-5
      .p-4.p-md-5

        p.mb-5 Algunos ejemplos de afirmaciones del cuestionario son:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/4.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center "Prefiero aprender haciendo cosas prácticas."
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/5.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center "Me gusta reflexionar sobre lo que he aprendido." 
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/6.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center "Disfruto participando en actividades interactivas."
      

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Características del modelo

    p.mb-5 Según la <em>University of Leicester</em> (2011) y otros estudios citados por Rodríguez (2018), este modelo resalta la importancia de entender cómo las personas aprenden de manera diferente y cómo sus preferencias pueden cambiar con el tiempo. Honey y Mumford enfatizan el carácter actitudinal de los estilos de aprendizaje, señalando que:

    .row.justify-content-center.align-items-center.bg_img-3
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 Las preferencias pueden <b>modificarse</b> con el tiempo.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 El <b>contexto</b> y los factores externos influyen en el comportamiento de aprendizaje.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 El modelo se aplica tanto en la educación como en el ámbito empresarial.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Estilos de aprendizaje de Honey y Mumford
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento Estilos de aprendizaje de Honey y Mumford, donde se exploran los cuatro estilos de aprendizaje identificados por estos autores: activo, reflexivo, teórico y pragmático.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estilos de aprendizaje de Honey y Mumford.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/8.png', alt='')

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Aplicación y beneficios del modelo

    p.mb-5 El modelo de Honey y Mumford facilita la personalización de estrategias de enseñanza y permite a los estudiantes optimizar sus métodos de estudio. Según Tran (2024), este enfoque ayuda a:

    .bg_img-2
      div.row.justify-content-center.align-items-stretch.mb-5
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/9.svg" alt="" style="width: 90px")
            h5.text-center Primero
            p.mb-0.text-center Identificar las <b>preferencias individuales</b> en el aprendizaje.
      
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/10.svg" alt="" style="width: 90px")
            h5.text-center Segundo
            p.mb-0.text-center Adaptar las estrategias de estudio para mejorar la efectividad del aprendizaje.
      
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/11.svg" alt="" style="width: 90px")
            h5.text-center Tercero
            p.mb-0.text-center Seleccionar técnicas y materiales alineados con las necesidades individuales.
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/12.svg" alt="" style="width: 90px")
            h5.text-center Cuarto
            p.mb-0.text-center Fomentar la <b>colaboración y comunicación</b> efectiva en el aula.
      

      .row.justify-content-center.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Estilos de aprendizaje
                    p.mb-0 Para conocer más sobre los estilos de aprendizaje y realizar una autoevaluación, se recomienda revisar el siguiente video:
                  .col-sm-auto
                     a.boton.color-primario(href="https://www.youtube.com/watch?v=DuEKXHuH5as" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Función del docente en este modelo

    p.mb-5 Según el modelo de <em>Honey y Mumford</em>, el docente desempeña un papel fundamental en la creación de un entorno de aprendizaje adaptado a los diferentes estilos de aprendizaje de los estudiantes (Tran, 2024). Para ello, es necesario que implemente estrategias que permitan identificar y atender las preferencias individuales de cada estudiante.

    .bg_img-4
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/13.png", alt="").mb-4.mb-lg-0
        .col-lg-8.order-2.order-lg-1
      
          AcordionA(tipo="b")
            .div(titulo="Identificar los estilos de aprendizaje")
              p Aplicar cuestionarios, realizar observaciones y diseñar actividades que permitan determinar los estilos predominantes en el aula.
      
            .div(titulo="Adaptar las estrategias de enseñanza")
              p Incluir métodos y recursos didácticos que favorezcan a los diferentes estilos de aprendizaje. Por ejemplo: debates para los activos, actividades de reflexión para los reflexivos, lecturas para los teóricos y proyectos prácticos para los pragmáticos.
      
            .div(titulo="Fomentar la reflexión ")
              p Ayudar a los estudiantes a reconocer su estilo de aprendizaje y a utilizarlo de manera estratégica para potenciar su aprendizaje.
      
            .div(titulo="Promover la colaboración")
              p Diseñar actividades grupales que fomenten la interacción entre estudiantes con distintos estilos de aprendizaje, permitiendo el intercambio de ideas y el aprendizaje cooperativo.
    
      p.mb-5 Los estilos de aprendizaje no son categorías rígidas; las personas pueden presentar una combinación de varios estilos y modificarlos con el tiempo. Es recomendable explorar diversas estrategias y técnicas para ampliar las formas en que se adquiere el conocimiento. La clave está en potenciar las fortalezas individuales, al mismo tiempo que se mantiene una actitud abierta hacia nuevas metodologías que puedan enriquecer el aprendizaje.

      .row.justify-content-center.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/link.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Estilos de aprendizaje y métodos de enseñanza.
                    p.mb-0 Para profundizar en este tema, se recomienda revisar el siguiente libro, específicamente el capítulo 8: 
                  .col-sm-auto
                    a.boton.color-primario(href="https://elibro.net/es/ereader/tecnologicadeloriente/129726?page=24" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.udelas.ac.pa/index.php/redes/article/download/redes15-7/282" target="_blank" rel="noopener noreferrer") Goicoechea, L., Chung, J., & Matus, E. (2023). Estilos de enseñanza de un grupo de docentes de escuelas públicas de Panamá. redes, 15(1), 107-124. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.educs.mx/estilos-de-aprendizaje-ned-herrmann/" target="_blank" rel="noopener noreferrer") Estrada, A. P. G. (5 de abril 2022). EduCS - Blog Educativo; Instituto Nacional De Consultoría Y Alineación Empresarial Educs Sas De Cv.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=e7UIX3nN0Dw" target="_blank" rel="noopener noreferrer") ALTEA PSICOLOGOS Granada. ( 2018, 6 de octubre). Diferencias entre los hemisferios cerebrales. JILL BOLTE TAYLOR. [Vídeo] Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
