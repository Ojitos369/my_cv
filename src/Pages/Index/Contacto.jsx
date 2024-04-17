import { Envelope, Phone, Location } from "../../App/Icons";
import styles from './styles/index.module.scss';

const Contacto = props => {
    const contactos = [
        {
            icon: Envelope,
            dato: 'ojitos369@gmail.com',
            link: 'mailto:ojitos369@gmail.com'
        },
        {
            icon: Phone,
            dato: '+52 55 25 60 50 25',
            link: 'tel:+525525605025'
        },
        {
            icon: Location,
            dato: 'CDMX, México',
            link: 'https://maps.app.goo.gl/7AxFjKr9PzSugaCB8'
        }
    ];

    return (
        <div className="flex w-full flex-wrap justify-around mt-5 mb-2">
            {contactos.map((contacto, index) => {
                const Icon = contacto.icon;
                return (
                    <a key={index} href={contacto.link} target="_blank" rel="noreferrer" className="w-1/3 p-2">
                        <span className={`${styles.icon_contact}`}>
                            <Icon />
                        </span>
                        <span className={`${styles.text_contact}`}>{contacto.dato}</span>
                    </a>
                )
            })}
        </div>
    )
}

export { Contacto };