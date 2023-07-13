import React, { useState } from 'react'
import Guide from '../Video/Guide'
import HelpVideo from '../Video/HelpVideo'
import { Link } from 'react-router-dom'
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp'


const WorkingVideo = () => {
    return (
        <div>
            <Guide />
            <HelpVideo />
        </div>
    )
}

export default WorkingVideo