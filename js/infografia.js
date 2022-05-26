var app = angular.module('appXX', []); app.service('PagerService', PagerService); app.controller('recursosXX', ['$scope', 'PagerService', '$timeout', function ($scope, PagerService, $timeout) { 

$scope.normas = [ 
	{imagen:'images/pdf.png',titulo:'INF-CPR-2021 - 1',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 1.pdf'},
	{imagen:'images/pdf.png',titulo:'INF-CPR-2021 - 2 ',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 2 .pdf'},
	{imagen:'images/pdf.png',titulo:'INF-CPR-2021 - 3',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 3.pdf'},
	{imagen:'images/pdf.png',titulo:'INF-CPR-2021 - 4',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 4.pdf'},
	{imagen:'images/pdf.png',titulo:'INF-CPR-2021 - 5- CHIPAO',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 5- CHIPAO.pdf'},
	{imagen:'images/pdf.png',titulo:'INF-CPR-2021 - 6 - Resultados',descarga:'documentos/investigacion/infografias/INF-CPR-2021 - 6 - Resultados.pdf'},
	{imagen:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 1.jpg',titulo:'Perfil ERM2022_Infografía 1',descarga:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 1.jpg'},
	{imagen:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 2.jpg',titulo:'Perfil ERM2022_Infografía 2',descarga:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 2.jpg'},
	{imagen:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 3.jpg',titulo:'Perfil ERM2022_Infografía 3',descarga:'documentos/investigacion/infografias/Perfil ERM2022_Infografía 3.jpg'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 1 Aprobación del Congreso.jpg',titulo:'INF - EG 2021 - 1 Aprobación del Congreso',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 1 Aprobación del Congreso.jpg'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 2 Confianza en el Congreso a nivel regional.jpg',titulo:'INF - EG 2021 - 2 Confianza en el Congreso a nivel regional',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 2 Confianza en el Congreso a nivel regional.jpg'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 3 Conformación del padrón electoral según edad.png',titulo:'INF - EG 2021 - 3 Conformación del padrón electoral según edad',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 3 Conformación del padrón electoral según edad.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 4 Derechos de participación ciudadana.jpg',titulo:'INF - EG 2021 - 4 Derechos de participación ciudadana',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 4 Derechos de participación ciudadana.jpg'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 5 Organizaciones que presentaron el 100_ de sus listas.png',titulo:'INF - EG 2021 - 5 Organizaciones que presentaron el 100_ de sus listas',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 5 Organizaciones que presentaron el 100_ de sus listas.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 6 Participación en elecciones internas.png',titulo:'INF - EG 2021 - 6 Participación en elecciones internas',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 6 Participación en elecciones internas.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 7 Variación entre la participación en elecciones internas y las listas presentadas.png',titulo:'INF - EG 2021 - 7 Variación entre la participación en elecciones internas y las listas presentadas',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 7 Variación entre la participación en elecciones internas y las listas presentadas.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 8 Posturas sobre el cambio de constitución.png',titulo:'INF - EG 2021 - 8 Posturas sobre el cambio de constitución',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 8 Posturas sobre el cambio de constitución.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 9 Posturas sobre la Reforma Política.png',titulo:'INF - EG 2021 - 9 Posturas sobre la Reforma Política',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 9 Posturas sobre la Reforma Política.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 10 Perfil de las candidaturas a la presidencia.png',titulo:'INF - EG 2021 - 10 Perfil de las candidaturas a la presidencia',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 10 Perfil de las candidaturas a la presidencia.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 11 Sentencias declaradas por las candidaturas a la presidencia.png',titulo:'INF - EG 2021 - 11 Sentencias declaradas por las candidaturas a la presidencia',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 11 Sentencias declaradas por las candidaturas a la presidencia.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 12 Perfil de las candidatas al Congreso.png',titulo:'INF - EG 2021 - 12 Perfil de las candidatas al Congreso',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 12 Perfil de las candidatas al Congreso.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 13 Perfil de las candidatas al Parlamento Andino.png',titulo:'INF - EG 2021 - 13 Perfil de las candidatas al Parlamento Andino',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 13 Perfil de las candidatas al Parlamento Andino.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 14 Candidaturas jóvenes al Congreso.png',titulo:'INF - EG 2021 - 14 Candidaturas jóvenes al Congreso',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 14 Candidaturas jóvenes al Congreso.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 15 Candidaturas jóvenes al Parlamento Andino.png',titulo:'INF - EG 2021 - 15 Candidaturas jóvenes al Parlamento Andino',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 15 Candidaturas jóvenes al Parlamento Andino.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 16 Características de las candidaturas con residencias fuera de la circunscripción por la que postulan.png',titulo:'INF - EG 2021 - 16 Características de las candidaturas con residencias fuera de la circunscripción por la que postulan',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 16 Características de las candidaturas con residencias fuera de la circunscripción por la que postulan.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 17 Grado de descentralización de las candidaturas según regiones.png',titulo:'INF - EG 2021 - 17 Grado de descentralización de las candidaturas según regiones',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 17 Grado de descentralización de las candidaturas según regiones.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 18 Posición en las listas  de las candidaturas con residencias fuera de la circunscripción por la que postulan.png',titulo:'INF - EG 2021 - 18 Posición en las listas  de las candidaturas con residencias fuera de la circunscripción por la que postulan',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 18 Posición en las listas  de las candidaturas con residencias fuera de la circunscripción por la que postulan.png'},
	{imagen:'documentos/investigacion/infografias/INF - EG 2021 - 19  Regiones con más candidaturas con residencias fuera de la circunscripción por la que postulan.png',titulo:'INF - EG 2021 - 19  Regiones con más candidaturas con residencias fuera de la circunscripción por la que postulan',descarga:'documentos/investigacion/infografias/INF - EG 2021 - 19  Regiones con más candidaturas con residencias fuera de la circunscripción por la que postulan.png'},
	{imagen:'documentos/investigacion/infografias/Infografía 1-01.png',titulo:'Infografía 1-01',descarga:'documentos/investigacion/infografias/Infografía 1-01.png'},
	{imagen:'documentos/investigacion/infografias/Infografía 2-01.png',titulo:'Infografía 2-01',descarga:'documentos/investigacion/infografias/Infografía 2-01.png'},
	{imagen:'documentos/investigacion/infografias/Infografía 3-01.png',titulo:'Infografía 3-01',descarga:'documentos/investigacion/infografias/Infografía 3-01.png'},
	{imagen:'documentos/investigacion/infografias/Infografía 4-01.png',titulo:'Infografía 4-01',descarga:'documentos/investigacion/infografias/Infografía 4-01.png'},


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
			pageSize = pageSize || 15; //CAMBIO DE ITEM POR PAGINA
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