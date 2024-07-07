// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Video from './components/Video';
import Quiz from './components/Quiz';
import Reading from './components/Reading';
import Assignment from './components/Assignment';


function App() {
    const [completedSections, setCompletedSections] = useState([]);

    return (
        <BrowserRouter>
            <div className="flex">
                <Sidebar completedSections={completedSections} setCompletedSections={setCompletedSections} />
                <main className="flex-grow p-4">
                    <Routes>
                        <Route path="/courses/advanced-design-concepts/video" element={<Video completedSections={completedSections} setCompletedSections={setCompletedSections} />} />
                        <Route path="/courses/design-thinking-and-strategy/reading" element={<Reading completedSections={completedSections} setCompletedSections={setCompletedSections} />} />
                        <Route path="/courses/design-thinking-and-strategy/quiz" element={<Quiz completedSections={completedSections} setCompletedSections={setCompletedSections} />} />

                        <Route path="/courses/creative-problem-solving/assignment" element={<Assignment completedSections={completedSections} setCompletedSections={setCompletedSections} />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;