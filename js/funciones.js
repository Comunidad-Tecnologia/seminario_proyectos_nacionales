function loaddata_recursos(){
	var datos = {
      'name': 'Recursos Disponibles',
      'title': 'general manager',
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
}