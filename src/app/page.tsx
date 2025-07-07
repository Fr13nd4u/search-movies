import {SearchMovies} from "@/widgets/search-movies";
import {ResultMovies} from "@/widgets/result-movies";
import {Header} from "@/shared/ui";
import styles from "./page.module.scss";
import {MovieSearchProvider} from "@/entities/movies";

export default function Home() {
  return (
      <main className={styles.container}>
        <Header />
        <MovieSearchProvider>
            <SearchMovies />
            <ResultMovies />
        </MovieSearchProvider>
      </main>
  );
}
