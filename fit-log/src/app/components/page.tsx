import HeroSection from "./hero";
import WorkoutGrid from "./workout/WorkoutGrid";


export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <section
                id="library"
                className="bg-white px-5 py-15 sm:px-9 lg:px-11 lg:py-25"
            >
                <div className="mx-auto w-full max-w-[1600px]">

                    <div className="mb-8">
                        <h1 className="text-4xl font-semibold text-(--primary-dark)">
                            THE LIBRARY
                        </h1>
                        <p className="mt-3 text-(--primary)">
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>

                    <WorkoutGrid />

                </div>
            </section>

        </main>
    );
}