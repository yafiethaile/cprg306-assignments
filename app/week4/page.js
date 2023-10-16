import NewItem from './new-item.js';

const Page = () => {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Shopping List Component</h1>
            <NewItem />
        </main>
    );
}

export default Page;