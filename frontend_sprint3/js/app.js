const app = Vue.createApp({

    data() {
        return {
            numero: [],
            fecha: "",
            pais: "",
            deporte: "",
            equipoLocal: "",
            equipoVisitante: "",
            anotacionEquipoLocal: "",
            anotacionEquipoVisitante: "",
            menu: 0,
            marcadores: {}
        }
    },

    methods: {
        fechahoy() {
            const horaActual = () => {
                const hoy = moment().format('D-MM-Y H:mm');
                return hoy;
            }
        }
    }
});

app.component("guardar-marcador",{

    data(){
        return{
            numero: [],
            fecha: "",
            pais: "",
            deporte: "",
            equipoLocal: "",
            equipoVisitante: "",
            anotacionEquipoLocal: "",
            anotacionEquipoVisitante: "",
            menu: 0,
            marcadores: {}
        }
    },
    template:`
    <section id="guardarMarcadores">
    <div align="center">
        <img src="img/arrow-down-square-fill.svg" height="150">
    </div>
        <h2>Registrar Marcador</h2>
        <form v-on:submit.prevent="guardarMarcador">
        <table>
            <tr>
                <td>Fecha (ddmmaa)</td>
                <td><input type="text" v-model="fecha" /></td>
            </tr>
            <tr>
                <td>Deporte</td>
                <td><input type="text" v-model="deporte" /></td>
            </tr>
            <tr>
                <td>Pais</td>
                <td><input type="text" v-model="pais" /></td>
            </tr>
            <tr>
                <td>Local</td>
                <td><input type="text" v-model="equipoLocal" /></td>
            </tr>
            <tr>
                <td>Anotaciones del Local</td>
                <td><input type="text" v-model="anotacionEquipoLocal" /></td>
            </tr>
            <tr>
                <td>Visitante</td>
                <td><input type="text" v-model="equipoVisitante" /></td>
            </tr>
            <tr>
                <td>Anotaciones del Visitante</td>
                <td><input type="text" v-model="anotacionEquipoVisitante" /></td>
            </tr>
        </table>
        </form>
        <input
            class="btn btn-secondary"
            type="submit"
            value="Guardar Marcador"
            v-on:click="guardarMarcador"
        />
    </section>`,

    methods:{
        guardarMarcador() {
            const endpoint = "http://localhost:8080/marcador/guardar";
            const opciones = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    numero: [],
                    fecha: this.fecha,
                    pais: this.pais,
                    deporte: this.deporte,
                    equipoLocal: this.equipoLocal,
                    anotacionEquipoLocal: this.anotacionEquipoLocal,
                    equipoVisitante: this.equipoVisitante,
                    anotacionEquipoVisitante: this.anotacionEquipoVisitante

                })
            };

            fetch(endpoint, opciones).then(async response => {

                alert("Marcador Guardado");
                this.fecha = "",
                    this.pais = "",
                    this.deporte = "",
                    this.equipoLocal = "",
                    this.anotacionEquipoLocal = "",
                    this.equipoVisitante = "",
                    this.anotacionEquipoVisitante = ""
            })

        }
    },

});

app.component("consultarequipo-visitante",{

    data(){
        return{
            equipoVisitante:"",
            menu: 0,
            marcadores: {}
        }
    },
    template:`
    <section id="tablaporvisitante">
    <div align="center">
    <img src="img/diagram-3-fill.svg" height="150">
    </div>
        <br />
        <h2>Busqueda por Visitante</h2>
        <input type="text" v-model="equipoVisitante" />
        <br />
        <button class="btn btn-secondary" v-on:click="consultarequipoVisitante">
        Buscar
        </button>
        <table class="table table-light bg-dark">
            <thead>
                <tr>
                    <th scope="col">Visitante</th>
                    <th scope="col"></th>
                    <th scope="col">Local</th>
                    <th scope="col"></th>
                    <th scope="col">Deporte</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="marcador in marcadores">
                    <td>{{marcador.equipoVisitante}}</td>
                    <td>{{marcador.anotacionEquipoVisitante}}</td>
                    <td>{{marcador.equipoLocal}}</td>
                    <td>{{marcador.anotacionEquipoLocal}}</td>
                    <td>{{marcador.deporte}}</td>
                    <td>{{marcador.pais}}</td>
                    <td>{{marcador.fecha}}</td>
            </tr>
            </tbody>
        </table>
    </section>`,

    methods:{
        consultarequipoVisitante() {
            const endpoint = "http://localhost:8080/marcador/consultarequipovisitante/" + this.equipoVisitante;
            const opciones = { method: "GET" };
            fetch(endpoint, opciones).then(async response => {
                this.marcadores = await response.json();
                this.equipoVisitante = "";
            })
        }
    }
});

app.component("consultarequipo-local",{

    data(){
        return{
            equipoLocal:"",
            menu: 0,
            marcadores: {}
        }
    },
    template:`
    <section id="tablaporlocal">
        <br />
        <div align="center">
        <img src="img/diagram-3.svg" height="150">
        </div>
        <h2>Busqueda por Local</h2>
        <input type="text" v-model="equipoLocal" />
        <br />
        <button class="btn btn-secondary" v-on:click="consultarequipoLocal">
        Buscar
        </button>
        <table class="table table-light bg-dark">
            <thead>
                <tr>
                    <th scope="col">Local</th>
                    <th scope="col"></th>
                    <th scope="col">Visitante</th>
                    <th scope="col"></th>
                    <th scope="col">Deporte</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Fecha</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="marcador in marcadores">
                    <td>{{marcador.equipoLocal}}</td>
                    <td>{{marcador.anotacionEquipoLocal}}</td>
                    <td>{{marcador.equipoVisitante}}</td>
                    <td>{{marcador.anotacionEquipoVisitante}}</td>
                    <td>{{marcador.deporte}}</td>
                    <td>{{marcador.pais}}</td>
                    <td>{{marcador.fecha}}</td>
            </tr>
            </tbody>
        </table>
    </section>`,

    methods:{
        consultarequipoLocal() {
            const endpoint = "http://localhost:8080/marcador/consultarequipolocal/" + this.equipoLocal;
            const opciones = { method: "GET" };
            fetch(endpoint, opciones).then(async response => {
                this.marcadores = await response.json();
                this.equipoLocal = "";
            })
        }
    }
});

app.component("consultar-deporte",{

    data(){
        return{
            deporte:"",
            menu: 0,
            marcadores: {}
        }
    },
    template:`
    <section id="tablapordeporte">
        <br />
        <div align="center">
        <img src="img/dice-5.svg" height="150">
        </div>
        <h2>Busqueda por Deporte</h2>
        <input type="text" v-model="deporte" />
        <br />
        <button class="btn btn-secondary" v-on:click="consultarDeporte">
        Buscar
        </button>
        <table class="table table-light bg-dark">
        <thead>
            <tr>
                <th scope="col">Deporte</th>
                <th scope="col">Pais</th>
                <th scope="col">Fecha</th>
                <th scope="col">Local</th>
                <th scope="col"></th>
                <th scope="col">Visitante</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="marcador in marcadores">
                <td>{{marcador.deporte}}</td>
                <td>{{marcador.pais}}</td>
                <td>{{marcador.fecha}}</td>
                <td>{{marcador.equipoLocal}}</td>
                <td>{{marcador.anotacionEquipoLocal}}</td>
                <td>{{marcador.equipoVisitante}}</td>
                <td>{{marcador.anotacionEquipoVisitante}}</td>
            </tr>
        </tbody>
        </table>
    </section>`,

    methods:{
        consultarDeporte() {
            const endpoint = "http://localhost:8080/marcador/consultardeporte/" + this.deporte;
            const opciones = { method: "GET" };
            fetch(endpoint, opciones).then(async response => {
                this.marcadores = await response.json();
                this.deporte = "";
            })
        }
    }
});

app.component("consultar-pais",{

    data(){
        return{
            pais:"",
            menu: 0,
            marcadores: {}
        }
    },
    template:`
    <section id="tablaporpais">
        <br />
        <div align="center">
        <img src="img/globe-americas.svg" height="150">
        </div>
        <h2>Busqueda por País</h2>
        <input type="text" v-model="pais" />
        <br />
        <button class="btn btn-secondary" v-on:click="consultarPais">
        Buscar
        </button>
        <table class="table table-light bg-dark">
        <thead>
            <tr>
                <th scope="col">Pais</th>
                <th scope="col">Fecha</th>
                <th scope="col">Deporte</th>
                <th scope="col">Local</th>
                <th scope="col"></th>
                <th scope="col">Visitante</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="marcador in marcadores">
                <td>{{marcador.pais}}</td>
                <td>{{marcador.fecha}}</td>
                <td>{{marcador.deporte}}</td>
                <td>{{marcador.equipoLocal}}</td>
                <td>{{marcador.anotacionEquipoLocal}}</td>
                <td>{{marcador.equipoVisitante}}</td>
                <td>{{marcador.anotacionEquipoVisitante}}</td>
            </tr>
            </tbody>
        </table>
    </section>`,

    methods:{
        consultarPais() {
            const endpoint = "http://localhost:8080/marcador/consultarpais/" + this.pais;
            const opciones = { method: "GET" };
            fetch(endpoint, opciones).then(async response => {
                this.marcadores = await response.json();
                this.pais = "";
            })
        }
    }
});

app.component("consultar-fecha",{

    data(){
        return{
            fecha:"",
            menu: 0,
            marcadores: {}
        }
    },
    template:`
    <section id="tablaporfecha">
    <div align="center">
        <img src="img/calendar-week-fill.svg" height="150">
    </div>
        <h2>Busqueda por Fecha</h2>
        <p>Ingrese día, mes y año sin espacios ni signos (ddmmaaaa)</p>
        <input type="text" v-model="fecha" />
        <br />
        <br />
        <button class="btn btn-secondary" v-on:click="consultarFecha">
        Buscar
        </button>

        <hr />
        <table class="table table-light bg-dark">
        <thead>
            <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Deporte</th>
            <th scope="col">Pais</th>
            <th scope="col">Local</th>
            <th scope="col"></th>
            <th scope="col">Visitante</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="marcador in marcadores">
            <td>{{marcador.fecha}}</td>
            <td>{{marcador.deporte}}</td>
            <td>{{marcador.pais}}</td>
            <td>{{marcador.equipoLocal}}</td>
            <td>{{marcador.anotacionEquipoLocal}}</td>
            <td>{{marcador.equipoVisitante}}</td>
            <td>{{marcador.anotacionEquipoVisitante}}</td>
            </tr>
        </tbody>
        </table>
    </section>`,

    methods:{
        consultarFecha() {
            const endpoint = "http://localhost:8080/marcador/consultarfecha/" + this.fecha;
            const opciones = { method: "GET" };
            fetch(endpoint, opciones).then(async response => {
                this.marcadores = await response.json();
                this.fecha = "";
            })
        }
    }
});





app.mount("#aplicacion");