import Carousel from "../../../components/carousel";

function HomePage() {
  return (
    <div className="h-full w-full flex items-center align justify-center">
      <div>
        <h3 className="text-stone-800 dark:text-stone-200 text-2xl font-bold">
          NICE TO MEET YOU, MY NAME IS
        </h3>
        <h1 className="text-cyan-600 dark:text-cyan-400 text-8xl font-bold">
          JIM VERGARA
        </h1>
        <Carousel
          slides={[
            <div className="text-white bg-teal-700 dark:text-stone-900 dark:bg-yellow-200 p-2 text-xl">
              FULL-STACK DEVELOPER
            </div>,
            <div className="text-white bg-emerald-700 dark:text-stone-900 dark:bg-red-200 p-2 text-xl">
              UX/UI DESIGNER
            </div>,
            <div className="text-white bg-sky-700 dark:text-stone-900 dark:bg-red-200 p-2 text-xl">
              FLUTTER DEVELOPER
            </div>,
            <div className="text-white bg-green-700 dark:text-stone-900 dark:bg-red-200 p-2 text-xl">
              EXTRA TITLE
            </div>,
          ]}
        />
      </div>
    </div>
  );
}

export default HomePage;
