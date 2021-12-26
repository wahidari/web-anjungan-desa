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

            <main>
                <div className="container py-5">
                    <div className="position-absolute top-0 end-0 bg-image">
                        <svg width="1440" height="593" viewBox="0 0 1440 593" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_403_66)">
                                <path opacity="0.19" d="M1 57H1440V366.159C1440 366.159 1186 517.997 704 448.876C222 379.755 1 599 1 599V57Z"
                                    fill="url(#paint0_linear_403_66)" />
                                <path d="M1 -3H1440V355.236C1440 355.236 1181.5 512.132 699.5 438.263C217.5 364.394 1 544 1 544V-3Z"
                                    fill="url(#paint1_linear_403_66)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_403_66" x1="26" y1="599" x2="250.534" y2="-112.219"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00F3B9" />
                                    <stop offset="1" stopColor="#2187FF" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_403_66" x1="26" y1="544" x2="254.312" y2="-172.576"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00F3B9" />
                                    <stop offset="1" stopColor="#2187FF" />
                                </linearGradient>
                                <clipPath id="clip0_403_66">
                                    <rect width="1440" height="593" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div className="text-center text-white">
                        <Image src={logo} width={200} height={220} className="img-fluid mb-3 pt-3" alt="logo image" />
                        <h2 className="mb-5">Sistem Desa {namaDesa}</h2>
                    </div>

                    <div className="row g-4 my-5">
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-link shadow border-0 bg-gradient-danger text-white h-100">
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
                            <div className="card card-link shadow border-0 bg-gradient-info text-white h-100">
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
                            <div className="card card-link shadow border-0 bg-gradient-success text-white h-100">
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
                            <div className="card card-link shadow border-0 bg-gradient-warning text-white h-100">
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
