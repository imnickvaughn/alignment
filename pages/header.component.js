import styles from '../styles/Home.module.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';


export default function HeaderComponent() {

    const matches1440 = useMediaQuery('(min-width:1440px)');
    const matches1024 = useMediaQuery('(min-width:1024px)');
    const matches768 = useMediaQuery('(min-width:768px)');

    const displayHeader = () => {
        if (matches1440) {
            return <img className={styles.backgroundImage1440} src="header1440.svg#svgView(viewBox(0, 0, 1440, 479))" alt="Header Image" />
        }
        else if (matches1024) {
            return <img className={styles.backgroundImage} src="header1024.svg#svgView(viewBox(0, 0, 1024, 479))" alt="Header Image" />
        }
        else if (matches768) {
            return <img className={styles.backgroundImage} src="header768.svg#svgView(viewBox(0, 10, 765, 338))" alt="Header Image" />
        }
        else {
            return <img className={styles.backgroundImage} src="header414.svg#svgView(viewBox(2, 10, 410,220))" alt="Header Image" />
        }
    }


    return (
        <div>
            <div >
                {displayHeader()}
            </div>
            <div>

            </div>
            <span>{`(min-width:1024px) matches: ${matches1024}`}</span>
            <span>{`(min-width:768px) matches: ${matches768}`}</span>
        </div>
    )
}