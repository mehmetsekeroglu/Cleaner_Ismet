function createStartPage() {
    return`
    <section id="start-page">
    <h2>Cleaner Ismet</h2>
    <button class="btn btn-dark" id="login">Login</button>
</section>
    `
}

function showStartPage() {
    mainElement.innerHTML = createStartPage()
}

