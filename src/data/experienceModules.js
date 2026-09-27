export const modules = [
  {
    id: 'auth',
    es: {
      title: 'Autenticación y autorización',
      shortDesc: 'Autenticación JWT y control de acceso granular',
      description:
        'Implementé el sistema de autenticación y autorización del backend utilizando Spring Security y JWT. El acceso se controla mediante roles, permisos y restricciones asociadas a los recursos, centralizando las reglas de seguridad para proteger las operaciones de la aplicación.'
    },
    en: {
      title: 'Authentication & Authorization',
      shortDesc: 'JWT authentication and granular access control',
      description:
        'I implemented the backend authentication and authorization system using Spring Security and JWT. Access is controlled through roles, permissions and restrictions associated with resources, centralizing the security rules that protect the application operations.'
    },
    tech: ['Spring Security', 'JWT']
  },

  {
    id: 'accounts',
    es: {
      title: 'Gestión de cuentas',
      shortDesc: 'Gestión de información de cuentas institucionales',
      description:
        'Desarrollé funcionalidades backend para la gestión y consulta de información relacionada con cuentas institucionales. El módulo contempla diferentes tipos de información y relaciones necesarias para soportar los procesos de análisis y control. Análisis de consistencia de datos basado en reglas de negocio.'
    },
    en: {
      title: 'Account Management',
      shortDesc: 'Management of institutional account information',
      description:
        'I developed backend functionalities for managing and querying information related to institutional accounts. The module covers different types of information and relationships needed to support analysis and control processes, with data consistency analysis based on business rules.'
    },
    tech: ['Spring Boot', 'JPA / Hibernate', 'MySQL']
  },

  {
    id: 'records',
    es: {
      title: 'Gestión de expedientes',
      shortDesc: 'Gestión de procesos e información asociada',
      description:
        'Participé en el desarrollo de funcionalidades para gestionar expedientes y la información asociada a cada proceso. Incluye operaciones de consulta, actualización y vinculación con otros componentes del sistema, manteniendo las restricciones de acceso correspondientes.'
    },
    en: {
      title: 'Records & Case Management',
      shortDesc: 'Management of processes and associated information',
      description:
        'I participated in developing functionalities to manage case files and the information associated with each process. It includes query, update and linking operations with other system components while keeping the corresponding access restrictions.'
    },
    tech: ['Spring Boot', 'JPA / Hibernate', 'REST API']
  },

  {
    id: 'audits',
    es: {
      title: 'Gestión de auditorías',
      shortDesc: 'Gestión y trazabilidad de procesos de auditoría',
      description:
        'Desarrollé funcionalidades relacionadas con la gestión de auditorías y su información asociada. El módulo permite organizar el trabajo, gestionar los diferentes elementos involucrados y mantener la trazabilidad de las modificaciones realizadas durante el proceso. Automatiza la generación de reportes y documentos asociados a cada auditoría, integrando la información de manera coherente y accesible.'
    },
    en: {
      title: 'Audit Management',
      shortDesc: 'Management and traceability of audit processes',
      description:
        'I developed functionalities related to audit management and its associated information. The module allows organizing the work, managing the different elements involved and keeping traceability of the changes made during the process. It automates the generation of reports and documents associated with each audit, integrating the information in a coherent and accessible way.'
    },
    tech: ['Spring Boot', 'JPA / Hibernate', 'OpenPDF']
  },

  {
    id: 'work-programs',
    es: {
      title: 'Gestión de programas de trabajo',
      shortDesc: 'Planificación y gestión de actividades de auditoría',
      description:
        'Implementé funcionalidades para la planificación y gestión de programas de trabajo de auditoría, incluyendo diferentes categorías de recursos y actividades. El desarrollo requirió trabajar con relaciones entre múltiples entidades y optimizar consultas para operaciones que manejan grandes volúmenes de información.'
    },
    en: {
      title: 'Work Program Management',
      shortDesc: 'Planning and management of audit activities',
      description:
        'I implemented functionalities for planning and managing audit work programs, including different categories of resources and activities. The development required working with relationships between multiple entities and optimizing queries for operations handling large volumes of information.'
    },
    tech: ['Spring Boot', 'JPA / Hibernate', 'MySQL']
  },

  {
    id: 'documents',
    es: {
      title: 'Gestión de documentos y archivos',
      shortDesc: 'Manipulación segura de documentos digitales',
      description:
        'Desarrollé funcionalidades para la carga, gestión y acceso controlado a documentación digital con validación de firma digital. La solución integra el backend con almacenamiento de objetos en la nube y contempla mecanismos para generar accesos temporales a los archivos sin exponer directamente el almacenamiento.'
    },
    en: {
      title: 'Document & File Management',
      shortDesc: 'Secure handling of digital documents',
      description:
        'I developed functionalities for uploading, managing and controlling access to digital documentation with digital signature validation. The solution integrates the backend with cloud object storage and provides mechanisms to generate temporary file access without directly exposing the storage.'
    },
    tech: ['Spring Boot', 'AWS S3']
  },

  {
    id: 'audit-trail',
    es: {
      title: 'Trazabilidad de auditoría',
      shortDesc: 'Seguimiento de cambios en los datos de la aplicación',
      description:
        'Implementé mecanismos de auditoría para mantener un historial de modificaciones sobre información relevante del sistema. Los registros permiten identificar qué información fue modificada y mantener contexto sobre cuándo y quién realizó la operación.'
    },
    en: {
      title: 'Audit Trail & Traceability',
      shortDesc: 'Tracking changes to application data',
      description:
        'I implemented auditing mechanisms to keep a history of modifications to relevant system information. The records allow identifying what information was modified and keeping context about when and who performed the operation.'
    },
    tech: ['Spring Boot']
  },

  {
    id: 'jurisdictions',
    es: {
      title: 'Gestión de jurisdicciones',
      shortDesc: 'Acceso a recursos según jurisdicción',
      description:
        'Desarrollé funcionalidades relacionadas con la gestión de jurisdicciones y sus relaciones con otros recursos del sistema. Estas relaciones también forman parte de las reglas utilizadas para determinar el acceso de los usuarios a determinada información.'
    },
    en: {
      title: 'Jurisdiction Management',
      shortDesc: 'Resource access scoped by jurisdiction',
      description:
        'I developed functionalities related to jurisdiction management and their relationships with other system resources. These relationships are also part of the rules used to determine users access to specific information.'
    },
    tech: ['Spring Boot', 'JPA / Hibernate', 'MySQL']
  },

  {
    id: 'notifications',
    es: {
      title: 'Notificaciones y comunicaciones legales',
      shortDesc: 'Canal de comunicaciones legales con Email y WebSockets',
      description:
        'Participé en el desarrollo de un canal de comunicaciones orientado a informar requerimientos y avisos legales importantes. El diseño contempla notificaciones a través de Email y WebSockets.'
    },
    en: {
      title: 'Notifications & Legal Communications',
      shortDesc: 'Legal communications channel with Email and WebSockets',
      description:
        'I participated in developing a communications channel focused on reporting important requirements and legal notices. The design includes notifications through Email and WebSockets.'
    },
    tech: ['Spring Boot', 'WebSockets', 'React', 'AWS SES', 'JavaMail']
  }
];
