import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaClinicMedical, FaRegCopy, FaUserFriends, FaRegCommentDots } from "react-icons/fa";
import Footer from '../components/Footer';
import logo from "../public/logo.png";

export default function Home() {
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
                <title>Selamat Datang di Sistem Desa {namaDesa}</title>
                <meta name="description" content={`Sistem Desa ${namaDesa}`} />
                <link rel="icon" href="/favicon.ico" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_API_URL} />
                <meta property="og:title" content={`Sistem Desa ${namaDesa}`} />
                <meta property="og:description" content={`Sistem Desa ${namaDesa}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/metalogo.jpg`}></meta>
            </Head>

            <main className="bg-image">
                <div className="container min-vh-100 py-5">
                    <div className="text-center text-white">
                        <Image src={logo} width={200} height={220} className="img-fluid mb-3 pt-3" alt="logo image" />
                        <h2 className="mb-5">Sistem Desa {namaDesa}</h2>
                    </div>
                    <div className="row g-4 my-5">
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-link shadow-lg border-0 bg-gradient-danger text-white h-100">
                                <Link href="/antrian">
                                    <a className="stretched-link" aria-label="Antrian"></a>
                                </Link>
                                <div className="card-body card-bg">
                                    <h4 className="fw-normal mb-3">Sistem Antrian</h4>
                                    <hr />
                                    <div className="d-flex align-items-center">
                                        <h2 className="mb-2">E-ANTRIAN</h2>
                                        <i className="ms-auto icon-32">
                                            <FaUserFriends />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-link shadow-lg border-0 bg-gradient-info text-white h-100">
                                <Link href="/pengaduan">
                                    <a className="stretched-link" aria-label="Pengaduan"></a>
                                </Link>
                                <div className="card-body card-bg">
                                    <h4 className="fw-normal mb-3">Pengaduan Online</h4>
                                    <hr />
                                    <div className="d-flex align-items-center">
                                        <h2 className="mb-2">E-ADUAN</h2>
                                        <i className="ms-auto icon-32">
                                            <FaRegCommentDots />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-link shadow-lg border-0 bg-gradient-success text-white h-100">
                                <Link href="/surat">
                                    <a className="stretched-link" aria-label="Surat"></a>
                                </Link>
                                <div className="card-body card-bg">
                                    <h4 className="fw-normal mb-3">Pengajuan Surat</h4>
                                    <hr />
                                    <div className="d-flex align-items-center">
                                        <h2 className="mb-2">E-LETTER</h2>
                                        <i className="ms-auto icon-32">
                                            <FaRegCopy />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-link shadow-lg border-0 bg-gradient-warning text-white h-100">
                                <Link href="/kesehatan">
                                    <a className="stretched-link" aria-label="Kesehatan"></a>
                                </Link>
                                <div className="card-body card-bg">
                                    <h4 className="fw-normal mb-3">Info Kesehatan</h4>
                                    <hr />
                                    <div className="d-flex align-items-center">
                                        <h2 className="mb-2">E-HEALTHY</h2>
                                        <i className="ms-auto icon-32">
                                            <FaClinicMedical />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer namaDesa={namaDesa}/>
        </>
    )
}
