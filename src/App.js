import React, { Component } from "react";

import Header from "./components/Header-component/Header.component.jsx";
import Uvod from "./components/Uvod-component/Uvod.component.jsx";
import Data from "./Data/Uvod-data";
import ReceptyData from "./Data/Recepty.data";
import "./App.css";
import Recept from "./components/Recepty-component/Recepty.component";
import Form from "./components/Form.component/Form.component";
import SearchField from "./components/SearchField.component/SearchField.component";
import ReceptyContainer from "./components/ReceptyContainer-component/ReceptyContainer.component";
import Footer from "./components/Footer.component/Footer.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nazev: "",
      email: "",
      jmeno: "",
      recept: "",
      searchField: "",
      receptyData: { ReceptyData }
    };
  }
  handleSearch = event => {
    this.setState({ searchField: event.target.value });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { nazev, email, jmeno, receptPopis, searchField } = this.state;
    const { name, content } = Data;
    const { ReceptyData } = this.state.receptyData;
    const filteredRecepty = ReceptyData.filter(recept =>
      recept.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const recepty = filteredRecepty.map(recept => {
      return (
        <Recept
          key={recept.id}
          receptName={recept.name}
          popis={recept.popis}
          img={recept.img}
          postupTitle="Postup:"
          suroviny={recept.suroviny}
          handleClick={this.handleClick}
          id={recept.id}
        />
      );
    });
    return (
      <div className="myapp">
        <Header />
        <Uvod name={name} content={content} />
        <SearchField
          placeholder="Hledejte recept"
          handleSearch={this.handleSearch}
        />
        <ReceptyContainer>{recepty}</ReceptyContainer>
        <Form
          nazev={nazev}
          handleChange={this.handleChange}
          jmeno={jmeno}
          email={email}
          receptPopis={receptPopis}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
