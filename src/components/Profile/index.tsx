import {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { relateiveDateFormatter } from '../../utils/formatter'
import { BlogContext } from '../../contexts/BlogContext'

import {FaChevronLeft, FaGithub, FaBuilding, FaUsers, FaCalendar, FaComment} from 'react-icons/fa'
import arrowUpRight from '/arrow-up-right.svg'
import styles from './styles.module.scss'

interface ProfileProps {
    layout: 'home' | 'post'
}

export default function Profile(props: ProfileProps) {
    const {githubUser, post} = useContext(BlogContext)
    const formattedDate = relateiveDateFormatter(post.created_at)
    
    return props.layout === 'home' ? (
        <section className={styles.profile}>
            <figure>
                <img src={githubUser.avatar_url} alt="Foto de Perfil" />
            </figure>
            
            <div className={styles.info}>
                <div className={styles.nameAndGitHubLink}>
                    <h1>
                        {githubUser.name}
                    </h1>
                    
                    <a href={githubUser.html_url} target="_blank">
                        GitHub
                        <img src={arrowUpRight} alt="Link para o GitHub" />
                    </a>
                </div>
                
                <p className={styles.description}>
                    {githubUser.bio}
                </p>
                
                <div className={styles.profileInfo}>
                    <div>
                        <FaGithub />
                        <span>
                            {githubUser.login}
                        </span>
                    </div>
                    
                    <div>
                        <FaBuilding />
                        <span>
                            {githubUser.company ?? 'Nenhuma'}
                        </span>
                    </div>
                    
                    <div>
                        <FaUsers />
                        <span>
                            {githubUser.followers} {githubUser.followers > 2 ? 'seguidores' : 'seguidor'}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <section className={styles.post}>
            <div className={styles.links}>
                <NavLink to="/">
                    <FaChevronLeft />
                    Voltar
                </NavLink>
                
                <a href={post.html_url} target="_blank">
                    Ver no GitHub
                    <img src={arrowUpRight} alt="Link para o GitHub" />
                </a>
            </div>
            
            <h3>
                {post.title}
            </h3>
            
            <div className={styles.postInfo}>
                <div>
                    <FaGithub />
                    <span>
                        {githubUser.login}
                    </span>
                </div>
                
                <div>
                    <FaCalendar />
                    <span>
                        {formattedDate}
                    </span>
                </div>
                
                <div>
                    <FaComment />
                    <span>
                        {post.comments} {post.comments > 2 ? 'comentários' : 'comentário'}
                    </span>
                </div>
            </div>
        </section>
    )
}