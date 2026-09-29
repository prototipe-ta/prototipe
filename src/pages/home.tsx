import Navigate from '@/components/layout/navigate'

function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
            <h1 className="text-3xl font-bold">Home page</h1>

            <Navigate />
        </main>
    )
}

export default Home
