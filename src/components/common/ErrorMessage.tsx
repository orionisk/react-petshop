import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message }: { message: string }) => (
  <div className='mt-5 flex min-h-80 flex-col items-center justify-center text-red-500'>
    <AlertCircle className='mb-2 h-12 w-12' />
    <p>{message}</p>
  </div>
);
