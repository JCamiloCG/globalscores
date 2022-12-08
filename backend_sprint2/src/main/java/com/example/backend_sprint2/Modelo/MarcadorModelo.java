package com.example.backend_sprint2.Modelo;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class MarcadorModelo {

    @Id
    private ObjectId numero[];
    private String fecha;
    private String deporte;
    private String pais;
    private String equipoLocal;
    private String anotacionEquipoLocal;
    private String equipoVisitante;
    private String anotacionEquipoVisitante;

    public ObjectId[] getNumero() {
        return numero;
    }
    public void setNumero(ObjectId[] numero) {
        this.numero = numero;
    }
    public String getFecha() {
        return fecha;
    }
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
    public String getDeporte() {
        return deporte;
    }
    public void setDeporte(String deporte) {
        this.deporte = deporte;
    }
    public String getPais() {
        return pais;
    }
    public void setPais(String pais) {
        this.pais = pais;
    }
    public String getEquipoLocal() {
        return equipoLocal;
    }
    public void setEquipoLocal(String equipoLocal) {
        this.equipoLocal = equipoLocal;
    }
    public String getAnotacionEquipoLocal() {
        return anotacionEquipoLocal;
    }
    public void setAnotacionEquipoLocal(String anotacionEquipoLocal) {
        this.anotacionEquipoLocal = anotacionEquipoLocal;
    }
    public String getEquipoVisitante() {
        return equipoVisitante;
    }
    public void setEquipoVisitante(String equipoVisitante) {
        this.equipoVisitante = equipoVisitante;
    }
    public String getAnotacionEquipoVisitante() {
        return anotacionEquipoVisitante;
    }
    public void setAnotacionEquipoVisitante(String anotacionEquipoVisitante) {
        this.anotacionEquipoVisitante = anotacionEquipoVisitante;
    }


    
    
}
