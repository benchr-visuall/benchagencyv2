'use server'

export type FormState = {
  success?: boolean
  error?: string
} | null

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'Merci de remplir tous les champs.' }
  }

  // In production, plug Resend here
  console.log('Contact form:', { name, email, message })
  return { success: true }
}
