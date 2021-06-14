//const endpoint = "https://api.resultadossep.eleccionesgenerales2021.pe/results/10/000000?name=param";
const endpoint = "http://127.0.0.1:8080/votos.json";


fetch(endpoint)
  .then(response => response.json())
  .then(json=> {
    const listaResultados = json;
    const value = Object.values(listaResultados);
    
    console.log(listaResultados);
    const keys = Object.keys(listaResultados);
    console.log('keys',keys);
    console.log('value',value);

    const avance = parseFloat(value[0].actData.POR_AVANCE);
    const fecha = value[0].actData.FECHA;
    const agrupacion = value[1][0].AGRUPACION;
    const total_votos = value[1][0].TOTAL_VOTOS;
    const porcentaje_votos = value[1][0].POR_VALIDOS;

    const agrupacionK = value[1][1].AGRUPACION;
    const total_votosK = value[1][1].TOTAL_VOTOS;
    const porcentaje_votosK = value[1][1].POR_VALIDOS;

    console.log('********* % DE AVANCE ELECCIONES 2021', avance ,'**********');
    console.log('Fecha de Actualización', fecha);
    console.log('✏️',value[1][0].AGRUPACION , '| Total de Votos: ', value[1][0].TOTAL_VOTOS , '| % VOTOS', value[1][0].POR_VALIDOS );
    console.log('🍊',value[1][1].AGRUPACION , '| Total de Votos: ', value[1][1].TOTAL_VOTOS , '| % VOTOS', value[1][1].POR_VALIDOS );
    
    //Actas Procesadas
    const textoAvance = document.getElementById("texto-avance");
    textoAvance.innerHTML = JSON.stringify(avance);

    //Fecha Actualización
    const textoFecha = document.getElementById("texto-fecha");
    textoFecha.innerHTML = JSON.stringify(fecha);

    //Grupo Lapiz
    const textoAgrupacion = document.getElementById("texto-agrupacion");
    textoAgrupacion.innerHTML = JSON.stringify(agrupacion);

    const totalVotos = document.getElementById("texto-votos");
    totalVotos.innerHTML = JSON.stringify(total_votos);

    const porcentajeVotos = document.getElementById("texto-porcentajes");
    porcentajeVotos.innerHTML = JSON.stringify(porcentaje_votos);

    //Grupo K
    const textoAgrupacionK = document.getElementById("texto-agrupacion-k");
    textoAgrupacionK.innerHTML = JSON.stringify(agrupacionK);

    const totalVotosK = document.getElementById("texto-votos-k");
    totalVotosK.innerHTML = JSON.stringify(total_votosK);

    const porcentajeVotosK = document.getElementById("texto-porcentajes-k");
    porcentajeVotosK.innerHTML = JSON.stringify(porcentaje_votosK);

    //Calculos

  })
