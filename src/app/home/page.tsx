import Link from 'next/link';
function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <Link href={'/contact'}>contact</Link>
        </div>
    );
}

export default HomePage;
