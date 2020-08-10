export function homepageRedirect() {
    document.getElementsByTagName("html")[0].style.display = 'none';
    window.location.href = window.location.origin + '/music-users';
}
