var app = angular.module('appXX', []); app.service('PagerService', PagerService); app.controller('recursosXX', ['$scope', 'PagerService', '$timeout', function ($scope, PagerService, $timeout) { 

$scope.normas = [ 
	{imagen:'documentos/investigacion/infografias/INF-CPR-2021 - 1.png',titulo:'¿Qué es la revocatoria y por qué se activan?',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 1.pdf'},
	{imagen:'documentos/investigacion/infografias/INF-CPR-2021 - 2.png',titulo:'¿Qué pasa si se revocan a las autoridades?',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 2 .pdf'},
	{imagen:'documentos/investigacion/infografias/INF-CPR-2021 - 3.png',titulo:'¿Cómo se han convocado las revocatorias?',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 3.pdf'},
	{imagen:'documentos/investigacion/infografias/INF-CPR-2021 - 4.png',titulo:'¿Dónde se va a realizar la CPR 2021 y qué autoridades han sido convocadas?',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 4.pdf'},
	{imagen:'documentos/investigacion/infografias/INF-CPR-2021 - 5- CHIPAO.png',titulo:'¿Qué son las elecciones municipales complementarias?',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 5- CHIPAO.pdf'},
	{imagen:'documentos/investigacion/infografias/INF-CPR-2021 - 6 - Resultados.png',titulo:'¿Cuáles han sido los resultados de la consulta popular de revocatoria 2021?',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 6 - Resultados.pdf'},
	{imagen:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 1.jpg',titulo:'Número de circunscripciones convocadas a Elecciones Regionales y Municipales (2002 - 2022)',descarga:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 1.jpg'},
	{imagen:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 2.jpg',titulo:'Candidaturas subnacionales por tipo de organización política (2002 - 2018)',descarga:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 2.jpg'},
	{imagen:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 3.jpg',titulo:'Paridad vertical y paridad horizontal',descarga:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 3.jpg'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 1 Aprobación del Congreso.jpg',titulo:'Aprobación del Congreso de la República del Perú',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 1 Aprobación del Congreso.jpg'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 2 Confianza en el Congreso a nivel regional.jpg',titulo:'Confianza en el Congreso a nivel latinoamericano',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 2 Confianza en el Congreso a nivel regional.jpg'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 3 Conformación del padrón electoral según edad.png',titulo:'Conformación del padrón electoral según grupo etario',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 3 Conformación del padrón electoral según edad.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 4 Derechos de participación ciudadana.jpg',titulo:'Derechos de participación ciudadana aplicables al ámbito nacional',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 4 Derechos de participación ciudadana.jpg'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 5 Organizaciones que presentaron el 100_ de sus listas.png',titulo:'Organizaciones que presentaron el 100% de sus listas',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 5 Organizaciones que presentaron el 100_ de sus listas.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 6 Participación en elecciones internas.png',titulo:'Participación en elecciones internas',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 6 Participación en elecciones internas.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 7 Variación entre la participación en elecciones internas y las listas presentadas.png',titulo:'Variación entre la participación en elecciones internas y las listas presentadas',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 7 Variación entre la participación en elecciones internas y las listas presentadas.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 8 Posturas sobre el cambio de constitución.png',titulo:'Posturas sobre el cambio de constitución',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 8 Posturas sobre el cambio de constitución.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 9 Posturas sobre la Reforma Política.png',titulo:'Posturas sobre la Reforma Política',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 9 Posturas sobre la Reforma Política.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 10 Perfil de las candidaturas a la presidencia.png',titulo:'Perfil de las candidaturas a la presidencia',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 10 Perfil de las candidaturas a la presidencia.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 11 Sentencias declaradas por las candidaturas a la presidencia.png',
	titulo:'Sentencias declaradas por las candidaturas a la presidencia',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 11 Sentencias declaradas por las candidaturas a la presidencia.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 12 Perfil de las candidatas al Congreso.png',titulo:'Perfil de las candidatas al Congreso',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 12 Perfil de las candidatas al Congreso.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 13 Perfil de las candidatas al Parlamento Andino.png',titulo:'Perfil de las candidatas al Parlamento Andino',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 13 Perfil de las candidatas al Parlamento Andino.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 14 Candidaturas jóvenes al Congreso.png',titulo:'Candidaturas jóvenes al Congreso',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 14 Candidaturas jóvenes al Congreso.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 15 Candidaturas jóvenes al Parlamento Andino.png',titulo:'Candidaturas jóvenes al Parlamento Andino',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 15 Candidaturas jóvenes al Parlamento Andino.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 16 Características de las candidaturas con residencias fuera de la circunscripción por la que postulan.png',
	titulo:'Características de las candidaturas con residencias fuera de la circunscripción por la que postulan',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 16 Características de las candidaturas con residencias fuera de la circunscripción por la que postulan.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 17 Grado de descentralización de las candidaturas según regiones.png',
	titulo:'Grado de descentralización de las candidaturas según regiones',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 17 Grado de descentralización de las candidaturas según regiones.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 18 Posición en las listas  de las candidaturas con residencias fuera de la circunscripción por la que postulan.png',
	titulo:'Posición en las listas  de las candidaturas con residencias fuera de la circunscripción por la que postulan',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 18 Posición en las listas  de las candidaturas con residencias fuera de la circunscripción por la que postulan.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 19  Regiones con más candidaturas con residencias fuera de la circunscripción por la que postulan.png',
	titulo:'Regiones con más candidaturas con residencias fuera de la circunscripción por la que postulan',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 19  Regiones con más candidaturas con residencias fuera de la circunscripción por la que postulan.png'},
	{imagen:'documentos/investigacion/infografias/Infografía 1-01.png',titulo:'¿Qué es el voto preferencial?',descarga:'documentos/investigacion/infografias/Infografía 1-01.png'},
	{imagen:'documentos/investigacion/infografias/Infografía 2-01.png',titulo:'Impacto del voto preferencial en la elección de congresistas',descarga:'documentos/investigacion/infografias/Infografía 2-01.png'},
	{imagen:'documentos/investigacion/infografias/Infografía 3-01.png',titulo:'Impacto del voto preferencial en la elección de mujeres',descarga:'documentos/investigacion/infografias/Infografía 3-01.png'},
	{imagen:'documentos/investigacion/infografias/Infografía 4-01.png',titulo:'Impacto del voto preferencial a nivel regional',descarga:'documentos/investigacion/infografias/Infografía 4-01.png'},


]; 
	$scope.pager = {}; $scope.items = []; $scope.initController = function () { $scope.setPage(1); }; 
	$scope.setPage = function (page) { 
		if (page < 1 || page > $scope.pager.totalPages) { return; } 
		$scope.pager = PagerService.GetPager($scope.normas.length, page); 
		$scope.items = $scope.normas.slice($scope.pager.startIndex, $scope.pager.endIndex + 1); }; 
		$scope.initController(); }]); function PagerService() { 
		var service = {}; service.GetPager = GetPager; 
		return service; 
		function GetPager(totalItems, currentPage, pageSize) { 
			currentPage = currentPage || 1; 
			pageSize = pageSize || 9; //CAMBIO DE ITEM POR PAGINA
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