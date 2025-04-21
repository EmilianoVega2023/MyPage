export function handleContactClick() {
  const contactSection = document.createElement('div');
  contactSection.style.position = 'fixed';
  contactSection.style.bottom = '20px';
  contactSection.style.right = '20px';
  contactSection.style.width = '300px';
  contactSection.style.height = '200px';
  contactSection.style.backgroundColor = '#ffffff';
  contactSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  contactSection.style.borderRadius = '8px';
  contactSection.style.padding = '16px';
  contactSection.innerHTML = `
    <h3 style="margin-bottom: 8px; font-size: 18px;">Contacto</h3>
    <p>Email: <a href="mailto:vemiliano220@gmail.com">vemiliano220@gmail.com</a></p>
    <p>LinkedIn: <a href="https://linkedin.com" target="_blank">Mi perfil</a></p>
    <button id="closeContact" style="margin-top: 16px; padding: 8px 12px; background-color: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Cerrar</button>
  `;
  document.body.appendChild(contactSection);

  const closeButton = document.getElementById('closeContact');
  closeButton?.addEventListener('click', () => {
    document.body.removeChild(contactSection);
  });
}

export function handleGitHubClick() {
  window.open('https://github.com/EmilianoVega2023');
}
