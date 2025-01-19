import Link from 'next/link'

export default function Home(){
  return (
      <div>
        <Link href="/novarota">Rota 1</Link> <br/><br/>
        <Link href="/novarota2">Rota 2</Link> <br/><br/>
      </div>    
  )
}

export function NewFunction() {
  return (
    <div>
      <div>
        <h1>Viva São Pedro!</h1>
      </div>
    </div>
  )
}