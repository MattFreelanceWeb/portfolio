import srcProject1 from '@/assets/projets/portfolio(1).png'

interface Project {
    title:string,
    content:string[],
    technos:string[],
    src:unknown,
    alt:string,
    href:string,
    github:string
}

export const projectArray:Project[] = [
    {
        title:'Portfolio',
        content:['création','from','scratch'],
        technos:['NEXTJS', 'TAILWINDCSS', 'FRAMER MOTION'],
        src:srcProject1,
        alt:'herosection',
        href:'' ,
        github:''
    },
]