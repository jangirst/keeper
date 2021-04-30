import React from "react";

function Footer() {

    const year = new Date().getFullYear;
    console.log(year);

    return (
        <p className="footer p">Copywrite {year}</p>
    );
}

export default Footer;