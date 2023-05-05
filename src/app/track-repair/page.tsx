import Scripts from "@/components/Scripts";

export default function Page() {
    const link = 'https://techys.repairdesk.co/widgets/includenew.js?token=' + process.env.TOKEN + '&height=100%&width=100%&scrolling=yes';
    return (
        <>
            <Scripts link={link}/>
        </>
    )
}
