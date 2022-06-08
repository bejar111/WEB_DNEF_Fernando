var ItemsXpagina=9;
var nombre='inicio';
var nro=4;

$(function(){
	nro=2;
	console.log('Inicio ' + nombre);
	nombre='cambio';

	//  $(".btn-principal").on("click", function() {
	// 	alert(1);
	// 	var tituloFiltro=$("#txtBuscarTitulo").val();
	// 	console.log('titulo ' + tituloFiltro);
	//   });

})



var app = angular.module('appXX', []); app.service('PagerService', PagerService);
app.controller('recursosXX', ['$scope', 'PagerService', '$timeout', function ($scope, PagerService, $timeout) {

	$scope.page = 1;
	// $scope.pageChanged = function() {
	// 	var startPos = ($scope.page - 1) * 3;
	// 	//$scope.displayItems = $scope.totalItems.slice(startPos, startPos + 3);
	// 	console.log($scope.page);
	//   };

	$scope.normas = [
		{anio:'2019',imagen:'images/portadas/perfil-01.jpg',titulo:'Reporte Electoral 1: ¿Cuál es el perfil del elector peruano?',descarga:'documentos/investigacion/perfil-electoral/Reporte Electoral 1 - ECE 2020_Perfl del Electorado.pdf'},
		{anio:'2019',imagen:'images/portadas/perfil-02.jpg',titulo:'Reporte Electoral 2: ¿Cuál es el perfil de las candidaturas congresales?',descarga:'documentos/investigacion/perfil-electoral/Reporte Electoral 2 - ECE2020_ Perfil de las candidaturas congresales.pdf'},
		{anio:'2020',imagen:'images/portadas/perfil-03.jpg',titulo:'Reporte Electoral 3: ¿Qué tan inclusivas son las listas al parlamento?',descarga:'documentos/investigacion/perfil-electoral/Reporte Electoral 3 - ECE 2020_Inclusión en listas parlamentarias.pdf'},
		{anio:'2020',imagen:'images/portadas/perfil-04.jpg',titulo:'Reporte Electoral 4: ¿Cuál es el rasgo distintivo de las candidatas en el Perú?',descarga:'documentos/investigacion/perfil-electoral/Reporte Electoral 4 - ECE2020 _ Participación de mujeres.pdf'},
		{anio:'2020',imagen:'images/portadas/perfil-05.jpg',titulo:'Reporte Electoral 5: ¿Cómo ha estado representada la juventud en las listas parlamentarias?',descarga:'documentos/investigacion/perfil-electoral/Reporte Electoral 5 - ECE2020_Participación de jovenes.pdf'},
		{anio:'2020',imagen:'images/portadas/perfil-06.jpg',titulo:'Reporte Electoral 6: Encuesta a candidaturas congresales. Resultados preliminares.',descarga:'documentos/investigacion/perfil-electoral/Reporte Electoral 6 - ECE2020_Resultados Encuesta a candidaturas congresales.pdf'},
		{anio:'2020',imagen:'images/portadas/perfil-07.jpg',titulo:'Reporte Electoral 7: ¿Cómo se conforma el nuevo Congreso de la República?',descarga:'documentos/investigacion/perfil-electoral/Reporte Electoral 7 - ECE2020_Resultados y conformación del Congreso.pdf'},
		{anio:'2020',imagen:'images/portadas/perfil-08.jpg',titulo:'Reporte Electoral 8: ¿Cuál es la participación de personas con discapacidad en las listas congresales?',descarga:'documentos/investigacion/perfil-electoral/Reporte Electoral 8 - ECE2020_ Participación de personas con discapacidad.pdf'},
		{anio:'2020',imagen:'images/portadas/perfil-09.jpg',titulo:'Reporte Electoral 9: Impacto de la posición de lista y voto preferencial en las elecciones congresales (2016-2020)',descarga:'documentos/investigacion/perfil-electoral/Reporte electoral 9 - ECE 2020_Impacto del voto preferencial y orden de lista.pdf'},
		{anio:'2022',imagen:'images/portadas/perfil-10.jpg',titulo:'Perfil Electoral 1: Cambios y continuidades en las Elecciones Regionales y Municipales',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 1 - ERM 2022_Cambios y continuidades en las ERM.pdf'},
		{anio:'2022',imagen:'images/portadas/perfil-11.jpg',titulo:'Perfil Electoral 2: Análisis del padrón electoral de las ERM 2022',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 2 - Análisis del padrón electoral ERM 2022.pdf'},
		{anio:'2022',imagen:'images/portadas/perfil_electoral_3.jpg',titulo:'Perfil Electoral 3: Paridad y alternancia en las elecciones internas ERM 2022',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 3 - Paridad y Alternancia en las elecciones internas ERM 2022.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-12.jpg',titulo:'Perfil Electoral 1: Electorado nacional y la nueva circunscripción de peruanos residentes en el exterior',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 1 - EG2021_ Electorado nacional y residentes en el extranjero.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-13.jpg',titulo:'Perfil Electoral 2: Los retos de la pandemia para la elección del bicentenario',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 2 - EG2021_Retos de la pandemia.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-14.jpg',titulo:'Perfil Electoral 3: Las elecciones internas de las organizaciones políticas en perspectiva',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 3 - EG2021_ Elecciones internas de las OP.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-15.jpg',titulo:'Perfil Electoral 4: ¿Cuáles son las propuestas de los partidos políticos para el Bicentenario de la República?',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 4 - EG2021_Planes de Gobierno y propuestas de partidos políticos.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-16.jpg',titulo:'Perfil Electoral 5: ¿Cuál es el perfil de las candidaturas a las EG2021?',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 5 - EG2021_Perfil de las candidaturas_.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-17.jpg',titulo:'Perfil Electoral 6: Participación política de las mujeres en las EG2021',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 6 - EG2021_Participación política de las mujeres.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-18.jpg',titulo:'Perfil Electoral 7: Participación política de candidaturas jóvenes en las EG 2021',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 7-EG 2021_ Participación política de jóvenes.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-19.jpg',titulo:'Perfil Electoral 8: Participación política de las poblaciones en situación de vulnerabilidad',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 8- EG2021_Participación política de la población en situación de vulnerabilidad.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-20.jpg',titulo:'Perfil Electoral 9: Redes sociales en la campaña electoral',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 9 - EG2021_Redes sociales en la campaña electoral.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-21.jpg',titulo:'Perfil Electoral 10:  Encuesta a Candidaturas Congresales 2021 -Resultados preliminares',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 10 - EG2021_Resultados preliminares_Encuesta a Candidaturas Congresales.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-22.jpg',titulo:'Perfil Electoral 11:  Resultados de la primera vuelta EG 2021',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 11 - EG2021_Resultados primera vuelta electoral.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-23.jpg',titulo:'Perfil Electoral 12: Monitoreo de medios de comunicación durante la primera vuelta de las EG 2021',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 12 - EG2021_Monitoreo de medios en primera vuelta.pdf'},
		{anio:'2021',imagen:'images/portadas/perfil-24.jpg',titulo:'Perfil Electoral 13: Análisis de los resultados - Segunda Elección Presidencial',descarga:'documentos/investigacion/perfil-electoral/Perfil Electoral 13 - EG2021_Análisis de resultados_Segunda vuelta.pdf'},

			];

	// $scope.searchText = function(item) {
	// 	if (!$scope.query 
	// 		|| (item.titulo.indexOf($scope.query) != -1) 
	// 		// || (item.model.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) 
	// 		){
	// 		return true;
	// 	}
	// 	return false;
	// };

	$scope.pager = {};
	$scope.items = [];
	$scope.initController = function () {
		$scope.setPage(1);
	};

	$scope.setPage = function (page) {
		// ******************************************************************************************
		if (page < 1 || page > $scope.pager.totalPages) { return; }
		$scope.pager = PagerService.GetPager($scope.normas.length, page);
		
		$scope.items = $scope.normas.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
		// ******************************************************************************************

		// var txtBuscarTitulo_=$('#txtBuscarTitulo').val();
		// console.log(txtBuscarTitulo_);

		// if (page < 1 || page > $scope.pager.totalPages) { return; }
		// $scope.pager = PagerService.GetPager($scope.normas.length, page);
		// $scope.items = $scope.normas.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);

		// var lista=$scope.normas;
		// var listaNormas=lista;

		// correcto
		// var listaNormas = $.grep(lista, function(v) {
		// return  v.anio === 2020 && v.titulo === "Reporte Electoral 1 - ECE 2020_Perfl del Electorado";
		// });

		//correcto
		//var listaNormas = lista.filter(v => v.anio == 2021);

		//no sirve
		// var listaNormas = $.grep(lista, function(item) {
		// 	return item.anio.indexOf(1) >= 0;
		// });


		// let a = ["foo","fool","cool","god"];
		// var term = 'congresales'; // search term (regex pattern)
		// var search = new RegExp(term , 'i'); // prepare a regex object
		// let b = a.filter(item => search.test(item));
		// console.log(b); // ["foo","fool","cool"]



		// ***************************************************************
		////FILTRO POR TEXTO | OK
		// var term = 'a'; // search term (regex pattern)
		// var search = new RegExp(term , 'i'); // prepare a regex object
		// var listaNormas = lista.filter(item => search.test(item.titulo));
		// console.log(listaNormas); // ["foo","fool","cool"]
		// ***************************************************************

		// ***************************************************************
		//////FILTRO POR TEXTO | OK
		// var selectedCodes = [2020,2022];
		// var listaNormas = lista.filter(function(item) {
		// 	return (
		// 	  selectedCodes.indexOf(parseInt(item.anio)) > -1
		// 	);
		//   });
		// console.log(listaNormas);
		// ***************************************************************

		// if (page < 1 || page > $scope.pager.totalPages) { return; }
		// $scope.pager = PagerService.GetPager(listaNormas.length, page);
		// $scope.items = listaNormas.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);



	};

	$scope.initController();

 }]);

	function PagerService() {
	var service = {};
	service.GetPager = GetPager;
	return service;

		function GetPager(totalItems, currentPage, pageSize) {
			currentPage = currentPage || 1;
			pageSize = pageSize || ItemsXpagina; //CAMBIO DE ITEM POR PAGINA
			var totalPages = Math.ceil(totalItems / pageSize);
			var startPage, endPage;
			if (totalPages <= 8) {
				startPage = 1; endPage = totalPages; }
			else {
				if (currentPage <= 6) {
					startPage = 1;
					endPage = 10; }
				else if (currentPage + 4 >= totalPages) {
					startPage = totalPages - 9; endPage = totalPages; }
				else {
					startPage = currentPage - 5;
					endPage = currentPage + 4; }
				}
			var startIndex = (currentPage - 1) * pageSize;
			var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
			var temp_page = []; for (var i = 0; i < totalItems / pageSize; i++) { temp_page.push(i + 1); }
			var pages = temp_page;
			return {
				totalItems: totalItems,
				currentPage: currentPage,
				pageSize: pageSize,
				totalPages: totalPages,
				startPage: startPage,
				endPage: endPage,
				startIndex: startIndex,
				endIndex: endIndex,
				pages: pages
			};
		};

	};