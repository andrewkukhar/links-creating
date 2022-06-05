import { Link } from "react-router-dom"

export const LinksList = ({ links }) => {
    if (!links.length) {
        return <p className="center">Links have not yet</p>
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>N#</th>
                        <th>From</th>
                        <th>to</th>
                        <th>open</th>
                    </tr>
                </thead>

                <tbody>
                    {links.map((link, index) => {
                        return (
                            <tr key={link._id}>
                                <td>{index + 1}</td>
                                <td>{link.from}</td>
                                <td>{link.to}</td>
                                <td>
                                    <Link to={`/detail/${link._id}`}>Open</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}