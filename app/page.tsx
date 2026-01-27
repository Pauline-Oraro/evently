import ExploreBtn from "./components/ExploreBtn"


const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Developer <br /> Event You Cannot Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

      <ExploreBtn/>

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
      </div>
    </section>
  )
}

export default page
