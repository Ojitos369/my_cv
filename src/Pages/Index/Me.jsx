import styles from './styles/index.module.scss';

const Me = props => {
    const lista = [
    ];

    return (
        <div className='flex flex-col items-start'>
            <h2 className='w-full text-center'>
                Me
            </h2>
            <div className="flex flex-col w-full justify-around mt-2">
                <p>
                    Soy una persona curiosa a la que le encanta aprender y descubrir algo nuevo.
                    <br />
                    Me gusta la idea de poder crear y vivir el futuro.
                    <br />
                    Creo que las 7 C's son una buena forma de progresar.
                    <br />
                    1.- Contempla<br />
                    2.- Cuestiona<br />
                    3.- Conoce<br />
                    4.- Comprende<br />
                    5.- Controla<br />
                    6.- Crea<br />
                    7.- Comparte<br />
                    <br />
                </p>
            </div>
        </div>
    )
}

export { Me };