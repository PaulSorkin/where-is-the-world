import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import axios from "axios";
import {searchByCountry} from "../config";
import {Button} from "../components/Button";
import Info from "../components/Info";

const Details = () => {
    let {name} = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        )
    }, [name])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {country && <Info {...country} />}
        </div>
    );
};

export default Details;