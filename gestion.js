"use strict";
// 2. Simulamos la base de datos con 4 miembros para nada sacado de chat GPT
const listaUsuarios = [
    { id: 1, nombre: "Bryan Cutipa", estado: "activo", diasRestantes: 30 },
    { id: 2, nombre: "britani mi gordita", estado: "vencido", diasRestantes: 0 },
    { id: 3, nombre: "el señor cara de papa", estado: "activo", diasRestantes: 15 },
    { id: 4, nombre: "lalo salamanca", estado: "vencido", diasRestantes: 0 }
];
// 3. Funcion inteligente para filtrar usuarios segun su estado , puede servir para que un admin puedan ver unos o otros 
//de forma mas rapida posible
function filtrarUsuariosPorEstado(usuarios, estadoBuscado) {
    return usuarios.filter(usuario => usuario.estado === estadoBuscado);
}
// 4. Probamos la logica en la consola
const usuariosActivos = filtrarUsuariosPorEstado(listaUsuarios, 'activo');
console.log("--- USUARIOS ACTIVOS ENCONTRADOS ---");
console.log(usuariosActivos);
// 5. me parecia muy aburrida de que solo diga "activo" o "vencido"vamos perra necesito algo mejor
function obtenerAlertasDePago(usuarios) {
    // Primero colamos solo los que tienen 3 días o menos
    const enRiesgo = usuarios.filter(u => u.estado === 'activo' && u.diasRestantes <= 3);
    // Luego creamos una lista nueva cambiando el texto del estado para el reporte
    return enRiesgo.map(u => {
        return {
            id: u.id,
            nombre: u.nombre,
            estado: 'POR VENCER,LE QUEDAN POCOS DIAS⚠️', // Le cambiamos el estadp para q sea mas urgente de verlo
            diasRestantes: u.diasRestantes
        };
    });
}
// 6. Probamos la nueva alerta en la consola
// Primero debemos añadir a un salamanca quele queden pocos dias XD :
listaUsuarios.push({ id: 5, nombre: "salamanca que le quedan pocos dias xd", estado: "activo", diasRestantes: 2 });
const usuariosPorVencer = obtenerAlertasDePago(listaUsuarios);
console.log("\n⚠️ --- ALERTA: USUARIOS POR VENCER (MANDAR WHATSAPP) ---");
console.log(usuariosPorVencer);
