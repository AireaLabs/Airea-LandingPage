# Airea - Landing Page

## Descripción del proyecto

Airea es una propuesta de solución digital orientada a informar y concientizar sobre la calidad del aire en Lima Metropolitana. Busca ayudar a las personas a comprender las condiciones ambientales y tomar decisiones más informadas antes de realizar actividades al aire libre o desplazarse por la ciudad.

Este repositorio contiene el desarrollo del **Landing Page de Airea** y vistas demostrativas de inicio de sesión y registro. La página presenta la propuesta de valor, explica las funcionalidades principales e introduce el Índice de Calidad del Aire (AQI).

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
- Explicación conceptual de alternativas de horarios y desplazamiento con menor exposición estimada.
- Secciones informativas sobre las funcionalidades del producto.
- Video de presentación y preguntas frecuentes.
- Llamados a la acción y navegación hacia las vistas demostrativas de inicio de sesión y registro.
- Diseño adaptable a pantallas de escritorio y dispositivos móviles.
- Menú de navegación responsive implementado con JavaScript.

> **Importante:** los valores, ubicaciones y recomendaciones que aparecen en la Landing Page son demostrativos. No representan mediciones ambientales en tiempo real ni sustituyen la orientación de profesionales de salud.

## Tecnologías utilizadas

- **HTML5:** estructura semántica y contenido de las páginas.
- **CSS3:** estilos, diseño visual y adaptación responsive.
- **JavaScript:** interacciones del menú de navegación.
- **Google Fonts (Inter):** tipografía.
- **Material Symbols:** iconografía.
- **Git y GitHub:** control de versiones y colaboración en equipo.
- **WebStorm / Visual Studio Code:** editores compatibles para el desarrollo.

El proyecto utiliza HTML, CSS y JavaScript nativos. **No se utilizan frameworks CSS.**

## Estructura del proyecto

El archivo `README.md` se encuentra en la raíz del repositorio. La carpeta `public/` contiene las páginas y los recursos que utiliza el navegador.

```text
Airea-LandingPage/
│
├── README.md
│
└── public/
    ├── index.html
    ├── login.html
    ├── registro.html
    ├── favicon.ico
    │
    └── assets/
        ├── images/
        │   └── logo.png
        │
        ├── media/
        │   └── presentation.mp4
        │
        ├── styles/
        │   ├── styles.css
        │   └── auth.css
        │
        └── scripts/
            └── main.js
```

### Organización de los archivos

| Ruta | Responsabilidad |
|---|---|
| `public/index.html` | Página principal del Landing Page. |
| `public/login.html` | Vista demostrativa de inicio de sesión. |
| `public/registro.html` | Vista demostrativa de registro. |
| `public/favicon.ico` | Icono mostrado en la pestaña del navegador. |
| `public/assets/styles/styles.css` | Estilos principales del Landing Page. |
| `public/assets/styles/auth.css` | Estilos complementarios para inicio de sesión y registro. |
| `public/assets/scripts/main.js` | Lógica del menú de navegación responsive. |
| `public/assets/images/` | Logotipo y recursos gráficos. |
| `public/assets/media/` | Recursos multimedia, como el video de presentación. |

La estructura solicitada para el challenge se encuentra implementada en `public/`. Las vistas `login.html` y `registro.html`, la hoja `auth.css` y la carpeta `media/` son recursos complementarios del proyecto.

## Instalación y ejecución local

### Clonar el repositorio

```bash
git clone https://github.com/AireaLabs/Airea-LandingPage.git
cd Airea-LandingPage
```

### Abrir en WebStorm

Se puede abrir la carpeta clonada desde **File > Open**. Si todavía no se ha descargado el repositorio, se puede utilizar **Get from VCS** e ingresar la URL anterior.

Para visualizar el sitio, abrir `public/index.html` en un navegador o utilizar un servidor local estático. No es necesario instalar dependencias para visualizar las páginas.

## Control de versiones y flujo GitFlow

El repositorio pertenece a la organización **AireaLabs** y utiliza una organización de ramas basada en GitFlow:

- **`main`:** versión estable destinada a publicación.
- **`develop`:** rama de integración del trabajo del equipo.
- **`feature/nombre-funcionalidad`:** ramas de trabajo creadas a partir de `develop` para desarrollar funcionalidades o tareas específicas.

Ejemplo de creación y publicación de una rama feature:

```bash
git switch develop
git pull origin develop
git switch -c feature/nombre-funcionalidad

# Después de realizar los cambios
git add .
git commit -m "feat: descripcion del cambio"
git push -u origin feature/nombre-funcionalidad
```

Cuando el trabajo está listo, se crea un **Pull Request desde la rama feature hacia `develop`**. Los cambios se revisan y, una vez aprobados, se integran en `develop`. La rama `main` se reserva para versiones estables.

## Repositorio y publicación

- **Organización:** [AireaLabs](https://github.com/AireaLabs)
- **Repositorio:** https://github.com/AireaLabs/Airea-LandingPage
- **Rama de trabajo del challenge:** `feature/challenge-landing-page`
- **Sitio publicado:** https://airealabs.github.io/Airea-LandingPage/

**Nota sobre GitHub Pages:** al ubicar el sitio dentro de `public/`, la publicación debe configurarse para desplegar el contenido de esa carpeta. Una alternativa es utilizar GitHub Actions y publicar `public/` como artefacto del sitio. La URL publicada debe verificarse después de actualizar la configuración de despliegue.

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
