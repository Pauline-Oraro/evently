export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit kcau 2025",
    slug: "react-summit-kcau-2025",
    location: "KCA University, Nairobi, Kenya",
    date: "2025-11-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "KubeCon + CloudNativeCon Nairobi 2026",
    slug: "kubecon-cloudnativecon-nairobi-2026",
    location: "Nairobi, Kenya",
    date: "2026-03-18",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "AWS re:Invent 2025",
    slug: "aws-reinvent-2025",
    location: "Kisumu, Kenya",
    date: "2025-12-01",
    time: "08:30 AM",
  },
  {
    image: "/images/event4.png",
    title: "Next.js Conf 2025",
    slug: "nextjs-conf-2025",
    location: "Nakuru, Kenya",
    date: "2025-11-12",
    time: "09:30 AM",
  },
  {
    image: "/images/event5.png",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "Westlands, Kenya",
    date: "2026-04-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "ETHGlobal Hackathon: Mombasa 2026",
    slug: "ethglobal-mombasa-2026",
    location: "Mombasa, Kenya",
    date: "2026-07-10",
    time: "10:00 AM",
  },
  {
    image: "/images/event-full.png",
    title: "Open Source Summit 2026",
    slug: "oss-na-2026",
    location: "Kilimani, Kenya",
    date: "2026-06-22",
    time: "09:00 AM",
  },
];

export default events;