import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProject } from '../redux/projectSlice'

export default function ProjectForm() {
    const dispatch = useDispatch()

    const [image,setImage] = useState("")
    const [githubLink,setGithubLink] = useState("")
    const [liveLink,setLiveLink] = useState("")
    
    const submitProject = () => {
        dispatch(addProject({image, githubLink, liveLink}))
    }
  return (
    <div>
        <input
            type='text'
            value={image}
            placeholder='Image URL'
            onChange={(e)=>setImage(e.target.value)}
        />
        <input
            type='text'
            value={githubLink}
            placeholder='Input Github Repo Link'
            onChange={(e)=>setGithubLink(e.target.value)}
        />
        <input
            type='text'
            value={liveLink}
            placeholder='Input Live Link'
            onChange={(e)=>setLiveLink(e.target.value)}
        />
        <button
        onClick={submitProject}
        >Done</button>
        {/* <button onClick={removeExp}>Remove</button> */}
    </div>
  )
}