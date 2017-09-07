$(document).ready(function() {   
    $("#portada").load("contenido/0_portada/index.html");
    $("#introduccion").load("contenido/1_introduccion/index.html"); 
    $("#Cap1").load("contenido/2_cap1/index.html");
    //$("#Cap1-continuacion").load("contenido/2_cap1/planteo_general_continuacion.html");
	$("#falacias_1").load("contenido/3_falacias/parte1.html"); 
	$("#falacias_2").load("contenido/3_falacias/parte2.html"); 
	$("#falacias_3").load("contenido/3_falacias/parte3.html");
	$("#pn_1").load("contenido/6_proyectos_nacionales/tabla_1.html");
	$("#pn_2").load("contenido/6_proyectos_nacionales/tabla_2.html");
	$("#pn_3").load("contenido/6_proyectos_nacionales/tabla_3.html"); 
	$("#pn_4").load("contenido/6_proyectos_nacionales/tabla_4.html");
	$("#pn_5").load("contenido/6_proyectos_nacionales/tabla_5.html");
	$("#pn_6").load("contenido/6_proyectos_nacionales/tabla_6.html");
	loaddata_recursos();
    loaddata_tesis();
});
