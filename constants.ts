import { Question, Category } from './types';
import { Shield, Heart, Home, Users, Wallet, Activity } from 'lucide-react';

export const CATEGORY_LABELS: Record<string, string> = {
  health: 'Salud y Movilidad',
  finance: 'Capacidad ante Imprevistos',
  home: 'Seguridad Hogar',
  support: 'Red de Apoyo',
  coverage: 'Cobertura Actual',
};

export const CATEGORY_ICONS: Record<string, any> = {
  health: Activity,
  finance: Wallet,
  home: Home,
  support: Users,
  coverage: Shield,
};

export const QUESTIONS: Question[] = [
  // Health & Mobility
  {
    id: 1,
    category: 'health',
    question: "¿Cómo describirías tu estado de salud actual y movilidad?",
    options: [
      { id: 'h1', text: "Excelente, hago deporte regularmente y no tengo dolencias.", score: 10 },
      { id: 'h2', text: "Bueno, pero empiezo a notar pequeñas limitaciones o fatiga.", score: 7 },
      { id: 'h3', text: "Regular, tengo alguna condición crónica controlada.", score: 5 },
      { id: 'h4', text: "He sufrido alguna caída o tengo movilidad reducida.", score: 2 },
    ]
  },
  {
    id: 2,
    category: 'health',
    question: "¿Cuál crees que será tu mayor preocupación respecto a tu salud física dentro de 10 años?",
    options: [
      { id: 'h2_1', text: "Seguir manteniendo mi ritmo de vida activo.", score: 10 },
      { id: 'h2_2', text: "Poder acceder a un especialista rápido si lo necesito.", score: 6 },
      { id: 'h2_3', text: "Sufrir un accidente que limite mi independencia.", score: 4 },
      { id: 'h2_4', text: "Necesitar asistencia diaria para las tareas básicas.", score: 2 },
    ]
  },
  {
    id: 3,
    category: 'health',
    question: "¿Con qué frecuencia visitas a un médico especialista?",
    options: [
      { id: 'h3_1', text: "Solo revisiones anuales.", score: 10 },
      { id: 'h3_2', text: "2-3 veces al año por control.", score: 8 },
      { id: 'h3_3', text: "Frecuentemente, gestiono varias citas.", score: 5 },
      { id: 'h3_4', text: "Estoy en espera para pruebas/operaciones.", score: 3 },
    ]
  },

  // Finance
  {
    id: 4,
    category: 'finance',
    question: "Si necesitaras ayuda a domicilio (aprox. 1.200€/mes), ¿cómo lo cubrirías?",
    options: [
      { id: 'f1', text: "Mis ingresos/ahorros lo cubren sin problema.", score: 10 },
      { id: 'f2', text: "Podría cubrirlo un tiempo, pero afectaría mi patrimonio.", score: 6 },
      { id: 'f3', text: "Tendría que depender de ayuda familiar.", score: 3 },
      { id: 'f4', text: "No tengo capacidad para ese gasto extra.", score: 1 },
    ]
  },
  {
    id: 5,
    category: 'finance',
    question: "Si un accidente te obligara a estar en casa varias semanas, ¿cómo afrontarías los gastos extra (fisio, ayuda doméstica...)?",
    options: [
      { id: 'f2_1', text: "Mis ahorros lo cubrirían sin problema.", score: 10 },
      { id: 'f2_2', text: "Podría pagarlo, pero reduciría mi colchón financiero.", score: 6 },
      { id: 'f2_3', text: "Tendría que pedir ayuda a la familia.", score: 3 },
      { id: 'f2_4', text: "No lo he pensado, confío en la Seguridad Social.", score: 2 },
    ]
  },
  {
    id: 6,
    category: 'finance',
    question: "¿Cuánto tiempo podrías mantener tu nivel de vida actual si dejaras de recibir ingresos por un problema de salud?",
    options: [
      { id: 'f3_1', text: "Más de 2 años sin problema, tengo buen colchón.", score: 10 },
      { id: 'f3_2', text: "Alrededor de un año, después tendría que ajustar gastos.", score: 7 },
      { id: 'f3_3', text: "Unos pocos meses, dependo de mis ingresos mensuales.", score: 4 },
      { id: 'f3_4', text: "Muy poco, vivo prácticamente al día.", score: 1 },
    ]
  },

  // Home Safety
  {
    id: 7,
    category: 'home',
    question: "¿Cómo es tu vivienda actual?",
    options: [
      { id: 'ho1', text: "Piso de una planta, adaptado o con ascensor.", score: 10 },
      { id: 'ho2', text: "Piso con ascensor, pero bañera antigua o pasillos estrechos.", score: 6 },
      { id: 'ho3', text: "Chalet o dúplex con escaleras interiores.", score: 4 },
      { id: 'ho4', text: "Sin ascensor o con barreras arquitectónicas importantes.", score: 2 },
    ]
  },
  {
    id: 8,
    category: 'home',
    question: "¿Vives solo/a o acompañado/a?",
    options: [
      { id: 'ho2_1', text: "Vivo con pareja/familia activa y capaz de ayudar.", score: 10 },
      { id: 'ho2_2', text: "Vivo con pareja, pero también tiene limitaciones.", score: 6 },
      { id: 'ho2_3', text: "Vivo solo/a, pero tengo familia cerca.", score: 5 },
      { id: 'ho2_4', text: "Vivo solo/a y sin red cercana.", score: 2 },
    ]
  },
  {
    id: 9,
    category: 'home',
    question: "En caso de accidente doméstico (caída), ¿tienes sistema de aviso?",
    options: [
      { id: 'ho3_1', text: "Sí, teleasistencia o reloj inteligente conectado.", score: 10 },
      { id: 'ho3_2', text: "Tengo el móvil siempre a mano.", score: 6 },
      { id: 'ho3_3', text: "No, y me preocupa que nadie se entere.", score: 2 },
      { id: 'ho3_4', text: "Confío en que no pasará nada.", score: 4 },
    ]
  },

  // Support Network
  {
    id: 10,
    category: 'support',
    question: "¿Cuál es tu postura sobre ser cuidado por tus hijos/familia?",
    options: [
      { id: 's1', text: "Rotundamente no quiero ser una carga para ellos.", score: 5 }, // Needs solution
      { id: 's2', text: "Prefiero ayuda profesional para no alterar sus vidas.", score: 8 },
      { id: 's3', text: "Cuento con ellos, es ley de vida.", score: 4 },
      { id: 's4', text: "Ya tenemos todo organizado profesionalmente.", score: 10 },
    ]
  },
  {
    id: 11,
    category: 'support',
    question: "¿Tus hijos/familiares residen en la misma ciudad?",
    options: [
      { id: 's2_1', text: "Sí, en la misma ciudad y disponibles.", score: 10 },
      { id: 's2_2', text: "Sí, pero trabajan mucho y tienen poco tiempo.", score: 6 },
      { id: 's2_3', text: "No, viven en otra ciudad o país.", score: 2 },
      { id: 's2_4', text: "No tengo familiares directos.", score: 2 },
    ]
  },
  {
    id: 12,
    category: 'support',
    question: "Si necesitaras hospitalización, ¿quién gestionaría los trámites?",
    options: [
      { id: 's3_1', text: "Mi pareja o hijos se encargarían de todo.", score: 8 },
      { id: 's3_2', text: "Tengo un gestor/seguro que lo hace.", score: 10 },
      { id: 's3_3', text: "Sería un caos organizativo para mi familia.", score: 3 },
      { id: 's3_4', text: "No lo he pensado.", score: 2 },
    ]
  },

  // Coverage
  {
    id: 13,
    category: 'coverage',
    question: "¿Qué tipo de seguro tienes actualmente?",
    options: [
      { id: 'c1', text: "Seguridad Social + Seguro de Salud Privado Completo.", score: 9 },
      { id: 'c2', text: "Solo Seguridad Social.", score: 4 },
      { id: 'c3', text: "Seguro de Accidentes o Vida antiguo.", score: 6 },
      { id: 'c4', text: "Tengo un plan integral (Salud + Accidentes + Dependencia).", score: 10 },
    ]
  },
  {
    id: 14,
    category: 'coverage',
    question: "¿Tu seguro actual cubre rehabilitación domiciliaria por accidente?",
    options: [
      { id: 'c2_1', text: "Sí, incluye todo (fisio, enfermería en casa).", score: 10 },
      { id: 'c2_2', text: "Cubre hospital, pero no la recuperación en casa.", score: 5 },
      { id: 'c2_3', text: "No estoy seguro/a.", score: 3 },
      { id: 'c2_4', text: "No tengo seguro privado.", score: 1 },
    ]
  },
  {
    id: 15,
    category: 'coverage',
    question: "¿Te preocupa que te suban la póliza o te cancelen por edad?",
    options: [
      { id: 'c3_1', text: "Sí, he oído que pasa mucho a partir de los 65.", score: 4 },
      { id: 'c3_2', text: "No, mi póliza es vitalicia y respetan antigüedad.", score: 10 },
      { id: 'c3_3', text: "Me preocupa el coste futuro, no la cancelación.", score: 6 },
      { id: 'c3_4', text: "No tengo seguro privado.", score: 5 },
    ]
  }
];
