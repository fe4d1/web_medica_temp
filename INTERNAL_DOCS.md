# Documentación Interna - VitalCare Medical Platform

**ESTE DOCUMENTO ES PRIVADO (SOLO PARA DESARROLLO)**
*Esta documentación contiene los detalles técnicos profundos, la arquitectura del sistema y la justificación de cada decisión tecnológica tomada. No debe ser pública.*

---

## 1. Visión General y Arquitectura

### ¿Qué es este proyecto?
Es una plataforma web médica de "Agencia" (VitalCare), diseñada para gestionar la interacción entre Pacientes, Doctores y Profesionales. 
El objetivo no es solo informar, sino ser una herramienta funcional (citas, dashboard, noticias).

### Estructura de Directorios (Organization)
El proyecto sigue una estructura **"Domain Driven"** (orientada al dominio) dentro del App Router de Next.js.

- **`/src/app`**: El corazón del enrutado.
  - **Why?**: A diferencia del antiguo `pages/` directory, App Router permite **Layouts anidados**. Por ejemplo, `/dashboard` puede tener su propio layout diferente al aterrizaje principal sin re-renderizar todo.
  - **`admin/`, `doctors/`, `patients/`**: Separación clara de portales. Cada uno actúa como una "mini-app".
  - **`legal/`**: Separado para no mezclar lógica de negocio con páginas estáticas.

- **`/src/components`**: Componentes UI reutilizables.
  - Se mantiene "agnóstico" a los datos. Un `<Button>` aquí no sabe qué es un "Paciente", solo sabe renderizarse.

- **`/src/lib` (`db*.ts`)**: Capa de Acceso a Datos (DAL).
  - **Why?**: Nunca accedemos a los archivos JSON directamente desde los componentes. Usamos funciones `getAllDoctors()`, `getPatientById()`.
  - **Futuro**: Cuando migremos a una Base de Datos real (PostgreSQL), solo cambiaremos los archivos en `/lib`. El resto de la app NO se enterará. Esta es la **Inversión de Dependencias**.

- **`/src/data`**: Base de datos Mock (JSON).
  - **Why?**: Rapidez. Configurar Postgres dockerizado toma tiempo. JSON nos permite iterar la UI hoy.

---

## 2. Tecnologías y "EL PORQUÉ" (Justificación)

### Framework: Next.js 15 (App Router)
**Elección**: Framework Full Stack React.
**Competencia**: 
- *React con Vite (SPA)*: Vite es rápido, pero es "Client Side Rendering". Para una web médica, el **SEO** es vital (Google debe indexar "Cardiólogo en Ciudad X"). Vite falla ahí sin configuración compleja. Next.js lo hace nativo.
- *Remix*: Muy bueno, similar a Next.js, pero el ecosistema de Next es más grande y maduro hoy en día para integrar soluciones enterprise.

**Razón Clave**:
Server Components. Podemos renderizar la lista de doctores en el servidor (rápido, seguro) y enviar solo HTML al cliente. Menos JavaScript al navegador = Carga más rápida.

### Lenguaje: TypeScript
**Elección**: Tipado estático.
**Competencia**: 
- *JavaScript*: Más rápido de escribir al inicio, pero un infierno de mantener.
**Razón Clave**:
En medicina, la precisión es clave. No podemos confundir `patient.id` (string) con `patient_id` (undefined). TypeScript nos grita antes de compilar si cometemos ese error. Es un "seguro de vida" para el código.

### Estilado: Vanilla CSS (Variables + CSS Modules)
**Elección**: CSS estándar moderno.
**Competencia**:
- *Tailwind CSS*: Muy popular. **¿Por qué NO lo usamos aquí (principalmente)?**
  - Queríamos control total y semántica limpia. Tailwind llena el HTML de clases (`w-full h-10 bg-red-500...`).
  - Al usar CSS Variables (`--primary: #00d664`), podemos cambiar el color de TODA la marca en 1 segundo editando un solo archivo (`globals.css`).
  - El diseño "Premium" a veces requiere ajustes de píxeles finos (`box-shadow`, `backdrop-filter`) que a veces se pelean con las utilidades rígidas de Tailwind.
- *SASS/SCSS*: Ya no es necesario. CSS moderno ya tiene variables y anidación (nesting).

### Base de Datos: JSON (Sistema de Archivos)
**Elección**: Persistencia local.
**Competencia**:
- *PostgreSQL / MySQL*: Requiere infraestructura.
- *MongoDB*: Flexible, pero overkill para empezar.
**Razón Clave**: 
**Zero-Setup**. Permite prototipar la UX inmediatamente. La arquitectura en `/lib` asegura que el cambio a SQL será transparente.

---

## 3. Relación con Estándares Web (HTML/CSS/JS)

Aunque veas extensiones como `.tsx` o `.ts`, este proyecto **ESTÁ** construido sobre los pilares fundamentales de la web.

1.  **HTML (Estructura) → JSX/TSX**
    *   En lugar de escribir `index.html` estáticos, escribimos **JSX** (dentro de archivos `.tsx`).
    *   **¿Qué es?**: Es HTML "vitaminado" que vive dentro de JavaScript.
    *   **Al final**: El compilador lo transforma en **HTML puro** que el navegador renderiza (DOM).

2.  **CSS (Diseño) → Vanilla CSS**
    *   Usamos **CSS estándar** (`globals.css` y CSS Modules).
    *   No hay "magia" aquí. Son reglas CSS3 modernas (Variables, Flexbox, Grid) que funcionan nativamente en el navegador.

3.  **JavaScript (Lógica) → TypeScript**
    *   **TypeScript** es simplemente JavaScript con seguridad.
    *   El navegador no entiende TypeScript, por lo que en el proceso de "Build", todo se **traduce a JavaScript estándar** optimizado.

---

## 4. Decisiones de Diseño "Premium"

El usuario pidió una estética que haga decir "WOW".

1.  **Glassmorphism**: Uso de `backdrop-filter: blur(10px)` en el Header y Cards. Da una sensación de profundidad y modernidad (estilo iOS/MacOS).
2.  **Color Palette**:
    - **Verde Médico (#00d664)**: Transmite esperanza, salud, pero es vibrante (tech), no aburrido.
    - **Tipografía Inter**: Fuente de Google altamente legible y neutral.
3.  **Animaciones**: (Pendiente de ampliar) Se busca que los botones tengan transiciones suaves (`transition: all 0.2s`) para que la app se sienta "viva".

---

## 4. Notas para el Futuro (Roadmap Personal)

1.  **Migrar a Base de Datos Real**:
    - Usar *Prisma ORM* con *PostgreSQL* (probablemente Supabase o Neon Tech).
    - Reemplazar `/src/lib/db-*.ts` por llamadas a Prisma.
2.  **Autenticación**:
    - Implementar *NextAuth.js* (o Auth.js) para manejar sesiones reales de doctores y pacientes.
3.  **Testing**:
    - Añadir *Playwright* para pruebas end-to-end críticas (ej: reservar cita).

---
**Recuerda**: Este archivo debe estar en `.gitignore`.
