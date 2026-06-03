const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        tabs.forEach(t => t.setAttribute("aria-selected", "false"));
        panels.forEach(panel => {panel.setAttribute("hidden", true)});
        
        e.currentTarget.setAttribute('aria-selected', 'true');

        const associatedPanel = tab.getAttribute("aria-controls");
        const panel = document.getElementById(associatedPanel);
        panel.hidden = false;
    });
});

