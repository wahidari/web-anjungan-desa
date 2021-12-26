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
                <title>Info Kesehatan {namaDesa}</title>
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
                                    <div className="card-body">
                                        <h3 className="mb-4 text-center">Informasi Kesehatan</h3>
                                        <h5>Poskesdes Desa {namaDesa}</h5>
                                        <table className="mt-3 table table-table-responsive">
                                            <tbody>
                                                <tr>
                                                    <td>Nama</td>
                                                    <td>Poskesdes Desa {namaDesa}</td>
                                                </tr>
                                                <tr>
                                                    <td>Kepala</td>
                                                    <td>.</td>
                                                </tr>
                                                <tr>
                                                    <td>Alamat</td>
                                                    <td>Desa {namaDesa}, Kecamatan {namaKecamatan}</td>
                                                </tr>
                                                <tr>
                                                    <td>Kontak</td>
                                                    <td>123456</td>
                                                </tr>
                                                <tr>
                                                    <td>Jadwal</td>
                                                    <td>Senin - Jumat, Jam Buka: 08:00 - 14:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
