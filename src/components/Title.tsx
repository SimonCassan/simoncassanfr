function Title() {
    return (
        <h1 className="flex gap-[1rem] justify-center">
            <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="bluegrad2" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="0%" stopColor="#a3eaff" />
                        <stop offset="60%" stopColor="#8FE4FF" />
                        <stop offset="100%" stopColor="#5cd9fc" />
                    </linearGradient>
                </defs>
                <rect x="18" y="2" width="44" height="60" rx="8" fill="url(#bluegrad2)" />
                <text x="33" y="46" fontFamily="Orbitron" fontSize="32" fill="#181818" fontWeight="900">C</text>
                <rect x="2" y="14" width="32" height="36" rx="4" fill="orangered" stroke="#fff" strokeWidth="1" />
                <text x="12" y="39" fontFamily="Orbitron" fontSize="22" fill="#181818" fontWeight="900">S</text>
            </svg>Simon Cassan
        </h1>
    )
}

export default Title;