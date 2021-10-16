import React from "react";
import picture from "../assets/img/pic.jpeg";
export default function Header() {
    return (
        <section className="header">
            <div>
                <img src={picture} alt="" />
            </div>
        </section>
    );
}
