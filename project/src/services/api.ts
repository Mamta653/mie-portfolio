import { supabase } from '../lib/supabase';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitContact(data: ContactPayload): Promise<{
  success: boolean;
  message: string;
}> {
  const { error } = await supabase
    .from('messages')
    .insert([data]);

  if (error) throw new Error(error.message);

  return { success: true, message: 'Message sent successfully!' };
}