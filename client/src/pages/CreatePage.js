import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext.js"
import { useHttp } from "../hooks/http.hook.js"

export const CreatePage = () => {
    const history = useNavigate()
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', { from: link }, {
                    Authorization: `Bearer ${auth.token}`
                })
                history(`/detail/${data.link._id}`)
            } catch (e) { }
        }
    }
    return (
        <div className="row">
            <div
                className="col s8 offset-s2"
                style={{ paddingTop: '2rem' }}
            >
                <div className="input-field">
                    <input
                        placeholder="Enter Link"
                        id="link"
                        type="text"
                        className=""
                        value={link}
                        style={{ marginTop: 10 }}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Enter a Link</label>
                </div>
            </div>
        </div>
    )
}