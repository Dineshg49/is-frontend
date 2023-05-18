import React from "react"
import "../styles/Patent.css"
import bg from "../assets/cc.jpg"
import Navbar from "../components/Navbar"
import Navbar2 from "../components/Navbar2"
import cvit from "../assets/cvit.png"
import ButtonRow from "../components/Buttonrow"
import { Maximize } from "@material-ui/icons"
import { Grid, Paper, Button, Divider } from '@material-ui/core';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';



function Component1() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handlePClick = (index) => {
        setActiveIndex(index);
    }


    return (
        <div style={{ padding: "0 3vw" }}>
            <p style={{ color: '#2C2C2C', fontSize: "1.5vw", fontWeight: '400' }}>
                Center for Visual Information Technology
                <Grid item xs={12} style={{ borderBottom: '0.19vw solid #535353', margin: '0.21vw 0' }}></Grid>

            </p>
            <div style={{ fontSize: "1.07vw", fontWeight: 300 }}>
                <p style={{ color: activeIndex === 0 ? "#1369CB" : "#2C2C2C", marginBottom: "1em" }} onClick={() => handlePClick(0)}>360 Degree Stereo Video Camera</p>
                <p style={{ color: activeIndex === 1 ? "#1369CB" : "#2C2C2C", marginBottom: "1em" }} onClick={() => handlePClick(1)}>OCR for Indian languages</p>
                <p style={{ color: activeIndex === 2 ? "#1369CB" : "#2C2C2C", marginBottom: "1em" }} onClick={() => handlePClick(2)}>360 Degree Stereo Video Camera</p>
                <p style={{ color: activeIndex === 3 ? "#1369CB" : "#2C2C2C", marginBottom: "1em" }} onClick={() => handlePClick(3)}>OCR for Indian languages</p>
                <p style={{ color: activeIndex === 4 ? "#1369CB" : "#2C2C2C", marginBottom: "1em" }} onClick={() => handlePClick(4)}>360 Degree Stereo Video Camera</p>
                <p style={{ color: activeIndex === 5 ? "#1369CB" : "#2C2C2C", marginBottom: "1em" }} onClick={() => handlePClick(5)}>360 Degree Stereo Video Camera</p>
                <p style={{ color: activeIndex === 6 ? "#1369CB" : "#2C2C2C", marginBottom: "1em" }} onClick={() => handlePClick(6)}>360 Degree Stereo Video Camera</p>
            </div>

        </div>

    )
}


function Component2(patent) {
    console.log(patent);
    return (
        <div className="headerContainer" style={{ textAlign: "left" }}>
            <div >
                <p style={{ fontSize: "1.5vw", fontWeight: "500", color: '#2C2C2C' }}>{patent.patent.Name}</p>
                <img src={require('../Img/image 21.png')} alt="your-image" style={{ width: "63vw", height: "300px", padding: "0.6vw 0 1vw 0" }} />

                <div style={{ paddingBottom: "3vw" }}>
                    <p style={{ fontSize: "1.15vw", fontWeight: 300, color: "#1A1A1A" }}>Faculty Name: &nbsp; {patent.patent.FacultyName}</p>
                    <p style={{ fontSize: "1.15vw", fontWeight: 300, display: 'block', color: "#1A1A1A" }}>Keywords: {patent.patent.Keywords.map(result => ( <div>{result} &nbsp </div> ))}</p>
                </div>

                <div >
                    <ButtonRow patent={patent}/>
                </div>
            </div>
        </div>

    )
}

function Patent() {
    const { id } = useParams();
    const [patent, setPatent] = useState(null);

    console.log({ id });

    useEffect(() => {
        // Call your API here and store the response in searchResults state
        fetch(`http://ec2-15-207-71-215.ap-south-1.compute.amazonaws.com:4000/tech/technology/${id}`)
            .then(response => response.json())
            .then(data => {setPatent(data); console.log(data);});
    }, []);

    if (!patent) {
        return <div>Loading...</div>;
      }


    return (

        <>
            <div>
                <div style={{ paddingTop: "9.08vw" }}>
                    <p style={{ fontFamily: "Montserrat", fontSize: "1.1vw", margin: 0, paddingLeft: "3em" }}>
                        <span style={{ color: '#9D9D9D', fontWeight: 500 }}>Home / CVIT /</span>
                        <span style={{ color: '#1F669F', fontWeight: 500 }}> {patent.Name}
                        </span>
                    </p>
                </div>
                <div style={{ marginTop: "2rem", display: "flex" }}>
                    <div
                        style={{
                            paddingTop: "1em",
                            width: '24vw',
                            marginRight: '0.5em',
                            fontFamily: 'Prompt',
                            height: 'auto',
                            minHeight: '84vh',
                            overflowY: 'auto',
                        }}
                    >
                        <Component1 />
                    </div>

                    <div style={{
                        width: '72vw',
                        fontFamily: 'Prompt',
                    }}>
                        <Component2  patent={patent}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Patent;