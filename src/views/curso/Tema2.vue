<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Modelo de Kolb'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") El modelo de estilos de aprendizaje de Kolb fue propuesto por el psicólogo estadounidense David Kolb en 1975. Según Mosquera (2012), esta teoría es ampliamente reconocida en el campo de la educación y el desarrollo personal. Se basa en la teoría del aprendizaje experiencial, que plantea que el aprendizaje surge de la experiencia y la reflexión sobre ella. Es decir, aprender no implica solo recibir información de manera pasiva, sino participar activamente en situaciones prácticas y luego analizar lo ocurrido para construir conocimiento.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La experiencia es un factor clave en la interpretación del mundo, ya que cada persona la percibe de manera distinta. Espinar y Vigueras (2020) sostienen que, para que la experiencia sea significativa, debe estar vinculada con el contexto histórico, los sistemas y procesos formativos del aprendiz. Aunque los individuos pueden compartir entornos similares, cada uno desarrolla un estilo de aprendizaje propio, lo que resalta la importancia de atender sus capacidades epistémicas, expresivas y somáticas para potenciar su aprendizaje.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Fundamentos del modelo
    
    p David Kolb desarrolló su modelo con base en investigaciones sobre cómo las personas aprenden y procesan la información, tomando como referencia teorías de autores como Kurt Lewin y Jean Piaget. Su propuesta fue presentada en su libro <em>Experiential Learning: Experience as the Source of Learning and Development</em> (1984).
    h5 Este modelo describe el aprendizaje como un ciclo de cuatro etapas:

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/3.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="30%" y="12.5%" numero="+")
                h5 Experiencia concreta (EC)
                p El estudiante interactúa con el objeto de estudio, participando en una nueva experiencia.
    
              .bg-color-white.box-shadow.p-3(x="30%" y="60%" numero="+")
                h5 Observación reflexiva (OR)
                p Se analizan las experiencias desde distintas perspectivas para extraer ideas clave.
    
              .bg-color-white.box-shadow.p-3(x="68%" y="12.5%" numero="+")
                h5 Conceptualización abstracta (CA)
                p Se contrastan las observaciones con información teórica, permitiendo generalizar el conocimiento.
    
              .bg-color-white.box-shadow.p-3(x="69%" y="60%" numero="+")
                h5 Experimentación activa (EA)
                p Se aplican los conocimientos adquiridos en nuevos contextos para evaluar su utilidad.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Este ciclo de aprendizaje es una espiral continua en la que cada etapa se basa en la anterior, permitiendo una comprensión más profunda y significativa de los contenidos.
    
    h2(data-aos="fade-left") Dimensiones del modelo

    .row.justify-content-center.align-items-center.bg_img-3.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
            p Según Mosquera (2012), el modelo de Kolb se fundamenta en dos dimensiones principales:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Percepción:</b> describe cómo las personas perciben la información, ya sea a través de la experiencia concreta o de la conceptualización abstracta.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Procesamiento:</b> indica cómo se procesa la información, ya sea mediante la observación reflexiva o la experimentación activa.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 A partir de la combinación de estas dimensiones, Kolb identifica cuatro estilos de aprendizaje:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Convergente")
            p Prefiere la conceptualización abstracta y la experimentación activa. Se enfoca en la aplicación práctica de ideas y la resolución de problemas.
    
          .div(titulo="Divergente")
            p Prefiere la experiencia concreta y la observación reflexiva. Se caracteriza por la creatividad, la imaginación y la generación de ideas.
    
          .div(titulo="Asimilador ")
            p Prefiere la conceptualización abstracta y la observación reflexiva. Se destaca en la organización y el análisis de información.
    
          .div(titulo="Acomodador")
            p Prefiere la experiencia concreta y la experimentación activa. Es adaptable, práctico y disfruta del trabajo en equipo.
    
    h2(data-aos="fade-left") Ejemplos prácticos
    p.mb-5 Para ilustrar cada estilo de aprendizaje, se presentan los siguientes ejemplos con estudiantes de primaria:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Convergente")
            p Un estudiante en clase de ciencias se enfoca en comprender cómo funcionan las partes de una planta. Disfruta hacer experimentos como plantar semillas y observar su crecimiento.
    
          .div(titulo="Divergente")
            p Un estudiante en clase de literatura crea un cuento sobre animales, utilizando su creatividad para imaginar personajes y situaciones innovadoras.
    
          .div(titulo="Asimilador ")
            p Un estudiante en clase de historia analiza las causas y consecuencias de la independencia de su país, organizando los hechos en una línea de tiempo.
    
          .div(titulo="Acomodador")
            p Un estudiante en un proyecto grupal construye una maqueta de la ciudad, participando activamente en tareas prácticas y colaborando con sus compañeros.
    
    h2(data-aos="fade-left") Aplicación del ciclo de aprendizaje
    p.mb-5 Para comprender cómo funciona el ciclo de Kolb en la enseñanza, se presenta el siguiente ejemplo sobre el aprendizaje de los animales:

    .bg_img-2
      div.row.justify-content-center.align-items-stretch.mb-5
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
            h5.text-center Experiencia concreta (EC)
            p.mb-0.text-center Los estudiantes visitan un zoológico y observan distintos animales.
      
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
            h5.text-center Observación reflexiva (OR)
            p.mb-0.text-center En clase, comentan lo que vieron, destacan detalles que les llamaron la atención y reflexionan sobre sus hábitos.
      
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
            h5.text-center Conceptualización abstracta (CA)
            p.mb-0.text-center El docente explica las características comunes de los animales y su clasificación.
        div.col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/10.svg" alt="" style="width: 90px")
            h5.text-center Experimentación activa (EA)
            p.mb-0.text-center Los estudiantes investigan sobre un animal de su elección y preparan una presentación.
      
      p.mb-4 Es importante recordar que los estudiantes pueden presentar una combinación de estilos de aprendizaje y que estos pueden evolucionar con el tiempo. Observar su comportamiento en distintos contextos permite a los docentes adaptar sus estrategias pedagógicas para optimizar el proceso de enseñanza.

      .row.justify-content-center.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/link.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 El modelo de aprendizaje Kolb
                    p.mb-0 Para ampliar información sobre este modelo, se recomienda revisar el siguiente portal web: 
                  .col-sm-auto
                    a.boton.color-primario(href="https://mi-aprendizaje.com/aprendizaje-kolb/" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Función del docente en este modelo

    .bg_img-4.mb-5
      .row.mb-4
        .col-lg-4.order-2
          figure
            img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
        .col-lg-8.order-1.mb-3.mb-lg-0
          p(data-aos="fade-left") El aprendizaje experiencial se concibe como un proceso que conecta las vivencias personales con nuevos conocimientos, promoviendo así un aprendizaje continuo y significativo. Según González, Patarroyo y Carreño (2017), citados por Espinar y Vigueras (2020), este enfoque permite a los docentes tomar decisiones informadas al seleccionar e integrar recursos didácticos adaptados a los diversos estilos de aprendizaje de sus estudiantes. De esta manera, se optimiza el desarrollo del aprendizaje y se fomenta la equidad en el aula, valorando la diversidad y reconociendo las particularidades individuales.
      
          .bg-color-6.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los modelos de aprendizaje experiencial resaltan las diferencias individuales en los procesos de aprendizaje, lo que exige la implementación de estrategias pedagógicas variadas que abarquen distintos ambientes dentro del mismo contexto educativo. Así, el aprendizaje significativo se potencia a través de las cuatro fases del ciclo de Kolb: experiencia, reflexión, conceptualización y experimentación.
      
          p.mb-4 A continuación, se explora el rol del docente en cada fase del ciclo de aprendizaje experiencial de Kolb.

   
      .row.justify-content-center.align-items-center
        .col-lg-6
          TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
            texto="Rol del docente en cada fase del ciclo de Kolb"
            tiempo
            :audio="require('../../assets/curso/podcast/podcast1.mp3')"
          )

    h2(data-aos="fade-left") Estrategias para un aprendizaje experiencial efectivo
    p.mb-5 Para que el aprendizaje experiencial sea significativo, es esencial que los docentes empleen estrategias didácticas que abarquen las cuatro fases del ciclo de aprendizaje y consideren los diferentes estilos de aprendizaje de sus estudiantes. Entre las estrategias más efectivas se encuentran:


    .bg-full-width.bg-color-4
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Aprendizaje basado en proyectos:</b> permite a los estudiantes explorar temas a través de la investigación y la aplicación práctica.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Estudios de caso:</b> facilitan la conexión entre teoría y práctica mediante el análisis de situaciones reales.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Juegos de roles y simulaciones:</b> ofrecen experiencias inmersivas para el desarrollo de habilidades y conocimientos.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Diarios de aprendizaje y portafolios:</b> fomentan la reflexión y la autoevaluación del proceso de aprendizaje.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    .bg_img-5
      p.mb-4.pt-3 El desafío para los educadores radica en diseñar experiencias de aprendizaje que involucren activamente a los estudiantes en cada etapa del ciclo, desde la experiencia concreta inicial hasta la experimentación activa final. Asimismo, es fundamental que los docentes sean capaces de adaptar sus métodos de enseñanza a los diferentes estilos de aprendizaje presentes en el aula, permitiendo que cada estudiante aprenda de manera significativa y acorde a sus fortalezas y preferencias.

      .row.justify-content-center.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/link.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 El aprendizaje experiencial
                    p.mb-0 Para profundizar en la aplicación de este modelo y las estrategias pedagógicas utilizadas, se recomienda revisar la siguiente investigación:
                  .col-sm-auto
                    a.boton.color-primario(href="https://repository.upb.edu.co/bitstream/handle/20.500.11912/11596/El%20aprendizaje%20experiencial%20como%20estrategia%20para%20la%20educaci%C3%B3n%20ambiental%20infantil.pdf?sequence=1" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/129726?page=24" target="_blank" rel="noopener noreferrer") Sáez López, J. M. (2018). Estilos de aprendizaje y métodos de enseñanza: (ed.). UNED - Universidad Nacional de Educación a Distancia.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://itsmitzis.wordpress.com/2020/07/29/estilos-de-aprendizaje-modelo-de-honey-y-mumford-1986/" target="_blank" rel="noopener noreferrer") Jonhson, M. (29 de julio, 2020). Estilos de Aprendizaje (Modelo de Honey y Mumford, 1986). Wordpress.com. 
           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Ed Knows & Suss Draws. (2021, 17 de noviembre). Estilos de aprendizaje ¡Test para saber el tuyo! [Vídeo] Youtube. 

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
