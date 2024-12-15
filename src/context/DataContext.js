import {useState, useEffect, createContext } from 'react'
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { format } from 'date-fns';
import api from "../api/posts"
import { useNavigate } from 'react-router-dom';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const { width } = useWindowSize();
    const { data, fetchErr, isLoading } = useAxiosFetch("http://localhost:3500/posts")

    useEffect(() => {
        setPosts(data);
    }, [data])
    useEffect(() => {
        const searchedPost = posts.filter((post) => (
            ((post.title).toLowerCase()).includes(searchText.toLowerCase()) ||
            ((post.body).toLowerCase()).includes(searchText.toLowerCase())
        ));
        setSearchResult(searchedPost.reverse())

    }, [posts, searchText])

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const newId = posts.length > 0 ? (Number(posts[posts.length - 1].id) + 1).toString() : 1;
        const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id: newId, title: postTitle, datetime: dateTime, body: postBody };
        try {
            const response = await api.post('/posts', newPost)
            const finalPosts = [...posts, response.data]
            setPosts(finalPosts)
            setPostTitle('')
            setPostBody('')
            navigate('/')
        }
        catch (err) {
            console.log(err.message)
        }
    }
    const HandleDelete = async (id) => {
        try {
            await api.delete(`/posts/${Number(id)}`)
            const deletePost = posts.filter(post => post.id !== id);
            setPosts(deletePost);
            navigate('/')
        }
        catch (err) {
            console.log(err.message)
        }

    }
    const HandleEdit = async (id) => {
        const newDate = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime: newDate, body: editBody }
        try {
            const response = await api.put(`/posts/${id}`, updatedPost)
            setPosts(posts.map((post) => (post.id) === id ? { ...response.data } : post));
            setEditTitle('')
            setEditBody('')
            navigate('/')

        } catch (e) {
            console.log(e.message)
        }
    }
    return(
    <DataContext.Provider 
    value = {{width,searchText,setSearchText,searchResult,fetchErr,isLoading,postTitle,postBody,setPostTitle,setPostBody,HandleSubmit,
        posts,HandleDelete,editTitle,editBody,HandleEdit,setEditTitle,setEditBody}}>
        {children}
    </DataContext.Provider>)
}

export default DataContext

