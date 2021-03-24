import React from 'react'
import '../App.css'
import './HeadSection.css'


function HeadSection() {
    return (
        <div className='Head-container'>
            <video src="/Video/Video-1.mp4" autoPlay loop muted />
            <div className="vinyl-wrapper">
                <div className="vinyl">
                    <div className="record-sleeve">
                        <h1 className="GroovIn">GroovIn</h1>
                        <p>The Musicia'n Social Media</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default HeadSection;