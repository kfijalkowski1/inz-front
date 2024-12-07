import { Button, Card } from "flowbite-react";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-blue-600 text-white py-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Administracja Osiedla – Szybkie i Wygodne Zarządzanie
                    </h1>
                    <p className="text-lg mb-8">
                        Zgłaszaj usterki, przeglądaj ogłoszenia i zarządzaj swoimi
                        wspólnotami w jednym miejscu.
                    </p>
                    <Button color="light" size="lg">
                        Rozpocznij Teraz
                    </Button>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <Card>
                        <h2 className="text-2xl font-semibold">Zgłaszanie Usterek</h2>
                        <p>
                            Przesyłaj zgłoszenia dotyczące usterek na osiedlu i otrzymuj
                            aktualizacje na temat ich rozwiązania.
                        </p>
                        <Button>Wyślij zgłoszenie</Button>
                    </Card>

                    {/* Feature 2 */}
                    <Card>
                        <h2 className="text-2xl font-semibold">Ogłoszenia i Forum</h2>
                        <p>
                            Sprawdź ogłoszenia od administracji lub wejdź w interakcję z
                            mieszkańcami na forum.
                        </p>
                        <Button>Przeglądaj ogłoszenia</Button>
                    </Card>

                    {/* Feature 3 */}
                    <Card>
                        <h2 className="text-2xl font-semibold">Zarządzanie Spółdzielniami</h2>
                        <p>
                            Administracja osiedla z możliwością obsługi wielu spółdzielni
                            jednocześnie.
                        </p>
                        <Button>Dodaj spółdzielnię</Button>
                    </Card>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Zautomatyzuj zarządzanie osiedlem już dziś!
                    </h2>
                    <p className="text-lg mb-8">
                        Skorzystaj z naszego systemu, aby ułatwić życie mieszkańcom i
                        administratorom osiedli.
                    </p>
                    <Button color="light" size="lg">
                        Zarejestruj się
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
