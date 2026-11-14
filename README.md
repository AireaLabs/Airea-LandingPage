# Airea - Landing Page

## Descripción del proyecto

Airea es una propuesta de solución digital orientada a informar y concientizar sobre la calidad del aire en Lima Metropolitana. Busca ayudar a las personas a comprender las condiciones ambientales y tomar decisiones más informadas antes de realizar actividades al aire libre o desplazarse por la ciudad.

Este repositorio contiene el desarrollo del **Landing Page de Airea** y las vistas demostrativas de inicio de sesión y registro. La página presenta la propuesta de valor, explica las funcionalidades principales y comunica información introductoria sobre el Índice de Calidad del Aire (AQI).

## Objetivo

Presentar la solución Airea mediante una experiencia web clara, accesible y adaptable a distintos dispositivos, facilitando que las personas conozcan sus características y exploren sus principales secciones.

## Segmentos objetivo

- **Personas que se desplazan por Lima Metropolitana:** usuarios que desean revisar las condiciones ambientales antes de trasladarse por la ciudad.
- **Personas que realizan actividades al aire libre:** caminantes, corredores, ciclistas y usuarios que organizan actividades en espacios abiertos.
- **Familias y cuidadores:** personas que consideran el contexto de niños y otros integrantes de la familia al planificar salidas.
- **Personas sensibles a la contaminación del aire:** usuarios que buscan comprender los indicadores ambientales y tomar precauciones informadas.

## Principales características

- Presentación de la propuesta de valor de Airea.
- Introducción al Índice de Calidad del Aire (AQI) y sus niveles.
- Visualización demostrativa de un indicador de calidad del aire y un pronóstico por horas.
- Presentación de recomendaciones referenciales para planificar actividades.
- Comparación conceptual de horarios y alternativas de desplazamiento.
- Sección informativa sobre las funcionalidades del producto.
- Video de presentación, preguntas frecuentes y llamados a la acción.
- Navegación hacia las vistas de inicio de sesión y registro.
- Diseño adaptable a pantallas de escritorio y dispositivos móviles.

> **Importante:** los valores, ubicaciones y recomendaciones que aparecen en la Landing Page son demostrativos. No representan mediciones ambientales en tiempo real ni sustituyen la orientación de profesionales de salud.

## Tecnologías utilizadas

- **HTML5:** estructura semántica y contenido de las páginas.
- **CSS3:** estilos, diseño visual y adaptación responsive.
- **JavaScript:** interacciones del menú de navegación.
- **Google Fonts (Inter):** tipografía.
- **Material Symbols:** iconografía.
- **Git y GitHub:** control de versiones y colaboración en equipo.
- **WebStorm / Visual Studio Code:** editores compatibles para el desarrollo.

El proyecto utiliza HTML, CSS y JavaScript nativos. No utiliza frameworks CSS.

## Estructura del proyecto

La carpeta `public/` contiene los archivos que se ejecutan en el navegador. El archivo `README.md` permanece en la raíz del repositorio.

```text
Airea-LandingPage/
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── registro.html
│   ├── favicon.ico
│   │
│   └── assets/
│       ├── images/
│       │   └── logo.png
│       │
│       ├── media/
│       │   └── presentation.mp4
│       │
│       ├── styles/
│       │   ├── styles.css
│       │   └── auth.css
│       │
│       └── scripts/
│           └── main.js
│
└── README.md
```

### Organización de los archivos

| Ruta | Responsabilidad |
|---|---|
| `public/index.html` | Landing Page principal. |
| `public/login.html` | Vista demostrativa de inicio de sesión. |
| `public/registro.html` | Vista demostrativa de registro. |
| `public/favicon.ico` | Icono de la página mostrado en el navegador. |
| `public/assets/styles/styles.css` | Estilos principales del Landing Page. |
| `public/assets/styles/auth.css` | Estilos complementarios de inicio de sesión y registro. |
| `public/assets/scripts/main.js` | Comportamiento del menú responsive. |
| `public/assets/images/` | Logotipo y recursos gráficos. |
| `public/assets/media/` | Recursos multimedia, como el video de presentación. |

## Instalación y ejecución local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/AireaLabs/Airea-LandingPage.git
   ```

2. Ingresar a la carpeta del proyecto:

   ```bash
   cd Airea-LandingPage
   ```

3. Abrir el proyecto en WebStorm o en otro editor compatible.

4. Ejecutar `public/index.html` desde el navegador. Para una experiencia de desarrollo más cómoda, se puede utilizar un servidor local estático.

No es necesario instalar dependencias para visualizar las páginas.

## Control de versiones y ramas

El repositorio utiliza una organización de trabajo basada en GitFlow:

- `main`: versión estable destinada a publicación.
- `develop`: rama de integración del trabajo del equipo.
- `feature/nombre-funcionalidad`: ramas creadas desde `develop` para desarrollar tareas específicas.

Ejemplo de flujo:

```bash
git switch develop
git pull origin develop
git switch -c feature/nombre-funcionalidad

# Realizar cambios y guardarlos
git add .
git commit -m "feat: descripción del cambio"
git push -u origin feature/nombre-funcionalidad
```

Luego se crea un Pull Request desde la rama feature hacia `develop`. Los cambios aprobados se integran en `develop`; la publicación estable se prepara desde `main`.

## Repositorio y publicación

- **Organización:** [AireaLabs](https://github.com/AireaLabs)
- **Repositorio:** https://github.com/AireaLabs/Airea-LandingPage
- **Sitio publicado:** https://airealabs.github.io/Airea-LandingPage/

Después de integrar la nueva estructura, se debe revisar la configuración de GitHub Pages. La publicación directa desde una rama permite seleccionar la raíz del repositorio o la carpeta `/docs`, pero no una carpeta arbitraria como `/public`. Para conservar la estructura solicitada, configura GitHub Pages con **GitHub Actions** y publica el contenido de `public/` como artefacto. Hasta completar ese ajuste, la URL anterior podría seguir mostrando la última versión publicada y no necesariamente los cambios de esta rama.

## Equipo de desarrollo

| Apellidos y nombres | Código | Carrera |
|---|---|---|
| Bia, Gaspar Oscar | U202624028 | Ingeniería de Sistemas |
| Canta Condori, Freddy Josue | U20231H056 | Ingeniería de Software |
| Chambon, Quentin | U202624034 | Ingeniería de Sistemas |
| Pineda Aguayo, Victor Alejandro | U20201F457 | Ingeniería de Software |
| Rojas Diaz, Diego Enrique | U20231E840 | Ingeniería de Software |
| Saldaña Melgar, Matías | U20241E284 | Ingeniería de Sistemas |

## Consideraciones

- Los valores de AQI y la ubicación mostrados en las vistas son referenciales y no representan mediciones en tiempo real.
- Las vistas de inicio de sesión y registro son demostrativas; no cuentan con un servicio backend de autenticación ni almacenamiento de cuentas.
- La información se presenta con fines informativos y académicos.

## Licencia

Proyecto desarrollado con fines académicos.
