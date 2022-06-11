import React from 'react';
import './style.css'

export default function index() {
  return (
    <div>
        <header>Ebi The Navigator</header>
        <main className="grid-container">
            <article className='featured'>
                <div style={{height:'200px', width: '300px', background:'gold'}} />
                <div>
                    <h2>Balloon Magic</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nihil aspernatur eius voluptate neque nisi repellendus a deserunt eaque tempora.</p>

                </div>
            </article>
            <article>
                <div style={{height:'200px', width: '300px', background:'orange'}} />
                    <div>
                    <h3>Balloon Magic</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eveniet officia iusto ullam earum in modi quidem. Ad, officiis quisquam.</p>
                </div>
            </article>

            <article>
                <div style={{height:'200px', width: '300px', background:'beige'}} />
                    <div>
                    <h3>The Clear Blue</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore eveniet officia iusto ullam earum in modi quidem. Ad, officiis quisquam.</p>
                </div>
            </article>
        </main>
    </div>
  )
}
