import React from "react"
import { IoLogoInstagram, IoLogoPinterest, IoLogoFacebook } from "react-icons/io"
import { Link } from "react-router-dom"

import { paths } from "../../constants"
import { SocialLink } from "../../types"
import "./index.css"

const socialLinks: Array<SocialLink> = [
    {
        href: "https://www.instagram.com/",
        component: <IoLogoInstagram className="icon"/>
    },
    {
        href: "https://www.pinterest.com/",
        component: <IoLogoPinterest className="icon"/>
    },
    {
        href: "https://www.facebook.com/",
        component: <IoLogoFacebook className="icon"/>
    },
]

export const Header: React.FC = () => (
    <nav className="header">
        <Link to={paths.ALL_PICTURES} className="logo">Pictures</Link>
        <div className="icon-container">
            {socialLinks.map(({ href, component }, index) => (
                <a href={href} key={index} target="_blank" rel="noreferrer">{component}</a>
            ))}
        </div>
    </nav>
)