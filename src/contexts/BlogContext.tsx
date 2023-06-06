import {ReactNode, createContext, useEffect, useState} from 'react'
import { api } from '../services/api'

interface GitHubUser {
    login: string,
    name: string,
    bio: string,
    avatar_url: string,
    company: string
    html_url: string,
    followers: number
}

export interface Posts {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
        login: string;
    };
}

interface BlogContextData {
    githubUser: GitHubUser,
    posts: Posts[],
    post: Posts,
    getProfilePosts: (query: string) => void,
    getPostDetails: (id: string) => void
}

interface BlogContextProviderProps {
    children: ReactNode
}

export const BlogContext = createContext<BlogContextData>({} as BlogContextData)

export default function BlogContextProvider(props: BlogContextProviderProps) {
    const [githubUser, setGithubUser] = useState<GitHubUser>({} as GitHubUser)
    const [posts, setPosts] = useState<Posts[]>([])
    const [post, setPost] = useState<Posts>({} as Posts)
    
    const username = 'luca-merighi'
    const repo = 'IgniteReactJS-GitHub-Blog'
    
    async function getProfileData() {
        const response = await api.get(`users/${username}`)
        setGithubUser(response.data)
    }
    
    async function getProfilePosts(query: string = "") { 
        
        const response = await api.get(
            `/search/issues?q=${query}%20repo:${username}/${repo}`
          );
        setPosts(response.data.items)
    }
    
    async function getPostDetails(id: string) {
        const response = await api.get(`repos/${username}/${repo}/issues/${id}`)
        setPost(response.data)
    }
    
    useEffect(() => {
        
        getProfileData()
        getProfilePosts()
    }, [])
    
    return (
        <BlogContext.Provider value={{
            githubUser,
            posts,
            post,
            getProfilePosts,
            getPostDetails
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}