import Link from "next/link";
import Image from "next/image";

import { getUserProjects } from "@/lib/actions";
import { UserProfile, ProjectInterface } from "@/common.types";

type RelatedProjectsProps = {
    userId: string;
    projectId: string;
}

const RelatedProjects = async ({ userId, projectId }: RelatedProjectsProps) => {
    const result = await getUserProjects(userId) as { user?: UserProfile }

    const filteredProjects = result?.user?.projects?.edges?.filter(({ node }: { node: ProjectInterface }) => node?.id !== projectId)

    console.log(filteredProjects)

    if(filteredProjects?.length === 0) return null;

    return (
        <section className="flex flex-col mt-32 w-full">
            <div className="flexBetween">
                <p className="text-base font-bold">More by {result?.user?.name}</p>
                <Link href={`/profile/${result?.user?.id}`} className="text-primary-purple text-base">
                    View All
                </Link>
            </div>

            <div className="related_projects-grid">
                {filteredProjects?.map(({ node }: { node: ProjectInterface }) => (
                    <div className="flexCenter related_project-Card drop-shadow-card">
                        <Link href={`/project/${node?.id}`} className="flexCenter group relative w-full h-full">
                            <Image src={node?.image} width={414} height={314} className="w-full h-full object-cover rounded-2xl" alt="project image"/>

                            <div className="hidden group-hover:flex related_project-card_title">
                                <p className="w-full">{node?.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RelatedProjects