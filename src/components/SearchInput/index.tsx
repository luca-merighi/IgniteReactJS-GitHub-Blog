import * as zod from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

import {FaSearch} from 'react-icons/fa'
import styles from './styles.module.scss'

const searchFormSchema = zod.object({
    query: zod.string()
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

export default function SearchInput() {
    const {register, handleSubmit} = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    })
    const {posts, getProfilePosts} = useContext(BlogContext)
    
    async function handleSearchPosts(data: SearchFormInput) {
        await getProfilePosts(data.query)
    }
    
    return (
        <div className={styles.searchInput}>
            <div className={styles.publications}>
                <h3>
                    Publicações
                </h3>
                
                <span>
                    {posts.length} publicações
                </span>
            </div>
            
            <form 
            onSubmit={handleSubmit(handleSearchPosts)}
            className={styles.inputContainer}>
                <input 
                type="text"
                placeholder="Buscar conteúdo"
                {...register('query')} />
                
                <button 
                type="submit">
                    <FaSearch title="Pesquisar por publicação" />
                </button>
            </form>
        </div>
    ) 
}