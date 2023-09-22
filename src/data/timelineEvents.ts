type EventType = {
    title: string,
    desc: string,
    date: string,
}

const timelineEvents: EventType[] = [
    {
        title: "Hackathon Announcement",
        desc: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
        date: "November 18, 2023"
    },
    {
        title: "Teams Registration begins",
        desc: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
        date: "November 18, 2023"
    },
    {
        title: "Team Registration Ends",
        desc: "Interested Participants are no longer allowed to register",
        date: "November 18, 2023"
    },
    {
        title: "Anouncement of the accepted teams and ideas",
        desc: "All teams whom idea haas been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
        date: "November 18, 2023"
    },
    {
        title: "Getlinked Hackathon 1.0 Officialy Begins",
        desc: "Accepted teaams can now proceed to build their ground breaking skill driven solutions",
        date: "November 18, 2023"
    },
    {
        title: "Demo Day",
        desc: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
        date: "November 18, 2023"
    },
]

export {type EventType, timelineEvents}