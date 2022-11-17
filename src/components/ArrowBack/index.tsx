import React from "react"
import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"

import { paths } from "../../constants"
import "./index.css"

export const ArrowBack: React.FC = () => (
    <Link to={paths.ALL_PICTURES}>
        <IoIosArrowRoundBack className="arrow-back" />
    </Link>
)