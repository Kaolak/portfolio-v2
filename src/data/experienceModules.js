export const modules = [
  {
    id: 'auth',
    title: 'Authentication & Authorization',
    shortDesc: 'JWT authentication and granular access control',
    description:
      'Implementé el sistema de autenticación y autorización del backend utilizando Spring Security y JWT. El acceso se controla mediante roles, permisos y restricciones asociadas a los recursos, centralizando las reglas de seguridad para proteger las operaciones de la aplicación.',
    tech: ['Spring Security', 'JWT']
  },

  {
    id: 'accounts',
    title: 'Account Management',
    shortDesc: 'Management of institutional account information',
    description:
      'Desarrollé funcionalidades backend para la gestión y consulta de información relacionada con cuentas institucionales. El módulo contempla diferentes tipos de información y relaciones necesarias para soportar los procesos de análisis y control. Análisis de consistencia de datos basado en reglas de negocio.',
    tech: ['Spring Boot', 'JPA / Hibernate', 'MySQL']
  },

  {
    id: 'records',
    title: 'Records & Case Management',
    shortDesc: 'Management of processes and associated information',
    description:
      'Participé en el desarrollo de funcionalidades para gestionar expedientes y la información asociada a cada proceso. Incluye operaciones de consulta, actualización y vinculación con otros componentes del sistema, manteniendo las restricciones de acceso correspondientes.',
    tech: ['Spring Boot', 'JPA / Hibernate', 'REST API']
  },

  {
    id: 'audits',
    title: 'Audit Management',
    shortDesc: 'Management and traceability of audit processes',
    description:
      'Desarrollé funcionalidades relacionadas con la gestión de auditorías y su información asociada. El módulo permite organizar el trabajo, gestionar los diferentes elementos involucrados y mantener la trazabilidad de las modificaciones realizadas durante el proceso. Automatiza la generación de reportes y documentos asociados a cada auditoría, integrando la información de manera coherente y accesible.',
    tech: ['Spring Boot', 'JPA / Hibernate', 'OpenPDF']
  },

  {
    id: 'work-programs',
    title: 'Work Program Management',
    shortDesc: 'Planning and management of audit activities',
    description:
      'Implementé funcionalidades para la planificación y gestión de programas de trabajo de auditoría, incluyendo diferentes categorías de recursos y actividades. El desarrollo requirió trabajar con relaciones entre múltiples entidades y optimizar consultas para operaciones que manejan grandes volúmenes de información.',
    tech: ['Spring Boot', 'JPA / Hibernate', 'MySQL']
  },

  {
    id: 'documents',
    title: 'Document & File Management',
    shortDesc: 'Secure handling of digital documents',
    description:
      'Desarrollé funcionalidades para la carga, gestión y acceso controlado a documentación digital con validación de firma digital. La solución integra el backend con almacenamiento de objetos en la nube y contempla mecanismos para generar accesos temporales a los archivos sin exponer directamente el almacenamiento.',
    tech: ['Spring Boot', 'AWS S3']
  },

  {
    id: 'audit-trail',
    title: 'Audit Trail & Traceability',
    shortDesc: 'Tracking changes to application data',
    description:
      'Implementé mecanismos de auditoría para mantener un historial de modificaciones sobre información relevante del sistema. Los registros permiten identificar qué información fue modificada y mantener contexto sobre cuándo y quién realizó la operación.',
    tech: ['Spring Boot']
  },

  {
    id: 'jurisdictions',
    title: 'Jurisdiction Management',
    shortDesc: 'Resource access scoped by jurisdiction',
    description:
      'Desarrollé funcionalidades relacionadas con la gestión de jurisdicciones y sus relaciones con otros recursos del sistema. Estas relaciones también forman parte de las reglas utilizadas para determinar el acceso de los usuarios a determinada información.',
    tech: ['Spring Boot', 'JPA / Hibernate', 'MySQL']
  },

  {
    id: 'notifications',
    title: 'Notifications & Legal Communications',
    shortDesc: 'Legal communications channel with Email and WebSockets',
    description:
      'Participé en el desarrollo de un canal de comunicaciones orientado a informar requerimientos y avisos legales importantes. El diseño contempla notificaciones a través de Email y WebSockets.',
    tech: ['Spring Boot', 'WebSockets', 'React', 'AWS SES', 'JavaMail']
  }
];