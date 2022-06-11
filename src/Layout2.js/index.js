import React from 'react';
import './style.css'
import image from './img/1.png'

export default function index() {
  return (
    <div>
        <header>Ebi The Navigator</header>
        <main className="grid-container">
            <article className="featured">
                <img src={image} alt="interesting1" />
                {/* <div style={{height:'200px', width: '300px', background:'gold'}} /> */}
                <div>
                    <h2>Balloon Magic</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nihil aspernatur eius voluptate neque nisi repellendus a deserunt eaque tempora.</p>

                </div>
            </article>
            <article>
            <img src={image} alt="interesting2" />

                {/* <div style={{height:'200px', width: '300px', background:'orange'}} /> */}
                    <div>
                    <h3>Balloon Magic</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eveniet officia iusto ullam earum in modi quidem. Ad, officiis quisquam.</p>
                </div>
            </article>

            <article>
            <img src={image} alt="interesting3" />

                {/* <div style={{height:'200px', width: '300px', background:'limegreen'}} /> */}
                    <div>
                    <h3>Backpacking Across</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eveniet officia iusto ullam earum in modi quidem. Ad, officiis quisquam.</p>
                </div>
            </article>
            <article>
            <img src={image} alt="interesting4" />

                {/* <div style={{height:'200px', width: '300px', background:'beige'}} /> */}
                    <div>
                    <h3>The Clear Blue</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eveniet officia iusto ullam earum in modi quidem. Ad, officiis quisquam.</p>
                </div>
            </article>
        </main>
    </div>
  )
}
