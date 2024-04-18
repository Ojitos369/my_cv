import styles from './styles/index.module.scss';
import { 
    Bash, BootstrapIcon, CirclesConnect, Cpp, Css, Django, Docker, 
    GCP, GithubC, Html, JavaScript, MariaDB, MySQL, 
    Php, Postgres, Python, ReactIcon, Tailwind, 
    Linux, Git, Aws, Angular, Firebase,
} from '../../App/Icons';

const Tecnologias = props => {
    const lista = [
        {name: 'Python',icon: Python},
        {name: 'Django',icon: Django},
        {name: 'JavaScript',icon: JavaScript},
        {name: 'React',icon: ReactIcon},
        {name: 'HTML',icon: Html},
        {name: 'CSS/SCSS',icon: Css},
        {name: 'Tailwind',icon: Tailwind},
        {name: 'Bootstrap',icon: BootstrapIcon},
        {name: 'PHP',icon: Php},
        {name: 'MySQL',icon: MySQL},
        {name: 'Postgres',icon: Postgres},
        {name: 'MariaDB',icon: MariaDB},
        {name: 'Google Cloud',icon: GCP},
        {name: 'Amazon Web Services',icon: Aws},
        {name: 'Docker',icon: Docker},
        {name: 'Bash',icon: Bash},
        {name: 'C++',icon: Cpp},
        {name: 'Sockets',icon: CirclesConnect},
        {name: 'Github',icon: GithubC},
        {name: 'Git',icon: Git},
        {name: 'Linux',icon: Linux},
        {name: 'Angular',icon: Angular},
        {name: 'Firebase',icon: Firebase},
    ];

    return (
        <div className='flex flex-col items-start'>
            <h2 className='w-full text-center'>
                Tecnologias
            </h2>
            <div className="flex flex-wrap w-full justify-start mt-2">
                {lista.map((tec, index) => {
                    return (
                        <div key={index} className={`${styles.tec_item} flex flex-row items-center w-auto`}>
                            <p>
                                <span className='text-icon'>
                                    <tec.icon/>
                                </span>
                                <span className={`${styles.name}`}>
                                    {tec.name}
                                </span>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { Tecnologias };