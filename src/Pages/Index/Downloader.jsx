import { FileDownload } from '../../App/Icons';

import styles from './styles/index.module.scss';
import cv from '../../static/pdf/cv.pdf';

const Downloader = props => {
    const download = () => {
        // download file
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'erick_garcia_cv.pdf';
        link.click();
    }

    return (
        <div className={styles.downloader}>
            <FileDownload onClick={download} />
        </div>
    );
}

export { Downloader };