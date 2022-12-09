package com.example.backend_sprint2.Repositorio;

import java.util.ArrayList;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.backend_sprint2.Modelo.MarcadorModelo;

@Repository
public interface MarcadorRepositorio extends MongoRepository <MarcadorModelo, String> {
    

    ArrayList<MarcadorModelo> findAll();
    ArrayList<MarcadorModelo> findByFecha(String fecha);
    ArrayList<MarcadorModelo> findByDeporte(String deporte);
    ArrayList<MarcadorModelo> findByPais(String pais);
    ArrayList<MarcadorModelo> findByEquipoLocal(String equipoLocal);
    ArrayList<MarcadorModelo> findByEquipoVisitante(String equipoVisitante);
}
