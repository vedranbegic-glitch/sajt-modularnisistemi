import type { APIRoute } from 'astro';

export const prerender = false;

interface ProjectSubmissionPayload {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  projectType: string;
  system: string;
  message: string;
  fileName?: string;
  fileSize?: number;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let payload: ProjectSubmissionPayload;

    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      const file = formData.get('projectAttachment') as File | null;

      payload = {
        fullName: (formData.get('fullName') as string) || '',
        company: (formData.get('company') as string) || '',
        email: (formData.get('email') as string) || '',
        phone: (formData.get('phone') as string) || '',
        projectType: (formData.get('projectType') as string) || '',
        system: (formData.get('system') as string) || '',
        message: (formData.get('message') as string) || '',
        fileName: file && file.name ? file.name : undefined,
        fileSize: file && file.size ? file.size : undefined,
      };
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Nepodržan format zahteva. Očekivan je multipart/form-data ili application/json.',
        }),
        {
          status: 415,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
        }
      );
    }

    if (!payload.fullName || !payload.email || !payload.phone || !payload.message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Molimo popunite sva obavezna polja (Ime i prezime, Email, Telefon, Opis zadatka).',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Uneti format email adrese nije ispravan.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Zahtev za projekat je uspešno primljen za klijenta: ${payload.fullName}. Inženjerski tim MODULARNI SISTEMI će odgovoriti u roku od 24-48h.`,
        data: {
          fullName: payload.fullName,
          company: payload.company,
          email: payload.email,
          phone: payload.phone,
          projectType: payload.projectType,
          system: payload.system,
          receivedAt: new Date().toISOString(),
          hasAttachment: Boolean(payload.fileName),
          attachmentName: payload.fileName || null,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Nepoznata greška na serveru.';
    return new Response(
      JSON.stringify({
        success: false,
        error: `Došlo je do greške prilikom obrade zahteva: ${errorMessage}`,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  }
};