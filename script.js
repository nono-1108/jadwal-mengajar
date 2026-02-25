// Import library (bisa pakai CDN jika vanilla JS)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://mieglylikfjdablnbkdk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZWdseWxpa2ZqZGFibG5ia2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NTE3MDcsImV4cCI6MjA4NzQyNzcwN30.51jPXEeVXMaMjPMYcVQQRQ28iclgP3E5kHHqWE5uEOk'
const supabase = createClient(supabaseUrl, supabaseKey)

// Contoh fungsi untuk mengambil data
async function ambilJadwal() {
  const { data, error } = await supabase
    .from('jadwal')
    .select('*')
  
  if (error) console.log('Error:', error)
  else console.log('Data Jadwal:', data)
}