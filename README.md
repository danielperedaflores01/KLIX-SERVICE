# Sitio web KLIX SERVICE

Página institucional estática (HTML + CSS + JS, sin compilación) con las dos especialidades de KLIX SERVICE: **Trade Marketing** y **Desarrollo Tecnológico** (ERP, tercerización de TI y venta de suministros de TI).

```
KLIX-SERVICE/
├─ index.html        # contenido de la página
├─ styles.css        # diseño (colores de marca en :root)
├─ main.js           # número de WhatsApp, menú y formulario
├─ vercel.json       # configuración de Vercel: sitio estático, sin instalación ni build
└─ img/              # logo, favicon y logos de clientes
```

## Datos de contacto e imágenes

- **WhatsApp:** +51 982 318 382 (constante `WHATSAPP` en `main.js` y texto visible en `index.html`).
- **Correo:** administracion@klixservice.com (`index.html`).
- **Imágenes:** `img/trade-mercaderismo.svg` y `img/ti-equipos.svg` son ilustraciones; pueden reemplazarse por fotos reales del equipo (mismo nombre con `.jpg` o `.webp`, actualizando el `src` en `index.html`). `img/erp-dispositivos.webp` viene de la propuesta del ERP.
- Confirme que los clientes listados autorizan el uso de su logo.

Para verla en su computadora basta con abrir `index.html` en el navegador.

## Publicación gratuita en Vercel + dominio de GoDaddy

1. En [vercel.com](https://vercel.com) cree un proyecto nuevo e importe el repositorio **KLIX-SERVICE** de GitHub.
2. Deje **Root Directory** en la raíz (`./`) y **Framework Preset** = `Other`. Los comandos de instalación y build ya están definidos en `vercel.json` (no instalan ni compilan nada).
3. Despliegue. Vercel le da una dirección `*.vercel.app` para revisar la página.
4. En *Settings → Domains* agregue su dominio (por ejemplo `klixservice.com` y `www.klixservice.com`).
5. En GoDaddy, en *Mis productos → Dominio → Administrar DNS*:
   - Borre el registro **A** de `@` que apunta a la página de estacionamiento de GoDaddy.
   - Cree los registros que Vercel le indique. Normalmente son un **A** de `@` a `76.76.21.21` y un **CNAME** de `www` a `cname.vercel-dns.com`.
6. En minutos u horas la página queda en línea con HTTPS gratis.

Costo: solo la renovación anual del dominio. Hosting, SSL y el formulario (que envía a WhatsApp) no tienen costo.
