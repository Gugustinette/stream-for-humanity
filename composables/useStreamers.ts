interface Streamer {
  broadcaster_type: string
  created_at: string
  description: string
  display_name: string
  email: string
  game_name: string
  id: string
  is_live: boolean
  last_checked: string
  login: string
  offline_image_url: string
  profile_image_url: string
  stream_data: {
    game_id: string
    game_name: string
    id: string
    is_mature: boolean
    language: string
    started_at: string
    tag_ids: string[]
    tags: string[]
    thumbnail_url: string
    title: string
    type: string
    user_id: string
    user_login: string
    user_name: string
    viewer_count: number
  }
  tags: string[]
  title: string
  type: string
  view_count: number
  viewers: number
}
const STREAMERS_GET_URL = "https://lfkiyrhndxbyinlgxlil.supabase.co/rest/v1/streamers?select=*&order=is_live.desc%2Cdisplay_name.asc"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxma2l5cmhuZHhieWlubGd4bGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4OTc4MTksImV4cCI6MjA1MjQ3MzgxOX0.Simkw9Af1CTFYBnJvHgY8_vB7bXZB7aQLOJxjGt55u0"

export const useStreamers = async () => {
  // Fetch streamers list
  const { data } = await useFetch(STREAMERS_GET_URL, {
    headers: {
      'apikey': API_KEY
    }
  })
  // Return streamers list
  const streamers = data as unknown as Ref<Streamer[]>
  return streamers
}
