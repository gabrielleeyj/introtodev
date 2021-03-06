import "./App.css";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Popular from "./components/Popular";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
// import CoinDetailPage from "./components/CoinDetailPage";
import CoinSummaryPage from "./components/CoinSummaryPage";
import { WatchListContextProvider } from "./components/WatchList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
function App() {
  return (
    <div className="App">
      <Header />
      <WatchListContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={CoinSummaryPage} />
            <Route path="/about" component={About} />
            <Route path="/popular" component={Popular} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/coins/:id" component={CoinDetailPage} /> */}
            <Route path="/trending" component={Trending} />
          </Switch>
        </Router>
      </WatchListContextProvider>
      <ScrollToTop showUnder={160}>
        <div className="ScrollToTop">
          <i class="fas fa-arrow-up"></i>
          &nbsp;BACK TO TOP
        </div>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
