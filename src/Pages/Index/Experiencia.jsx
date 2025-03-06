import styles from './styles/index.module.scss';

const Experiencia = props => {

    const experiencias = [
        {
            inicio: '04/2022',
            termino: null,
            // puesto: 'Software Developer',
            empresa: 'Edilar',
            actividades: [
                "Planificación, desarrollo, y mantenimiento de aplicativos web y scripts",
                "Creacion de Reportes y exportación a diferentes formatos (PDF/Excel/CSV)",
                "Implementación de pasarelas de pago (Conekta/OpenPay/PayPal/Mercado Pago)",
                "Planeacion de costos y tiempos de entrega (Fedex/Red Pack)",
                "Automatización de compra de paquetes, consulta y moduficacion del status de lineas telefonicas (Altan)",
                "Seguimiento de compras con analiticas (Google Analytics/Facebook Pixel)",
                "Lectura, Carga, Modificación de archivos en la nube (Google Buckes/FPT/SSH)",
                "Despliegue de aplicativos y scripts implementando supervisors para mantener los servicios y crons encendidos por medio de docker (Docker/GCP/SSH/Linux)",
            ],
        },
        {
            inicio: '08/2020',
            termino: null,
            // puesto: 'Software Developer',
            empresa: 'Freelancer',
            proyectos: [
                "Sistema de gestion empresarial",
                "Test de psicometria",
                "Encuesta de satisfaccion",
                "Complemento de juego de mesa",
                "Catalogo de productos para compra",
            ],
        },
        {
            inicio: '01/2019',
            termino: '07/2019',
            // puesto: 'Software Developer',
            empresa: 'ILSP',
            proyectos: [
                "Simplificacion de procesos y sincronizacion de datos de forma automatica",
            ],
        },
    ];

    return (
        <>
            <h2>
                Experiencia
            </h2>
            <div className="flex flex-col w-full justify-around mt-2">
                {experiencias.map((exp, index) => {
                    return (
                        <div key={index} className={`${styles.exp_item} flex flex-col w-full items-start`}>
                            <div className='flex justify-between w-full items-center'>
                                <h3>
                                    {exp.empresa}
                                </h3>
                                <p className='ml-16'>
                                    {exp.inicio} - {exp.termino || 'Actualidad'}
                                </p>
                            </div>
                            {exp.actividades && 
                            <div className={`${styles.categoria}`}>
                                <p>
                                    Actividades
                                </p>
                                <ul>
                                    {exp.actividades.map((act, index) => {
                                        return (
                                            <li key={index} className={`${styles.actividad}`}>
                                                {act}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>}
                            {exp.proyectos &&
                            <div className={`${styles.categoria}`}>
                                <p>
                                    Proyectos
                                </p>
                                <ul>
                                    {exp.proyectos.map((pro, index) => {
                                        return (
                                            <li key={index}>
                                                {pro}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>}
                            <hr className='w-full my-4 border border-[var(--my-minor)]'/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export { Experiencia };