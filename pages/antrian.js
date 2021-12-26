import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BsArrowLeft, BsHouse } from "react-icons/bs";
import Footer from '../components/Footer';

export default function Antrian() {
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
                <title>Antrian Desa {namaDesa}</title>
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
                        <Link href="/">
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
                            <div className="col-12 col-sm-8 mx-auto">
                                <div className="card card-custom shadow-sm border-0">
                                    <div className="card-header bg-blue-gradient">
                                        <h3 className="my-3 text-center text-white">Antrian Desa</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mt-4 mb-5">
                                                <label htmlFor="aduan" className="form-label">Pilih Keperluan</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option value="1">Antrian Umum</option>
                                                    <option value="2">Pengambilan Surat</option>
                                                    <option value="3">Pertemuan</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100 shadow px-3">AMBIL ANTRIAN</button>
                                        </form>
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
