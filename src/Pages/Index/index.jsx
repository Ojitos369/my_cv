import styles from './styles/index.module.scss';

import { Contacto } from './Contacto';
import { Experiencia } from './Experiencia';
import { Formacion } from './Formacion';
import { Tecnologias } from './Tecnologias';
import { Links } from './Links';
import { Me } from './Me';
import { Pasatiempos } from './Pasatiempos';
import { Downloader } from './Downloader';

const Index = props => {

    return (
        <div className={`${styles.body}`}>
            <h1>
                Erick Israel García Rodríguez
            </h1>
            <Contacto />
            <hr className='w-11/12 my-4 border border-[var(--my-minor)]'/>
            <Experiencia />
            <Formacion />
            <div className={`flex flex-row w-full mt-12`}>
                <div className="w-1/2 px-5"><Tecnologias /></div>
                <div className="w-1/2 px-5"><Links /></div>
            </div>
            <div className={`flex flex-row w-full mt-6`}>
                <div className="w-1/2 px-5"><Me /></div>
                <div className="w-1/2 px-5"><Pasatiempos /></div>
            </div>
            <Downloader />
        </div>
    )
}

export { Index };

/* 

*/