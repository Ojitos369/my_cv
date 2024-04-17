import styles from './styles/index.module.scss';

import { Contacto } from './Contacto';
import { Experiencia } from './Experiencia';

const Index = props => {

    return (
        <div className={`${styles.body}`}>
            <h1>
                Erick Israel García Rodríguez
            </h1>
            <Contacto />
            <hr className='w-11/12 my-4 border border-[var(--my-minor)]'/>
            <Experiencia />
        </div>
    )
}

export { Index };
