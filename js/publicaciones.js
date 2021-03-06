var app = angular.module('appXX', []); app.service('PagerService', PagerService); app.controller('recursosXX', ['$scope', 'PagerService', '$timeout', function ($scope, PagerService, $timeout) { 

$scope.normas = [ 
	{imagen:'images/portadas/publicaciones-01.jpg',titulo:'Electorado y Electores en el Perú. Un análisis del perfil electoral 2016',descarga:'documentos/investigacion/publicaciones/Electorado y Electores en el Perú. Aragón, Encinas, Ramírez.pdf'},
	{imagen:'images/portadas/publicaciones-02.jpg',titulo:'En busca del distrito prometido. Participación directa y consulta vecinal en Alto Trujillo',descarga:'documentos/investigacion/publicaciones/En busca del distrito prometido. Ayala, Arriola y Cantuarias.pdf'},
	{imagen:'images/portadas/publicaciones-03.jpg',titulo:'Perfil de las candidaturas subnacionales en el Perú. Análisis de la Encuesta a Candidatos y Candidatas en las ERM2018',descarga:'documentos/investigacion/publicaciones/Perfil candidaturas subnacionales ERM2018 Ayala, Fuentes.pdf'},
	{imagen:'images/portadas/publicaciones-04.jpg',titulo:'Resumen Ejecutivo: Perfil de las candidaturas subnacionales en el Perú. Análisis de la Encuesta a Candidatos y Candidatas en las ERM2018',descarga:'documentos/investigacion/publicaciones/Resumen Ejecutivo Perfil candidaturas subnacionales ERM2018. Cantuarias.pdf'},
	{imagen:'images/portadas/publicaciones-05.jpg',titulo:'Una elección extraordinaria. Análisis de las elecciones congresales de 2020',descarga:'documentos/investigacion/publicaciones/Una elección extraordinaria. ECE2020 Ayala, Brou, Ponte.pdf'},

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
			pageSize = pageSize || 16; 
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