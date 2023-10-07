"use client";

import { categoryFilters } from "@/constants";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const category = searchParams.get('category');

    const handleTags = (filter: string) => {
        router.push(`${pathName}?category=${filter}`);
    }

    return (
        <div className="flexBetween w-full gap-5 flex-wrap">
            <ul className="flex gap-2 overflow-auto">
                {categoryFilters.map((filter) => (
                    <button key={filter} type="button" onClick={() => handleTags(filter)} className={`${category === filter ? 'bg-light-white-300 font-medium' : 'font-normal'} px-4 py-3 rounded-lg capitalize whitespace-nowrap`}> 
                        {filter}
                    </button>
                ))}
            </ul>
        </div>
    )
}

export default Categories