import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import HomePage from '../Home/Home'
import ProjectsPage from '../Projects/Projects'
import AboutPage from '../About/About'
import ContactPage from '../Contact/Contact'

export default function App() {
    async function openResume() {
        window.open(resume, '_blank')
    }

    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/aboutme' element={<AboutPage />} />
            <Route path='/resume' openResume={openResume}/>
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/*' element={<Navigate to='/home' />} />
        </Routes>
)
}

