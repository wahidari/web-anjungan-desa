import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BsArrowLeft, BsHouse } from "react-icons/bs";
import Footer from '../components/Footer';
import SuratCard from '../components/SuratCard';

const allSurat = [
    {
        "href": "surat-pengantar",
        "name": "Pengantar",
        "icon": "BsCardChecklist",
        "bgColor": "bg-primary"
    },
    {
        "href": "surat-pengantar",
        "name": "Pengantar SKCK",
        "icon": "BsCardHeading",
        "bgColor": "bg-success"
    },
    {
        "href": "surat-pengantar",
        "name": "Laporan Kehilangan",
        "icon": "BsEyeSlash",
        "bgColor": "bg-purple-500"
    },
    {
        "href": "surat-pengantar",
        "name": "Izin Keramaian",
        "icon": "BsFillPeopleFill",
        "bgColor": "bg-danger"
    },
    {
        "href": "surat-pengantar",
        "name": "Permohonan Cerai",
        "icon": "BsHeartHalf",
        "bgColor": "bg-deeporange-900"
    },
    {
        "href": "surat-pengantar",
        "name": "Permohonan Duplikat Surat Nikah",
        "icon": "BsFiles",
        "bgColor": "bg-brown-900"
    },
    {
        "href": "surat-pengantar",
        "name": "Permohonan Duplikat Kelahiran",
        "icon": "BsFilesAlt",
        "bgColor": "bg-bluegrey-900"
    },
    {
        "href": "#",
        "name": "Kepengurusan KK",
        "icon": "BsFilePerson",
        "bgColor": "bg-green-500"
    },
    {
        "href": "#",
        "name": "Pernyataan Akta",
        "icon": "BsFileMedical",
        "bgColor": "bg-deeporange-500"
    },
    {
        "href": "#",
        "name": "Surat Jalan",
        "icon": "BsTruck",
        "bgColor": "bg-blue-500"
    },
    {
        "href": "#",
        "name": "Kelahiran",
        "icon": "BsPersonPlus",
        "bgColor": "bg-purple-500"
    },
    {
        "href": "#",
        "name": "Kematian",
        "icon": "BsPersonX",
        "bgColor": "bg-teal-500"
    },
    {
        "href": "#",
        "name": "Lahir Mati",
        "icon": "BsPersonLinesFill",
        "bgColor": "bg-yellow-900"
    },
    {
        "href": "#",
        "name": "Usaha",
        "icon": "BsBuilding",
        "bgColor": "bg-red-500"
    },
    {
        "href": "#",
        "name": "Domisili Usaha",
        "icon": "BsJournalCheck",
        "bgColor": "bg-green-900"
    },
    {
        "href": "#",
        "name": "Jual Beli",
        "icon": "BsBookHalf",
        "bgColor": "bg-teal-500"
    },
    {
        "href": "#",
        "name": "KTP Dalam Proses",
        "icon": "BsFileEarmark",
        "bgColor": "bg-indigo-500"
    },
    {
        "href": "#",
        "name": "Beda Nama",
        "icon": "BsFileText",
        "bgColor": "bg-blue-500"
    },
    {
        "href": "#",
        "name": "Kurang Mampu",
        "icon": "BsJournalArrowDown",
        "bgColor": "bg-lightblue-500"
    },
    {
        "href": "#",
        "name": "Pergi Kawin",
        "icon": "BsFileEarmarkSpreadsheet",
        "bgColor": "bg-deeporange-900"
    },
    {
        "href": "#",
        "name": "Wali Hakim",
        "icon": "BsFileEarmarkPost",
        "bgColor": "bg-brown-500"
    },
    {
        "href": "#",
        "name": "Rujuk Cerai",
        "icon": "BsFileEarmarkExcel",
        "bgColor": "bg-bluegrey-900"
    },
    {
        "href": "#",
        "name": "Penduduk",
        "icon": "BsPersonBadge",
        "bgColor": "bg-red-900"
    },
]

const suratPengantar = [
    {
        "href": "surat-pengantar",
        "name": "Pengantar",
        "icon": "BsCardChecklist",
        "bgColor": "bg-primary"
    },
    {
        "href": "surat-pengantar",
        "name": "Pengantar SKCK",
        "icon": "BsCardHeading",
        "bgColor": "bg-success"
    },
    {
        "href": "surat-pengantar",
        "name": "Laporan Kehilangan",
        "icon": "BsEyeSlash",
        "bgColor": "bg-purple-500"
    },
    {
        "href": "surat-pengantar",
        "name": "Izin Keramaian",
        "icon": "BsFillPeopleFill",
        "bgColor": "bg-danger"
    },
]

const suratPermohonan = [
    {
        "href": "surat-pengantar",
        "name": "Permohonan Cerai",
        "icon": "BsHeartHalf",
        "bgColor": "bg-deeporange-900"
    },
    {
        "href": "surat-pengantar",
        "name": "Permohonan Duplikat Surat Nikah",
        "icon": "BsFiles",
        "bgColor": "bg-brown-900"
    },
    {
        "href": "surat-pengantar",
        "name": "Permohonan Duplikat Kelahiran",
        "icon": "BsFilesAlt",
        "bgColor": "bg-bluegrey-900"
    },
]

const suratLain = [
    {
        "href": "#",
        "name": "Kepengurusan KK",
        "icon": "BsFilePerson",
        "bgColor": "bg-green-500"
    },
    {
        "href": "#",
        "name": "Pernyataan Akta",
        "icon": "BsFileMedical",
        "bgColor": "bg-deeporange-500"
    },
    {
        "href": "#",
        "name": "Surat Jalan",
        "icon": "BsTruck",
        "bgColor": "bg-blue-500"
    },
]

const suratKeterangan = [
    {
        "href": "#",
        "name": "Kelahiran",
        "icon": "BsPersonPlus",
        "bgColor": "bg-purple-500"
    },
    {
        "href": "#",
        "name": "Kematian",
        "icon": "BsPersonX",
        "bgColor": "bg-teal-500"
    },
    {
        "href": "#",
        "name": "Lahir Mati",
        "icon": "BsPersonLinesFill",
        "bgColor": "bg-yellow-900"
    },
    {
        "href": "#",
        "name": "Usaha",
        "icon": "BsBuilding",
        "bgColor": "bg-red-500"
    },
    {
        "href": "#",
        "name": "Domisili Usaha",
        "icon": "BsJournalCheck",
        "bgColor": "bg-green-900"
    },
    {
        "href": "#",
        "name": "Jual Beli",
        "icon": "BsBookHalf",
        "bgColor": "bg-teal-500"
    },
    {
        "href": "#",
        "name": "KTP Dalam Proses",
        "icon": "BsFileEarmark",
        "bgColor": "bg-indigo-500"
    },
    {
        "href": "#",
        "name": "Beda Nama",
        "icon": "BsFileText",
        "bgColor": "bg-blue-500"
    },
    {
        "href": "#",
        "name": "Kurang Mampu",
        "icon": "BsJournalArrowDown",
        "bgColor": "bg-lightblue-500"
    },
    {
        "href": "#",
        "name": "Pergi Kawin",
        "icon": "BsFileEarmarkSpreadsheet",
        "bgColor": "bg-deeporange-900"
    },
    {
        "href": "#",
        "name": "Wali Hakim",
        "icon": "BsFileEarmarkPost",
        "bgColor": "bg-brown-500"
    },
    {
        "href": "#",
        "name": "Rujuk Cerai",
        "icon": "BsFileEarmarkExcel",
        "bgColor": "bg-bluegrey-900"
    },
    {
        "href": "#",
        "name": "Penduduk",
        "icon": "BsPersonBadge",
        "bgColor": "bg-red-900"
    },
]

export default function Surat() {
    let [namaDesa, setNamaDesa] = useState("Alang Alang");
    let [namaKecamatan, setNamaKecamatan] = useState("Tragah");
    let [filteredSurat, setFilteredSurat] = useState(0);
    let [search, setSearch] = useState(false);

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
        namaKecamatan = localStorage.getItem("namaKecamatan");
        setNamaKecamatan(namaKecamatan);
    });

    function handleChange(e) {
        e.preventDefault()
        if (e.target.value.length > 0) {
            let filter = allSurat.filter((data) => {
                return data.name.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setFilteredSurat(filter)
            setSearch(true)
        } else {
            setFilteredSurat(0)
            setSearch(false)
        }
    }

    return (
        <>
            <Head>
                <title>Surat Desa {namaDesa}</title>
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
                        <h3>Cari Surat</h3>
                        <div className="row pt-3">
                            <div className="col">
                                <input onChange={handleChange} type="text" className="form-control py-2" name="surat" placeholder="Nama Surat" aria-label="Nama Surat" />
                            </div>
                        </div>
                    </div>

                    {filteredSurat.length > 0 ?
                        <div className="container-fluid mt-5 px-md-5">
                            <h3>Hasil Pencarian</h3>
                            <div className="row g-4 my-2">
                                {filteredSurat.map(surat =>
                                    <SuratCard key={surat.name} href={surat.href} name={surat.name} iconName={surat.icon} bgColor={surat.bgColor} />
                                )}
                            </div>
                        </div>
                        : filteredSurat.length < 1 ?
                        <div className="container-fluid mt-5 px-md-5">
                            <h3>Hasil Pencarian</h3>
                            <div className="my-2 text-danger">
                                Surat tidak ditemukan
                            </div>
                        </div>
                        :
                        ""
                    }

                    {!search ?
                        <>
                            <div className="container-fluid mt-5 px-md-5">
                                <h3>Surat Pengantar</h3>
                                <div className="row g-4 my-2">
                                    {suratPengantar.map(surat =>
                                        <SuratCard key={surat.name} href={surat.href} name={surat.name} iconName={surat.icon} bgColor={surat.bgColor} />
                                    )}
                                </div>
                            </div>
                            <div className="container-fluid mt-5 px-md-5">
                                <h3>Surat Permohonan</h3>
                                <div className="row g-4 my-2">
                                    {suratPermohonan.map(surat =>
                                        <SuratCard key={surat.name} href={surat.href} name={surat.name} iconName={surat.icon} bgColor={surat.bgColor} />
                                    )}
                                </div>
                            </div>
                            <div className="container-fluid mt-5 px-md-5">
                                <h3>Surat Lain</h3>
                                <div className="row g-4 my-2">
                                    {suratLain.map(surat =>
                                        <SuratCard key={surat.name} href={surat.href} name={surat.name} iconName={surat.icon} bgColor={surat.bgColor} />
                                    )}
                                </div>
                            </div>
                            <div className="container-fluid mt-5 px-md-5">
                                <h3>Surat Keterangan</h3>
                                <div className="row g-4 my-2">
                                    {suratKeterangan.map(surat =>
                                        <SuratCard key={surat.name} href={surat.href} name={surat.name} iconName={surat.icon} bgColor={surat.bgColor} />
                                    )}
                                </div>
                            </div>
                        </>
                        :
                        ""
                    }


                </section>
            </main>

            <Footer namaDesa={namaDesa} />
        </>
    )
}
