import Image from 'next/image'
import logo from '../../public/logo.png'
import Scripts from "@/components/Scripts";
import {Suspense} from "react";
import loadingbar from "../components/loading";

export default function Home() {
    const link = 'https://techys.repairdesk.co/widgets/repair_widget.js?token=' + process.env.TOKEN+'&width=100%&scrolling=no';
    return (
      <>
          <div className="flex flex-col items-center w-full mt-15 mb-3.5 justify-center">
              <Image src={logo} alt="logo" width={100} height={100} />
              <p className="font-bold text-2xl mb-4">Welcome to Techy&apos;s</p>
              <div className="flex flex-col bg-amber-200 rounded-md items-center justify-center font-medium p-4 text-amber-950 border-2 border-amber-600">
                  <p>This website is currently under development. Our sincere apologies for the inconvenience.</p>
                  <p>At the moment you can book a repair and can repair status only.</p>
                  <p>Rest of the functionality will be available soon.</p>
                  <p>Thank you for your patience.</p>
                  <p>Team Techy&apos;s</p>
              </div>

          </div>
            <Scripts link={link}/>
      </>
  )
}
