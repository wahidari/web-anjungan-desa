import Link from "next/link";
import React from "react";
import * as BootstrapIcons from "react-icons/bs";

export default function SuratCard({ href, name, iconName, bgColor }) {

    const icon = React.createElement(BootstrapIcons[iconName]);

    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="card card-link shadow-sm border-0 h-100">
                    <Link href={href}>
                        <a className="stretched-link" aria-label={name}></a>
                    </Link>
                    <div className={`masthead-followup-icon mb-1 mt-3 mx-3 text-white ${bgColor}`}>
                        <i className="icon-30">{icon}</i>
                    </div>
                    <div className="card-body">
                        <h5 className="mb-0">{name}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}