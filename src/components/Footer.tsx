function Footer() {
    return (
        <footer className="my-5 tracking-wider">
            <div className="w-[40%] m-auto mb-5 border-t-2 [border-top-color:#780000] dark:[border-top-color:#f77820]"></div>
            <p>©&nbsp;{new Date().getFullYear()} Simon&nbsp;Cassan - Site créé avec React + Tailwind via <a href="https://vite.dev/" target="_blank">Vite</a></p>
        </footer>
    )
}

export default Footer;