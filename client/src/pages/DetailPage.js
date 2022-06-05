import { useCallback } from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { LinkCard } from "../components/LinkCard.js"
import { Loader } from "../components/Loader.js"
import { AuthContext } from "../context/AuthContext.js"
import { useHttp } from "../hooks/http.hook.js"

export const DetailPage = () => {
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [link, setLink] = useState(null)
    const linkId = useParams().id

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
        } catch (e) { }
    }, [token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {!loading && link && <LinkCard link={link} />}
        </>
    )
}