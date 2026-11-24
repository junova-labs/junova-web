# Guía de Colaboración — JUNOVA Web

Gracias por colaborar en **JUNOVA Web**. Este documento define las reglas de trabajo, el flujo de ramas y los estándares técnicos del repositorio para mantener un código limpio y predecible.

---

## 1. Flujo de ramas

Trabajamos con dos ramas principales y ramas temporales por tarea:

- **`main`**: contiene únicamente versiones oficiales y estables. **No se permiten commits directos a `main`.** Solo recibe Pull Requests provenientes de `develop`.
- **`develop`**: rama principal de integración. Todas las ramas nuevas nacen desde `develop` y todos los Pull Requests apuntan a `develop`.
- **Ramas de trabajo**: cada cambio se desarrolla en una rama propia con prefijo descriptivo:
  - `feat/<nombre>` — nueva funcionalidad
  - `fix/<nombre>` — corrección de errores
  - `refactor/<nombre>` — refactorización sin cambio funcional
  - `docs/<nombre>` — cambios de documentación
  - `chore/<nombre>` — mantenimiento, configuración o dependencias

### Flujo habitual

```bash
git checkout develop
git pull origin develop
git checkout -b feat/mi-cambio
```

Al terminar, sube tu rama y abre un **Pull Request hacia `develop`**.

---

## 2. Configuración inicial local

1. Instala las dependencias con `pnpm`:
   ```bash
   pnpm install
   ```
   El script `prepare` activa automáticamente los hooks de **Husky**.

2. Activa la plantilla de mensajes de commit en tu copia local:
   ```bash
   git config commit.template .gitmessage
   ```

---

## 3. Convención de commits

Seguimos **Conventional Commits**, validado automáticamente por Husky en el hook `commit-msg`:

```text
<tipo>(<alcance opcional>): <descripción breve>
```

Ejemplos válidos:
- `feat(navbar): agregar enlace de contacto`
- `fix(home): corregir espaciado en móvil`
- `chore(deps): actualizar dependencias de React`

Tipos permitidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

---

## 4. Arquitectura y estilo de código

El proyecto sigue **Feature-Sliced Design (FSD)** con importaciones mediante alias definidos en `tsconfig.app.json` y `vite.config.ts`:

- `@app` — inicialización, proveedores, router y estilos globales
- `@pages` — páginas completas compuestas por módulos inferiores
- `@widgets` — bloques independientes reutilizables (`Navbar`, `Footer`)
- `@features` — acciones o interacciones de usuario
- `@entities` — modelos y lógica de dominio
- `@shared` — UI reutilizable, configuración, utilidades y recursos

Reglas clave:
- Respeta la dirección de dependencias entre capas (`app` → `pages` → `widgets` → `features` → `entities` → `shared`).
- Importa siempre desde el **Public API** (`index.ts`) de cada módulo.
- Usa los tokens de color definidos en `src/app/styles/tokens.css` en lugar de valores hexadecimales hardcodeados.

---

## 5. Calidad automática (Husky y Dependabot)

- **`pre-commit`**: ejecuta `pnpm run lint` (`oxlint`) y verificación de tipos con TypeScript antes de permitir el commit.
- **`commit-msg`**: valida que el mensaje siga Conventional Commits.
- **Dependabot**: configurado en `.github/dependabot.yml` para revisar dependencias semanalmente, agruparlas por categoría (`react-core`, `ui-and-styling`, `build-and-tooling`, `minor-and-patch`) y abrir PRs siempre hacia **`develop`**.

---

## 6. Comandos útiles

```bash
pnpm dev       # Servidor de desarrollo
pnpm lint      # Análisis estático con oxlint
pnpm build     # Verificación de tipos y compilación de producción
pnpm preview   # Vista previa del build
```
