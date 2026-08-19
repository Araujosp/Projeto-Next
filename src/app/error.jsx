'use client'

import ErrorComponent from "@/components/error"
export default function Error({ error, reset }) {
    return (
      <div>
        <h2>Erro, saia do meu site</h2>
        <ErrorComponent/>
      </div>
    )

  }
 
