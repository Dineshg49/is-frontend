import "../styles/Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { FaCalendarAlt } from "react-icons/fa";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Patentstable from "./tablepatents";
import { Typography, Checkbox, Divider, FormControlLabel, Box, Grid, TextField, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Paper, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        backgroundColor: '#e7f2fb',
        padding: theme.spacing(2),
        minHeight: '100vh',
        padding: ' 0 2em'
    },
    filterGroup: {
        marginTop: theme.spacing(2),
    },


    pagination: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },

    heading: {
        fontFamily: 'Hahmlet',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '22px',
        lineHeight: '45px',
        letterSpacing: '-0.04em',
        color: '#084D9C'
    },

    eachitem: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 500,
        color: '#4591C5',
        lineHeight: '5px',

    },



    tableitem: {
        fontFamily: 'Hahmlet',
        fontStyle: 'normal',
        fontWeight: 500,
        color: '#2C2C2C',
        lineHeight: '2em',
        fontSize: '19px',

    }
    ,
    checkbox: {
        color: '#4591C5  ', // set the color to blue
        '&$checked': {
            color: '#0E66AC          ', // set the color of the checked state to blue
        },
        // border: '1px solid #0E66AC',

        borderRadius: '4px'
    },

    checked: {},
}));

const SearchBar = () => {
    return (
        <Paper
            elevation={0}
            style={{
                backgroundColor: '#EEEEEE',
                display: 'flex',
                alignItems: 'center',
                padding: '0',
                width: '20vw',
                borderRadius: '0.86vw',
                maxHeight: '4vw'
            }}
        >
            <IconButton
                type="submit"
                aria-label="search"
                style={{
                    padding: 10,
                }}
            >
                <SearchIcon style={{ fontSize: "2vw" }} />
            </IconButton>
            <InputBase
                placeholder="Search Catalogue"
                style={{
                    fontSize: "1.3vw",
                    flex: 1,
                }}
            />

        </Paper>
    );
};


function Home() {

    const classes = useStyles();
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [showCalendar1, setShowCalendar1] = useState(false);
    const toggleCalendar1 = () => setShowCalendar1(!showCalendar1);
    const [endDate, setEndDate] = useState(new Date());
    const [showCalendar2, setShowCalendar2] = useState(false);
    const toggleCalendar2 = () => setShowCalendar2(!showCalendar2);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);


    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    const handleShowMoreFilters = () => {
        setShowMoreFilters(true);
    };
    const handleShowLessFilters = () => {
        setShowMoreFilters(false);
    };

    const handleClearAll = () => {
        setShowMoreFilters(false)

    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div style={{ height: "auto", paddingTop: "9em" }} >
                <div style={{ marginTop: "1em" }}>
                    <p style={{ fontFamily: "Montserrat", fontSize: 21, margin: "0em", marginLeft: "2em", textAlign: "left" }}>
                        <span style={{ color: '#9D9D9D' }}>Home /  </span>
                        <span style={{ color: '#1F669F' }}> Patent &nbsp;</span>
                    </p>
                </div>
                <Container style={{ maxWidth: "100%", padding: "1vw 0", margin: 0 }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ flex: "0 0 10%", }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <Typography variant="h6" style={{
                                        fontFamily: "Hahmlet",
                                        fontWeight: 600,
                                        paddingLeft: '2em',
                                        fontSize: '24px'
                                    }}>Filters</Typography>
                                </div>
                                <div>

                                    <Typography variant="h6" style={{ fontFamily: "Hahmlet", fontWeight: 600, color: '#DE3119', fontSize: '24px' }}  >
                                        <Button color="primary" size="small" onClick={handleClearAll}>
                                            Clear All
                                        </Button></Typography>

                                </div>
                            </div>
                            <Box className={classes.root} style={{ boxShadow: '0px 4px 4px rgba(180, 180, 180, 0.25), 4px 0px 4px 4px rgba(158, 155, 155, 0.25)' }}>
                                <Box className={classes.filterGroup} style={{ display: 'flex', flexDirection: 'column', margin: '1em 0' }}>
                                    <Typography className={classes.heading} variant="subtitle1">
                                        Patent Status</Typography>
                                    <FormControlLabel className={classes.eachitem} control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                        label="Filed" />
                                    <FormControlLabel className={classes.eachitem} control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                        label="Published" />
                                    <FormControlLabel className={classes.eachitem} control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                        label="Granted" />
                                </Box>

                                <Box className={classes.filterGroup} style={{ display: 'flex', flexDirection: 'column', margin: '1.5em 0' }} >
                                    <Grid container alignItems="center" spacing={1} justifyContent="space-between">
                                        <Grid item>
                                            <Typography className={classes.heading} variant="subtitle1">Research Lab</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Search />
                                        </Grid>
                                    </Grid>

                                    <Box className={classes.eachitem}>
                                        <FormControlLabel control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                            label="CVIT" />
                                        <FormControlLabel control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                            label="Machine learning lab (ML Lab)" />
                                        <FormControlLabel control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                            label="Robotics Research Center (RRC)" />
                                        <FormControlLabel control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                            label="Cognitive Science Lab (CogSci)" />

                                        {showMoreFilters ? (
                                            <>
                                                <FormControlLabel control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                                    label="Computer Systems Group (CSG)" />
                                                <FormControlLabel control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                                    label="Machine learning lab (ML Lab)" />
                                                <FormControlLabel control={<Checkbox classes={{ root: classes.checkbox, checked: classes.checked }} />}
                                                    label="Robotics Research Center (RRC)
                    " />
                                                <Button color="primary" size="small" onClick={handleShowLessFilters}>
                                                    Show less
                                                </Button>
                                            </>
                                        ) : (
                                            <Button color="primary" size="small" onClick={handleShowMoreFilters}>
                                                Show more
                                            </Button>
                                        )}

                                    </Box>
                                </Box>
                                <Box className={classes.filterGroup} style={{ margin: '3em 0' }} >
                                    <Grid container alignItems="center" spacing={1} justifyContent="space-between">
                                        <Grid item>
                                            <Typography className={classes.heading} variant="subtitle1">Application Number</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Search />
                                        </Grid>
                                        <Grid item>
                                            <TextField style={{
                                                background: "#FFFFFF",
                                                boxShadow: '0px 4px 4px rgba(194, 194, 194, 0.25), 4px 4px 4px rgba(163, 163, 163, 0.25)'
                                            }} size="small" label="" variant="outlined"

                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Box position="relative">
                                        <Box mr={1}>
                                            <Typography className={classes.heading} variant="subtitle1">Search by Date</Typography>
                                            <Typography className={classes.eachitem} >Start Date</Typography>
                                            <TextField
                                                style={{
                                                    margin: "1em 0", background: "#FFFFFF",
                                                    boxShadow: '0px 4px 4px rgba(194, 194, 194, 0.25), 4px 4px 4px rgba(163, 163, 163, 0.25)'
                                                }}
                                                variant="outlined"
                                                size="small"
                                                value={startDate.toLocaleDateString()}
                                                InputProps={{
                                                    endAdornment: (
                                                        <FaCalendarAlt
                                                            className={classes.icon}
                                                            onClick={toggleCalendar1}
                                                            style={{ cursor: "pointer", color: '#0E66AC' }}
                                                        />
                                                    ),
                                                }}
                                            />
                                        </Box>
                                        {showCalendar1 && (
                                            <Box
                                                position="absolute"
                                                top="-10em"
                                                right="-14em"
                                                zIndex="9999"
                                            >
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    dateFormat="yyyy/MM/dd"
                                                    onClickOutside={() => setShowCalendar1(false)}
                                                    inline
                                                />
                                            </Box>
                                        )}
                                    </Box>

                                    <Box position="relative" style={{ paddingBottom: "5rem" }}>
                                        <Box mr={1}>
                                            <Typography className={classes.eachitem} >End Date</Typography>
                                            <TextField
                                                style={{
                                                    margin: "1em 0", background: "#FFFFFF",
                                                    boxShadow: '0px 4px 4px rgba(194, 194, 194, 0.25), 4px 4px 4px rgba(163, 163, 163, 0.25)'

                                                }}
                                                variant="outlined"
                                                size="small"
                                                value={endDate.toLocaleDateString()}
                                                InputProps={{
                                                    endAdornment: (
                                                        <FaCalendarAlt
                                                            className={classes.icon}
                                                            onClick={toggleCalendar2}
                                                            style={{ cursor: "pointer", color: '#0E66AC' }}
                                                        />
                                                    ),
                                                }}
                                            />
                                        </Box>
                                        {showCalendar2 && (
                                            <Box
                                                position="absolute"
                                                top="-13em"
                                                right="-14em"
                                                zIndex="9999"
                                            >
                                                <DatePicker
                                                    selected={endDate}
                                                    onChange={(date) => setEndDate(date)}
                                                    dateFormat="yyyy/MM/dd"
                                                    onClickOutside={() => setShowCalendar2(false)}
                                                    inline
                                                />
                                            </Box>
                                        )}
                                    </Box>

                                </Box>
                            </Box>
                        </div>

                        <div style={{ flex: "1", margin: "4em 0", paddingLeft: "4px" }}>
                            {/* to adjust spacing between filters tab and table */}
                            <table className="table-auto border" style={{ width: "100%" }}>

                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th className={classNames(classes.heading, 'px-4', 'py-2')} style={{ backgroundColor: '#DCF3FD' }}>SI No</th>

                                        <th className={classNames(classes.heading, 'px-4', 'py-2')} style={{ backgroundColor: '#EAF7FC' }} >Title</th>
                                        <th className={classNames(classes.heading, 'px-4', 'py-2')} style={{ backgroundColor: '#DCF3FD' }}>Research Lab</th>

                                        <th className={classNames(classes.heading, 'px-4', 'py-2')} style={{ backgroundColor: '#EAF7FC' }} >Inventor List</th>
                                        <th className={classNames(classes.heading, 'px-4', 'py-2')} style={{ backgroundColor: '#DCF3FD' }}>Application/Patent No</th>

                                        <th className={classNames(classes.heading, 'px-4', 'py-2')} style={{ backgroundColor: '#EAF7FC' }} >Patent Status</th>
                                    </tr>
                                </thead>


                                <tbody>
                                    {currentUsers.map((user, index) => (
                                        <tr key={user.id} style={{ textAlign: "center" }} >
                                            <td style={{ backgroundColor: '#DCF3FD	' }} className={classNames(classes.tableitem, 'px-4', 'py-2')}>{user.id}</td>
                                            <td style={{ backgroundColor: '#EAF7FC' }} className={classNames(classes.tableitem, 'px-4', 'py-2')}>{user.name}</td>
                                            <td style={{ backgroundColor: '#DCF3FD	' }} className={classNames(classes.tableitem, 'px-4', 'py-2')}>{user.username}</td>
                                            <td style={{ backgroundColor: '#EAF7FC' }} className={classNames(classes.tableitem, 'px-4', 'py-2')}>{user.email}</td>
                                            <td style={{ backgroundColor: '#DCF3FD	' }} className={classNames(classes.tableitem, 'px-4', 'py-2')}>{user.phone}</td>
                                            <td style={{ backgroundColor: '#EAF7FC' }} className={classNames(classes.tableitem, 'px-4', 'py-2')}>{user.website}</td>
                                        </tr>
                                    ))}
                                </tbody>


                            </table>

                            {/* <div className="flex justify-center items-center mt-4">
                                <nav className="block">
                                    <ul className="pagination flex pl-0 rounded list-none flex-wrap">
                                        {pages.map((page) => (
                                            <li key={page}>
                                                <button
                                                    className={`${currentPage === page
                                                        ? "bg-blue-500 text-white"
                                                        : "bg-white text-blue-500"
                                                        } hover:bg-blue-500 hover:text-white px-3 py-2 rounded`}
                                                    onClick={handleClick}
                                                    id={page}
                                                >
                                                    {page}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div> */}

                            {/* <div className="flex justify-end items-center mt-4">
                                <p className="text-sm text-gray-600">
                                    Showing {indexOfFirstUser + 1} to {indexOfLastUser} of {users.length}{" "}
                                    entries
                                </p>
                            </div> */}
                        </div>
                    </div>
                </Container>
            </div >
        </>
    );
}
export default Home;
