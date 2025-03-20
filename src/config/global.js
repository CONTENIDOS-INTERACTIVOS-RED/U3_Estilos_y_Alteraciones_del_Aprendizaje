export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Orientaciones pedagógicas y metodológicas a través de los estilos de aprendizaje',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Orientaciones pedagógicas y metodológicas a través de los estilos de aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelo de Kolb',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fundamentos del modelo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Función del docente en este modelo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modelo de Honey',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Cuestionario CHAEA',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características del modelo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Aplicación y beneficios del modelo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Función del docente en este modelo',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Modelo de los Cuadrantes Cerebrales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fundamentos del modelo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Aplicación en el aprendizaje y el trabajo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Función del docente en este modelo',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Espinar Álava, E. M., & Vigueras Moreno, J. A. (2020). El aprendizaje experiencial y su impacto en la educación actual. Revista Cubana de Educación Superior, 39(3). ',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S0257-43142020000300012&script=sci_arttext',
    },
    {
      referencia:
        'Lourdes, R. U. E. (2009). Estilos de Aprendizaje y Pensamiento Creativo en Estudiantes en Estudiantes de la Especialidad de Educación Primaria de la Universidad Nacional" Jose Faustino Sánchez Carrión" de Huacho (Sede Puno)-2007. ',
      link:
        'https://repositorio.ucsm.edu.pe/server/api/core/bitstreams/adc7b0a3-9582-43bd-9895-a0a0f9a6519c/content',
    },
    {
      referencia:
        'Mosquera, E. D. (2012). Estilos de aprendizaje. Eidos, (5), 5-11. ',
      link:
        'https://revistas.ute.edu.ec/index.php/eidos/article/download/88/81',
    },
    {
      referencia:
        'Ormrod, J. E., Sanz, A. J. E., Soria, M. O., & Carnicero, J. A. C. (2005). Aprendizaje humano (Vol. 4). Madrid, Spain: Pearson Educación.      ',
      link:
        'https://d1wqtxts1xzle7.cloudfront.net/45066834/Aprendizaje-Humano-libre.pdf?1461586548=&response-content-disposition=inline%3B+filename%3DAprendizaje_Humano.pdf&Expires=1738760094&Signature=d2rSkilo0S-wPeccv04MXmXckUX7sK3ACQsvq7Qljuag~O1XQhl0GFV3Pwg9GXsMUvQOZXWmCLRc~gsRESk9BDp-5nnmw7T~oytPC-NwOWiROQzMy-9AAUYMRkYpZhiQwOGq6HXc7GStFluTN1cfw3p2Va-e9t6H2v7fne-xRJ68o396~4y3gk-JQN4JkQOmtoQnYnij4m4iBusdwP4Wyt8-7ZcK-kUcYCOslh8Brz7pYurjYWHnFKoARl~5Nh7fAAMMk88UrOAPYHsCd8A2~h9sdWigCdKnqs0OvaegR7jcJijFaMuKNzUw2luLG6VlVimjuG7fG8g0jaWO1ol7HQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA',
    },
    {
      referencia:
        'Lavi Vasquez, M. D. J. (2022). Validación del cuestionario de Honey-Alonso de estilos de aprendizaje en alumnos de una institución educativa del distrito de Barranco, Lima 2022. ',
      link:
        'https://repositorio.ucv.edu.pe/bitstream/handle/20.500.12692/105570/Lavi_VMDJ%20-%20SD.pdf?sequence=1',
    },
    {
      referencia:
        'Rodríguez, C. R. (2018). Los modelos de aprendizaje de Kolb, Honey y Mumford: implicaciones para la educación en ciencias. ',
      link: 'https://doi.org/10.18634/sophiaj.14v.1i.698',
    },
    {
      referencia:
        'Roque Herrera, Y., Tenelanda Lopez, D. V., Basantes Moscoso, D. R., & Erazo Parra, J. L. (2023). Teorías y modelos sobre los estilos de aprendizaje. Edumecentro, 15. ',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S2077-28742023000100030&script=sci_arttext',
    },
    {
      referencia:
        'Tran, A. (2024). Estilos de aprendizaje de Honey y Mumford | Guía 2025. AhaSlides ',
      link:
        'https://ahaslides.com/es/blog/honey-and-mumford-learning-styles/?form=MG0AV3',
    },
    {
      referencia:
        'De la Paz, P.E. (2004). El Modelo de los Cuadrantes Cerebrales de Herrmann. ',
      link:
        'https://www.orientacionandujar.es/wp-content/uploads/2015/11/Modelo-Cuadrantes-cerebrales-Marco-te%C3%B3rico.pdf',
    },
    {
      referencia:
        'Iguaín, C. Á., Gallardo, M. J. N., Belma, A. R. T., & Ledezma, A. Z. (2021). Evolución del perfil de dominancia cerebral según cuadrantes de Herrmann en estudiantes de segundo año de la carrera de medicina de la Universidad de Antofagasta. Revista Electrónica de Investigación en Docencia Universitaria, 3(2), 71-91. ',
      link: 'https://reidu.cl/index.php/REIDU/article/download/78/69',
    },
    {
      referencia:
        'Galarza, J. C. G., Guamani, M. A. E., Bones, S. B. A., & Morales, E. D. R. R. (2023). Inteligencias múltiples y su desarrollo en los procesos pedagógicos, una revisión sistemática. ConcienciaDigital, 6(1.4), 233-250. ',
      link:
        'https://cienciadigital.org/revistacienciadigital2/index.php/ConcienciaDigital/article/download/1995/4907',
    },
    {
      referencia:
        'Pico, G. L. M., & Martínez, M. E. M. (2021). La gamificación como estrategia para la estimulación de las inteligencias múltiples. Polo del Conocimiento: Revista científico-profesional, 6(1), 111-129. ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/9292097.pdf',
    },
    {
      referencia:
        'ASCD. (1 de septiembre, 2006). Orquestación de inteligencias múltiples. ',
      link: 'https://ascd.org/el/articles/orchestrating-multiple-intelligences',
    },
    {
      referencia:
        'Regaden, B. (29 de mayo, 2015). La Teoría de las Inteligencias Múltiples de Gardner. pymOrganization. ',
      link:
        'https://psicologiaymente.com/inteligencia/teoria-inteligencias-multiples-gardner',
    },
    {
      referencia:
        'Valbuena-Duarte, S., Padilla Escorcia, I. & Rodríguez Bossio, E. (2018). Reconocer la inteligencia lógico-matemática en estudiantes con capacidades excepcionales. ',
      link: 'http://www.scielo.org.co/pdf/ted/n49/0121-3814-ted-49-53.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acomodador',
      significado:
        'Estilo de aprendizaje que prefiere la experiencia concreta y la experimentación activa. Son personas adaptables, prácticas y orientadas a la acción. ',
    },
    {
      termino: 'Activo',
      significado:
        'Estilo de aprendizaje que disfruta de la acción, la participación y la novedad. Aprenden mejor a través de experiencias prácticas y actividades dinámicas',
    },
    {
      termino: 'Asimilador ',
      significado:
        'Estilo de aprendizaje que prefiere la conceptualización abstracta y la observación reflexiva. Son personas lógicas, analíticas y buenas para organizar información.',
    },
    {
      termino: 'Convergente',
      significado:
        'Estilo de aprendizaje que prefiere la conceptualización abstracta y la experimentación activa. Son buenos para aplicar ideas a situaciones prácticas y resolver problemas.',
    },
    {
      termino: 'Divergente',
      significado:
        'Estilo de aprendizaje que prefiere la experiencia concreta y la observación reflexiva. Son personas imaginativas, creativas y buenas para generar ideas.',
    },
    {
      termino: 'Holístico',
      significado:
        'Forma de pensamiento que considera el todo en lugar de las partes individuales. Las personas con este estilo de pensamiento suelen ser intuitivas y creativas.',
    },
    {
      termino: 'Inteligencia',
      significado:
        'Capacidad para resolver problemas o crear productos que son valiosos en una o más culturas. ',
    },
    {
      termino: 'Pragmático',
      significado:
        'Estilo de aprendizaje que busca aplicar la información a situaciones prácticas y reales. Aprenden mejor a través de la experimentación y la resolución de problemas.',
    },
    {
      termino: 'Reflexivo',
      significado:
        'Estilo de aprendizaje que prefiere observar, analizar y reflexionar antes de actuar. Aprenden mejor a través de la observación y el análisis de información.',
    },
    {
      termino: 'Teórico',
      significado:
        'Estilo de aprendizaje que busca entender la teoría y los conceptos detrás de la información. Aprenden mejor a través de la lectura, la investigación y la discusión de ideas.',
    },
  ],
}
