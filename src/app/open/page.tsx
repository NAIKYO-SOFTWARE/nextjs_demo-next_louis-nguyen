import Link from 'next/link';
function Open() {
    return (
        <div>
            <h1>Open</h1>
            <Link href={'/contact'}>contact</Link>
        </div>
    );
}

export default Open;
