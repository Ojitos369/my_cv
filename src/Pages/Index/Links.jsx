import { Ojitario, Linkedin, Github, Platzi, Globe } from '../../App/Icons';
import styles from './styles/index.module.scss';


const Links = props => {
    const lista = [
        {
            nombre: 'Sitio web',
            url: 'https://me.ojitos369.com/',
            icon: Ojitario,
        },
        {
            nombre: 'Linkedin',
            url: 'https://www.linkedin.com/in/ojitos369',
            icon: Linkedin,
        },
        {
            nombre: 'Github',
            url: 'https://github.com/Ojitos369/',
            icon: Github,
        },
        {
            nombre: 'Platzi',
            url: 'https://platzi.com/p/Ojitos369/',
            icon: Platzi,
        },
        {
            nombre: 'Blog',
            url: 'https://blog.ojitos369.com/',
            icon: Globe,
        }
    ];

    return (
        <div className='flex flex-col items-start'>
            <h2 className='w-full text-center'>
                Links
            </h2>
            <div className="flex flex-col w-full justify-around mt-2">
                {lista.map((link, index) => {
                    return (
                        <a key={index} href={link.url} target='_blank' rel='noreferrer' className={`${styles.link_item} flex flex-row items-center w-full`}>
                            <p className='ml-24 mt-4 w-full flex justify-start'>
                                <span className='text-icon'>
                                    <link.icon/>
                                </span>
                                <span className={`${styles.name}`}>
                                    {link.nombre}
                                </span>
                            </p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export { Links };