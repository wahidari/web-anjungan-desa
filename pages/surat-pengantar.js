import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BsArrowLeft, BsHouse } from "react-icons/bs";
import Footer from '../components/Footer';

export default function SuratPengantar() {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");
    let [namaKecamatan, setNamaKecamatan] = useState("Tragah");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
        namaKecamatan = localStorage.getItem("namaKecamatan");
        setNamaKecamatan(namaKecamatan);
    });

    return (
        <>
            <Head>
                <title>Surat Pengantar Desa {namaDesa}</title>
                <meta name="description" content={`Sistem Desa ${namaDesa}`} />
                <link rel="icon" href="/favicon.ico" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_API_URL} />
                <meta property="og:title" content={`Sistem Desa ${namaDesa}`} />
                <meta property="og:description" content={`Sistem Desa ${namaDesa}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/metalogo.jpg`}></meta>
            </Head>

            <header>
                <nav className="navbar navbar-light bg-light shadow-sm fixed-top">
                    <div className="container-fluid mx-3">
                        <Link href="/surat">
                            <a className="navbar-brand navbar-custom">
                                <i className="me-2 mt-n1"><BsArrowLeft /></i>
                                Kembali
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="navbar-brand navbar-custom">
                                <i className="me-2 mt-n1"><BsHouse /></i>
                                Beranda
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>

            <main>
                <section className="min-vh-100 bg-grey-2 py-5">
                    <div className="container-fluid mt-5 px-md-5">
                        <div className="row g-4">
                            <div className="col-12 col-md-4">
                                <div className="card card-custom shadow-sm border-0">
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="nik" className="form-label fw-bold">NIK (Nomor Induk Kependudukan)</label>
                                                <input type="text" className="form-control" id="nik" aria-describedby="nik" placeholder="Masukkan NIK" required />
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100 shadow-sm">CEK NIK</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="card card-custom shadow-sm border-0">
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer namaDesa={namaDesa} />
        </>
    )
}
