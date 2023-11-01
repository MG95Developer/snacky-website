import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link'


const Featured = () =>
{
    return (
        <div className="grid grid-cols-1 md:grid-cols-10 md:gap-2 py-8">
            <div className="md:col-span-6 text-center py-5">
                <span className="font-bold text-1xl text-[#555]">SNACKY'S FEATURED PRODUCT</span>
                <img className="w-[70%] ml-12 md:mx-auto py-8" src="https://www.jiminis.com/wp-content/uploads/2020/12/Jiminis_logo-1.svg" alt="jimini's logotype" />
                <h1 className='text-[#555] text-2xl font-bold lg:text-3xl text-left ml-12 pt-8 md:text-center md:ml-0'>Grasshoppers Dessert</h1>
                <p className="uppercase py-3 font-bold text-1xl text-left ml-12 md:text-center md:ml-0">cocoa</p>
                <p className="py-3 font-bold text-2xl text-left ml-12 md:text-center md:ml-0">€6.95</p>
                <Link href="https://www.jiminis.com/shop/lang/en/insect-snacks/247-edible-grasshoppers-cocoa-3770004159949.html" target="_blank">
                    <button className="font-bold pt-4 rounded inline-flex items-center">
                        <span className="mr-3 text-2xl text-[var(--primary-color)] uppercase">order now</span>
                        <BsFillArrowRightCircleFill className="text-3xl" />
                    </button>
                </Link>
            </div>

            <div className="md:col-span-4 text-center py-5">
                <div className="flex items-center justify-center">
                    <img className="w-full" src="https://cdn3.jiminis.com/shop/lang/1201-large_default/edible-grasshoppers-cocoa.jpg" alt="edible grasshoppers and cocoa snack" />
                </div>
            </div>
        </div>
    )
}

export default Featured