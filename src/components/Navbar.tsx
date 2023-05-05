import {MdAutoFixHigh, MdOutlineGpsFixed} from 'react-icons/md';

const Navbar = () => {
    return(
        <div className="flex flex-row-reverse bg-[#e7762e] h-fit w-full fixed top-0 py-3 justify-between">
            <div className="flex flex-row pr-12">
                <a href="/track-repair" className="w-fit flex flex-row items-center pl-4 text-white">
                    <MdOutlineGpsFixed className="fill-white mr-0.5 w-[24px] h-[24px]"/>
                    Track Repair
                </a>
                <a href="/" className="w-fit flex flex-row items-center pl-4 text-white">
                    <MdAutoFixHigh className="fill-white mr-0.5 w-[24px] h-[24px]"/>
                    Book a Repair
                </a>
            </div>
        </div>
    )
}

export default Navbar;