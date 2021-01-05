import React from "react";
import App from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
export default function _app ({Component}){
    return (
      <div>
        <Head>
          <title>Video On Demand</title>
          <link rel="icon" href="/book.png" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <Navbar />
        <Component />
        <Footer />
      </div>
    );
  }
