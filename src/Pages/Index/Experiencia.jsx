import styles from './styles/index.module.scss';

const Experiencia = props => {

    const experiencias = [
        {
            fecha: '2021 - Actual',
            puesto: 'Desarrollador Web',
            empresa: 'Circulo de Crédito',
            ubicacion: 'CDMX, México',
            descripcion: 'Desarrollo de aplicaciones web con tecnologías como React, Node.js, Express, MongoDB, entre otras.'
        },
        {
            fecha: '2020 - 2021',
            puesto: 'Desarrollador Web',
            empresa: 'Grupo CVA',
            ubicacion: 'CDMX, México',
            descripcion: 'Desarrollo de aplicaciones web con tecnologías como React, Node.js, Express, MongoDB, entre otras.'
        },
        {
            fecha: '2019 - 2020',
            puesto: 'Desarrollador Web',
            empresa: 'Grupo CVA',
            ubicacion: 'CDMX, México',
            descripcion: 'Desarrollo de aplicaciones web con tecnologías como React, Node.js, Express, MongoDB, entre otras.'
        }
    ];

    return (
        <>
            <h2>
                Experiencia
            </h2>

            <div className="flex flex-col w-full justify-around mt-5 mb-2">
                {experiencias.map((experiencia, index) => {
                    return (
                        <div key={index} className="w-1/3 p-2">
                            <div className={`${styles.experiencia}`}>
                                <div className={`${styles.fecha}`}>
                                    {experiencia.fecha}
                                </div>
                                <div className={`${styles.puesto}`}>
                                    {experiencia.puesto}
                                </div>
                                <div className={`${styles.empresa}`}>
                                    {experiencia.empresa}
                                </div>
                                <div className={`${styles.ubicacion}`}>
                                    {experiencia.ubicacion}
                                </div>
                                <div className={`${styles.descripcion}`}>
                                    {experiencia.descripcion}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export { Experiencia };