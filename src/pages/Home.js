import React from "react"
import "../styles/Home.css"
import bg from "../assets/cc.jpg"
import Navbar from "../components/Navbar"
import Navbar2 from "../components/Navbar2"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Grid, Paper, Button, Divider } from '@material-ui/core';

import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import img2 from '../Img/image 2.png'
import img8 from '../Img/image 8.png'
import img11 from '../Img/image 11.png'
import img13 from '../Img/image 13.png'
import img14 from '../Img/image 14.png'
import landing from '../Img/landing.png'
import img16 from '../Img/image 16.png'
import img17 from '../Img/image 17.png'
import hor_img from '../Img/hehe.jpg'
import img18 from '../Img/topc.jpg'

import icon1 from '../Img/Icon1.png'
import icon2 from '../Img/icon2.png'
import icon3 from '../Img/icon3.png'
import Chatbot from "../chatbot/Chatbot"


import t1 from '../Img/t1.png'
import t2 from '../Img/t2.png'
import t3 from '../Img/t3.png'
import t4 from '../Img/t4.png'
import ImageSlider from "../components/LinkSlider"
import ResponsiveImage from "../components/ResponsiveImage"

const items = [
    {
        id: 1,
        heading: "Startup Seeding",
        icon: icon1,
        image: img2,
        text: "Innovator looking to build Deep-tech Startup",
        description: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
        id: 2,
        heading: "Technology Licensing",
        icon: icon2,
        image: img13,
        text: "Startup or Company looking for Technology",
        description: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
        id: 3,
        heading: "Productize",
        icon: icon3,
        image: img14,
        description: "Lorem ipsum dolor sit amet, consectetur  ",
        text: "Individual wants to build product using technology from product labs"
    },
];



const Item = ({ heading, icon, image, description, text }) => (
    <>
        <div >
            <div style={{
                background: "linear-gradient(108.22deg, rgba(255, 255, 255, 0.45) 2.34%, rgba(255, 255, 255, 0.09) 100%)",
                boxShadow: "0px 0px 50px -25px rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(2.27vw)",
                height: "22vw", padding: "1vw 1.5vw", boxShadow: "0px 0px 50px -25px rgba(0, 0, 0, 0.5)", borderRadius: "2.27vw"
            }}>
                {/* <img src={icon} alt="icon" style={{maxWidth:"100%"}}
                /> */}
                <ResponsiveImage src={icon} alt="icon" maxWidth={400} maxHeight={300}/>
                <div className="myheading">{heading}</div>
                <div className="mydescription">{description}</div>
                {/* <div style={{display:"flex",justifyContent:"center", paddingTop:"1.2vw"}} >
                    <Button variant="contained" style={{ fontWeight: "600", textTransform: 'none', fontSize: "0.93vw", backgroundColor: '#FDFDFD', color: '#073B75', borderRadius: "1.3vw", padding: "0 2.2vw", height: '2.6vw' }}>
                        Visit Page
                    </Button>
                </div> */}
            </div>
        </div>

    </>
);





function Home() {

    return (
        <>
            <div className="home" style={{ height: "auto", fontFamily: "Prompt" }} >


                <Chatbot />
                <Container style={{
                    maxWidth: "90%",
                    height: "80vh",
                    marginTop: "1vw",
                    padding: " 1.5vw 0 5vw 0",
                    backgroundImage: `linear-gradient(180deg, rgba(73, 103, 128, 0.85) 5.49%, rgba(37, 67, 90, 0) 100%), url(${landing})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>

                    <p className="text-center" style={{ fontFamily: 'Prompt', fontWeight: "700", fontSize: "3vw", color: "#FCFCFC" }}>Technology Transfer Office</p>


                    <Grid container spacing={2} justify="space-between" style={{ padding: "7vw 0 0 0", width: "100%" }}>


                        <Grid item xs={3} sm={3} md={3} style={{ marginLeft: "5.5vw" }}>
                            <Item {...items[0]} />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3}>
                            <Item {...items[1]} />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} style={{ marginRight: "5.5vw" }}>
                            <Item {...items[2]} />
                        </Grid>


                    </Grid>

                </Container>




                <Container style={{ maxWidth: "80%", fontFamily: 'Prompt', paddingTop: "2em" }}>

                    <Grid container spacing={0} style={{ paddingBottom: "7vw" }}>
                        <Grid item xs={6} sm={6} md={6}>
                            <p style={{ color: "#2C2C2C", fontSize: "2.87vw", fontWeight: 600 }}>Latest Technology</p>
                        </Grid>

                        <Grid item xs={6} sm={6} md={6} container justify="flex-end">
                            <Button variant="contained" style={{ fontWeight: 500, textTransform: 'none', fontSize: "1.54vw", backgroundColor: '#09A5AF', color: '#FFFFFF', borderRadius: "2.7vw", padding: "0 2.2vw", maxHeight: '2.7em' }}>
                                Explore all Technologies
                            </Button>
                        </Grid>


                        <Grid item xs={12} style={{ borderBottom: '0.27vw solid #535353' }}></Grid>

                        <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "5em" }}>
                            <img
                                src={t1}
                                alt="Your image description"
                                style={{ width: '100%', height: 'auto' }}
                            />
                            {/* <ResponsiveImage src={t1} alt="icon" maxWidth={700} maxHeight={700}/> */}

                        </Grid>
                        <Grid item xs={1} sm={1} md={1}></Grid>

                        <Grid item xs={7} sm={7} md={7} style={{ paddingTop: "5em" }}>
                            <p style={{ color: "#434343", fontWeight: 600, fontSize: "1.77vw", paddingBottom: "1em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac feugiat nulla</p>
                            <p style={{ color: "#434343", fontWeight: 400, fontSize: "1.32vw", paddingBottom: "1em" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan vel praesent maecenas mauris, dignissim massa. Et vel neque fermentum ipsum cursus nunc, quam varius. Eu ut scelerisque sit amet, eget vel. Quis ornare cras mauris tortor, est, nulla cras mollis. Molestie consequat aliquam, nisl ullamcorper fermentum, nascetur .</p>
                            <p style={{ color: "#989898", fontWeight: 500, fontSize: "1.32vw" }}>5 Months Ago</p>

                        </Grid>


                    </Grid>

                    <Grid container spacing={0} style={{ paddingBottom: "7vw" }}>
                        <Grid item xs={6} sm={6} md={6}>
                            <p style={{ color: "#2C2C2C", fontSize: "2.87vw", fontWeight: 600 }}>Startups</p>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} container justify="flex-end">
                            <Button variant="contained" style={{ fontWeight: 500, textTransform: 'none', fontSize: "1.54vw", backgroundColor: '#09A5AF', color: '#FFFFFF', borderRadius: "2.7vw", padding: "0 2.2vw", maxHeight: '2.7em' }}>
                                Explore all Startups
                            </Button>
                        </Grid>
                        <Grid item xs={12} style={{ borderBottom: '0.27vw solid #535353', margin: '0.27vw 0' }}></Grid>


                        <Grid item xs={7} sm={7} md={7} style={{ paddingTop: "5em" }}>
                            <p style={{ color: "#434343", fontWeight: 600, fontSize: "1.77vw", paddingBottom: "1em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac feugiat nulla</p>
                            <p style={{ color: "#434343", fontWeight: 400, fontSize: "1.32vw", paddingBottom: "1em" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan vel praesent maecenas mauris, dignissim massa. Et vel neque fermentum ipsum cursus nunc, quam varius. Eu ut scelerisque sit amet, eget vel. Quis ornare cras mauris tortor, est, nulla cras mollis. Molestie consequat aliquam, nisl ullamcorper fermentum, nascetur .</p>
                            <p style={{ color: "#989898", fontWeight: 500, fontSize: "1.32vw" }}>5 Months Ago</p>

                        </Grid>
                        <Grid item xs={1} sm={1} md={1}></Grid>

                        <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "5em" }}>
                            <img
                                src={t2}
                                alt="Your image description"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{ paddingBottom: "7vw" }}>
                        <Grid item xs={6} sm={6} md={6}>
                            <p style={{ color: "#2C2C2C", fontSize: "2.87vw", fontWeight: 600 }}>Patents</p>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} container justify="flex-end">
                            <Button variant="contained" style={{ fontWeight: 500, textTransform: 'none', fontSize: "1.54vw", backgroundColor: '#09A5AF', color: '#FFFFFF', borderRadius: "2.7vw", padding: "0 2.2vw", maxHeight: '2.7em' }}>
                                Explore all Patents
                            </Button>
                        </Grid>
                        <Grid item xs={12} style={{ borderBottom: '0.27vw solid #535353', margin: '0.27vw 0' }}></Grid>

                        <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "5em" }}>
                            <img
                                src={t3}
                                alt="Your image description"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}></Grid>

                        <Grid item xs={7} sm={7} md={7} style={{ paddingTop: "5em" }}>
                            <p style={{ color: "#434343", fontWeight: 600, fontSize: "1.77vw", paddingBottom: "1em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac feugiat nulla</p>
                            <p style={{ color: "#434343", fontWeight: 400, fontSize: "1.32vw", paddingBottom: "1em" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan vel praesent maecenas mauris, dignissim massa. Et vel neque fermentum ipsum cursus nunc, quam varius. Eu ut scelerisque sit amet, eget vel. Quis ornare cras mauris tortor, est, nulla cras mollis. Molestie consequat aliquam, nisl ullamcorper fermentum, nascetur .</p>
                            <p style={{ color: "#989898", fontWeight: 500, fontSize: "1.32vw" }}>5 Months Ago</p>

                        </Grid>


                    </Grid>

                    <Grid container spacing={0} style={{ paddingBottom: "7vw" }}>
                        <Grid item xs={6} sm={6} md={6}>
                            <p style={{ color: "#2C2C2C", fontSize: "2.87vw", fontWeight: 600 }}>Latest News</p>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} container justify="flex-end">
                            <Button variant="contained" style={{ fontWeight: 500, textTransform: 'none', fontSize: "1.54vw", backgroundColor: '#09A5AF', color: '#FFFFFF', borderRadius: "2.7vw", padding: "0 2.2vw", maxHeight: '2.7em' }}>
                                Explore all Events
                            </Button>
                        </Grid>
                        <Grid item xs={12} style={{ borderBottom: '0.27vw solid #535353', margin: '0.27vw 0' }}></Grid>


                        <Grid item xs={7} sm={7} md={7} style={{ paddingTop: "5em" }}>
                            <p style={{ color: "#434343", fontWeight: 600, fontSize: "1.77vw", paddingBottom: "1em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac feugiat nulla</p>
                            <p style={{ color: "#434343", fontWeight: 400, fontSize: "1.32vw", paddingBottom: "1em" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan vel praesent maecenas mauris, dignissim massa. Et vel neque fermentum ipsum cursus nunc, quam varius. Eu ut scelerisque sit amet, eget vel. Quis ornare cras mauris tortor, est, nulla cras mollis. Molestie consequat aliquam, nisl ullamcorper fermentum, nascetur .</p>
                            <p style={{ color: "#989898", fontWeight: 500, fontSize: "1.32vw" }}>5 Months Ago</p>

                        </Grid>
                        <Grid item xs={1} sm={1} md={1}></Grid>
                        <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "5em" }}>
                            <img
                                src={t4}
                                alt="Your image description"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Grid>

                    </Grid>

                    <Grid container spacing={0} style={{ paddingBottom: "4vw" }}>
                        <Grid item xs={6} sm={6} md={6}>
                            <p style={{ color: "#2C2C2C", fontSize: "2.87vw", fontWeight: 600 }}>Quick Links</p>
                        </Grid>

                        <Grid item xs={12} style={{ borderBottom: '0.27vw solid #535353', margin: '0.21vw 0' }}></Grid>
                    </Grid>

                </Container>

                <Container style={{ maxWidth: "100%", fontFamily: 'Prompt', padding: "0 0 7em 0" }}>
                    <ImageSlider />
                </Container>

            </div >

        </>

    );
}
export default Home;