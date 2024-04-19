import { useEffect } from 'react';

import { store } from './store';
import { Provider } from "react-redux";
import { useStates } from './useStates';

import { cambiarThema } from './core/helper';
import { Theme } from '../Components/Theme';

import { Index } from '../Pages/Index';
import { Test } from '../Pages/Test';
import { Route, Routes, Navigate } from 'react-router-dom';


const BgTheme = () => {
    const { ls } = useStates();
    return (
        <>
            <div className={`wipeInDown full-page-container bg-my-${ls.theme}`}></div>
            {/* <Theme /> */}
        </>
    )
}

function AppUI() {
    const { ls } = useStates();

    useEffect(() => {
        cambiarThema(ls?.theme);
    }, [ls?.theme]);

    return (
        <div className={`text-[var(--my-minor)]`}>
            <BgTheme />
            <Routes>
                {/* -----------   Index   ----------- */}
                <Route
                    path="/"
                    element={
                        <Index />
                    }
                />
                {/* -----------   /Index   ----------- */}
                {/* -----------   Test   ----------- */}
                <Route
                    path="test"
                    element={
                        <Test />
                    }
                />
                {/* -----------   /Test   ----------- */}

                {/* -----------   404   ----------- */}
                <Route path="*/" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
                {/* -----------   /404   ----------- */}

            </Routes>
        </div>
    );
}

function App(props) {
    return (
        <Provider store={store}>
            <AppUI />
        </Provider>
    );
}

export default App;


/* 

style="opacity:.113636;fill:#555753;stroke:#000;strokeWidth:12.849258;strokeLinecap:round;strokeLinejoin:round"
style={{opacity:0.113636,fill:"#555753",stroke:"#000",strokeWidth:12.849258,strokeLinecap:"round",strokeLinejoin:"round"}}

style="opacity:.113636;fill:#888a85;stroke:#000;strokeWidth:12.849257;strokeLinecap:round;strokeLinejoin:round"
style={{opacity:0.113636,fill:"#888a85",stroke:"#000",strokeWidth:12.849257,strokeLinecap:"round",strokeLinejoin:"round"}}

style="opacity:.113636;fill:#555753;stroke:#000;strokeWidth:12.849257;strokeLinecap:round;strokeLinejoin:round"
style={{opacity:0.113636,fill:"#555753",stroke:"#000",strokeWidth:12.849257,strokeLinecap:"round",strokeLinejoin:"round"}}

style="opacity:.113636;fill:#555753;stroke:#000;strokeWidth:12.849258;strokeLinecap:round;strokeLinejoin:round"
style={{opacity:0.113636,fill:"#555753",stroke:"#000",strokeWidth:12.849258,strokeLinecap:"round",strokeLinejoin:"round"}}

style="opacity:.113636;fill:#555753;stroke:#000;strokeWidth:12.849255;strokeLinecap:round;strokeLinejoin:round"
style={{opacity:0.113636,fill:"#555753",stroke:"#000",strokeWidth:12.849255,strokeLinecap:"round",strokeLinejoin:"round"}}

style="opacity:.113636;fill:#555753;stroke:#000;strokeWidth:12.849257;strokeLinecap:round;strokeLinejoin:round"
style={{opacity:0.113636,fill:"#555753",stroke:"#000",strokeWidth:12.849257,strokeLinecap:"round",strokeLinejoin:"round"}}

style="fillRule:evenodd;stroke:#4e8a06;strokeWidth:13.840491;strokeLinecap:round;strokeLinejoin:round;strokeMiterlimit:10;fill:url(#l)"
style={{fillRule:"evenodd",stroke:"#4e8a06",strokeWidth:13.840491,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,fill:"url(#l)"}}

style="opacity:.113636;fill:#555753;stroke:#000;strokeWidth:12.849252;strokeLinecap:round;strokeLinejoin:round"
style={{opacity:0.113636,fill:"#555753",stroke:"#000",strokeWidth:12.849252,strokeLinecap:"round",strokeLinejoin:"round"}}

style="opacity:.113636;fill:#555753;stroke:#000;strokeWidth:12.849255;strokeLinecap:round;strokeLinejoin:round"
style={{opacity:0.113636,fill:"#555753",stroke:"#000",strokeWidth:12.849255,strokeLinecap:"round",strokeLinejoin:"round"}}

*/