package com.example.backend_sprint2.Controlador;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_sprint2.Modelo.MarcadorModelo;
import com.example.backend_sprint2.Servicios.MarcadorServicios;


@RestController
//http://localhost:8080/marcador
@RequestMapping("/marcador")
@CrossOrigin("*")
public class UsuarioControlador {

    @Autowired
    MarcadorServicios servicio;

    //Funciona
    //http://localhost:8080/marcador/guardar
    @PostMapping("/guardar")
    public MarcadorModelo guardaMarcador(@RequestBody MarcadorModelo marcador){
        return servicio.marcadorGuardado(marcador);
    }

    //Funciona
    //http://localhost:8080/marcador/consultartodos
    @GetMapping("/consultartodos")
    public ArrayList<MarcadorModelo> consultarMarcador(){
        return servicio.consultarMarcador();
    }

    //Funciona
    //http://localhost:8080/marcador/consultarfecha/ddmmaaaa
    @GetMapping("/consultarfecha/{fecha}")
    public ArrayList<MarcadorModelo> consultarporFecha(@PathVariable("fecha") String fecha){
        return servicio.consultarporFecha(fecha);
    }  
    
    //funciona
    //http://localhost:8080/marcador/consultardeporte/futbol  
    @GetMapping("/consultardeporte/{deporte}")
    public ArrayList<MarcadorModelo> consultarporDeporte(@PathVariable("deporte") String deporte){
        return servicio.consultarporDeporte(deporte);
    }

    //Funciona
    //http://localhost:8080/marcador/consultarequipolocal/equipoLocal
    @GetMapping("/consultarequipolocal/{equipoLocal}")
    public ArrayList<MarcadorModelo> consultarporEquipoLocal(@PathVariable("equipoLocal")String equipoLocal){
        return servicio.consultarporEquipoLocal(equipoLocal);
    }

    //Funciona
    //http://localhost:8080/marcador/consultarequipovisitante/equipoVisitante
    @GetMapping("/consultarequipovisitante/{equipoVisitante}")
    public ArrayList<MarcadorModelo> consultarporEquipoVisitante(@PathVariable("equipoVisitante")String equipoVisitante){
        return servicio.consultarporEquipoVisitante(equipoVisitante);
    }

    //Funciona
    //http://localhost:8080/marcador/consultarpais/pais
    @GetMapping("/consultarpais/{pais}")
    public ArrayList<MarcadorModelo> consultarpoPais(@PathVariable("pais")String pais){
        return servicio.consultarporPais(pais);
    }

}
