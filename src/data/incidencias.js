const nombres = [
  "Intrusión Perímetro Norte",
  "Falla Sensor Cámara 04",
  "Acceso No Autorizado Nivel 2",
  "Anomalía Térmica Sector B",
  "Vehículo Sospechoso E-4",
  "Derrame de Líquido Pasillo C",
  "Puerta 04 Forzada",
  "Movimiento Nocturno Zona Restringida",
  "Alarma de Vibración Perimetral",
  "Corte de Comunicación Radio Canal 2",
  "Intento de Desbordamiento Cerca Este",
  "Humo en Sala de Servidores",
  "Persona No Identificada Acceso Sur",
  "Falla Eléctrica Módulo 3",
  "Señal GPS Perdida Unidad 7",
  "Cámara Térmica Fuera de Servicio",
  "Actividad Sospechosa Cubierta Norte",
  "Puerta de Emergencia Bloqueada",
  "Sobrecalentamiento Equipo de Cómputo",
  "Acceso Indebido a Base de Datos",
  "Luz Estroboscópica Activada Sin Motivo",
  "Fuga de Agua Sala de Monitoreo",
  "Patrulla No Reporta en Hora Asignada",
  "Sensor de Movimiento Averiado Pasillo 2",
  "Intento de Manipulación Cerradura Electrónica",
  "Alarma Contra Incendios Sector D",
  "Vehículo Abandonado Acceso Principal",
  "Comunicación Cortada con Dron de Vigilancia",
  "Tarjeta de Acceso Clonada Detectada",
  "Pérdida de Video Almacenamiento NVR",
  "Batería UPS en Nivel Crítico",
  "Persona Merodeando Estacionamiento B",
  "Enlace Satelital Intermitente",
  "Fuga de Gas Detectada Cocina Industrial",
  "Acceso a Sala de Control Sin Autorización",
  "Cámara PTZ Sin Respuesta",
  "Alerta de Salud Operador Tercer Turno",
  "Paquete Sospechoso Recepción",
  "Red de Sensores Caída Parcial",
  "Incidente con Visitante Nivel 3",
  "Escáner de Matrículas Fuera de Línea",
  "Fallo en Sistema de Riego Perimetral",
  "Ventana de Observatorio Quebrada",
  "Alarma de Pánico Activada por Error",
  "Cableado de Cámara Expuesto Sector Oeste",
  "Corte de Energía Programado No Reportado",
  "Actualización de Firmware Fallida",
  "Reflejo Láser Apuntando a Cabina de Vigilancia",
  "Comportamiento Errátil Robot de Patrulla",
  "Intento de Ingreso por Ventilación Central"
];

const ids = [
  "INC-8842-X", "INC-7721-M", "INC-6512-Z", "INC-9901-H", "INC-2345-P",
  "INC-1123-R", "INC-8765-Q", "INC-4532-T", "INC-7890-W", "INC-3210-A",
  "INC-5567-D", "INC-9982-F", "INC-4451-S", "INC-6678-K", "INC-2234-L",
  "INC-8819-N", "INC-3342-V", "INC-7765-B", "INC-1198-Y", "INC-5423-U",
  "INC-8076-G", "INC-6391-C", "INC-3104-O", "INC-4887-E", "INC-1654-I",
  "INC-9302-J", "INC-7438-M", "INC-5289-N", "INC-6741-P", "INC-3902-Q",
  "INC-2576-R", "INC-8190-S", "INC-4637-T", "INC-5782-U", "INC-1468-V",
  "INC-7095-W", "INC-3241-X", "INC-8976-Y", "INC-5310-Z", "INC-2689-A",
  "INC-1745-B", "INC-6834-C", "INC-4402-D", "INC-9561-E", "INC-3680-F",
  "INC-7923-G", "INC-5178-H", "INC-2594-I", "INC-8812-J", "INC-6415-K"
];

const tipos = [
  "Seguridad Física", "Mantenimiento", "Credenciales",
  "Infraestructura", "Robo", "Sospecha", "Accidente"
];

const estados = ["Pendiente", "En Proceso", "Resuelto"];

const supervisores = [
  "Carlos Ruiz", "Ana Martínez", "Roberto Vargas",
  "Laura Castillo", "Pedro Sánchez", "María Flores"
];

const operadores = [
  "Miguel Torres", "Sofía Rivas", "Diego Méndez",
  "Valentina Ortiz", "Andrés Herrera", "Camila Duarte",
  "Fernando Reyes", "Gabriela Peña"
];

const radioOperadores = [
  "Canal 1", "Canal 2", "Canal 3", "Canal 4", "Canal 5"
];

const observatorios = [
  "Central", "Norte", "Sur", "Este", "Oeste"
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function randomDate(daysBack) {
  const d = new Date();
  d.setDate(d.getDate() - Math.floor(Math.random() * daysBack));
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hour = pad(Math.floor(Math.random() * 24));
  const min = pad(Math.floor(Math.random() * 60));
  return { fecha: `${year}-${month}-${day}`, hora: `${hour}:${min}` };
}

function generateIncidencias(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    const { fecha, hora } = randomDate(30);
    const tipo = randomItem(tipos);
    data.push({
      id: ids[i % ids.length],
      nombre: nombres[i % nombres.length],
      fecha,
      hora,
      tipo,
      estado: randomItem(estados),
      supervisor: randomItem(supervisores),
      operador: randomItem(operadores),
      radioOperador: randomItem(radioOperadores),
      observatorio: randomItem(observatorios),
      camara: `CAM-${pad(Math.floor(Math.random() * 12) + 1)}`,
      descripcion: `Incidencia registrada: ${nombres[i % nombres.length].toLowerCase()}. Personal asignado procede con protocolo estándar.`
    });
  }
  return data;
}

export const incidencias = generateIncidencias(50);
