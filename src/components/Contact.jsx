import React from 'react'

export default function Contact({ source }) {
    return (
        <tr>
            <td>{source.nombre}</td>
            <td>{source.apellido}</td>
            <td>{source.telefono}</td>
        </tr>
    )
}
