function loaddata_recursos(){
	var datos = {
      'name': 'Recursos Disponibles',
      'children': [
        { 'name': 'Significado del cálculo de viabilidad',
		'children':[
			{ 'name': 'Recursos del capital físico', },
		]},
        { 'name': 'Métodos de Producción',
		'children':[
			{ 'name': 'Recursos Externos' },
		]},
        { 'name': 'Capacidad Instalada y su incremento',
		'children':[
			{ 'name': 'Infraestructura Institucional'},
		]},
        { 'name': 'Recursos Humanos',
		'children':[
			{ 'name': 'Capacidad de innovar y crear'}
		]},
        { 'name': 'Recursos Naturales'}       
      ]
    };
    $('#recursos').orgchart({
		'data' : datos,
	});
};

function loaddata_tesis(){
    var datos = {
      'name': 'Planteamiento de Objetivos y Viabilidad',
      'children': [
        { 'name': 'Descripcion del Poryecto Nacional',
          'children':[
            { 'name': 'Tesis 1',
              'title': 'Los objetivos nacionales deben plantearse en términos \
              de necesidades humanas, individuales y colectivas, materiales o \
              “espirituales”; de todo tipo.'},
            { 'name': 'Tesis 2',
              'title': 'La lista de las necesidades que la sociedad debe \
               considerar para satisfacerlas en algún grado o ninguno.'},
            { 'name': 'Tesis 3',
              'title': 'Cada posible propuesta, opción, meta o alternativa \
               para satisfacer en algún grado una necesidad, debe ser tan \
               explicita y concreta.'},
        ]},     
        { 'name': 'Viabilidad',
          'children':[
            { 'name': 'Tesis 4',
              'title': 'Se estudia si hay alguna estrategia, o manera de \
                        satisfacer todas las metas, utilizando los recursos \
                        disponibles al comienzo y los que se vayan creando.',
            'children':[{ 
              'name': 'Tesis 5',
              'title': 'Si tiene viabilidad física, \
                       se ensaya su viabilidad social.'},
             {'name': 'Tesis 6',
              'title': 'Con una estrategia tecnológica y distributiva, se \
              calculan los indicadores de viabilidad política.'},
            ]},
            
           { 'name': 'Tesis 7',
              'title': 'Este método sirve para evaluar Proyectos Nacionales y \
               hallar estrategias tecnológicas y distributivas que los hagan \
               viables.'},
        ]},
      ]
    };
    $('#tesis').orgchart({
        'data' : datos,
        'nodeContent': 'title',
        //'direction': 'l2r'
    });   
}