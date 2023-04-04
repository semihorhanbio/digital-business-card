import React from 'react'

export default function Main() {
    return (
        <main>
            <h1>Laura Smith</h1>
            <h3 className='job-title'>Frontend Developer</h3>
            <a className='website'>laurasmith.website</a>
            <div className='contact'>
                <button className='email-btn'><i class="fa-solid fa-envelope"></i>Email</button>
                <button className='linkedin-btn'><i class="fa-brands fa-linkedin fa-lg"></i>LinkedIn</button>
            </div>
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <br />
            <h2>Interests</h2>
            <p className='interest-para'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    )
}