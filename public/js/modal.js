// Modal Manager
const Modal = {
    create(id, content) {
        const html = `
            <div id="${id}" class="app-modal-overlay fixed inset-0 z-50 flex hidden">
                <div class="app-modal-panel transform scale-0 opacity-0 transition-all duration-200">
                    ${content}
                </div>
            </div>
        `;
        document.getElementById('modalsContainer').insertAdjacentHTML('beforeend', html);
    },

    open(id) {
        const modal = document.getElementById(id);
        modal.classList.remove('hidden');
        setTimeout(() => {
            const content = modal.querySelector(':scope > div');
            content.classList.remove('scale-0', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }, 10);
    },

    close(id) {
        const modal = document.getElementById(id);
        const content = modal.querySelector(':scope > div');
        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-0', 'opacity-0');
        setTimeout(() => modal.remove(), 200);
    }
};

