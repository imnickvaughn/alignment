import styles from '../styles/Home.module.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';


export default function HeaderComponent() {

    const svgBackgroundVB = "1 1 415 235";
    const svgParticlesVB = "0 0 110 86";
    const svgDnaVB = "0 0 110 86";
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div>

            <div>

                <div className={styles.absoluteDna}>

                </div>

                <div className={styles.absoluteDna}>
                    <svg viewBox={svgDnaVB} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.175 11.97l-.503 9.5m4.595-9.664l-3.112 11.466m7.326-9.953L22.88 24.581m8.836-8.443l-6.898 9.419m8.95-6.216l-6.52 6.632M16.412 11.878l1.85 7.742m16.367 1.596l-4.322 4.274m7.708-3.178l.53 6.284m3.61-7.611l-2.085 9.469m6.037-9.561l-3.85 11.216m7.445-10.245l-4.747 11.611m7.653-9.661L48.065 34.09m6.737-7.935l-2.663 7.605m4.636-4.592l-.409 3.247m9.767-2.625l-5.508 5.89m8.39-5.683l-6.14 9.176m8.667-8.353l-5.546 10.995m7.648-9.584L69.725 43.55m4.636.74l1.185-10.415m1.375 1.455l2.016 9.071m2.297-3.368l4.177 2.758" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.175 11.97l-.503 9.5m4.595-9.664l-3.112 11.466m7.326-9.953L22.88 24.581m8.836-8.443l-6.898 9.419m8.95-6.216l-6.52 6.632M16.412 11.878l1.85 7.742m16.367 1.596l-4.322 4.274m7.708-3.178l.53 6.284m3.61-7.611l-2.085 9.469m6.037-9.561l-3.85 11.216m7.445-10.245l-4.747 11.611m7.653-9.661L48.065 34.09m6.737-7.935l-2.663 7.605m4.636-4.592l-.409 3.247m9.767-2.625l-5.508 5.89m8.39-5.683l-6.14 9.176m8.667-8.353l-5.546 10.995m7.648-9.584L69.725 43.55m4.636.74l1.185-10.415m1.375 1.455l2.016 9.071m2.297-3.368l4.177 2.758" stroke="url(#dna0Linear)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.175 11.97l-.503 9.5m4.595-9.664l-3.112 11.466m7.326-9.953L22.88 24.581m8.836-8.443l-6.898 9.419m8.95-6.216l-6.52 6.632M16.412 11.878l1.85 7.742m16.367 1.596l-4.322 4.274m7.708-3.178l.53 6.284m3.61-7.611l-2.085 9.469m6.037-9.561l-3.85 11.216m7.445-10.245l-4.747 11.611m7.653-9.661L48.065 34.09m6.737-7.935l-2.663 7.605m4.636-4.592l-.409 3.247m9.767-2.625l-5.508 5.89m8.39-5.683l-6.14 9.176m8.667-8.353l-5.546 10.995m7.648-9.584L69.725 43.55m4.636.74l1.185-10.415m1.375 1.455l2.016 9.071m2.297-3.368l4.177 2.758" stroke="url(#dna1Linear)" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.387 15.563s14.126-5.973 22.665-3.307c10.373 3.24 8.161 16.943 18.234 21.022 10.007 4.052 17.988-7.318 27.548-2.303 7.759 4.068 13.347 18.03 13.347 18.03M14.222 11.063s3.24 9.855 8.296 13.315c8.306 5.684 16.004-6.186 25.586-3.106 11.156 3.586 9.502 17.822 20.473 21.937 10.085 3.783 27.528-1.721 27.528-1.721" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.387 15.563s14.126-5.973 22.665-3.307c10.373 3.24 8.161 16.943 18.234 21.022 10.007 4.052 17.988-7.318 27.548-2.303 7.759 4.068 13.347 18.03 13.347 18.03M14.222 11.063s3.24 9.855 8.296 13.315c8.306 5.684 16.004-6.186 25.586-3.106 11.156 3.586 9.502 17.822 20.473 21.937 10.085 3.783 27.528-1.721 27.528-1.721" stroke="url(#dna2Linear)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <linearGradient id="dna0Linear" x1="70.703" y1="41.062" x2="66.426" y2="17.328" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF6B5C" />
                                <stop offset="1" stop-color="#FEBA61" />
                            </linearGradient>
                            <linearGradient id="dna1Linear" x1="52.83" y1="23.143" x2="47.972" y2="35.024" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#fff" />
                                <stop offset="1" stop-color="#fff" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="dna2Linear" x1="78.537" y1="38.636" x2="33.994" y2="24.353" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF6B5C" />
                                <stop offset="1" stop-color="#FEBA61" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.absoluteParticles}>
                    <svg viewBox={svgParticlesVB} fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <path d="M.5 11.21h417.727v268.049c.05 6.086 0 9.95 0 9.95v-9.95c-.208-25.471-2.162-89.861-16.818-72.738-15.39 17.981-19.18-14.215-38.431-21.421-13.913-5.208-13.038-10.116-24.847-20.338-15.871-13.738-60.58-6.389-65.334-14.725-9.386-16.459-37.192-21.473-37.192-21.473H18.076C2.468 128.564.666 159.118.5 169.383v3.317s-.033-1.245 0-3.317V11.209z" fill="url(#background0Linear)" />
                    <path d="M.5 11.21h417.727v268.049c.05 6.086 0 9.95 0 9.95v-9.95c-.208-25.471-2.162-89.861-16.818-72.738-15.39 17.981-19.18-14.215-38.431-21.421-13.913-5.208-13.038-10.116-24.847-20.338-15.871-13.738-60.58-6.389-65.334-14.725-9.386-16.459-37.192-21.473-37.192-21.473H18.076C2.468 128.564.666 159.118.5 169.383v3.317s-.033-1.245 0-3.317V11.209z" fill="url(#background1Linear)" />
                    <path d="M.25.21h417.743v279.62c.049 6.349 0 10.379 0 10.379V279.83c-.208-26.571-2.151-93.74-16.728-75.878-15.308 18.757-19.078-14.829-38.225-22.346-13.838-5.433-12.968-10.552-24.714-21.216-15.785-14.331-58.384-.391-63.112-9.086-9.336-17.17-58.525-13.736-58.525-13.736H18.909C.25 137.568.25 168.671.25 168.671V.209z" fill="url(#background2Linear)" />
                    <defs>
                        <linearGradient id="background0Linear" x1="49.456" y1="3.894" x2="271.943" y2="168.102" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#242424" />
                            <stop offset=".922" stop-color="#3E70DF" />
                        </linearGradient>
                        <linearGradient id="background1Linear" x1="208.239" y1="11.209" x2="208.239" y2="289.209" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff" />
                            <stop offset="1" stop-color="#fff" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="background2Linear" x1="51.203" y1="-7.421" x2="279.822" y2="153.462" gradientUnits="userSpaceOnUse">
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