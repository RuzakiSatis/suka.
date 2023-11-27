import React from 'react';
import CanvasAnimation from "../components/Animation_Pixel";
import { Header } from "../components/Header";
import "./Home.scss"

export const Home = () =>{
    return(
        <section>
            <Header />
            <main className="main">
                <div className="main_hat">
                    <div className="main_hat_title">
                        <p className="main_hat_title_Dev">3D game Dev</p>
                        <h1 className="main_hat_title_big">Thank you for playing <br /> with us</h1>
                        <p className="main_hat_title_text">Welcome to our gaming platform where your
                        gaming dreams <br /> become a reality. Join the largest community of gamers <br />and immerse 
                        yourself in the best games, the latest releases, and <br /> unforgettable adventures. Are 
                        you ready to embark on <br /> your gaming journey? Let{`'`}s make games great together!</p>
                        <button className="main_hat_title_button main_hat_title_btn">Get more details</button>
                    </div>
                    <CanvasAnimation />
                </div>
                

            </main>
        </section>
    )
}