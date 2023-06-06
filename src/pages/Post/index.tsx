import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {Prism as Syntax} from 'react-syntax-highlighter'
import { BlogContext } from '../../contexts/BlogContext'
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Profile from '../../components/Profile'

import styles from './styles.module.scss'

export default function Post() {
    const {getPostDetails, post} = useContext(BlogContext)
    
    const {id} = useParams()
    useEffect(() => {
        getPostDetails(id!)
    }, [])
    
    return (
        <React.Fragment>
            <Profile layout="post" />
            
            <div className={styles.postContent}>
                <ReactMarkdown 
                    children={post.body}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <Syntax
                              children={String(children).replace(/\n$/, "")}
                              style={dracula as any}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }} />
            </div>
        </React.Fragment>
    )
}