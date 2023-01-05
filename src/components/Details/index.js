import React, { useEffect, useState } from 'react'

function Details({ info }) {
    const [details, setDetails] = useState();
    useEffect(() => {
        if (info) {
            const id = info.userId
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
                .then((response) => response.json())
                .then((result) => {
                    setDetails(result)
                })
                .catch((e) => console.log(e));
        }
    }, [info.userId]);
    return (
        <>
            {details && (
                <div key={details.id} className="details">
                    <div className="details-avatar">
                        <img src={details.avatar && details.avatar} alt='avatar' />
                    </div>
                    <div className="details-name">{details.name}</div>
                    <div className="details-city">City: {details.details.city}</div>
                    <div className="details-company">Company: {details.details.company}</div>
                    <div className="details-position">Position: {details.details.position}</div>
                </div>
            )}
        </>
    )
}

export default Details;