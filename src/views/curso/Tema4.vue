<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Modelo de los Cuadrantes Cerebrales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg_img 
      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.order-2
            figure
              img(src='@/assets/curso/tema4/1.png', alt='')
          .col-lg.order-1.mb-3.mb-lg-0
            .p-4
              p.mb-0.text-white(data-aos="fade-up") Las diferencias en la forma de pensar y aprender han sido objeto de estudio en diversas teorías. Una de ellas es el <b>Modelo de los Cuadrantes Cerebrales</b>, desarrollado por <b>Ned Herrmann</b> en la década de 1980. Herrmann se basó en los estudios de <b>Roger Sperry</b> sobre lateralización cerebral y en los trabajos de <b>Paul McLean</b> sobre el cerebro triúnico para proponer una teoría que clasifica los estilos de procesamiento de la información en <b>cuatro cuadrantes</b>.
      
      .row.justify-content-center.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Diferencias entre los hemisferios cerebrales.
                    p.mb-0 Para comprender mejor las diferencias entre los hemisferios cerebrales, se recomienda el siguiente video:
                  .col-sm-auto
                     a.boton.color-primario(href="https://www.youtube.com/watch?v=e7UIX3nN0Dw" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Fundamentos del modelo
    
    p.mb-4 El modelo de Herrmann se basa en la teoría de la dominancia cerebral, que sostiene que cada hemisferio procesa la información de manera distinta, lo que da lugar a diversos estilos de pensamiento y aprendizaje. Según Iguaín et al. (2021), Herrmann identifica cuatro cuadrantes que integran la neocorteza con el sistema límbico, organizados de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .titulo-figura.mb-4
          h5 Figura 1.
          span Modelo de los Cuadrantes del Pensamiento
    
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-6.mb-3.mb-lg-0
        .titulo-figura.mb-4
          h5 Tabla 1.
          span Cuadrantes del pensamiento y sus características
        .tabla-a.color-acento-botones
          table.pst
            thead
              tr
                th.bg-color-5.text-white Cuadrante
                th.bg-color-5.text-white Nombre
                th.bg-color-5.text-white Tipo de pensamiento
            tbody.text-center
              tr
                td.text-bold  Cortical Izquierdo (CI)
                td El "Experto"
                td Analítico y lógico
              tr
                td.text-bold  Límbico Izquierdo (LI)
                td El "Organizador"
                td Secuencial y estructurado
              tr
                td.text-bold Límbico Derecho (LD)
                td El "Comunicador"
                td Emocional y expresivo
              tr
                td.text-bold Cortical Derecho (CD)
                td El "Estratega"
                td Holístico y visionario
    
    p.mb-4 Cada cuadrante representa un estilo de procesamiento único que influye en la forma en que las personas aprenden, se comunican y resuelven problemas.

    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Cortical Izquierdo (CI) -Experto")
            p Lógico, analítico y crítico. Valora la precisión y la evidencia empírica, aunque puede parecer frío o distante. Sus procesos incluyen análisis, razonamiento y evaluación, con preferencia por modelos y teorías. Sus competencias abarcan matemáticas, finanzas, resolución de problemas y pensamiento técnico.
    
          .div(titulo="Límbico Izquierdo (LI) - Organizador")
            p Metódico, estructurado y conservador. Prefiere la planificación y la rutina, aunque puede ser visto como rígido. Se enfoca en la organización, planificación, gestión del tiempo y seguimiento de procesos. Sus competencias incluyen administración, logística, control de calidad y presupuestos.
    
          .div(titulo="Límbico Derecho (LD) - Comunicador")
            p Expresivo, intuitivo y empático. Valora la comunicación y la creatividad, aunque puede parecer impulsivo. Se desempeña en la comunicación, colaboración e intuición, con preferencia por actividades sociales y artísticas. Sus competencias incluyen arte, diseño, relaciones interpersonales, enseñanza y terapia.
    
          .div(titulo="Cortical Derecho (CD) - Estratega")
            p Visionario, innovador y global. Le gusta explorar y asumir riesgos, aunque puede ser percibido como poco realista. Sus procesos involucran pensamiento holístico, integración de ideas y experimentación. Sus competencias se relacionan con estrategia, innovación, emprendimiento y liderazgo.

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Aplicación en el aprendizaje y el trabajo

    .bg-full-width-2.bg-fondo-1
      .p-4.p-md-5

        p.mb-5 Cada cuadrante influye en la manera en que las personas procesan la información y se desempeñan en diferentes contextos. A continuación, se presentan ejemplos de cómo se manifiestan estos estilos en el aprendizaje y en el ámbito laboral:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/4.svg" alt="" style="width: 90px")
              h5.text-center Cortical Izquierdo (CI)
              p.mb-0.text-center Prefiere información clara y estructurada, disfruta analizar y debatir teorías y modelos abstractos. Trabaja con precisión, lógica y datos, destacándose en finanzas, ingeniería y programación.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/4.svg" alt="" style="width: 90px")
              h5.text-center Límbico Izquierdo (LI)
              p.mb-0.text-center Se inclina por actividades organizadas y secuenciales, siguiendo instrucciones paso a paso. Su enfoque está en la planificación y gestión eficiente, con un desempeño sobresaliente en administración, auditoría y logística. 
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/4.svg" alt="" style="width: 90px")
              h5.text-center Límbico Derecho (LD)
              p.mb-0.text-center Aprende mejor con material visual, interactivo y dinámico, disfrutando del trabajo en equipo. Se destaca en roles creativos y de comunicación, como arte, relaciones públicas y docencia.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/4.svg" alt="" style="width: 90px")
              h5.text-center Cortical Derecho (CD)
              p.mb-0.text-center Prefiere el aprendizaje basado en exploración y experimentación, disfrutando desafíos y proyectos innovadores. Se siente cómodo en entornos cambiantes e innovadores, como el emprendimiento y la publicidad.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 El <b>Modelo de los Cuadrantes Cerebrales</b> permite comprender que cada persona tiene una forma particular de procesar la información. No existe un estilo de pensamiento mejor que otro, sino que cada uno tiene fortalezas que pueden complementarse en diferentes situaciones.
    
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 Conocer el propio estilo de pensamiento y el de los demás facilita la comunicación, la resolución de problemas y la colaboración en equipo. Además, permite a los docentes y profesionales diseñar estrategias de enseñanza y trabajo más efectivas, adaptadas a las necesidades individuales.

    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Función del docente en este modelo
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
        p El Modelo de los Cuadrantes Cerebrales permite a los docentes adaptar sus estrategias pedagógicas a las diferentes formas de procesar la información de los estudiantes. Según De la Paz (2004), los alumnos presentan características específicas que pueden influir en su aprendizaje, por lo que es esencial diseñar metodologías ajustadas a sus necesidades.
        p A continuación, se presentan las estrategias recomendadas para cada cuadrante

    .bg_img-6
      .titulo-figura.mb-4
        h5 Tabla 2.
        span Estrategias pedagógicas según los cuadrantes cerebrales
      .tabla-a.color-acento-botones.mb-5
        table
          thead
            tr
              th.bg-color-5.text-white Cuadrante
              th.bg-color-5.text-white Características del estudiante
              th.bg-color-5.text-white Estrategia pedagógica recomendada
              th.bg-color-5.text-white Apertura a otros cuadrantes
          tbody
            tr
              td.text-bold.text-center  Cortical Izquierdo (CI) - "Experto"
              td Razonador, analítico, poco expresivo y con dificultad para la creatividad.
              td Pedagogía racional que priorice el contenido. Uso de libros, manuales y teorías con definiciones precisas. Ejercicios progresivos y competitivos.
              td Incorporar trabajos orales y actividades artísticas para estimular la creatividad.
            tr
              td.text-bold.text-center  Límbico Izquierdo (LI) - "Organizador"
              td Metódico, estructurado, con dificultades para enfrentar imprevistos.
              td Pedagogía estructurada en un ambiente seguro. Instrucciones claras, objetivos definidos, elogios por sus logros. Uso de mnemotecnia y resúmenes.
              td Permitir experiencias dentro de un marco controlado para fomentar flexibilidad.
            tr
              td.text-bold.text-center Límbico Derecho (LD) - "Comunicador"
              td Expresivo, emotivo, creativo, pero con poca organización y control.
              td Pedagogía emotiva y visual. Aprendizaje basado en experiencias, trabajo grupal y métodos kinestésicos.
              td Fomentar la organización de ideas, mejorar la comunicación escrita y gestionar emociones.
            tr
              td.text-bold.text-center Cortical Derecho (CD) - "Estratega"
              td Innovador, visionario, con preferencia por la experimentación y el pensamiento global.
              td Pedagogía creativa con actividades variadas, juegos y teatro. Uso de ejemplos concretos.
              td Trabajar en la estructura del pensamiento y la clasificación de ideas para mejorar la organización.
      
      p.mb-4 El <b>Modelo de los Cuadrantes Cerebrales</b> brinda herramientas valiosas para personalizar la enseñanza y garantizar que cada estudiante pueda aprender de acuerdo con su estilo de pensamiento. Sin embargo, es fundamental fomentar el desarrollo equilibrado de todos los cuadrantes para que los alumnos amplíen sus capacidades y sean más versátiles en su aprendizaje y desempeño profesional.

      .row.justify-content-center.mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.p-4.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/link.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Estilos de enseñanza de un grupo de docentes
                    p.mb-0 Para profundizar en esta sesión, se recomienda el siguiente estudio: 
                  .col-sm-auto
                    a.boton.color-primario(href="https://revistas.udelas.ac.pa/index.php/redes/article/download/redes15-7/282" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right

    .bg-full-width.bg-color-2
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Modelo de inteligencias múltiples
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>Modelo de inteligencias múltiples</b>, un enfoque que amplía la comprensión sobre cómo cada persona aprende de manera única. Este documento explora la teoría propuesta por Howard Gardner, destacando las distintas formas de inteligencia que influyen en el aprendizaje y en la vida cotidiana.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Modelo de inteligencias múltiples.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/7.png', alt='')


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
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/46213?page=1" target="_blank" rel="noopener noreferrer") Antunes, C. (2016). Juegos para estimular las inteligencias múltiples: ( ed.). Narcea Ediciones. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.intellectus.edu.gt/blog/inteligencias-multiples/" target="_blank" rel="noopener noreferrer") Editorial Corporación Intellectus. (12 de abril, 2024). Inteligencias Múltiples: Qué Son y su Importancia en la Educación. Blog. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=otcuUi_VzS8" target="_blank" rel="noopener noreferrer") Cerebrote [@Cerebrote]. (2021, 17 de noviembre). Por qué todos mis estudiantes no rinden igual - Inteligencias múltiples ¿qué son? [Vídeo] Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones NO es una inteligencia propuesta por Howard Gardner en su teoría de las Inteligencias Múltiples?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Inteligencia Lingüística-Verbal',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Inteligencia Lógico-Matemática',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Inteligencia Emocional',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Inteligencia Espacial',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Según el Modelo de Kolb, ¿qué estilo de aprendizaje se caracteriza por preferir la experiencia concreta y la experimentación activa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Convergente',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Divergente',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Asimilador',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Acomodador',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes estilos de aprendizaje, según Honey y Mumford, se describe como "aprender haciendo, disfrutar de la acción y ser espontáneo"?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Activista',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Reflexivo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Teórico',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Pragmático',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'En el Modelo de los Cuadrantes Cerebrales de Herrmann, ¿qué cuadrante se asocia con el pensamiento lógico, analítico y crítico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Cortical Izquierdo (CI)',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Límbico Izquierdo (LI)',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Límbico Derecho (LD)',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Cortical Derecho (CD)',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué modelo de aprendizaje se centra en las preferencias y características individuales de los aprendices, identificando estilos como "Activista”, “Reflexivo”, ¿”Teórico” y “Pragmático”?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Modelo de Inteligencias Múltiples',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Modelo de Kolb',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Modelo de Honey y Mumford',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Modelo de los Cuadrantes Cerebrales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
