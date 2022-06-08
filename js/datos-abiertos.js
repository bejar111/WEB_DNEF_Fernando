var app = angular.module('appXX', []); app.service('PagerService', PagerService); app.controller('recursosXX', ['$scope', 'PagerService', '$timeout', function ($scope, PagerService, $timeout) { 

$scope.normas = [ 
	{imagen:'images/pdf.png',
		titulo:'Acoso Político 2014 - Investigación',
		categoria:'Candidatas, acoso político, elecciones regionales y municipales, subnacional',
		descripcion:'La Encuesta sobre Acoso Político en 2014 aborda uno de los mayores problemáticas para las mujeres que participan en política. Con el estudio se entrevistaron a candidatas que participaron de las Elecciones Regionales y Municipales 2014. Entre los temas abordados se encuentran la experiencia política, ejercicio de derechos políticos, discriminación y violencia en campaña, situaciones de acoso político, entre otros.',
		descarga:'documentos/datos-abiertos/rar/Acoso Político 2014-20220607T205330Z-001.zip'},

		{imagen:'images/pdf.png',
		titulo:'Encuesta a Candidatos y Candidatas 2016 - Investigación',
		categoria:'Candidaturas, elecciones congresales',
		descripcion:'La Encuesta a Candidatos y Candidatas 2016 fue un trabajo exploratorio dirigido a las candidaturas congresales de 2016. Entre los temas que se abordan tenemos características sociodemográficas, trayectoria política, reformas electorales, estrategias de campañas electorales, situaciones de discriminación, motivaciones de postulación, autoidentificación ideológica, entre otros.',
		descarga:'documentos/datos-abiertos/rar/Encuesta Candidatos y Candidatas 2016-20220607T205406Z-001.zip'},

		{imagen:'images/pdf.png',
		titulo:'Encuesta Nacional a Candidatos y Candidatas 2018 - Investigación',
		categoria:'Candidaturas, elecciones regionales y municipales, subnacional',
		descripcion:'La Encuesta Nacional de Candidatos y Candidatas 2018 (ENCC) fue una propuesta de investigación con una muestra representativa de candidaturas inscritas en las Elecciones Regionales y Municipales 2018 a nivel nacional. El propósito fue elaborar un perfil de las candidaturas a nivel subnacional en base diversos temas de interés, como las características sociodemográfico, trayectoria política previa a la postulación, las motivaciones para participar en política, campaña electoral y estrategias de financiamiento, acoso político y discriminación, entre otros más.',
		descarga:'documentos/datos-abiertos/rar/Encuesta Nacional a Candidatos y Candidatas 2018-20220607T205413Z-001.zip'},

		{imagen:'images/pdf.png',
		titulo:'Encuesta Nacional a Candidaturas Congresales 2020 - Investigación',
		categoria:'Candidaturas, elecciones congresales',
		descripcion:'La Encuesta Nacional de Candidaturas Congresales 2020 (ENCC) fue un proyecto de investigación con una muestra representativa de candidaturas inscritas en las Elecciones Congresales Extraordinarias 2020. El propósito fue elaborar un perfil de las personas postulantes al Congreso de la República, enfatizando en temas como autoidentificación indígena, valores políticos, motivaciones y trayectorias políticas.',
		descarga:'documentos/datos-abiertos/rar/Encuesta Nacional a Candidaturas Congresales 2020-20220607T205416Z-001.zip'},

		{imagen:'images/pdf.png',
		titulo:'Monitoreo de Medios de Comunicación 2016 - Difusión',
		categoria:'Medios de comunicación, elecciones generales',
		descripcion:'El Monitoreo de Medios de Comunicación en las Elecciones Generales de 2016 buscó identificar el nivel de cumplimento de los principios de equidad y pluralidad informativa, así como de responsabilidad social por parte de los medios masivos de comunicación durante el proceso electoral. Así, se cuantificó los temas relacionados a la elección y la cobertura a las candidaturas en los principales diarios, noticieros y programas informativos de los medios de señal abierta.',
		descarga:'documentos/datos-abiertos/rar/Monitoreo de Medios de Comunicación 2016-20220607T205413Z-001.zip'},

		{imagen:'images/pdf.png',
		titulo:'Perfil del Elector 2011 - Investigación',
		categoria:'Ciudadanía, electorado, elecciones generales',
		descripcion:'El Perfil del Elector 2011 representó el primer estudio sobre el electorado en el país, cuyo propósito fue conocer el comportamiento que tiene la ciudadanía peruana frente a los procesos electorales. Entre los temas abordados se encuentran el interés en política, los criterios para decidir su voto, percepción de los electores sobre el desarrollo nacional, los principales problemas del país, la confianza en las instituciones, entre otros.',
		descarga:'documentos/datos-abiertos/rar/Perfil del Elector 2011-20220607T205416Z-001.zip'},

		{imagen:'images/pdf.png',
		titulo:'Perfil del Elector 2016 - Investigación',
		categoria:'Ciudadanía, electorado, elecciones generales',
		descripcion:'El Perfil del Elector 2016 fue un estudio dirigido a la ciudadanía, el cual permitió conocer las percepciones sobre la situación del país, los procesos electorales y su participación política en el contexto de las elecciones generales 2016. Asimismo, se planteó establecer indicadores de participación cívica que permitan comprender las diferencias en el comportamiento electoral por área de residencia, variables sociodemográficas y autoidentificación étnica. Comparar los resultados con perfiles anteriores para determinar diferencias y similitudes entre la ciudadanía peruana.',
		descarga:'documentos/datos-abiertos/rar/Perfil del Elector 2016-20220607T205416Z-001.zip'},


	// {imagen:'images/pdf.png',
	// 	titulo:'Ejecución Presupuestal - COVID 19 - [Ministerio de Economía y Finanzas - MEF]',
	// 	categoria:'Economía y finanzas',
	// 	descripcion:'0 El conjunto de datos publicados corresponde a un subconjunto de datos de consulta amigable de gasto disponible en el portal de Transparencia Económica del MEF y contiene la información del Presupuesto institucional modificado...',
	// 	descarga:'documentos/datos-abiertos/finanzas/prueba_min_finanzas.zip'},

	// {imagen:'images/pdf.png',
	// 	titulo:'Ejecución Presupuestal - COVID 19 - [Ministerio de Transporte - MTC] - 2020',
	// 	categoria:'Transporte',
	// 	descripcion:'1 El conjunto de datos publicados corresponde a un subconjunto de datos de consulta amigable de gasto disponible en el portal de Transparencia Económica del MEF y contiene la información del Presupuesto institucional modificado...',
	// 	descarga:'documentos/datos-abiertos/transporte/prueba_min_transporte.pdf'},

	// {imagen:'images/pdf.png',
	// 	titulo:'Ejecución Presupuestal - COVID 19 - [Ministerio de Educación del Perú - MINEDU] - 2021',
	// 	categoria:'Educación',
	// 	descripcion:'2 El conjunto de datos publicados corresponde a un subconjunto de datos de consulta amigable de gasto disponible en el portal de Transparencia Económica del MEF y contiene la información del Presupuesto institucional modificado...',
	// 	descarga:'documentos/datos-abiertos/educacion/prueba_min_educacion.pdf'},

	// {imagen:'images/pdf.png',
	// 	titulo:'Ejecución Presupuestal - COVID 19 - [Ministerio de Salud del Perú - MINSA] - 2019',
	// 	categoria:'Salud',
	// 	descripcion:'2 El conjunto de datos publicados corresponde a un subconjunto de datos de consulta amigable de gasto disponible en el portal de Transparencia Económica del MEF y contiene la información del Presupuesto institucional modificado...',
	// 	descarga:'documentos/datos-abiertos/salud/prueba_min_salud.pdf'},

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