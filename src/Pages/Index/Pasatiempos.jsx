import styles from './styles/index.module.scss';

const Pasatiempos = props => {
    // Viajar, Aprender, Escuchar Musica, Jugar
    const lista = [
        {name: 'Viajar'},
        {name: 'Aprender'},
        {name: 'Escuchar Musica'},
        {name: 'Jugar'},
    ];

    return (
        <div className='flex flex-col items-start'>
            <h2 className='w-full text-center'>
                Pasatiempos
            </h2>
            <div className="flex flex-col w-full justify-around mt-2">
                <ul className='ml-24'>
                    {lista.map((pas, index) => {
                        return (
                            <li key={index} className='mt-2'>
                                {pas.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export { Pasatiempos };