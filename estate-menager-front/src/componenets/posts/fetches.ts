import {CardType} from "../../types.tsx";

export const fetchEvents = async (): Promise<CardType[]> => {
  console.log("Fetching data...");
  // const {data, error} = await supaClient.from('events').select('*');
  // if (error) throw error;
  // return data;
  return Promise.resolve([
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      date: "2021-09-01"
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      date: "2021-09-02"
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      date: "2021-09-03"
    },
    {
      id: 4,
      title: "Title 4",
      description: "Description 4",
      date: "2021-09-04"
    },
    {
      id: 5,
      title: "Title 5",
      description: "Description 5",
      date: "2021-09-05"
    },
    {
      id: 6,
      title: "Title 6",
      description: "Description 6",
      date: "2021-09-06"
    },
    {
      id: 7,
      title: "Title 7",
      description: "Description 7",
      date: "2021-09-07"
    },
    {
      id: 8,
      title: "Title 8",
      description: "Description 8",
      date: "2021-09-08"
    },
    {
      id: 9,
      title: "Title 9",
      description: "Description 9",
      date: "2021-09-09"
    },
    {
      id: 10,
      title: "Title 10",
      description: "Description 10",
      date: "2021-09-10"
    }
    ]);
}