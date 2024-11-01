import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { cookies } from 'next/headers';

export async function getServerSessionInfo() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();
  try {
    const data = await authControllerGetSessionInfo({
      headers: {
        Cookie: cookieHeader,
      },
    });
    return data;
  } catch (e) {
    return null;
  }
}
