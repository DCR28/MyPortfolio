import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../subcomponents/footer";
import Navbar from "../subcomponents/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Hi, I'm Rosanna! </h1>
      <p> I’m interested in front end development, UX and UI.</p>
     <p> If you remember when emojis resembled ^_^ or :) and Tom was your first MySpace friend; hello fellow millenial!</p>
      <Link href="/projects/">
        <a> See My Projects</a>
      </Link>
    </div> 
  );
} 
