import styles from '../styles/Home.module.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';


export default function HeaderComponent() {

    const svgBackgroundVB = "1 1 415 235";
    const svgParticlesVB = "0 0 110 86";
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div>

            <div>





                <div className={styles.absoluteParticles}>
                    <svg viewBox={svgParticlesVB} overflow="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity=".75" fill-rule="evenodd" clip-rule="evenodd" d="M45.004 65.104c7.787 0 14.1-6.313 14.1-14.1s-6.313-14.1-14.1-14.1-14.1 6.313-14.1 14.1 6.313 14.1 14.1 14.1zm0-3.358c5.933 0 10.742-4.81 10.742-10.743 0-5.933-4.81-10.743-10.742-10.743-5.934 0-10.743 4.81-10.743 10.743 0 5.933 4.81 10.743 10.742 10.743z" fill="#fff" />
                        <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M82.804 76.46c6.272 0 11.356-5.085 11.356-11.356 0-6.273-5.084-11.357-11.356-11.357s-11.357 5.084-11.357 11.356S76.532 76.46 82.804 76.46zm0-2.704a8.653 8.653 0 100-17.305 8.653 8.653 0 000 17.305z" fill="#fff" />
                        <path opacity=".75" fill-rule="evenodd" clip-rule="evenodd" d="M90.32 38.438c10.424 0 18.874-8.45 18.874-18.874 0-10.423-8.45-18.873-18.873-18.873-10.424 0-18.874 8.45-18.874 18.873 0 10.424 8.45 18.874 18.874 18.874zm.001-4.493c7.942 0 14.38-6.438 14.38-14.38 0-7.942-6.438-14.38-14.38-14.38-7.941 0-14.38 6.438-14.38 14.38 0 7.942 6.439 14.38 14.38 14.38z" fill="#fff" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.204 76.46a6.399 6.399 0 100-12.798 6.399 6.399 0 000 12.798zm0-1.524a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75z" fill="#fff" fill-opacity=".5" />
                        <g opacity=".65" stroke="#fff" stroke-width="3" stroke-linecap="round">
                            <path d="M7.459 43.996l8.683 5.844M14.723 42.576l-5.62 8.35" />
                        </g>
                        <path opacity=".35" d="M29.308 79.985l1.885 5.263m1.689-3.574l-5.354 1.918" stroke="#fff" stroke-linecap="round" />
                        <path opacity=".5" d="M63.791 26.098l-3.953 3.953m3.953 0l-4.021-4.02" stroke="#fff" stroke-linecap="round" />
                    </svg>
                </div>
                <svg viewBox={svgBackgroundVB} fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M.5 11.21h417.727v268.049c.05 6.086 0 9.95 0 9.95v-9.95c-.208-25.471-2.162-89.861-16.818-72.738-15.39 17.981-19.18-14.215-38.431-21.421-13.913-5.208-13.038-10.116-24.847-20.338-15.871-13.738-60.58-6.389-65.334-14.725-9.386-16.459-37.192-21.473-37.192-21.473H18.076C2.468 128.564.666 159.118.5 169.383v3.317s-.033-1.245 0-3.317V11.209z" fill="url(#paint0_linear)" />
                    <path d="M.5 11.21h417.727v268.049c.05 6.086 0 9.95 0 9.95v-9.95c-.208-25.471-2.162-89.861-16.818-72.738-15.39 17.981-19.18-14.215-38.431-21.421-13.913-5.208-13.038-10.116-24.847-20.338-15.871-13.738-60.58-6.389-65.334-14.725-9.386-16.459-37.192-21.473-37.192-21.473H18.076C2.468 128.564.666 159.118.5 169.383v3.317s-.033-1.245 0-3.317V11.209z" fill="url(#paint1_linear)" />
                    <path d="M.25.21h417.743v279.62c.049 6.349 0 10.379 0 10.379V279.83c-.208-26.571-2.151-93.74-16.728-75.878-15.308 18.757-19.078-14.829-38.225-22.346-13.838-5.433-12.968-10.552-24.714-21.216-15.785-14.331-58.384-.391-63.112-9.086-9.336-17.17-58.525-13.736-58.525-13.736H18.909C.25 137.568.25 168.671.25 168.671V.209z" fill="url(#paint2_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="49.456" y1="3.894" x2="271.943" y2="168.102" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#242424" />
                            <stop offset=".922" stop-color="#3E70DF" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="208.239" y1="11.209" x2="208.239" y2="289.209" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff" />
                            <stop offset="1" stop-color="#fff" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="51.203" y1="-7.421" x2="279.822" y2="153.462" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#242424" />
                            <stop offset=".922" stop-color="#3E70DF" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>

            <span>{`(min-width:600px) matches: ${matches}`}</span>
        </div>
    )
}