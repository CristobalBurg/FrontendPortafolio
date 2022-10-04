export interface Departamento {
    idDeparamento:        number;
    direccion:            string;
    ctdHabitaciones:      number;
    ctdBanos:             number;
    valorArriendoDia:     number;
    politicasCondiciones: string;
    comuna:               Comuna;
}

export interface Comuna {
    idComuna:    number;
    idProvincia: number;
    nombre:      string;
}

export interface Cliente {
    rutCliente: string;
    nombre: string;
    apellido: string;
    contacto: string;
    correo:string;

}