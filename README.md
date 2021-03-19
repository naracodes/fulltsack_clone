<div align="center">
    <h1 >
        Quiche
    </h1>
    <p>
        <img src="./app/assets/images/quiche.ico">
    </p>
    <a href="https://quichelite.herokuapp.com/#/us/en">Live Demo</a>
    ·
    <a href="https://github.com/hurricanenara/quiche/issues">Report Bug</a>

</div>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
<br>



<!-- About -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Quiche is a fullstack financial and data website based on Robinhood trading app.

With Quiche, you can simulate buying and selling of NYSE and NASDAQ listed securities.
Unfortunately, the $$$ you will be deposited can't be taken away, but here's what you can take away:

* Portfolio tracking with reliable data fetched from the best financial data platform
* Speedy and accurate buying and selling
* Gliding smooth historical price charts in multiple ranges
* Aesthetically soothing pastel themed pages

### Built With

* [Ruby on Rails](https://rubyonrails.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)

<!-- GETTING STARTED -->
## Getting Started

Quiche is availalbe on the web here:
<a href="https://quichelite.herokuapp.com/#/us/en">Live Demo</a>.

If running on a local machine is preferred, follow the instructions below.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/hurricanenara/quiche.git
    ```
    or download from repository home: 
    <img align="center" width="200" height="140" src="app/assets/images/readme/download.png">

2. Install necessary modules and packages by running
    ```sh
    npm install
    ```
3. Then from the root of the project folder, run in two different terminals
    ```sh
    npm start
    ```
    ```sh
    rails server
    ```
4. Upon successful start of npm and rails server, Quiche will be served on
    ```sh
    http://localhost:6464/
    ```


<!-- USAGE EXAMPLES -->
## Usage

<details open="open">
  <summary>At a Glance</summary>
  <ol>
        <ul>
            <li><a href="#search">Search</a></li>
        </ul>
        <details open="open">
            <summary>Registration</summary>
                <ul>
                    <li><a href="#sign-up">Sign Up</a></li>
                    <li><a href="#sign-in">Sign In</a></li>
                </ul>
        </details>
        <details open="open">
            <summary>Dashboard</summary>
                <ul>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <!-- <li><a href="#watchlist">Watchlist</a></li> -->
                </ul>
        </details>
        <details open="open">
            <summary>Security</summary>
                <ul>
                    <li><a href="#buy">Buy</a></li>
                    <li><a href="#sell">Sell</a></li>
                    <li><a href="#charts">Charts</a></li>
                    <!-- <li><a href="#news">News</a></li> -->
                    <li><a href="#analyst-ratings">Analyst Ratings</a></li>
                    <li><a href="#hindsight">Hindsight</a></li>
                </ul>
        </details>
  </ol>
</details>

### Search
The search function in Quiche is extraordinary in that it uses the <a href="https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm">Knuth-Morris-Pratt</a> algorithm.

### Registration
#### Sign Up
<img src="app/assets/images/readme/sign-up.gif" width="400" height="250">
<br>

#### Sign In
<img src="app/assets/images/readme/sign-in.gif" width="300" height="250">
<br>

---

### Dashboard

<!-- #### Watchlist
<img src="app/assets/images/readme/watchlist.png" width="180" height="250">
<br>
<br> -->

#### Portfolio
<img src="app/assets/images/readme/portfolio.png" width="400" height="290">
<br>
<br>

---
### Security

#### Buy
<img src="app/assets/images/readme/buy.gif" width="200" height="280">
<br>

#### Sell
<img src="app/assets/images/readme/sell.gif" width="200" height="280">
<br>

#### Charts
<img src="app/assets/images/readme/charts.gif" width="410" height="280">
<br>

#### Analyst Ratings
<img src="app/assets/images/readme/analyst-ratings.png" width="300" height="50">
<br>

#### Hindsight

<img src="app/assets/images/readme/hindsight.gif" width="395" height="55">
<p>Hindsight is a feature that calculates the maximum profit in hindsight based on range with day-close prices as inputs. The calculation is made using <a href="https://brilliant.org/wiki/greedy-algorithm/#:~:text=A%20greedy%20algorithm%20is%20a,to%20solve%20the%20entire%20problem.">Greedy Algorithm</a> and <a href="https://en.wikipedia.org/wiki/Dynamic_programming">dynamic programming</a>.</p>
<br>

## Contact
<div>
    <a href="https://github.com/hurricanenara/quiche/issues">LinkedIn</a>
</div>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [GitHub Pages](https://pages.github.com)
* [IEX Cloud](https://iexcloud.io/)
* [Postman](https://www.postman.com/)
* [Cron To Go](https://iexcloud.io/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template#license)
* [Font Awesome](https://fontawesome.com)