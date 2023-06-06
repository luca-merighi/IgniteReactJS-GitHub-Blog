import {NavLink} from 'react-router-dom'
import { Posts } from '../../contexts/BlogContext'
import { relateiveDateFormatter } from '../../utils/formatter'

import styles from './styles.module.scss'

interface PostCardProps {
    post: Posts
} 

export default function PostCard({post}: PostCardProps) {
    const formattedDate = relateiveDateFormatter(post.created_at)
    
    return (
        <li className={styles.post}>
            <NavLink to={`/post/${post.number}`}>
                <header>
                    <h3>
                        {post.title}
                    </h3>
                    
                    <time>
                        {formattedDate}
                    </time>
                </header>
                
                <p className={styles.description}>
                    {post.body}
                </p>
            </NavLink>
        </li>
    )
}