import React, { Component } from 'react';
import logo from '../assets/logo.svg'
import '../App.css';
import Table from 'react-bootstrap/Table'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <header className="App">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                </div>

                <Table striped bordered hover size="sm" align="center" variant="light" >

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>TTL</th>
                            <th>Hobi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Khosy</td>
                            <td>Bontang ,14 Januari 1999 </td>
                            <td>Futsal</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Akmal</td>
                            <td>Malang ,15 Desember 1999</td>
                            <td>Basket</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Romadlan</td>
                            <td>Surabaya ,16 Juli 1999</td>
                            <td>Badminton</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Home;