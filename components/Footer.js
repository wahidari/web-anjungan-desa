export default function Footer({namaDesa}) {
    return (
        <>
            <footer className="pt-3 pb-1">
                <div className="container">
                    <p className="text-center text-secondary">© Hak Cipta Dilindungi 2021 - Sistem Resmi Desa <a href="#"
                        className="text-decoration-none">{namaDesa}</a>. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}