import { Podcast, Talks, Workshop } from "../../Icons";
import EventCard from "./EventCard";

const EventCollection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container xl:px-12 mx-auto mt-16">
      <EventCard
        icon={<Workshop className="w-20 mx-auto" />}
        headline="Workshop"
        description="We believe working on real-world projects help hone one’s skills. We collectively curate and select some of these projects and work with experienced community members in solving them..."
      />
      <EventCard
        icon={<Talks className="w-20 mx-auto" />}
        headline="Talks"
        description="One on One interactive sessions with industry experts to discuss on tops that matter. We will also have live QnA sessions to ensure you get what you were looking for"
      />
      <EventCard
        icon={<Workshop className="w-20 mx-auto" />}
        headline="Learning"
        description="We believe working on real-world projects help hone one’s skills. We collectively curate and select some of these projects and work with experienced community members in solving them..."
      />
      <EventCard
        icon={<Podcast className="w-20 mx-auto" />}
        headline="Podcast"
        description="We believe working on real-world projects help hone one’s skills. We collectively curate and select some of these projects and work with experienced community members in solving them..."
      />
    </div>
  );
};

export default EventCollection;
