import React, {useContext} from 'react'

import Profile from '../../components/Profile'
import SearchInput from '../../components/SearchInput'
import PostCard from '../../components/PostCard'

import styles from './styles.module.scss'
import { BlogContext } from '../../contexts/BlogContext'

export default function Home() {
    const {posts} = useContext(BlogContext)
    
    return (
        <React.Fragment>
            <Profile layout="home" />
            
            <SearchInput />
            
            <ul className={styles.postsList}>
                {posts.map(post => (
                    <PostCard key={post.number} post={post} />
                ))}
            </ul>
        </React.Fragment>
    )
}