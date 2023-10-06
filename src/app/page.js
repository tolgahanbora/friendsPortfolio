"use client"
import Image from 'next/image'
import Nav from './components/nav'
import Intro from './components/intro'
import Works from './components/works'
import Footer from './components/footer'

import "./globals.css"

export default function Home() {
  return (
    <>
    <Intro />
    <Works />
    </>
   
  )
}
