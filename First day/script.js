document.addEventListener('DOMContentLoaded', initializePanels);
let activePanel = null;
function initializePanels() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => handlePanelClick(panel));
    });
}

function handlePanelClick(panel) {
    if (activePanel) {
        deactivatePanel(activePanel);
    }
    activatePanel(panel);
}

function activatePanel(panel) {
    panel.classList.add('active', 'expanded');
    activePanel = panel;
}

function deactivatePanel(panel) {
    panel.classList.remove('active', 'expanded');
}
