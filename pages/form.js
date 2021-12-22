import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaArrowLeft } from "react-icons/fa";

const title = "Form Ganti Desa";

export default function Form() {
    const router = useRouter();

    const submitForm = async (event) => {
        event.preventDefault();
        let namaDesa = event.target.namaDesa.value;
        let namaKecamatan = event.target.namaKecamatan.value;
        localStorage.setItem("namaDesa", namaDesa);
        localStorage.setItem("namaKecamatan", namaKecamatan);
        router.push("/");
    };

    return (
        <>
            <style jsx>
                {`
            `}
            </style>

            <Head>
                <title>{title}</title>
                <meta name="description" content="Website Desa" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <nav className="navbar navbar-light bg-light shadow-sm fixed-top">
                    <div className="container-fluid mx-3">
                        <Link href="/">
                            <a className="navbar-brand">
                                <i className="me-3"><FaArrowLeft /></i>
                                Kembali
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>

            <main>

                <div className="container py-5">
                    <form className="mx-auto col-7 my-5" onSubmit={submitForm}>
                        <div className="mb-3">
                            <label htmlFor="namaDesa" className="form-label">Nama Desa</label>
                            <input type="text" className="form-control" id="namaDesa" aria-describedby="namaDesa" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="namaKecamatan" className="form-label">Nama Kecamatan</label>
                            <input type="text" className="form-control" id="namaKecamatan" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </main>

        </>
    );
};