import React from "react";
import mindfulMaxLabel from './MindfulMax_label.JPEG';
import './index.css';

function Home() {
    return (
        <div className="home-content">
            <header className="home-header">
                <h1>Unlock Your Brain's Maximum Level</h1>
            </header>

            <section className="main-content">
                <h2>Welcome to MindfulMax</h2>
                <p>Brain Boost to the Max, Bulls-eye Focus, and Productivity Intensified. Your premier destination
                   for high-quality cognitive wellness supplements.</p>
                <p>At MindfulMax, we recognize the essence of a keen mind and the innate human desire to realize 
                  its fullest potential. Our mission is to offer scientifically-backed, natural supplements that 
                  bolster memory, elevate energy levels, and augment cognitive functions. This ensures you maintain 
                  utmost focus and alertness throughout the day. With ingredients sourced from nature's finest, 
                  coupled with age-old traditional wisdom and cutting-edge scientific research, our supplements 
                  are curated to deliver excellence.</p>
            </section>

            <section className="products">
                <h2>Our Neutropic Products</h2>
                <figure className="product-images">
                    <img src={mindfulMaxLabel} alt='MindfulMax supplement label' className="homeNeutropicImage" />
                </figure>
                <div className="product-details">
                    <a href="https://d808b1-2.myshopify.com/products/nootropic-brain-focus-formula" target="_blank" rel="noopener noreferrer">
                        <button className="shop-btn">Shop Now</button>
                    </a>
                </div>
            </section>

            <section className="product-description">
                <h3>Product Details</h3>
                
                <p>Nootropic Brain & Focus Formula combines powerful amino acids enhancing neuroactivity with plant extracts altering neurochemistry to improve focus, learning, and intelligence. Keep your focus sharp and energy high with our natural Nootropic Brain and Focus Formula.</p>
                
                
            </section>
        </div>
    );
}

export default Home;
