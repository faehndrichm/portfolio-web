export default function CV() {
  let items = [];
  let projects = [
    // {
    //   name: "Ferialpraktikum - IT-Support bei der Firma Birner",
    //   from: "2012-06-01T00:00:00.000Z",
    //   to: "2012-07-01T00:00:00.000Z",
    //   category: "work",
    // },
    // {
    //   name: "Ferialpraktikum - Softwareentwicklung bei iC Consulenten Ziviltechniker GesmbH",
    //   from: "2013-06-01T00:00:00.000Z",
    //   to: "2013-07-01T00:00:00.000Z",
    //   category: "work",
    // },
    // {
    //   name: "Grundwehrdienst",
    //   from: "2016-01-01T00:00:00.000Z",
    //   to: "2016-06-01T00:00:00.000Z",
    //   category: "work",
    // },
    // {
    //   name: "Software Entwickler bei Sautner & Partner GmbH",
    //   from: "2017-10-01T00:00:00.000Z",
    //   to: new Date().toISOString(),
    //   category: "work",
    // },
    // {
    //   name: "Volksschule Hugo Meisel Weg, 1100 Wien",
    //   from: "2002-06-01T00:00:00.000Z",
    //   to: "2006-06-01T00:00:00.000Z",
    //   category: "education",
    // },
    // {
    //   name: "Gymnasium Draschestraße GRG 1230 Wien",
    //   from: "2006-06-01T00:00:00.000Z",
    //   to: "2010-06-01T00:00:00.000Z",
    //   category: "education",
    // },
    // {
    //   name: "HTL im Schulzentrum Ungargasse 1030 Wien mit Matura",
    //   from: "2010-06-01T00:00:00.000Z",
    //   to: "2015-06-01T00:00:00.000Z",
    //   category: "education",
    // },
    // {
    //   name: "Bachelorstudium “Software and Information Engineering an der Technischen Universität Wien",
    //   from: "2016-01-01T00:00:00.000Z",
    //   to: "2021-10-01T00:00:00.000Z",
    //   category: "education",
    // },
    // {
    //   name: "Masterstudium “Masterstudium Software Engineering & Internet Computing” an der Technischen Universität Wien",
    //   from: "2021",
    //   to: new Date().toISOString(),
    //   category: "education",
    // },
    // {
    //   name: "Loyalio",
    //   from: "2020-01-01T00:00:00.000Z",
    //   to: new Date().toISOString(),
    //   category: "project",
    // },
    // {
    //   name: "Bachelorarbeit Reinforcement Learning",
    //   from: "2020-06-01T00:00:00.000Z",
    //   to: "2021-10-01T00:00:00.000Z",
    //   category: "project",
    // },
  ];
  return (
    <div className=" bg-gray flex w-full flex-col items-center justify-stretch">
      <section className="w-full max-w-6xl">
        <h2 className="font-white text-center font-nunito text-6xl text-white">CV</h2>
        <div className="grid auto-rows-[4rem] grid-cols-[2rem_repeat(3,minmax(0,1fr))] place-items-stretch gap-1 py-24">
          <div className="col-start-2 m-auto grid grid-cols-1 grid-rows-1 place-items-center">
            <div className="z-10 flex flex-row gap-3 font-nunito text-2xl font-bold text-white [grid-area:1/1/span_1/span_1]">
              Education
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="h-full w-full bg-blue-300/50 blur-xl [grid-area:1/1/span_1/span_1]"></div>
          </div>
          <div className="m-auto grid grid-cols-1 grid-rows-1 place-items-center">
            <div className="z-10 flex flex-row gap-3  font-nunito text-2xl font-bold text-white [grid-area:1/1/span_1/span_1]">
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <div className="h-full w-full bg-blue-900/75 blur-xl [grid-area:1/1/span_1/span_1]"></div>
          </div>
          <div className="m-auto grid grid-cols-1 grid-rows-1 place-items-center">
            <div className="z-10 flex flex-row gap-3 font-nunito text-2xl font-bold text-white [grid-area:1/1/span_1/span_1]">
              Work Experience
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="h-full w-full bg-indigo-900/75 blur-xl [grid-area:1/1/span_1/span_1]"></div>
          </div>

          {items.map(function (i) {
            return (
              <>
                <div key={i + "_1"} className="col-start-1 col-end-2 flex flex-row items-center ">
                  <div className="font-bold text-white">{i + 1995}</div>
                  <div className="ml-3 h-3 w-3 rounded-full bg-white text-white"></div>
                  <div className="h-[1px] w-12 bg-white text-white"></div>
                </div>

                {projects
                  .filter(
                    (p) => p.category === "education" && p.from <= i + 1995 && p.to >= i + 1995
                  )
                  .map((p) => (
                    <div
                      key={i + "_2" + p.name}
                      className="relative col-start-2 col-end-3 mx-auto flex h-full w-full flex-col items-center text-white">
                      {p.from === i + 1995 && (
                        <div className=" flex flex-row gap-3">
                          <div className="h-3 w-3 rounded-full bg-white"></div>
                          <div className="absolute left-[50%] mx-3 w-[85%]">{p.name}</div>
                        </div>
                      )}
                      <div className="w-1 flex-1 rounded-full bg-blue-300"></div>
                      {p.to === i + 1995 && <div className=" h-3 w-3 rounded-full bg-white"></div>}
                    </div>
                  ))}
                {projects
                  .filter((p) => p.category === "work" && p.from <= i + 1995 && p.to >= i + 1995)
                  .map((p) => (
                    <div
                      key={i + "_3" + p.name}
                      className=" relative col-start-3 col-end-4 mx-auto flex h-full w-full flex-col items-center text-white">
                      {p.from === i + 1995 && (
                        <div className=" flex flex-row gap-3">
                          <div className="h-3 w-3 rounded-full bg-white"></div>
                          <div className="absolute left-[50%] mx-3 w-[85%]">{p.name}</div>
                        </div>
                      )}
                      <div className="w-1 flex-1 rounded-full bg-indigo-900"></div>
                      {p.to === i + 1995 && <div className=" h-3 w-3 rounded-full bg-white"></div>}
                    </div>
                  ))}
                {projects
                  .filter((p) => p.category === "project" && p.from <= i + 1995 && p.to >= i + 1995)
                  .map((p) => (
                    <div
                      key={i + "_4" + p.name}
                      className=" relative col-start-4 col-end-5 mx-auto flex h-full w-full flex-col items-center text-white">
                      {p.from === i + 1995 && (
                        <div className=" flex flex-row gap-3">
                          <div className="h-3 w-3 rounded-full bg-white"></div>
                          <div className="absolute left-[50%] mx-3 w-[85%]">{p.name}</div>
                        </div>
                      )}
                      <div className="w-1 flex-1 rounded-full bg-blue-900"></div>
                      {p.to === i + 1995 && <div className=" h-3 w-3 rounded-full bg-white"></div>}
                    </div>
                  ))}
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
