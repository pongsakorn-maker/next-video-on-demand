import React from 'react'
import App from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class _app extends App {
  render() {
    const {Component} = this.props
    return (
      <div>
      <Navbar/>
        <Component/>
      <Footer/>
      </div>
    )
  }
}
