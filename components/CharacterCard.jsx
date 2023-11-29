

const CharacterCard = ({ character }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure>
                    <img src={character.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {character.name}
                        <div className="badge badge-secondary">{character.status}</div>
                    </h2>
                    <p>{character.origin.name}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{character.gender}</div>
                        <div className="badge badge-outline">{character.species}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard