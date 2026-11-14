# Airea - Landing Page

## Descripción del proyecto

Airea es una plataforma orientada a proporcionar información sobre la calidad del aire en Lima Metropolitana, permitiendo que las personas conozcan las condiciones ambientales de su entorno y puedan tomar decisiones informadas para proteger su salud.

La Landing Page presenta las principales funcionalidades de Airea, destacando la consulta de indicadores de calidad del aire, la identificación de contaminantes y las recomendaciones para realizar actividades de manera más segura.

## Objetivos del proyecto

- Presentar la propuesta de valor de Airea y sus principales funcionalidades.
- Facilitar la comprensión de los indicadores de calidad del aire.
- Informar sobre los contaminantes atmosféricos y sus posibles efectos.
- Promover decisiones informadas al realizar actividades al aire libre.
- Proporcionar una interfaz intuitiva y accesible para los usuarios.

## Público objetivo

La plataforma está orientada principalmente a:

- Padres y tutores de niños en edad escolar.
- Adultos sensibles a la contaminación atmosférica.
- Personas que realizan actividades físicas o recreativas al aire libre.

## Funcionalidades principales

- **Consulta de calidad del aire:** presentación de indicadores relacionados con las condiciones ambientales.
- **Indicadores ambientales:** información sobre el Índice de Calidad del Aire (AQI) y contaminantes como PM2.5 y PM10.
- **Recomendaciones de salud:** sugerencias según las condiciones de calidad del aire.
- **Planificación de actividades:** orientación para realizar actividades considerando las condiciones ambientales.
- **Sección informativa:** explicación de los niveles de calidad del aire y preguntas frecuentes.
- **Interfaces de autenticación:** páginas de inicio de sesión y registro como parte de la presentación visual del proyecto.

## Tecnologías utilizadas

- **HTML5:** estructura y contenido de las páginas.
- **CSS3:** estilos, diseño visual y adaptación de la interfaz.
- **JavaScript:** interacciones de la interfaz.
- **Google Fonts:** tipografía Inter.
- **Material Symbols:** iconografía.
- **Git y GitHub:** control de versiones y colaboración.
- **WebStorm / Visual Studio Code:** entornos de desarrollo.

## Estructura del proyecto

El proyecto se organiza de la siguiente manera:

```text
Airea-LandingPage/
│
├── .idea/                       # Configuración local de WebStorm (no versionada)
├── .vscode/                     # Configuración del entorno de desarrollo
│
├── public/                      # Archivos públicos de la aplicación
│   │
│   ├── assets/                  # Recursos estáticos
│   │   ├── images/              # Imágenes y logotipos
│   │   ├── media/               # Videos y otros recursos multimedia
│   │   ├── scripts/             # Archivos JavaScript
│   │   └── styles/              # Hojas de estilos CSS
│   │
│   ├── favicon.ico              # Icono del sitio web
│   ├── index.html               # Página principal
│   ├── login.html               # Página de inicio de sesión
│   └── registro.html            # Página de registro
│
├── .gitignore                   # Archivos y carpetas excluidos de Git
└── README.md                    # Documentación del proyecto
```

## Instalación y ejecución

### Requisitos

- Git instalado.
- Un navegador web actualizado.
- WebStorm o Visual Studio Code.

### Clonar el repositorio

```bash
git clone https://github.com/AireaLabs/Airea-LandingPage.git
```

Ingresar al directorio del proyecto:

```bash
cd Airea-LandingPage
```

### Ejecutar el proyecto

1. Abrir el proyecto en WebStorm o Visual Studio Code.
2. Ubicar la carpeta `public`.
3. Abrir el archivo `index.html` utilizando el navegador o un servidor local.
4. Navegar por las diferentes secciones de la Landing Page.

El proyecto utiliza HTML, CSS y JavaScript, por lo que no requiere la instalación de dependencias mediante npm.

## Gestión de ramas

Para organizar el desarrollo colaborativo se utiliza un flujo de trabajo basado en ramas:

| Rama | Propósito |
|---|---|
| `main` | Contiene la versión estable del proyecto y su publicación. |
| `develop` | Integra los cambios de desarrollo antes de su incorporación a la versión estable. |
| `feature/*` | Permite desarrollar nuevas funcionalidades o realizar modificaciones específicas. |

Los cambios desarrollados en las ramas de funcionalidad se integran mediante Pull Requests hacia `develop`. Una vez revisada y validada la versión, los cambios pueden incorporarse a `main`.

## Publicación

El proyecto cuenta con la siguiente dirección de publicación:

https://airealabs.github.io/Airea-LandingPage/

La configuración de GitHub Pages debe verificarse después de la reorganización de archivos para garantizar que se publique correctamente el contenido de la carpeta `public`.

## Integrantes del equipo

| Apellidos y nombres | Código | Carrera |
|---|---|---|
| Bia, Gaspar Oscar | U202624028 | Ingeniería de Sistemas |
| Canta Condori, Freddy Josue | U20231H056 | Ingeniería de Software |
| Chambon, Quentin | U202624034 | Ingeniería de Sistemas |
| Pineda Aguayo, Victor Alejandro | U20201F457 | Ingeniería de Software |
| Rojas Diaz, Diego Enrique | U20231E840 | Ingeniería de Software |
| Saldaña Melgar, Matías | U20241E284 | Ingeniería de Sistemas |

---

**Proyecto Airea - Landing Page**

Desarrollado con fines académicos y de aprendizaje colaborativo.