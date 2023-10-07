"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation";

import { deleteProject, fetchToken } from "@/lib/actions";

const ProjectActions = ({ projectId }: { projectId: string }) => {
    const router = useRouter();

    const [isDeleteting, setIsDeleting] = useState(false)

    const handleDeleteProject = async () => {
        setIsDeleting(true);

        const { token } = await fetchToken();

        try {
            await deleteProject(projectId, token);

            router.push('/');
        } catch (error) {
            console.log(error);
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <>
            <Link href={`/edit-project/${projectId}`} className="flexCenter edit-action_btn">
                <Image src="/pencile.svg" width={15} height={15} alt="edit" />
            </Link>

            <button type="button" className={`flexCenter delete-action_btn ${isDeleteting ? 'bg-gray' : 'bg-primary-purple'}`} onClick={handleDeleteProject}>
                <Image src="/trash.svg" width={15} height={15} alt="delete" />
            </button>
        </>
    )
}

export default ProjectActions