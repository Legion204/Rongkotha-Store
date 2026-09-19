import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function SupabaseDemoPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos, error } = await supabase.from('todos').select()

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-text-primary mb-4">
        Supabase Integration Test
      </h1>
      <p className="text-sm text-text-muted mb-6">
        Querying the <code className="bg-surface-warm px-2 py-1 rounded">todos</code> table from Supabase:
      </p>

      {error ? (
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm">
          <p className="font-semibold">Note from Supabase:</p>
          <p className="mt-1">{error.message}</p>
          <p className="text-xs text-amber-700 mt-2">
            (Table &apos;todos&apos; will populate once you create it in your Supabase SQL editor).
          </p>
        </div>
      ) : todos && todos.length > 0 ? (
        <ul className="space-y-2 list-disc pl-5 text-sm">
          {todos.map((todo: any) => (
            <li key={todo.id}>{todo.name || todo.title || JSON.stringify(todo)}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-text-muted italic">
          No items found in &apos;todos&apos; table yet.
        </p>
      )}
    </div>
  )
}
