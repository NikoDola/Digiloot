import { usePathname } from 'next/navigation';

export function PathName(): void {
    const pathname = usePathname();
    console.log(pathname)
 
}
