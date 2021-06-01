<template>
    <div>
        <div>
            <back-to-top text="Back to top" visibleoffset="400"></back-to-top>
            <div class="container fade-in">
                <div class="content col-2">
                    <div>
                        <img src="..\..\assets\maynooth-furniture\Mobile-app-layout-transparent.png" alt="maynooth mobile app" />
                    </div>
                    <div class="col text-right">
                        <h1>Maynooth Furniture</h1>
                        <h2>Portfolio Project</h2>
                        <p>The brief for the project has been provided by the “User Experience Design Essentials” Udemy course by Daniel Walter Scott.</p>
                        <h2>Client</h2>
                        <p>Maynooth Furniture is a fictional new business selling affordable high-end design furniture.</p>
                        <h2>Primary Objectives</h2>
                        <p>To build an e-commerce website for people to browse &amp; purchase furniture for home delivery.</p>
                        <h2>Persona</h2>
                        <p>Katherine is a 50 year old executive. She has children at University. She’s both style &amp; price conscious. Katherine is updating
                             the furniture at the 4 bedroom family home. She loves to browse style guides online. She uses Pinterest to gather her design ideas.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container">
                <div class="content full-width">
                    <h2>Product requirements</h2>
                </div>
                <div class="content col-3">
                    <div class="col">
                        <h3>Homepage:</h3>
                        <ul>
                            <li>Logo (provided by client)</li>
                            <li>Nav – (Living Room, Bedroom, Kitchen &amp; Dining)</li>
                            <li>Contact</li>
                            <li>Search Box</li>
                            <li>Hero Slider</li>
                            <li>New in store</li>
                            <li>Inspiration Ideas</li>
                            <li>Clearance Deals</li>
                            <li>Footer</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Category Page e.g. Living Room:</h3>
                        <ul>
                            <li>Most popular</li>
                            <li>Full product listings</li>
                            <li>Inspiration Ideas</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Product Page e.g. 3 Seater Sofa:</h3>
                        <ul>
                            <li>Description</li>
                            <li>Full product listings</li>
                            <li>Inspiration Ideas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="container">
                <div class="content full-width">
                    <h2>Process</h2>
                    <p>I looked into various competitor websites such as Habitat, Ikea and Zara Home to get an idea of what worked well.
                        I also studied the layout of other successful ecommerce websites and apps such as Net-A-Porter, and ASOS.</p>
                    <p>I then developed a mood board, and created wire frames for the site.</p>
                </div>
            </div>
        </div>
        <div>
            <div class="container">
                <div class="content full-width">
                    <h2>Low Fidelity Wireframes</h2>
                    <p>I created the wireframes in Adobe XD as interactive prototypes to get a feel of the user journey throughout the site.</p>
                </div>
                <div class="content col-3">
                    <div class="col">
                        <h2>Home Page</h2>
                        <br />
                        <expandable-image class="image img-shadow" :src="require('../../assets/maynooth-furniture/Wireframe-homepage.jpg')" alt="home page lo fi wireframe" />
                    </div>
                    <div class="col">
                        <h2>Category Page</h2>
                        <br />
                        <expandable-image class="image img-shadow" :src="require('../../assets/maynooth-furniture/Wireframe-category-page.jpg')" alt="category lo fi wireframe" />
                    </div>
                    <div class="col">
                        <h2>Product Page</h2>
                        <br />
                        <expandable-image class="image img-shadow" :src="require('../../assets/maynooth-furniture/Wireframe-category-page.jpg')" alt="product lo fi wireframe" />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="container">
                <div class="content full-width">
                    <h2>High Fidelity Wireframes</h2>
                    <p>I decided to use the angle of the logo in a few elements of the design for continuity. There is a search bar in the header 
                        and footer, so that the user doesn’t need to scroll to the top again to search.</p>
                </div>
                <div class="content col-3">
                    <div class="col">
                        <h2>Home Page</h2>
                        <br />
                        <expandable-image class="image" :src="require('../../assets/maynooth-furniture/Homepage.png')" alt="home page hi fi wireframe" />
                    </div>
                    <div class="col">
                        <h2>Category Page</h2>
                        <br />
                        <expandable-image class="image" :src="require('../../assets/maynooth-furniture/Category-page-living-room.png')" alt="category page hi fi wireframe" />
                    </div>
                    <div class="col">
                        <h2>Product Page</h2>
                        <br />
                        <expandable-image class="image" :src="require('../../assets/maynooth-furniture/Product-page-living-room-sofa.png')" alt="product page hi fi wireframe" />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="container">
                <div class="content full-width">
                    <h2>Mobile App</h2>
                    <p>I designed the mobile app to have a simpler look for better functionality. For the “New in Store” section, a portion 
                    of the next item will be visible so that the user will intuitively swipe to the side to view the rest of the products.</p>
                </div>

                <div class="content col-3">
                    <div class="col">
                        <h2>Home Page</h2>
                        <br />
                        <expandable-image class="image" :src="require('../../assets/maynooth-furniture/Mobile-app-homepage.png')" alt="mobile app homepage" />
                    </div>
                    <div class="col">
                        <h2>Category Page</h2>
                        <br />
                        <expandable-image class="image" :src="require('../../assets/maynooth-furniture/Mobile-app-category-page-living-room.png')" alt="mobile app category page" />
                    </div>
                    <div class="col">
                        <h2>Product Page</h2>
                        <br />
                        <expandable-image class="image" :src="require('../../assets/maynooth-furniture/Mobile-app-living-room-product-page.png')" alt="mobile app product page" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container">
                <div class="content full-width">
                    <h2>User Flow Example</h2>
                    <expandable-image class="image" :src="require('../../assets/maynooth-furniture/Maynooth-Purchace-Product-User-Flow.png')" alt="purchase product user flow example" />
                </div>
            </div>
        </div>
        <div>
            <div class="container">
                <div class="content full-width">
                    <h2>Examples on Devices</h2>
                </div>

                <div class="content col-2">
                    <img src="..\..\assets\maynooth-furniture\Mobile-app-layout-transparent.png" alt="maynooth mobile app" />
                    <img src="..\..\assets\maynooth-furniture\hompage-on-laptop.jpg" alt="home page on laptop" class="img-shadow" />
                </div>
            </div>
        </div>
        <div>
            <div class="button-container">
                <router-link to="/" class="btn-link">
                    <button class="blob-btn get-in-touch">
                        VIEW MORE PROJECTS
                        <span class="blob-btn__inner">
                            <span class="blob-btn__blobs">
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                            </span>
                        </span>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ExpandableImage from '../ExpandableImage'
import BackToTop from 'vue-backtotop'

    export default {
        name: 'MaynoothFurniture',
        components: { 
            ExpandableImage,
            BackToTop,
            }
    }
</script>
