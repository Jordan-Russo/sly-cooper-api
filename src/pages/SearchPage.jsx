import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getCharacter } from '../api/posts';

export default function SearchPage() {
  let { name } = useParams();
  if(!name){name = 'unknown'}
  const cleanedName = name.trim().toLowerCase()
  const unknown = {
    "unknown": {
      "img": "",
      "name": "",
      "roles": [],
      "quotes": [],
      "trivia": "",
      "species": "",
      "backstory": "",
      "voiceActor": "",
      "appearances": [],
      "description": "",
      "abilitiesAndSkills": []
    }
  }
  const [info, setInfo] = useState(
    unknown
)
  useEffect(() => {getCharacter(cleanedName, setInfo)}, [name])
  // const data = getCharacter(name, setInfo)
  // check what the name is
  // if "all" then send a special query to grab all
  // if a name then send a query to grab the info from that name
    // if there's an error, return unknown result


  // useEffect(() => {getCharacter(name, setInfo)}, [name]);

  // have a useEffect that takes the name
  // calls the api with the name
  // setMatches with the returned data

  return (
    <p>
      {JSON.stringify(info)}
    </p>
  );
}