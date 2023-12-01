import React from "react";
import "../css/Header.css"
 import HomeBankingAccess from "./HomeBankingAccess";
import { Link } from "react-router-dom";

export default function HomeHeader() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src="http://localhost:3000/images/logo-itbank.png" alt="Logo del banco" />
                    </Link>
                </div>
               <HomeBankingAccess></HomeBankingAccess>
            </header>
        </>
    )
}