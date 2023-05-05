'use client'
import Script from 'next/script'

const Scripts = ({link}: any) => {

    const link2 = 'https://techys.repairdesk.co/widgets/repair_widget.js?token=67388641edd1478dd511679744276&width=100%&scrolling=no';

    return (
        <>
            {/*<Script strategy="lazyOnload" async={true} id="repairdeskwidget" src='https://techys.repairdesk.co/widgets/repair_widget.js?token=67388641edd1478dd511679744276&width=100%&scrolling=no' onLoad={() => {
                console.log('Script has loaded');
            }}></Script>*/}
            <script async={false} id='repairdeskwidget' src={link}></script>
        </>
    )
}
export default Scripts;