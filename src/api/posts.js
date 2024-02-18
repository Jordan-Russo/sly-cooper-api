import { supabaseClient as supabase } from '../config/supabase-client';

// Given an ID, given a setter
// Check if favorite
// update setter
export async function getCharacter(name, setter){
  if(name === 'all'){
    let { data, error } = await supabase
      .from('characters')
      .select('info')
    data = data.map(({info}) => info)
    setter(data)
  }else if(name === 'random'){
    const { data: {info: data}, error } = await supabase
      .from('random_users')
      .select('info')
      .limit(1)
      .single()
    setter(data)
  }else{
    let { data: {info: data}, error } = await supabase
      .from('characters')
      .select('info')
      .eq('name', name)
      .single()
    if(error){
      return
    }
    setter(data)
  }

}