import type { Locale } from './config';

interface Rule {
  re: RegExp;
  to: string;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function lit(from: string, to: string, boundary = false): Rule {
  const body = escapeRegExp(from);
  return {
    re: new RegExp(boundary ? `(?<![A-Za-z])${body}(?![A-Za-z])` : body, 'g'),
    to,
  };
}

/**
 * Two-line node labels: translate both lines while keeping the XML between
 * the `<text>` elements intact (positions, fills and fonts are untouched).
 */
function pair(left: string, right: string, toLeft: string, toRight: string): Rule {
  return {
    re: new RegExp(`${escapeRegExp(left)}(</text>\\s*<text[^>]*>)${escapeRegExp(right)}`, 'g'),
    to: `${toLeft}$1${toRight}`,
  };
}

/** Spanish source labels (mercadolibre diagram) → English, for /en pages. */
const esToEn: Rule[] = [
  pair('Servicio de', 'Propiedades', 'Property', 'Service'),
  pair('Controlador de', 'Propiedades', 'Property', 'Controller'),
  pair('Modal de', 'MercadoLibre', 'MercadoLibre', 'Modal'),
  pair('Detalle de', 'Propiedad', 'Property', 'Detail'),
  pair('Servicio', 'MercadoLibre', 'MercadoLibre', 'Service'),
  lit('Interfaz de Usuario', 'User Interface'),
  lit('Confirmar publicación', 'Confirm publication'),
  lit('Mostrar confirmación', 'Show confirmation'),
  lit('Solicitar publicación', 'Request publication'),
  lit('Iniciar autenticación', 'Start authentication'),
  lit('Publicar propiedad', 'Publish property'),
  lit('Publicar datos', 'Publish data'),
  lit('Obtener datos', 'Fetch data'),
  lit('Obtener token', 'Get token'),
  lit('Devolver código', 'Return code'),
  lit('Enviar código', 'Send code'),
  lit('Solicitar OAuth', 'Request OAuth'),
  lit('Confirmación', 'Confirmation'),
  lit('Autenticación', 'Authentication'),
  lit('Publicación', 'Publication'),
  lit('Publicar', 'Publish'),
  lit('Código', 'Code'),
];

/** English source labels (all other diagrams) → Spanish, for default pages. */
const enToEs: Rule[] = [
  lit('Approach 2: Staged Upload + Sync Validation', 'Enfoque 2: Carga escalonada + validación síncrona'),
  lit('Approach 1: Direct Upload + Async Validation', 'Enfoque 1: Carga directa + validación asíncrona'),
  lit('3. Normalize features · Run K-Means (k = related count)', '3. Normalizar características · Ejecutar K-Means (k = cantidad relacionada)'),
  lit('2. Feature engineering: price, location, size, type, amenities', '2. Ingeniería de características: precio, ubicación, tamaño, tipo, amenidades'),
  lit('1. Fetch all properties from Express API', '1. Obtener todas las propiedades de la API Express'),
  lit('4. Return { propertyId: clusterId } mapping', '4. Retornar mapeo { propertyId: clusterId }'),
  lit('p properties → k clusters (k = related count)', 'p propiedades → k clústers (k = cantidad relacionada)'),
  lit('Query Optimization with Cache Layers', 'Optimización de consultas con capas de caché'),
  lit('Caffeine · TTL · @CacheEvict on write', 'Caffeine · TTL · @CacheEvict al escribir'),
  lit('hit → return / miss → proceed', 'acierto → retorna / fallo → continúa'),
  lit('Internal Cache (Spring @Cacheable)', 'Caché interna (Spring @Cacheable)'),
  lit('Optimized Data Access', 'Acceso a datos optimizado'),
  lit('Optimized queries', 'Consultas optimizadas'),
  lit('@Cacheable lookup', 'búsqueda @Cacheable'),
  lit('DTO Projections', 'Proyecciones DTO'),
  lit('Property Clustering Pipeline', 'Pipeline de clustering de propiedades'),
  lit('Property created/updated', 'Propiedad creada/actualizada'),
  lit('HTTP response: clusters', 'Respuesta HTTP: clústers'),
  lit('Update cluster field', 'Actualizar campo de clúster'),
  lit('K-Means Pipeline', 'Pipeline de K-Means'),
  lit('Python / Flask Service', 'Servicio Python / Flask'),
  lit('Async Process', 'Proceso asíncrono'),
  lit('async trigger', 'disparo asíncrono'),
  lit('Validation Pipeline (sync - blocks)', 'Pipeline de validación (síncrono - bloquea)'),
  lit('Validation Pipeline (async)', 'Pipeline de validación (asíncrono)'),
  lit('Move to Permanent Bucket', 'Mover a bucket permanente'),
  lit('(short TTL · user-scoped · attempt-scoped)', '(TTL corto · por usuario · por intento)'),
  lit('(background job)', '(trabajo en segundo plano)'),
  lit('(final destination)', '(destino final)'),
  lit('Permanent Bucket', 'Bucket permanente'),
  lit('Temp Bucket', 'Bucket temporal'),
  lit('3. enqueue validations', '3. encolar validaciones'),
  lit('1. pre-upload file', '1. pre-cargar archivo'),
  lit('1. upload file', '1. subir archivo'),
  lit('signed PUT URL', 'URL PUT firmada'),
  lit('signed URL', 'URL firmada', true),
  lit('2. confirm', '2. confirmar'),
  lit('✓ pass → move', '✓ pasa → mueve'),
  lit('✗ fail → reject', '✗ falla → rechaza'),
  lit('(Controller)', '(Controlador)'),
  lit('Operation Complete', 'Operación completa'),
  lit('Status API', 'API de estado'),
  lit('Business Rules', 'Reglas de negocio'),
  lit('Quotas & Limits', 'Límites y cuotas'),
  lit('Error Repository', 'Repositorio de errores'),
  lit('Error Reporter', 'Reporte de errores'),
  lit('Object Storage', 'Almacenamiento de objetos'),
  lit('Timestamp', 'Fecha/hora'),
  lit('REST endpoints • DTO validation • @PreAuthorize', 'Endpoints REST • validación DTO • @PreAuthorize'),
  lit('Items • Categories • Suppliers', 'Ítems • Categorías • Proveedores'),
  lit('Sales • Payments • Generic Items', 'Ventas • Pagos • Artículos'),
  lit('Repairs • Work Types • Items', 'Reparaciones • Obras • Ítems'),
  lit('Auth • Roles • Permissions', 'Auth • Roles • Permisos'),
  lit('DTOs • Projections • Enums', 'DTOs • Proyecciones • Enums'),
  lit('Presigned URLs • Images', 'URLs prefirmadas • Imágenes'),
  lit('JPA + Custom Native Queries', 'JPA + consultas nativas personalizadas'),
  lit('Native SQL • Recursive CTEs', 'SQL nativo • CTEs recursivas'),
  lit('ReportRepositoryImpl • Native SQL', 'ReportRepositoryImpl • SQL nativo'),
  lit('Health • Metrics • Basic Auth', 'Salud • Métricas • Basic Auth'),
  lit('Financial • Balances', 'Finanzas • Saldos'),
  lit('Image Cleanup (2 AM)', 'Limpieza de imágenes (2 AM)'),
  lit('Transactional Email', 'Correo transaccional'),
  lit('User Service', 'Servicio de usuarios'),
  lit('Movements Svc', 'Movimientos Svc'),
  lit('Inventory Svc', 'Inventario Svc'),
  lit('Report Svc', 'Reportes Svc'),
  lit('Works Svc', 'Obras Svc'),
  lit('Sales Svc', 'Ventas Svc'),
  lit('Custom Repos', 'Repos personalizados'),
  lit('Value Objects', 'Objetos de valor'),
  lit('Presentation Layer', 'Capa de presentación'),
  lit('Repository Layer', 'Capa de repositorio'),
  lit('Domain Layer', 'Capa de dominio'),
  lit('Service Layer', 'Capa de servicio'),
  lit('Protected API', 'API protegida'),
  lit('Infrastructure', 'Infraestructura'),
  lit('REST API', 'API REST'),
  lit('HTTP Request', 'Petición HTTP'),
  lit('HTTP request', 'Petición HTTP'),
  lit('HTTP Cache', 'Caché HTTP'),
  lit('Controllers', 'Controladores'),
  lit('Service call', 'Llamada a servicio'),
  lit('Entities', 'Entidades'),
  lit('Database', 'Base de datos'),
  lit('Existence', 'Existencia'),
  lit('Integrity', 'Integridad'),
  lit('Format', 'Formato', true),
  lit('Context', 'Contexto'),
  lit('Browser', 'Navegador'),
  lit('Permission', 'Permiso', true),
  lit('Authentication', 'Autenticación'),
  lit('Authorization', 'Autorización'),
  lit('Resource', 'Recurso'),
  lit('Query A', 'Consulta A'),
  lit('Query B', 'Consulta B'),
  lit('Query C', 'Consulta C'),
  lit('Request', 'Petición', true),
  lit('Service', 'Servicio', true),
  lit('Role', 'Rol', true),
  lit('User', 'Usuario', true),
  lit('Client', 'Cliente', true),
  lit('upload', 'carga', true),
];

/**
 * Rewrite the label language of a diagram SVG for the given locale.
 * Source diagrams are a mix of Spanish (mercadolibre) and English (the rest);
 * each rule only matches its own source language so the "other" locale pass
 * is a no-op.
 */
export function localizeDiagram(svg: string | undefined, locale: Locale): string {
  if (!svg) return '';
  const rules = locale === 'es' ? enToEs : esToEn;
  let out = svg;
  for (const rule of rules) {
    out = out.replace(rule.re, rule.to);
  }
  return out;
}
