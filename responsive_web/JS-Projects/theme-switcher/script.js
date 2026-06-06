const themes = [{name:  'dark', message:  'No eye strain!'},
                {name: 'light', message:  'I feel bad for your eyes.'},
                {name: 'tequila', message:  'Los Mochis sunset'}]

const themeSwitcherBtn = document.getElementById('theme-switcher-button');
const themeDropdown = document.getElementById('theme-dropdown');
const themeList = document.querySelectorAll('.themes');
const themePara = document.querySelector('.para');

themeSwitcherBtn.addEventListener('click', () => {
    if(themeDropdown.hasAttribute('hidden')){
        themeDropdown.removeAttribute('hidden');
        themeSwitcherBtn.setAttribute('aria-expanded', 'true');
    } else {
        themeDropdown.hidden = true;
        themeSwitcherBtn.setAttribute('aria-expanded', 'false');
    }
    
});

themeList.forEach(theme => {
    theme.addEventListener('click', () => {
        themes.forEach(t => {
            if(theme.textContent.toLowerCase() == t.name){
                document.body.className = '';
                document.body.classList.add(`theme-${t.name}`);
                themePara.textContent = t.message;
            }
        });
    });
});