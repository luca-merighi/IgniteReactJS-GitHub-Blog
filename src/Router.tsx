import {Routes, Route} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Post from './pages/Post'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
            </Route>
        </Routes>
    )
}