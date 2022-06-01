var app = angular.module('appXX', []); app.service('PagerService', PagerService); app.controller('recursosXX', ['$scope', 'PagerService', '$timeout', function ($scope, PagerService, $timeout) { 

	
$scope.normas = [ 
	{imagen:'images/pdf.png',
		titulo:'Ejecución Presupuestal - COVID 19 - [Ministerio de Economía y Finanzas - MEF]',
		categoria:'Economía y finanzas',
		descripcion:'0 El conjunto de datos publicados corresponde a un subconjunto de datos de consulta amigable de gasto disponible en el portal de Transparencia Económica del MEF y contiene la información del Presupuesto institucional modificado...',
		descarga:'documentos/datos-abiertos/finanzas/prueba_min_finanzas.zip'},

	{imagen:'images/pdf.png',
		titulo:'Ejecución Presupuestal - COVID 19 - [Ministerio de Transporte - MTC] - 2020',
		categoria:'Transporte',
		descripcion:'1 El conjunto de datos publicados corresponde a un subconjunto de datos de consulta amigable de gasto disponible en el portal de Transparencia Económica del MEF y contiene la información del Presupuesto institucional modificado...',
		descarga:'documentos/datos-abiertos/transporte/prueba_min_transporte.pdf'},

	{imagen:'images/pdf.png',
		titulo:'Ejecución Presupuestal - COVID 19 - [Ministerio de Educación del Perú - MINEDU] - 2021',
		categoria:'Educación',
		descripcion:'2 El conjunto de datos publicados corresponde a un subconjunto de datos de consulta amigable de gasto disponible en el portal de Transparencia Económica del MEF y contiene la información del Presupuesto institucional modificado...',
		descarga:'documentos/datos-abiertos/educacion/prueba_min_educacion.pdf'},

	{imagen:'images/pdf.png',
		titulo:'Ejecución Presupuestal - COVID 19 - [Ministerio de Salud del Perú - MINSA] - 2019',
		categoria:'Salud',
		descripcion:'2 El conjunto de datos publicados corresponde a un subconjunto de datos de consulta amigable de gasto disponible en el portal de Transparencia Económica del MEF y contiene la información del Presupuesto institucional modificado...',
		descarga:'documentos/datos-abiertos/salud/prueba_min_salud.pdf'},

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