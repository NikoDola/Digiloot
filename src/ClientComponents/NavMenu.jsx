export default function NavMenu() {
    return (
        <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 flex gap-6 ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Profile</li>
            <li className="cursor-pointer">Setting</li>
            <li className="cursor-pointer">Add</li>
            <li className="cursor-pointer">Notification</li>
        </ul>
    );
}
