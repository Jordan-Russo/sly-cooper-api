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
  return (
    <p>
      {JSON.stringify(info)}
    </p>
  );
}