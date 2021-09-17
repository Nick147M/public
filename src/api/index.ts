export async function fetchJson<Response = any>(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/${url}`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })


  return response.json()
}

export async function fetchPeople<Response = any>(search: string, pageNum: number, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${encodeURI(search)}&page=${pageNum}`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })


  return response.json()
}

export async function fetchPerson<Response = any>(id: number, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/people/${id}`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })


  return response.json()
}

export async function fetchFilm<Response = any>(id: number, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/films/${id}`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })


  return response.json()
}

export async function fetchSpecies<Response = any>(id: number, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/species/${id}`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })


  return response.json()
}
