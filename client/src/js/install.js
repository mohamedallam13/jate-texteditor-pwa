const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', () => {
        console.log('Button Clicked!')
        console.log("Asking to install the App")
        event.prompt();
        installBtn.setAttribute('disabled', true);
    });

});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.style.visibility = 'hidden';
    console.log("Installed the App successfully!")
});
