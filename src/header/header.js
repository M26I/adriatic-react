import React from "react";
import data from "../data.json"
import './header.css';
import logo from "../content/LogoAdriatic.svg"
import svg from "../content/menu-symbol-of-three-parallel-lines-svgrepo-com (2).svg"

export const Header = () => {

    
    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center my-5">
                <div>
                    <img src={logo}  alt="Logo"/>
                </div>
                <div className="dropdown d-block d-md-none">
                    <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={svg} className="d-logo"
                            alt="Menu"/>
                    </a>
                    <ul className="dropdown-menu py-4 px-2" >
                        {data.aboutMenu.items.map((item, i) => (<li key={i} className=" list-group-item " ><a href={item.url} className="text-decoration-none">{item.title}</a></li>))}
                     
                    </ul>
                </div>
            </div>
        </div>

        </>

    )
}