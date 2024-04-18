import styles from './styles/index.module.scss';

const Formacion = props => {
    const lista = [
        {
            inicio: '02/2022',
            termino: null,
            carrera: 'Inteligencia Artificial y Machine Learning',
            escuela: 'Platzi Online',
        },
        {
            inicio: '02/2022',
            termino: '06/2022',
            carrera: 'Fronted a Profundidad con React.js',
            escuela: 'Platzi Online',
        },
        {
            inicio: '08/2021',
            termino: '02/2022',
            carrera: 'Desarrollo Backend con Python y Django',
            escuela: 'Platzi Online',
        },
        {
            inicio: '08/2019',
            termino: '04/2022',
            carrera: 'Ingenieria en Computación',
            escuela: 'Esime Culhuacan, CDMX',
        },
    ];

    return (
        <>
            <h2>
                Formacion
            </h2>
            <div className="flex flex-col w-full justify-around mt-2">
                {lista.map((l, index) => {
                    return (
                        <div key={index} className={`${styles.form_item} flex flex-col w-full items-start`}>
                            <div className='flex justify-between w-full items-center'>
                                <h3>
                                    {l.carrera}
                                </h3>
                                <p className=''>
                                    {l.inicio} - {l.termino || 'Actualidad'}
                                </p>
                            </div>
                            <div className={`${styles.categoria}`}>
                                <p>
                                    {l.escuela}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export { Formacion };