package com.example.backend_sprint2.Servicios;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend_sprint2.Modelo.MarcadorModelo;
import com.example.backend_sprint2.Repositorio.MarcadorRepositorio;

@Service
public class MarcadorServicios {
    @Autowired
    MarcadorRepositorio repositorio;

    public MarcadorModelo marcadorGuardado(MarcadorModelo marcador) {
        return repositorio.save(marcador);
    }

    public ArrayList<MarcadorModelo> consultarMarcador() {
        return (ArrayList<MarcadorModelo>) repositorio.findAll();
    }

    public ArrayList<MarcadorModelo> consultarporFecha(String fecha){
        return repositorio.findByFecha(fecha);
    }

    public ArrayList<MarcadorModelo> consultarporDeporte(String deporte){
        return repositorio.findByDeporte(deporte);
    }

    public ArrayList<MarcadorModelo> consultarporPais(String pais){
        return repositorio.findByPais(pais);
    }

    public ArrayList<MarcadorModelo> consultarporEquipoLocal(String equipoLocal){
        return repositorio.findByEquipoLocal(equipoLocal);
    }

    public ArrayList<MarcadorModelo> consultarporEquipoVisitante(String equipoVisitante){
        return repositorio.findByEquipoVisitante(equipoVisitante);
    }
}
