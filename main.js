// Número de WhatsApp: código de país + número, sin "+" ni espacios.
const WHATSAPP = "51982318382";

document.querySelectorAll(".js-wa").forEach((a) => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola KLIX SERVICE, quisiera información sobre sus servicios.")}`;
});

// Menú en celular
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Los botones "Cotizar..." preseleccionan el servicio en el formulario
const servicio = document.getElementById("servicio");
document.querySelectorAll("[data-servicio]").forEach((a) =>
  a.addEventListener("click", () => { servicio.value = a.dataset.servicio; })
);

// El formulario arma el mensaje y lo abre en WhatsApp (sin servidor, costo cero)
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const texto = [
    "Hola KLIX SERVICE, les escribo desde su página web.",
    `Nombre: ${d.get("nombre")}`,
    d.get("empresa") ? `Empresa: ${d.get("empresa")}` : null,
    `Servicio: ${d.get("servicio")}`,
    `Mensaje: ${d.get("mensaje")}`,
  ].filter(Boolean).join("\n");
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();
