import Scripts from 'next/script'
const Script = ({link}: any) => {
    return (
        <>
            <Scripts id="repairdeskwidget" src={link} defer={true}/>
        </>
    )
}
export default Script;